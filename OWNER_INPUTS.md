# Kiran Nonwovens — what we still need from Sir

Everything on this list is **a placeholder in the code, not a guess**. Each one
renders visibly unfinished on the site — in `[square brackets]`, as an italic
"To be confirmed" in a spec table, or as a captioned texture tile where a photo
belongs — so nothing invented can quietly ship as fact.

Each item says exactly where to put the answer.

---

## 1. Domain & hosting
**Blocks:** canonical URLs, `sitemap.xml`, `robots.txt`, OG tags.
**Where:** `VITE_SITE_URL` in `client/.env.local` (see `client/.env.example`).
Currently `http://localhost:3100`. One value; it flows everywhere.

## 2. Logo
**Blocks:** header wordmark, browser tab icon.
**Where:** `client/src/components/Header.jsx` (the `.logo` block — text
wordmark stand-in today) and `client/public/icon.svg` (placeholder mark).

## 3. Contact details
Address, phone, WhatsApp, email, working hours.
**Blocks:** footer, `/contact` page.
**Where:** `CONTACT` in `client/src/lib.js`. The address placeholder carries
the Jaipur address from the theme demo marked "to confirm" — please confirm or
correct it.

## 4. Plant photos & video
**Blocks:** home hero, `/about`, `/manufacturing`, `/contact`.
**Where:** drop files at `client/public/images/hero/plant.jpg`,
`images/plant/overview.jpg`, `images/plant/line.jpg`,
`images/plant/entrance.jpg`, then set `IMAGES_READY = true` in
`client/src/lib.js`.

## 5. Product & business-area photos
**Blocks:** all 16 product pages, 4 business-area pages, every card.
**Where:** `client/public/images/products/<product-slug>.jpg` and
`client/public/images/business-areas/<area-slug>.jpg`. The slugs are already in
`client/src/data/catalog.js`; same `IMAGES_READY` switch.

## 6. Certifications & test reports
**Blocks:** the Downloads tab on Geotextile and Industrial business areas, the
Downloads tab on every product, and the "Quality & certifications" section of
`/about`. All currently say the files are pending.
**Where:** put PDFs in `client/public/downloads/`, then add
`downloads: [{ label, url }]` to the relevant entries in
`client/src/data/catalog.js` and re-run `npm run seed`.

## 7. ~~Per-product thickness, roll length and colour~~ ✅ ANSWERED

The product-description document answers this: every product is offered in
"customised GSM, thickness, width and colour". There is no fixed figure to
state, so the spec table now reads **"Made to requirement"** on those rows
instead of "To be confirmed".

Multi-Colour Needle Punched Felt additionally shows "Single, multi-colour or
matched to your shade". A printed **shade card** would still be useful if one
exists — that is the only colour item left.

## 8. Per-product GSM range — partly open
Every product is made across the plant's full 100–1200 GSM capability, so
products carry `gsmConfirmed: false` and the spec table says "Plant capability
— made to the GSM your application needs."

That is accurate and probably final. **Only** if a product actually has a fixed
range worth publishing (e.g. shoulder pad is only ever made 150–400 GSM), set
`specs.gsmMin` / `specs.gsmMax` in `client/src/data/catalog.js` and flip
`gsmConfirmed: true`.

## 9. ~~Per-product fibre~~ ✅ MOSTLY ANSWERED

Taken from the product document. Eight products now name their own fibre:

| Product | Fibre |
| --- | --- |
| PP Geotextile Fabric | Polypropylene |
| Pipeline & Cable Protection Geotextile | Polypropylene or polyester |
| Automotive Needle Punched Felt | Polyester + polypropylene |
| NVH & Sound Insulation Fabric | Polyester + polypropylene |
| Acoustic & Thermal Insulation Felt | Polyester + polypropylene |
| Shoulder Pad Nonwoven Fabric | Polyester |
| Shoe Lining Nonwoven Fabric | Polyester |
| Carpet Backing Felt | Polyester + polypropylene |

The remaining eight say only "synthetic fibres" or "customised fibre
composition" in the document, so they still show the full plant range with a
caveat. Name the fibre for any of them and the caveat disappears by itself.

## 10. Global presence figures
Years in manufacturing, export countries, tons produced annually — all showing
`[X]` on the home page.
**Where:** `PRESENCE` in `client/src/lib.js`.

## 11. Company copy — the last big text gap
The product document covers the products, not the company. Still bracketed on
the site:

- The **Overview** tab on each of the 4 business areas
- `/about` — Company overview, History, Technology narrative, Quality

**Where:** `overview` on each business area in `client/src/data/catalog.js`, and
`client/src/pages/About.jsx`. The Technology section already states the real
plant capability; only the narrative around it is missing.

## 12. ~~Product copy~~ ✅ SUPPLIED — please just proof-read

All 16 products now carry the company's own descriptions, features and
applications from the product-description PDF. They were edited only for the
web: sentence case, consistent British spelling (`-ise`), and the applications
paragraph split into a list. Nothing was added.

`draft` is now `false` on every product. A quick proof-read before launch is
still worth doing.

**One thing to confirm:** the document describes *Filter Geo Bag Felt* as a
**dust-collection / baghouse air-filtration** material (cement plants,
woodworking, food processing), not a civil-works geotextile. The document files
it under the Geotextile heading, so the site keeps it under Geotextile — but if
it belongs under Industrial & Others instead, say so and it moves.

---

## Not blocked on anything

For reference, these are done and need no input: site structure and both
navigation tracks, all 30 routes, the Spec Finder, the spec-based enquiry form
and its API, the whole design system, SSR/SEO plumbing, `sitemap.xml`, and the
MongoDB models and seed.
