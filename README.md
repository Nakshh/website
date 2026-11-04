# nakshhkohli.com

Personal site for Nakshh Kohli. Built with Vue 3 + Vite, deployed on Netlify.

The page's identity and metadata are rendered directly in index.html so search engines and social scrapers can read them without JavaScript. Vue enhances only the email-copy control. The site always uses the light linen palette, regardless of device theme.

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

Netlify builds with `npm run build` and publishes `dist`. Do not commit `dist` or generated output.

## Assets

- `src/assets/me.jpeg` — portrait
- `public/og-image.jpg` — social preview
- `public/fonts/InstrumentSerif-Regular.ttf` — Instrument Serif under the SIL Open Font License (`public/fonts/OFL.txt`)

The HTML title, description, and public links live in `index.html`. The contact-copy interaction lives in `src/main.js`.
