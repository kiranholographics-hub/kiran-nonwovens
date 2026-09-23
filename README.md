# Kiran Nonwovens — B2B export website

A B2B showcase for **Kiran Nonwovens** — needle punched and thermal bonded
nonwoven felt and geotextiles, for geotextile, automotive, apparel & footwear
and industrial buyers. No cart, no prices; every path leads to a spec-based
enquiry with the export team.

**Pure MERN**, per the build brief:

```text
kiran-nonwovens/
├─ client/   React 19 + Vite, React Router, plain CSS (one .css file per
│            component/page, design tokens as CSS custom properties).
└─ server/   Express 5 + Mongoose + MongoDB. Serves the catalogue and
             receives enquiries (saved to MongoDB, emailed via Nodemailer).
```

No Next.js, no Tailwind, no CSS-in-JS.

## Quick start

```bash
# Terminal 1 — API (http://localhost:4100)
cd server
npm install
cp .env.example .env        # fill in MONGODB_URI
npm run seed                # loads the catalogue into MongoDB
npm run dev

# Terminal 2 — site (http://localhost:3100)
cd client
npm install
cp .env.example .env.local
npm run dev
```

**The site runs with no backend at all.** Every page falls back to the local
catalogue in `client/src/data/catalog.js` whenever the API is unset or
unreachable, so you can build, browse and review the whole site before MongoDB
exists. Only the enquiry form needs the API — without it the form returns a
clear "not connected yet" message instead of pretending to send.

Ports are **3100** (site) and **4100** (API), deliberately clear of the sibling
[`kiran-global-exports-v2`](https://github.com/kiranholographics-hub/kiran-global-exports-v2)
towels & linen site's 3000/4000, so both can run side by side on one machine.
The two projects share no code and no database.

## SEO — how a client-rendered app still gets indexed

The brief flags the problem: plain client-side React means a crawler sees an
empty `<div id="root">`, and the spec table is this site's main SEO content.
The build solves it by **prerendering every route to real HTML**.

`npm run build` does two passes. The first is an ordinary Vite build. The
second (`client/scripts/prerender.mjs`) builds the app a second time for the
server, renders each of the 30 routes with `renderToString`, and writes a
complete `dist/<route>/index.html` — with that page's own `<title>`, meta
description and canonical URL already in `<head>`. It then generates
`sitemap.xml` and `robots.txt` from the catalogue, so no URL list is
maintained by hand. `main.jsx` hydrates that markup rather than replacing it,
so the site is still a normal SPA once JavaScript loads.

**Two deliberate departures from the brief's suggested tooling**, both because
the suggestion does not work on this stack:

- **Not `react-snap`.** Its last release is from 2020 and it drives the app
  through a headless browser calling `ReactDOM.hydrate`, an API React 19
  removed. `vite-plugin-react-snap` does not exist on npm at all. The
  prerender script above does the same job using Vite's own SSR build — no
  browser download, a couple of seconds, same output.
- **Not `react-helmet-async`.** On React 19 it no longer intercepts `<title>`
  and `<meta>`; they render inline and React hoists them, which left every
  prerendered page carrying the shell's title instead of its own. `Seo` and
  `src/head.js` do it directly instead: the tags are collected at prerender
  time and written to `<head>`, and applied straight to the DOM in the browser
  so the head still updates on client-side navigation.

**Hosting must serve the prerendered page for a clean URL** — `/products` has
to return `dist/products/index.html`, not the root shell. `client/public/.htaccess`
does this for Apache/Hostinger; `vite preview` is configured to match so local
preview behaves like production.

## Verifying a build

```bash
cd client
npm run build
npm run smoke
npm run lint
```

`npm run smoke` is the real acceptance check. It inspects `dist/` — the exact
files that get uploaded — and asserts that every route prerendered, that no two
pages share a `<title>` or meta description, that the spec table is real
indexable HTML text rather than an image, that each page carries its own
canonical URL, and that `sitemap.xml` covers the whole catalogue.

## The catalogue is one file

`client/src/data/catalog.js` holds the 4 business areas and 16 products. It is
the **single source of truth**: the client imports it as its fallback, and the
server's `npm run seed` imports that same file and upserts it into MongoDB.
There is no second copy to drift.

Product descriptions, features and applications come from the company's own
product-description document. Adding a product means adding it there and
re-running the seed — pages, both mega-menus, the Spec Finder, the prerender
and `sitemap.xml` all pick it up with no other change.

## Site structure — the Fibertex dual-nav pattern

The same four industries appear in **two parallel tracks**:

| Track | Route | Purpose |
| --- | --- | --- |
| Business Areas | `/business-areas/:slug` | The story — Overview / Applications / Downloads tabs |
| Products | `/products/:category/:slug` | The catalogue — specs and enquiry |

Industries: Geotextile (4 products), Automotive (3), Apparel & Footwear (2),
Industrial & Others (7).

Routes: `/`, `/business-areas`, `/business-areas/:slug`, `/products`,
`/products/:category`, `/products/:category/:slug`, `/about`, `/manufacturing`,
`/contact`, plus generated `/sitemap.xml` and `/robots.txt`.

## Design system — "Editorial Split"

Taken from the approved theme demo.

- **Palette** — forest `#132A20`, cream `#F7F3EA`, sand `#EDE5D3`, line
  `#D8CFB8`, rust `#B4592F` (accent). Tokens are CSS custom properties in
  `client/src/styles/variables.css`.
- **Type** — Fraunces (serif headings) + IBM Plex Sans (body), from Google
  Fonts.
- **Feel** — editorial/magazine layout, split-screen hero, generous white
  space, rounded pill buttons, mobile-first, sticky "Get quote" on product
  pages.
- **Plain CSS.** Every component and page has its own `Name.css` beside it.

## Photography

There is none yet. Every picture slot renders the theme's woven-texture
placeholder captioned with the shot that belongs there, and already points at
its final path (`/images/products/<slug>.jpg` and so on). To go live with real
photos: drop the files in at those paths and flip `IMAGES_READY` to `true` in
`client/src/lib.js`. No other change. See
[`client/public/images/README.md`](./client/public/images/README.md).

## What is still pending

See **[OWNER_INPUTS.md](./OWNER_INPUTS.md)**. Nothing outstanding has been
guessed — placeholders render visibly unfinished on purpose, either in
`[square brackets]` or as an italic "To be confirmed" in spec tables.
