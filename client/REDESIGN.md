# Redesign notes — video-first layout

Palette and fonts are unchanged (forest / cream / sand / rust, Fraunces + IBM
Plex Sans). Routes, navbar items and the mega-menus are unchanged too. What
changed is layout, motion and the video slots.

## Going live with video

1. Put files in `public/videos/` — names and format notes in
   `public/videos/README.md`.
2. Set `VIDEOS_READY = true` in `src/lib.js`. (Photos: `IMAGES_READY`, as before.)

A slot whose file is missing falls back to its poster, then the texture — so
you can go live one video at a time. Videos start only when near the screen,
never autoplay for visitors with reduced-motion or data-saver, and the closing
banner lazy-loads.

## Where things live

| What | File |
| --- | --- |
| Video slots (paths, captions) | `src/lib.js` → `VIDEOS`, `areaVideo()` |
| Background video / poster / texture | `src/components/VideoBackdrop.jsx` |
| Inner-page banner (video + breadcrumb + title) | `src/components/PageHero.jsx` |
| Pinned, sideways-scrolling process band | `src/components/HorizontalProcess.jsx` (steps: `STEPS` in `pages/Home.jsx`) |
| Fade-up on scroll | `src/components/Reveal.jsx` |
| Top progress line | `src/components/ScrollProgress.jsx` |
| Transparent-over-hero navbar | `Header.jsx` (`header--overlay`) |
| Design tokens | `src/styles/variables.css` |

## Notes

- `src/components/Home.jsx`, `About.jsx`, `Manufacturing.jsx`, `Contact.jsx` and
  `BusinessArea.jsx` are older copies of the files in `src/pages/` and are not
  used by the app; the live ones are in `src/pages/`.
- `npm run build && npm run smoke` checks all 30 routes, including one `<h1>`
  per page and the banner being present in the static HTML.

- SEO content (guides, FAQs, schema, launch checklist, keyword map) is documented in `SEO.md`.
- **Fonts** are bundled from npm (`@fontsource-variable/fraunces`, `@fontsource/ibm-plex-sans`, imported in `src/main.jsx`) and preloaded by the prerender step — no request to Google, and no layout shift when they arrive.
- **Accessibility**: axe-core (WCAG 2.1 A/AA + best-practice) reports 0 violations on 11 pages at desktop and mobile widths. To keep small rust text at 4.5:1, `--rust` was darkened from `#b4592f` to `#a34d27` and `--muted` from `#5e6b5f` to `#56635a`.
- **Server**: enquiries are rate-limited (5 per 15 min per IP, see `server/.env.example`), the API sends hardening headers, bad JSON is a 400, and `npm test` in `server/` runs 9 tests (no database needed).
- `public/.htaccess` now compresses text, sets security headers, and has a commented https/one-hostname redirect to switch on once the domain is live.
