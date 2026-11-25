# Rudraabhishek Sharma — Portfolio

Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion following the editorial layout and visual system of [arvian.framer.website](https://arvian.framer.website/).

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Replacing Portrait Placeholders & Project Mockups

All images live under `public/images/` and are wired in `src/data/portfolio.ts`:

### Portraits (`public/images/portraits/`)
- **Hero portrait cutout**: `public/images/portraits/hero-portrait.svg` (recommended: transparent PNG `hero-portrait.png`, then update `SITE_CONFIG.portraits.hero` in `src/data/portfolio.ts` or keep filename)
- **About portrait**: `public/images/portraits/about-portrait.svg`
- **Process sticky portrait**: `public/images/portraits/process-portrait.svg`

### Project Mockups (`public/images/projects/`)
- `public/images/projects/krishify-ai.svg`
- `public/images/projects/carequeue.svg`
- `public/images/projects/votegenie.svg`
- `public/images/projects/nirogi-g1.svg`
- `public/images/projects/rajasthan-radio.svg`
- `public/images/projects/ioi-explorer.svg`

To add GitHub / Live Demo links to any project, fill in `githubUrl` and `liveUrl` in `PROJECTS` inside `src/data/portfolio.ts`.
