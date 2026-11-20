# Aitzaz Afzal — Portfolio

A responsive, single-page React portfolio based on Aitzaz's updated resume.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

## Deploy to Vercel

Import the repository into Vercel and keep the detected Vite settings:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

Vercel detects the framework automatically, so no additional deployment package or custom base path is required.

## Edit content

- `src/data.js`: projects, career history, skills and contact details
- `src/Pages/`: page sections
- `src/index.css`: responsive styling and subtle animations
- `public/Aitzaz_Afzal_Resume.pdf`: downloadable resume
- `public/aitzaz-logo.svg`: custom AA monogram used in the navbar, footer and browser tab
- `index.html`: SEO title and description

Custom-domain projects appear before Vercel-hosted projects. Project filters, mobile navigation, email copying, contact links and resume download are implemented locally. There is no dependency on the GitHub API to render projects.

Animation uses CSS and IntersectionObserver, with reduced-motion support. No WebGL, animation framework, carousel or continuous animation is loaded. The three project covers are typographic portfolio artwork, not application screenshots.

Fonts request Google Fonts with system-font fallbacks. The site remains usable when external fonts are unavailable.

This update is local source work; publishing is a separate step.
