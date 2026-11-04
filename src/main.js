import { createApp, h, ref, onBeforeUnmount } from 'vue'
import './style.css'

const year = document.getElementById('copyright-year')
if (year) year.textContent = String(new Date().getFullYear())

// The portrait itself remains in the HTML; Vue only enhances its optional easter egg.
createApp({
  setup() {
    const showSunglasses = ref(false)
    const sunglassesAnimating = ref(false)
    const sunglassesAnimatingOut = ref(false)
    let timer
    const toggleSunglasses = () => {
      clearTimeout(timer)
      if (!showSunglasses.value) {
        showSunglasses.value = true
        sunglassesAnimating.value = true
        sunglassesAnimatingOut.value = false
        timer = setTimeout(() => { sunglassesAnimating.value = false }, 800)
      } else {
        sunglassesAnimatingOut.value = true
        sunglassesAnimating.value = false
        timer = setTimeout(() => {
          showSunglasses.value = false
          sunglassesAnimatingOut.value = false
        }, 600)
      }
    }
    onBeforeUnmount(() => clearTimeout(timer))
    return () => h('button', {
      type: 'button',
      class: 'photo-trigger',
      'aria-label': 'Toggle sunglasses on portrait',
      'aria-pressed': String(showSunglasses.value),
      onClick: toggleSunglasses
    }, showSunglasses.value
      ? [h('img', {
          src: '/glasses.png',
          alt: '',
          'aria-hidden': 'true',
          class: ['sunglasses', sunglassesAnimating.value && 'sunglasses-animate', sunglassesAnimatingOut.value && 'sunglasses-animate-out']
        })]
      : [])
  }
}).mount('#photo-interaction')

// Email is a normal, crawlable mailto link even if JavaScript is disabled.
createApp({
  setup() {
    const label = ref('Copy')
    let timer
    const copyEmail = async () => {
      try {
        await navigator.clipboard.writeText('nakshh764@gmail.com')
        label.value = 'Copied'
        clearTimeout(timer)
        timer = setTimeout(() => { label.value = 'Copy' }, 2000)
      } catch {
        // Fallback for browsers that disable the async Clipboard API.
        const field = document.createElement('textarea')
        field.value = 'nakshh764@gmail.com'
        field.setAttribute('readonly', '')
        field.style.position = 'fixed'
        field.style.opacity = '0'
        document.body.appendChild(field)
        field.select()
        let copied = false
        try { copied = document.execCommand('copy') } catch { /* clipboard unavailable */ }
        field.remove()
        label.value = copied ? 'Copied' : 'Copy failed'
        clearTimeout(timer)
        timer = setTimeout(() => { label.value = 'Copy' }, 2000)
      }
    }
    onBeforeUnmount(() => clearTimeout(timer))
    return () => h('button', { type: 'button', class: 'copy-email', onClick: copyEmail, 'aria-label': 'Copy email address' }, label.value)
  }
}).mount('#copy-control')
