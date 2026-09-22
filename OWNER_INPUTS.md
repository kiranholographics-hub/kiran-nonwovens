# Kiran Nonwovens — what we still need from Sir

Everything on this list is **a placeholder in the code, not a guess**. Each one
renders visibly unfinished on the site — in `[square brackets]`, as an italic
"To be confirmed" in a spec table, or as a captioned texture tile where a photo
belongs — so nothing invented can quietly ship as fact.

Each item says exactly where to put the answer.

---

## 1. Domain & hosting
**Blocks:** canonical URLs, `sitemap.xml`, `robots.txt`, OG tags.
**Where:** `NEXT_PUBLIC_SITE_URL` in `web/.env.local` (see `web/.env.example`).
Currently `http://localhost:3100`. One value; it flows everywhere.

## 2. Logo
**Blocks:** header wordmark, browser tab icon.
**Where:** `web/src/components/Header/Header.jsx` (the `.logo` block — text
wordmark stand-in today) and `web/src/app/icon.svg` (placeholder mark).

## 3. Contact details
Address, phone, WhatsApp, email, working hours.
**Blocks:** footer, `/contact` page.
**Where:** `CONTACT` in `web/src/lib/site.js`. The address placeholder carries
the Jaipur address from the theme demo marked "to confirm" — please confirm or
correct it.

## 4. Plant photos & video
**Blocks:** home hero, `/about`, `/manufacturing`, `/contact`.
**Where:** drop files at `web/public/images/hero/plant.jpg`,
`images/plant/overview.jpg`, `images/plant/line.jpg`,
`images/plant/entrance.jpg`, then set `IMAGES_READY = true` in
`web/src/lib/images.js`.

## 5. Product & business-area photos
**Blocks:** all 16 product pages, 4 business-area pages, every card.
**Where:** `web/public/images/products/<product-slug>.jpg` and
`web/public/images/business-areas/<area-slug>.jpg`. The slugs are already in
`web/src/data/catalog.js`; same `IMAGES_READY` switch.

## 6. Certifications & test reports
**Blocks:** the Downloads tab on Geotextile and Industrial business areas, the
Downloads tab on every product, and the "Quality & certifications" section of
`/about`. All currently say the files are pending.
**Where:** put PDFs in `web/public/downloads/`, then add
`downloads: [{ label, url }]` to the relevant entries in
`web/src/data/catalog.js` and re-run `npm run seed`.

## 7. Per-product thickness, roll length and colour
**Blocks:** three rows of every product's spec table, which read
"To be confirmed" today.
**Where:** `specs.thickness`, `specs.rollLength`, `specs.colour` in
`web/src/data/catalog.js`. They are `null` on purpose — no number has been
estimated.

## 8. Per-product GSM range
The plant-wide range (100–1200 GSM) is applied to every product, flagged
`specsConfirmed: false`. The spec table and the Spec Finder both say on screen
that the figure is plant capability, not a per-product range.
**Blocks:** meaningful GSM filtering in the Spec Finder.
**Where:** set real `specs.gsmMin` / `specs.gsmMax` per product in
`web/src/data/catalog.js`, then flip `specsConfirmed: true`. The caveats
disappear automatically once it is `true`.

## 9. Per-product fibre
Same treatment: every product lists the full plant fibre range except the PP
geotextile, whose fibre is stated in its own name. Covered by the same
`specsConfirmed` flag as item 8.

## 10. Global presence figures
Years in manufacturing, export countries, tons produced annually — all showing
`[X]` on the home page.
**Where:** `PRESENCE` in `web/src/lib/site.js`.

## 11. Company copy
The Overview text on each of the 4 business areas, and the Company overview,
History, Technology and Quality sections of `/about`.
**Where:** `overview` on each business area in `web/src/data/catalog.js`, and
`web/src/app/about/page.js`. The Technology section already states the real
plant capability; only the narrative around it is missing.

## 12. Final SEO copy — needs sign-off, not authoring
Unlike the items above, this one is **already written and working**: every page
has a unique title and meta description, and every product has a draft short
description, feature list and application list.

That draft copy is derived from the product's own name and the plant's stated
capability (a "Drainage & Soil Erosion Control Geotextile" is described as
doing drainage and erosion control). It states nothing about Kiran Nonwovens
specifically — no claims, certifications, tolerances or performance figures.

Every product carries `draft: true` in `web/src/data/catalog.js`. Please read
through and correct it, then set `draft: false`. The flag is there to make it
obvious which copy has been signed off.

---

## Not blocked on anything

For reference, these are done and need no input: site structure and both
navigation tracks, all 30 routes, the Spec Finder, the spec-based enquiry form
and its API, the whole design system, SSR/SEO plumbing, `sitemap.xml`, and the
MongoDB models and seed.
