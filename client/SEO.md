# SEO — what is on the site and what is left to do

Everything below is built from facts already on the site (catalogue, plant capability, the company's product document). **No page claims a certification, founding year, capacity, lead time, minimum order or price** — those are pending from the company, and the site must not guess them.

## 1. Before launch (things only you can do)

| # | Action | Why |
|---|---|---|
| 1 | Set `VITE_SITE_URL` to the real domain, then `npm run build` | Canonicals, `og:url`, `sitemap.xml` and `robots.txt` currently point at `http://localhost:3100`. Google ignores a canonical to localhost. |
| 2 | Re-seed MongoDB (`npm run seed` in `server/`) | The site refreshes its catalogue from the API after load. Until the database is re-seeded it still serves the *old* product titles and descriptions. |
| 3 | Add Search Console + Bing verification values to `.env.local` (`VITE_GSC_VERIFICATION`, `VITE_BING_VERIFICATION`), rebuild, then submit `/sitemap.xml` in both | Gets the 37 URLs discovered and shows real queries. |
| 4 | Drop real photos in, set `IMAGES_READY = true` | Image alt text is already wired (`alt` on every card and hero); it only appears once real images render. |
| 5 | Confirm the WhatsApp number and add the factory address to `CONTACT` in `src/lib.js` | The office address (221-C, Frontier Colony, Adarsh Nagar, Jaipur – 302004), phone and email are already in the Organization schema. |
| 6 | Add `sameAs` links (Instagram, Facebook, LinkedIn) to `organizationLd()` once the handles are final | Ties the brand's profiles to the site. |
| 7 | Replace `public/images/og-default.jpg` with a real plant photo card if you like | Shown when a link is shared on WhatsApp / LinkedIn. |
| 8 | List the company on B2B directories and Google Business Profile with the same name, phone and address; link to the site from your other sites | Backlinks and consistent listings are what lifts a new domain. Not something code can do. |

## 2. What was added

- **Titles and descriptions** for every page, unique, titles ≤ 62 characters, descriptions ≤ 165 (the smoke test enforces this).
- **Structured data (schema.org)**: Organization + WebSite (home), BreadcrumbList (every inner page), CollectionPage/ItemList (products, categories, business areas, guides), Product with spec properties (16 product pages), Article (6 guides), AboutPage, ContactPage and FAQPage (29 pages). All validated as parseable JSON in the built HTML.
- **Social previews**: `og:image` / `twitter:image` on every page (default 1200×630 card), `og:locale`, article dates on guides.
- **Robots**: every page `index, follow` with large-preview allowed; the 404 page is `noindex`.
- **6 buyer's guides** at `/guides` (needle punched vs thermal bonded, GSM, geotextile functions, PP vs polyester, automotive NVH felt, RFQ checklist) — long-tail, buyer-intent content, each linking into the catalogue.
- **FAQ blocks**: home, all 4 category pages, all 16 product pages (generated from each product's own fields so no two are alike), manufacturing, contact and each guide. Answers are in the HTML whether or not the accordion is open.
- **Category pages** were ~150 words; each now has a buyer's introduction and FAQ, written to differ from the business-area page.
- **Internal linking**: guides ↔ products ↔ categories, footer link to Buyer's guides, home teaser. The navbar is unchanged.
- **Alt text** wired for product, business-area, about and contact images.
- **Search Console / Bing** verification via environment variables.

> Note on FAQ schema: Google now shows FAQ rich results only for a narrow set of sites, so do not expect FAQ snippets in Google. The FAQ *content* still earns long-tail queries and is used by other search and answer engines, so the markup is kept.

## 3. Target keywords per page

These are **target phrases taken from the product names and buyer language, not measured search volumes** — no keyword-volume tool was available. Check them in Google Search Console (after launch) and Google Keyword Planner and adjust.

| Page | Primary | Secondary |
|---|---|---|
| Home | nonwoven felt manufacturer | geotextile manufacturer India, needle punched nonwoven exporter |
| /products | nonwoven felt products | needle punched felt, thermal bonded nonwoven, geotextile fabric |
| /products/geotextile | PP geotextile fabric | non woven geotextile for roads, drainage geotextile, pipeline protection geotextile, filter geo bag felt |
| /products/automotive | automotive needle punched felt | NVH felt, acoustic insulation felt, thermal insulation felt automotive |
| /products/apparel-footwear | shoulder pad nonwoven fabric | shoe lining nonwoven fabric |
| /products/industrial | carpet backing felt | orthopaedic cast padding, luggage bag support felt, flooring underlay felt, packaging protective felt, custom nonwoven fabric |
| /guides/needle-punched-vs-thermal-bonded-nonwoven | needle punched vs thermal bonded nonwoven | needle punching process, thermal bonded nonwoven |
| /guides/gsm-in-nonwoven-fabric | gsm in nonwoven fabric | nonwoven fabric weight, felt thickness and density |
| /guides/nonwoven-geotextile-guide | nonwoven geotextile uses | geotextile functions, separation filtration drainage |
| /guides/polyester-vs-polypropylene-nonwoven | polyester vs polypropylene nonwoven | PP vs PET felt, recycled PP nonwoven |
| /guides/automotive-nvh-felt-guide | automotive NVH felt | felt noise insulation car, acoustic felt |
| /guides/how-to-request-a-nonwoven-felt-quote | nonwoven felt RFQ | nonwoven felt supplier India, request quote geotextile |

## 4. Every page: title, description, schema

| URL | Title | Description | Schema |
|---|---|---|---|
| `/` | Nonwoven Felt & Geotextile Manufacturer | Kiran Nonwovens | Needle punched and thermal bonded nonwoven felt and geotextiles for civil, automotive, apparel and industrial use. 100–1200 GSM, up to 5.2 m wide. Export from India. | FAQPage, Organization, WebSite |
| `/about` | About Us: Nonwoven Felt Manufacturer | Kiran Nonwovens | Kiran Nonwovens makes needle punched and thermal bonded nonwoven felt and geotextiles to specification for civil, automotive, apparel and industrial use. | AboutPage, BreadcrumbList, Organization |
| `/business-areas` | Nonwoven Felt Applications by Industry | Kiran Nonwovens | Nonwoven felt and geotextile for four industries: civil works, automotive, apparel and footwear, and industrial use. Needle punched, made to specification. | BreadcrumbList, CollectionPage |
| `/contact` | Contact & Quote Request for Nonwoven Felt | Kiran Nonwovens | Send a specification-based enquiry for nonwoven felt or geotextile — fibre, GSM, width and quantity — and our export team will reply with a quote. | BreadcrumbList, ContactPage, FAQPage |
| `/guides` | Nonwoven Felt & Geotextile Buyer’s Guides | Kiran Nonwovens | Plain-language guides for buyers: needle punched vs thermal bonded, GSM, geotextile functions, PP vs polyester, NVH felt and how to request a quote. | BreadcrumbList, CollectionPage |
| `/manufacturing` | Needle Punch & Thermal Bond Manufacturing | Kiran Nonwovens | Needle punching and thermal bonding capability: roll widths 5.0–5.2 m, 100–1200 GSM, in polyester, PP (virgin and recycled), viscose and custom blends. | BreadcrumbList, FAQPage |
| `/products` | Nonwoven Felt & Geotextile Products | Kiran Nonwovens | The full Kiran Nonwovens range: geotextiles, automotive felt, apparel and footwear nonwovens and industrial felt. Needle punched or thermal bonded, 100–1200 GSM. | BreadcrumbList, CollectionPage |
| `/business-areas/apparel-footwear` | Apparel & Footwear Nonwovens — Kiran Nonwovens | Nonwoven fabrics for shoulder pads, shoe linings and garment structure. Needle punched and thermal bonded, made to your GSM and width. | BreadcrumbList |
| `/business-areas/automotive` | Automotive Nonwoven Felt — Kiran Nonwovens | Needle punched automotive felt for NVH, acoustic and thermal insulation. Polyester and PP, 100–1200 GSM, roll widths to 5.2 m. | BreadcrumbList |
| `/business-areas/geotextile` | Geotextile Nonwovens — Kiran Nonwovens | Needle punched PP and polyester geotextiles for separation, drainage, erosion control and pipeline protection. 100–1200 GSM, up to 5.2 m width. | BreadcrumbList |
| `/business-areas/industrial` | Industrial Nonwoven Felt — Kiran Nonwovens | Needle punched felt for orthopaedic padding, carpet backing, flooring underlay, packaging protection and custom industrial applications. | BreadcrumbList |
| `/guides/automotive-nvh-felt-guide` | Automotive NVH Felt for Noise and Heat | Kiran Nonwovens | How needle punched nonwoven felt controls noise, vibration and heat in vehicle interiors, where it is used and what to specify. | Article, BreadcrumbList, FAQPage, Organization |
| `/guides/gsm-in-nonwoven-fabric` | GSM in Nonwoven Fabric: How to Choose Weight | Kiran Nonwovens | What GSM means for nonwoven felt and geotextile, how it relates to thickness and density, and how to specify the right weight for your job. | Article, BreadcrumbList, FAQPage, Organization |
| `/guides/how-to-request-a-nonwoven-felt-quote` | Nonwoven Felt RFQ Checklist for Buyers | Kiran Nonwovens | What importers should include when requesting a quote for nonwoven felt or geotextile: application, fibre, GSM, width, quantity, destination and samples. | Article, BreadcrumbList, FAQPage, Organization |
| `/guides/needle-punched-vs-thermal-bonded-nonwoven` | Needle Punched vs Thermal Bonded Nonwoven | Kiran Nonwovens | How needle punched and thermal bonded nonwovens are made, how they differ in density, loft and finish, and which one suits your application. | Article, BreadcrumbList, FAQPage, Organization |
| `/guides/nonwoven-geotextile-guide` | Nonwoven Geotextile: Functions and Uses | Kiran Nonwovens | What a needle punched nonwoven geotextile does — separation, filtration, drainage, protection — where it is used, and what to specify when you order. | Article, BreadcrumbList, FAQPage, Organization |
| `/guides/polyester-vs-polypropylene-nonwoven` | Polyester vs Polypropylene Nonwoven Felt | Kiran Nonwovens | Compare polyester (PET) and polypropylene (PP) nonwoven felt on weight, heat, chemical resistance and recycled options — and pick the right fibre. | Article, BreadcrumbList, FAQPage, Organization |
| `/products/apparel-footwear` | Apparel & Footwear Products | Kiran Nonwovens | Nonwovens for garment and footwear manufacturing: shoulder pad fabric for tailoring structure, and shoe lining fabric for collars, insoles and counters. | BreadcrumbList, CollectionPage, FAQPage |
| `/products/automotive` | Automotive Products | Kiran Nonwovens | Automotive nonwoven range: general needle punched interior felt, NVH and sound insulation fabric, and combined acoustic and thermal insulation felt. | BreadcrumbList, CollectionPage, FAQPage |
| `/products/geotextile` | Geotextile Products | Kiran Nonwovens | Four geotextile products for civil works: separation and filtration fabric, drainage and erosion control, pipeline and cable protection, and geo bag felt. | BreadcrumbList, CollectionPage, FAQPage |
| `/products/industrial` | Industrial Products | Kiran Nonwovens | Seven industrial nonwovens: orthopaedic cast padding, carpet backing, packaging felt, luggage support, flooring underlay, coloured felt and custom development. | BreadcrumbList, CollectionPage, FAQPage |
| `/products/apparel-footwear/shoe-lining-nonwoven-fabric` | Nonwoven Shoe Lining Fabric | Kiran Nonwovens | Needle punched polyester shoe lining fabric for uppers, inner lining, insoles, heel counters and toe puffs. Breathable, abrasion resistant, made to your GSM. | BreadcrumbList, FAQPage, Organization, Product |
| `/products/apparel-footwear/shoulder-pad-nonwoven-fabric` | Shoulder Pad Nonwoven Fabric | Kiran Nonwovens | Needle punched polyester shoulder pad fabric for blazers, suits, coats, jackets and uniforms. Holds its shape through wear, cuts and stitches cleanly. | BreadcrumbList, FAQPage, Organization, Product |
| `/products/automotive/acoustic-thermal-insulation-felt` | Acoustic and Thermal Insulation Felt | Kiran Nonwovens | Needle punched felt combining sound absorption and thermal resistance for automotive interiors, HVAC, appliances, machinery covers and building insulation. | BreadcrumbList, FAQPage, Organization, Product |
| `/products/automotive/automotive-needle-punched-felt` | Automotive Needle-Punched Felt | Kiran Nonwovens | Needle punched automotive felt for carpet backing, boot liners, door panels, headliners and dashboard insulation. Polyester and polypropylene, made to your GSM. | BreadcrumbList, FAQPage, Organization, Product |
| `/products/automotive/nvh-sound-insulation-fabric` | NVH and Sound Insulation Nonwoven Fabric | Kiran Nonwovens | Needle punched NVH fabric that controls noise, vibration and harshness in automotive, industrial and appliance builds. Tuned for absorption and weight. | BreadcrumbList, FAQPage, Organization, Product |
| `/products/geotextile/drainage-soil-erosion-control-geotextile` | Drainage & Erosion Control Geotextile | Kiran Nonwovens | Permeable needle punched geotextile for French drains, perforated-pipe wrapping, slope protection and erosion control. Fast water flow with soil retention. | BreadcrumbList, FAQPage, Organization, Product |
| `/products/geotextile/filter-geo-bag-felt` | Needle-Punched Felt for Filter Geo Bags | Kiran Nonwovens | Needle punched filter felt for dust-collector bags and baghouse systems in cement, mineral, wood and food plants. Made to your temperature and dust type. | BreadcrumbList, FAQPage, Organization, Product |
| `/products/geotextile/pipeline-cable-protection-geotextile` | Pipeline and Cable Protection Geotextile | Kiran Nonwovens | Needle punched geotextile protecting buried pipelines, sewers and telecom cables from puncture, abrasion and backfill damage. PP or polyester, custom GSM. | BreadcrumbList, FAQPage, Organization, Product |
| `/products/geotextile/pp-geotextile-fabric-for-civil-works` | PP Geotextile Fabric for Civil Works | Kiran Nonwovens | Needle punched PP geotextile for roads, embankments and subgrades: separation, filtration and reinforcement. Custom GSM, width and roll length. | BreadcrumbList, FAQPage, Organization, Product |
| `/products/industrial/carpet-backing-felt` | Carpet Backing Felt | Kiran Nonwovens | Needle punched carpet backing felt for wall-to-wall carpets, rugs, exhibition and automotive carpets. Dimensional stability, cushioning and quieter floors. | BreadcrumbList, FAQPage, Organization, Product |
| `/products/industrial/customised-nonwoven-solutions` | Custom Nonwoven Fabric Manufacturer | Kiran Nonwovens | Custom needle punched nonwovens built to your GSM, thickness, density, fibre blend, colour and finish, for cushioning, filtration, insulation or drainage. | BreadcrumbList, FAQPage, Organization, Product |
| `/products/industrial/flooring-underlay-felt` | Flooring Underlay Felt | Kiran Nonwovens | Nonwoven flooring underlay for carpet, laminate, vinyl and wooden floors. Cushions underfoot, reduces impact noise and smooths minor subfloor irregularities. | BreadcrumbList, FAQPage, Organization, Product |
| `/products/industrial/luggage-bag-support-felt` | Luggage and Bag Support Felt | Kiran Nonwovens | Needle punched support felt giving trolley bags, handbags, backpacks and cases their structure. Bonds to fabric, leather and synthetics; die-cuts cleanly. | BreadcrumbList, FAQPage, Organization, Product |
| `/products/industrial/multi-colour-needle-punched-felt` | Multi-Colour Needle-Punched Felt | Kiran Nonwovens | Coloured needle punched felt for craft, décor, bags, footwear lining, furniture padding and automotive interiors. Cuts, prints, embosses and die-cuts cleanly. | BreadcrumbList, FAQPage, Organization, Product |
| `/products/industrial/orthopaedic-cast-padding` | Orthopaedic Cast Padding | Kiran Nonwovens | Soft, breathable nonwoven undercast padding for plaster and synthetic casts, orthopaedic supports and medical immobilisation. Tears and wraps by hand. | BreadcrumbList, FAQPage, Organization, Product |
| `/products/industrial/packaging-protective-felt` | Packaging Protective Felt | Kiran Nonwovens | Soft, reusable nonwoven packaging felt protecting glass, furniture, metal sheet, electronics and finished surfaces from scratches and impact in transit. | BreadcrumbList, FAQPage, Organization, Product |

## 5. How to keep it healthy

- `npm run build && npm run smoke` fails the build if a page loses its title/description length, `og:image`, breadcrumb, an FAQ's schema, a guide's length or internal product links, or if the 404 stops being `noindex`.
- New guide: add an entry to `src/data/guides.js`; it gets its route, sitemap entry, schema and internal links automatically.
- New product: add it to `src/data/catalog.js` with an `seo.title` (≤ 60 chars incl. brand) and `seo.metaDescription` (≤ 160); its FAQ, schema and sitemap entry are generated.
