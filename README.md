# Kiran Nonwovens — B2B export website

A server-rendered B2B showcase for **Kiran Nonwovens** — needle punched and
thermal bonded nonwoven felt & geotextiles, for geotextile, automotive,
apparel & footwear and industrial buyers. No cart, no prices; every path leads
to a spec-based enquiry with the export team.

```text
kiran-nonwovens/
├── web/   Next.js 16 (App Router, JavaScript, CSS Modules). Server-renders
│          every product and business-area page — that SSR is the whole reason
│          for Next.js here rather than a client-rendered SPA.
└── api/   Express 5 + Mongoose + MongoDB. Serves the catalogue and receives
           enquiries (saved to MongoDB, emailed via Nodemailer).
```

## Quick start

```bash
# Terminal 1 — API (http://localhost:4100)
cd api
npm install
cp .env.example .env        # fill in MONGODB_URI
npm run seed                # loads the catalogue into MongoDB
npm run dev

# Terminal 2 — site (http://localhost:3100)
cd web
npm install
cp .env.example .env.local
npm run dev
```

**The site runs with no backend at all.** Every page falls back to the local
catalogue in `web/src/data/catalog.js` whenever the API is unset or
unreachable, so you can build, browse and review the whole site before MongoDB
exists. Only the enquiry form needs the API — without it the form returns a
clear "not connected yet" message instead of pretending to send.

Ports are **3100** (site) and **4100** (API), deliberately clear of the sibling
[`kiran-global-exports-v2`](https://github.com/kiranholographics-hub/kiran-global-exports-v2)
towels & linen site's 3000/4000, so both can run side by side on one machine.
The two projects share no code and no database.

## Verifying a build

```bash
cd web
npm run build && npm start   # one terminal
npm run smoke                # another
npm run lint
```

`npm run smoke` is the real acceptance check. It walks all 30 routes and
asserts what this site exists to do: every page server-renders, no two pages
share a `<title>` or meta description, the spec table is real indexable HTML
text rather than an image, each product has exactly one canonical URL, unknown
slugs 404, and `sitemap.xml` covers the whole catalogue.

## The catalogue is one file

`web/src/data/catalog.js` holds the 4 business areas and 16 products. It is the
**single source of truth**: the site imports it as its fallback, and the API's
`npm run seed` imports that same file and upserts it into MongoDB. There is no
second copy to drift.

Once MongoDB is seeded the API becomes the live source and the file stays as
the offline fallback. Adding a product means adding it there and re-running the
seed — pages, both mega-menus, the Spec Finder and `sitemap.xml` all pick it up
with no other change.

## Site structure — the Fibertex dual-nav pattern

The same four industries appear in **two parallel tracks**:

| Track | Route | Purpose |
| --- | --- | --- |
| Business Areas | `/business-areas/[slug]` | The story — Overview / Applications / Downloads tabs |
| Products | `/products/[category]/[slug]` | The catalogue — specs and enquiry |

Industries: Geotextile (4 products), Automotive (3), Apparel & Footwear (2),
Industrial & Others (7).

Full route list: `/`, `/business-areas`, `/business-areas/[slug]`, `/products`,
`/products/[category]`, `/products/[category]/[slug]`, `/about`,
`/manufacturing`, `/contact`, plus `/sitemap.xml` and `/robots.txt`.

## SEO

- Every product and business-area page is pre-rendered via
  `generateStaticParams`, then revalidated every 5 minutes (ISR) so catalogue
  edits go live without a rebuild.
- Every page carries a unique `<title>` and meta description from its own `seo`
  field. Business areas carry a **second** set (`productsSeo`) for their
  product-listing page, so the two pages for one industry never compete for the
  same query with the same description.
- `sitemap.xml` and `robots.txt` are generated from the live catalogue.
- The spec table is real HTML text — never an image.
- Every tab panel's content is in the server HTML (inactive panels are hidden,
  not omitted), so Applications and Specifications are indexable.
- A product reached under the wrong business area 308-redirects to its
  canonical URL.
- Product pages emit `Product` JSON-LD, built only from what is actually known.

## Design system — "Editorial Split"

Taken from the approved theme demo.

- **Palette** — forest `#132A20`, cream `#F7F3EA`, sand `#EDE5D3`, line
  `#D8CFB8`, rust `#B4592F` (accent). Tokens in `web/src/styles/tokens.css`.
- **Type** — Fraunces (serif headings) + IBM Plex Sans (body), loaded through
  `next/font/google` so there is no render-blocking font request.
- **Feel** — editorial/magazine layout, split-screen hero, generous white
  space, rounded pill buttons, mobile-first.
- **No Tailwind.** Every component has its own `Name.module.css` beside it.

## Photography

There is none yet. Every picture slot renders the theme's woven-texture
placeholder captioned with the shot that belongs there, and already points at
its final path (`/images/products/<slug>.jpg` and so on). To go live with real
photos: drop the files in at those paths and flip `IMAGES_READY` to `true` in
`web/src/lib/images.js`. No other change. See
[`web/public/images/README.md`](./web/public/images/README.md).

## What is still pending

See **[OWNER_INPUTS.md](./OWNER_INPUTS.md)**. Nothing outstanding has been
guessed — placeholders render visibly unfinished on purpose, either in
`[square brackets]` or as an italic "To be confirmed" in spec tables.
