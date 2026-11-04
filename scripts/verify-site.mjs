import { chromium } from 'playwright'
import fs from 'node:fs/promises'

const origin = process.env.SITE_URL || 'http://127.0.0.1:4173'
const browser = await chromium.launch({ headless: true })
const results = []
await fs.mkdir('screenshots', { recursive: true })

for (const [label, viewport] of [
  ['desktop', { width: 1440, height: 900 }],
  ['mobile', { width: 390, height: 844 }]
]) {
  for (const scheme of ['light', 'dark']) {
    const context = await browser.newContext({
      viewport,
      colorScheme: scheme,
      reducedMotion: 'reduce',
      permissions: ['clipboard-read', 'clipboard-write']
    })
    const page = await context.newPage()
    const errors = []
    page.on('pageerror', err => errors.push(err.message))
    const response = await page.goto(origin, { waitUntil: 'networkidle' })
    if (response?.status() !== 200) throw new Error(label + '/' + scheme + ': HTTP ' + response?.status())
    await page.evaluate(() => document.fonts.ready)
    await page.locator('.portrait-image').evaluate(el => new Promise((resolve, reject) => {
      if (el.complete) return el.naturalWidth ? resolve() : reject(new Error('Portrait failed to load'))
      el.addEventListener('load', resolve, { once: true })
      el.addEventListener('error', () => reject(new Error('Portrait failed to load')), { once: true })
    }))

    if (await page.locator('h1').innerText() !== 'Nakshh Kohli') throw new Error('Missing name')
    if (!(await page.locator('.role').textContent()).includes('Hang Ten Systems')) throw new Error('Missing role')
    for (const [label, href] of [
      ['Email', 'mailto:nakshh764@gmail.com'],
      ['LinkedIn', 'https://linkedin.com/in/nakshhkohli'],
      ['GitHub', 'https://github.com/nakshh'],
      ['Résumé', 'https://resume.nakshhkohli.com']
    ]) {
      const actual = await page.getByRole('link', { name: label, exact: true }).getAttribute('href')
      if (actual !== href) throw new Error(label + ' link has wrong URL: ' + actual)
    }
    const background = await page.locator('body').evaluate(el => getComputedStyle(el).backgroundColor)
    await page.screenshot({ path: 'screenshots/' + label + '-' + scheme + '.png', fullPage: true, animations: 'disabled' })
    const links = await page.locator('.contact').boundingBox()
    const scrollNeeded = links ? Math.max(0, Math.ceil(links.y + links.height - viewport.height)) : null
    results.push({ label, scheme, background, scrollNeeded, errors })
    if (errors.length) throw new Error(errors.join('; '))

    if (scheme === 'light' && label === 'desktop') {
      await page.getByRole('button', { name: 'Copy email address' }).click()
      if (await page.locator('.copy-email').innerText() !== 'Copied') throw new Error('Copy button failed')
      const clip = await page.evaluate(() => navigator.clipboard.readText())
      if (clip !== 'nakshh764@gmail.com') throw new Error('Wrong clipboard contents')

      await page.getByRole('button', { name: 'Toggle sunglasses on portrait' }).click()
      if (await page.locator('.sunglasses').count() !== 1) throw new Error('Sunglasses missing')
      await page.getByRole('button', { name: 'Toggle sunglasses on portrait' }).click()
      await page.waitForTimeout(650)
      if (await page.locator('.sunglasses').count() !== 0) throw new Error('Sunglasses did not dismiss')
    }
    await context.close()
  }
}

const source = await (await fetch(origin)).text()
for (const phrase of [
  'Nakshh Kohli', 'Software Engineer, Hang Ten Systems',
  'Previously at DevRev and Krafton.', 'mailto:nakshh764@gmail.com',
  'https://nakshhkohli.com/og-image.jpg'
]) {
  if (!source.includes(phrase)) throw new Error('Missing from served HTML source: ' + phrase)
}
const og = await fetch(origin + '/og-image.jpg')
if (!og.ok || !(og.headers.get('content-type') || '').includes('image/jpeg')) {
  throw new Error('OG image not served as JPEG')
}
await fs.writeFile('screenshots/verification.json', JSON.stringify(results, null, 2))
console.log(JSON.stringify(results, null, 2))
await browser.close()
