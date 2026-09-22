/**
 * Kiran Nonwovens — canonical catalogue.
 *
 * This file is the single source of truth for the 4 business areas and the
 * 16 products. It is used in two ways:
 *
 *   1. The Next.js app imports it directly as the fallback catalogue, so every
 *      page renders correctly with no database and no API running.
 *   2. The Express API's seed script (`api/src/scripts/seed.js`)
 *      imports this exact file and writes it into MongoDB. Once the API is
 *      live it becomes the source the site reads from, and this file stays as
 *      the offline fallback.
 *
 * ── What is real vs. pending ──────────────────────────────────────────────
 * PLANT CAPABILITY (roll width, GSM range, processes, fibres) is real — it
 * comes from the brief and the approved theme demo.
 *
 * Anything Sir has not supplied yet is a PLACEHOLDER and is marked as such —
 * never guessed. Placeholders use the `TBD` constant (rendered as an italic
 * "To be confirmed" in spec tables) or a bracketed `[...]` string, which is
 * visibly unfinished on the page on purpose. See `OWNER_INPUTS.md`
 * for the full outstanding list.
 *
 * Per-product `shortDescription`, `features` and `applications` are DRAFT copy
 * derived from the product name and the plant's stated capability. They are
 * marked `draft: true` and need Sir's sign-off before launch — but they are
 * real sentences so the site can be reviewed, not lorem ipsum.
 */

/** Sentinel for a spec value Sir has not confirmed yet. */
export const TBD = null;

/* ── Plant-wide capability (from the brief + approved demo stats band) ───── */
export const PLANT = {
  widthMin: 5.0,
  widthMax: 5.2,
  widthLabel: '5.0 – 5.2 m',
  gsmMin: 100,
  gsmMax: 1200,
  gsmLabel: '100 – 1200',
  processes: ['Needle punched', 'Thermal bonded'],
  processLabel: 'Needle punched + thermal bonded',
  fibres: [
    'Polyester',
    'PP (virgin)',
    'PP (recycled)',
    'Viscose',
    'Custom blend',
  ],
  fibreLabel: 'Polyester, PP (virgin & recycled), viscose, custom blends',
};

/* ── Business areas ──────────────────────────────────────────────────────── */
export const businessAreas = [
  {
    name: 'Geotextile',
    slug: 'geotextile',
    blurb:
      'Roads, drainage, erosion control and pipeline protection — engineered for civil works.',
    overview:
      '[Overview content — what Kiran Nonwovens offers civil-works and infrastructure buyers, 2–3 paragraphs. Pending from Sir.]',
    applications: [
      'Road and embankment separation layers',
      'Subsurface and trench drainage',
      'Slope and shoreline erosion control',
      'Pipeline and buried-cable protection',
    ],
    hasDownloads: true,
    images: ['/images/business-areas/geotextile.jpg'],
    productsSeo: {
      title: 'Geotextile Products',
      metaDescription:
        'Four geotextile products for civil works: separation and filtration fabric, drainage and erosion control, pipeline and cable protection, and geo bag felt.',
    },
    seo: {
      title: 'Geotextile Nonwovens — Kiran Nonwovens',
      metaDescription:
        'Needle punched PP and polyester geotextiles for separation, drainage, erosion control and pipeline protection. 100–1200 GSM, up to 5.2 m width.',
    },
  },
  {
    name: 'Automotive',
    slug: 'automotive',
    blurb:
      'Lightweight, high-performing felt for NVH, acoustic and thermal insulation in vehicle interiors.',
    overview:
      '[Overview content — Kiran Nonwovens for automotive interiors and tier-1 suppliers, 2–3 paragraphs. Pending from Sir.]',
    applications: [
      'Cabin floor and dash insulation',
      'Door trim and pillar backing',
      'Boot and wheel-arch lining',
      'Headliner and parcel-shelf substrates',
    ],
    hasDownloads: false,
    images: ['/images/business-areas/automotive.jpg'],
    productsSeo: {
      title: 'Automotive Products',
      metaDescription:
        'Automotive nonwoven range: general needle punched interior felt, NVH and sound insulation fabric, and combined acoustic and thermal insulation felt.',
    },
    seo: {
      title: 'Automotive Nonwoven Felt — Kiran Nonwovens',
      metaDescription:
        'Needle punched automotive felt for NVH, acoustic and thermal insulation. Polyester and PP, 100–1200 GSM, roll widths to 5.2 m.',
    },
  },
  {
    name: 'Apparel & Footwear',
    slug: 'apparel-footwear',
    blurb:
      'Structured nonwovens for garments, shoulder pads and footwear linings.',
    overview:
      '[Overview content — Kiran Nonwovens for garment and footwear manufacturers, 2–3 paragraphs. Pending from Sir.]',
    applications: [
      'Shoulder pad and chest-piece construction',
      'Shoe lining and collar reinforcement',
      'Insole and midsole backing',
      'Garment interlining and padding',
    ],
    hasDownloads: false,
    images: ['/images/business-areas/apparel-footwear.jpg'],
    productsSeo: {
      title: 'Apparel & Footwear Products',
      metaDescription:
        'Nonwovens for garment and footwear manufacturing: shoulder pad fabric for tailoring structure, and shoe lining fabric for collars, insoles and counters.',
    },
    seo: {
      title: 'Apparel & Footwear Nonwovens — Kiran Nonwovens',
      metaDescription:
        'Nonwoven fabrics for shoulder pads, shoe linings and garment structure. Needle punched and thermal bonded, made to your GSM and width.',
    },
  },
  {
    name: 'Industrial & Others',
    slug: 'industrial',
    blurb:
      'Felts for medical padding, flooring, packaging and fully custom solutions.',
    overview:
      '[Overview content — industrial, medical, flooring and custom-development work, 2–3 paragraphs. Pending from Sir.]',
    applications: [
      'Orthopaedic and medical padding',
      'Carpet backing and flooring underlay',
      'Protective packaging and surface interleaving',
      'Luggage, bag and case stiffening',
    ],
    hasDownloads: true,
    images: ['/images/business-areas/industrial.jpg'],
    productsSeo: {
      title: 'Industrial Products',
      metaDescription:
        'Seven industrial nonwovens: orthopaedic cast padding, carpet backing, packaging protection, luggage support, flooring underlay, coloured felt and custom development.',
    },
    seo: {
      title: 'Industrial Nonwoven Felt — Kiran Nonwovens',
      metaDescription:
        'Needle punched felt for orthopaedic padding, carpet backing, flooring underlay, packaging protection and custom industrial applications.',
    },
  },
];

/* ── Products ────────────────────────────────────────────────────────────── */

/**
 * Fills a product with the plant-wide defaults so no spec is silently invented.
 *
 * `specsConfirmed: false` means the GSM range shown is the plant's full
 * capability (100–1200), not a range confirmed for this specific product.
 * The spec table and the Spec Finder both say so on screen. Once Sir supplies
 * per-product values, set the real numbers and flip the flag to `true`.
 */
function product(p) {
  return {
    draft: true, // copy below is draft, pending Sir's sign-off
    specsConfirmed: false,
    downloads: [], // datasheets / test reports pending
    images: [`/images/products/${p.slug}.jpg`],
    ...p,
    specs: {
      fibre: PLANT.fibres,
      gsmMin: PLANT.gsmMin,
      gsmMax: PLANT.gsmMax,
      thickness: TBD,
      width: PLANT.widthLabel,
      rollLength: TBD,
      colour: TBD,
      process: PLANT.processLabel,
      ...(p.specs || {}),
    },
  };
}

export const products = [
  /* ── Geotextile ───────────────────────────────────────────────────────── */
  product({
    name: 'PP Geotextile Fabric for Civil Works',
    slug: 'pp-geotextile-fabric-for-civil-works',
    category: 'geotextile',
    shortDescription:
      'Needle punched polypropylene geotextile for separation, reinforcement and filtration under roads, embankments and hard standings.',
    features: [
      'Polypropylene staple fibre',
      'Needle punched, non-woven structure',
      'Separation and filtration in one layer',
      'Roll widths up to 5.2 m',
    ],
    applications: [
      'Road and railway subgrade separation',
      'Embankment and retaining-wall reinforcement',
      'Hard standing and car park sub-base',
      'General civil-works filtration layers',
    ],
    specs: { fibre: ['PP (virgin)', 'PP (recycled)'] },
    seo: {
      title: 'PP Geotextile Fabric for Civil Works | Kiran Nonwovens',
      metaDescription:
        'Needle punched PP geotextile fabric for road, embankment and civil-works separation and filtration. 100–1200 GSM, roll widths to 5.2 m. Export supply from India.',
    },
  }),
  product({
    name: 'Drainage & Soil Erosion Control Geotextile',
    slug: 'drainage-soil-erosion-control-geotextile',
    category: 'geotextile',
    shortDescription:
      'Permeable nonwoven geotextile that lets water pass while holding soil in place — for drains, slopes and shorelines.',
    features: [
      'High water permeability',
      'Retains fines while draining freely',
      'Needle punched for puncture resistance',
      'Supplied in PP or polyester',
    ],
    applications: [
      'French drains and trench drainage',
      'Slope and embankment erosion control',
      'Shoreline and canal bank protection',
      'Landfill and pond drainage layers',
    ],
    seo: {
      title: 'Drainage & Soil Erosion Control Geotextile | Kiran Nonwovens',
      metaDescription:
        'Permeable needle punched geotextile for subsurface drainage, slope stabilisation and erosion control. 100–1200 GSM, PP or polyester, widths to 5.2 m.',
    },
  }),
  product({
    name: 'Pipeline & Cable Protection Geotextile',
    slug: 'pipeline-cable-protection-geotextile',
    category: 'geotextile',
    shortDescription:
      'Heavy-weight protective nonwoven wrapped around buried pipelines and cables to cushion them against backfill and point loads.',
    features: [
      'Available in heavier GSM for cushioning',
      'Resists puncture from angular backfill',
      'Chemically inert to soil and groundwater',
      'Rock-shield and rock-wrap formats',
    ],
    applications: [
      'Buried pipeline rock shield',
      'Cable duct and trench protection',
      'Coated-pipe abrasion protection',
      'Geomembrane cushioning layers',
    ],
    seo: {
      title: 'Pipeline & Cable Protection Geotextile | Kiran Nonwovens',
      metaDescription:
        'Heavy needle punched geotextile rock shield for buried pipelines and cable ducts. Puncture-resistant cushioning up to 1200 GSM, widths to 5.2 m.',
    },
  }),
  product({
    name: 'Filter Geo Bag Felt',
    slug: 'filter-geo-bag-felt',
    category: 'geotextile',
    shortDescription:
      'Nonwoven felt engineered for geo bag and sand-bag fabrication used in river training, bank protection and coastal works.',
    features: [
      'Stitched and sewn into geo bags',
      'Filtration without loss of fill material',
      'UV-stabilised grades available on request',
      'Consistent GSM across the full roll width',
    ],
    applications: [
      'River training and bank revetment',
      'Coastal and estuary protection works',
      'Temporary flood-defence bagging',
      'Scour protection around structures',
    ],
    seo: {
      title: 'Filter Geo Bag Felt | Kiran Nonwovens',
      metaDescription:
        'Nonwoven geo bag felt for river training, bank revetment and coastal protection. Needle punched, 100–1200 GSM, supplied on rolls to 5.2 m wide.',
    },
  }),

  /* ── Automotive ───────────────────────────────────────────────────────── */
  product({
    name: 'Automotive Needle Punched Felt',
    slug: 'automotive-needle-punched-felt',
    category: 'automotive',
    shortDescription:
      'General-purpose needle punched felt for vehicle interiors — trim backing, lining and substrate layers.',
    features: [
      'Mouldable and die-cuttable',
      'Consistent density across the roll',
      'Polyester, PP and recycled blends',
      'Thermal bonded finish available',
    ],
    applications: [
      'Door trim and pillar backing',
      'Boot and wheel-arch lining',
      'Parcel shelf and headliner substrates',
      'Seat-back and under-carpet layers',
    ],
    seo: {
      title: 'Automotive Needle Punched Felt | Kiran Nonwovens',
      metaDescription:
        'Needle punched automotive felt for door trim, boot lining, headliner and under-carpet layers. Polyester and PP, 100–1200 GSM, widths to 5.2 m.',
    },
  }),
  product({
    name: 'NVH & Sound Insulation Fabric',
    slug: 'nvh-sound-insulation-fabric',
    category: 'automotive',
    shortDescription:
      'Nonwoven fabric built for noise, vibration and harshness control in cabins — absorbing airborne noise and damping panel resonance.',
    features: [
      'Engineered for airborne sound absorption',
      'Panel damping and vibration control',
      'Lightweight alternative to heavy barriers',
      'Fibre blend tuned to the target frequency',
    ],
    applications: [
      'Dash and firewall insulation',
      'Floor and tunnel acoustic layers',
      'Engine bay and bonnet lining',
      'Door and pillar noise damping',
    ],
    seo: {
      title: 'NVH & Sound Insulation Fabric | Kiran Nonwovens',
      metaDescription:
        'Nonwoven NVH and sound insulation fabric for vehicle dash, floor and door acoustics. Needle punched and thermal bonded, 100–1200 GSM.',
    },
  }),
  product({
    name: 'Acoustic & Thermal Insulation Felt',
    slug: 'acoustic-thermal-insulation-felt',
    category: 'automotive',
    shortDescription:
      'Dual-purpose insulation felt that cuts noise transfer and heat transfer in the same layer.',
    features: [
      'Combined acoustic and thermal performance',
      'Lofted structure for higher absorption',
      'Available in heavier GSM builds',
      'Suits both automotive and appliance use',
    ],
    applications: [
      'Engine and exhaust heat shielding',
      'HVAC duct and plenum lining',
      'Appliance and equipment enclosures',
      'Cabin thermal comfort layers',
    ],
    seo: {
      title: 'Acoustic & Thermal Insulation Felt | Kiran Nonwovens',
      metaDescription:
        'Needle punched acoustic and thermal insulation felt for automotive, HVAC and appliance enclosures. 100–1200 GSM, roll widths to 5.2 m.',
    },
  }),

  /* ── Apparel & Footwear ───────────────────────────────────────────────── */
  product({
    name: 'Shoulder Pad Nonwoven Fabric',
    slug: 'shoulder-pad-nonwoven-fabric',
    category: 'apparel-footwear',
    shortDescription:
      'Resilient nonwoven built for shoulder pad and chest-piece construction — holds its shape through wear and cleaning.',
    features: [
      'Shape retention after compression',
      'Cuts and moulds cleanly',
      'Soft hand with structured body',
      'Light GSM builds for tailoring',
    ],
    applications: [
      'Suit and jacket shoulder pads',
      'Chest pieces and canvas substitutes',
      'Garment interlining and padding',
      'Uniform and workwear structure',
    ],
    seo: {
      title: 'Shoulder Pad Nonwoven Fabric | Kiran Nonwovens',
      metaDescription:
        'Resilient nonwoven fabric for shoulder pads, chest pieces and garment interlining. Needle punched and thermal bonded, made to your GSM.',
    },
  }),
  product({
    name: 'Shoe Lining Nonwoven Fabric',
    slug: 'shoe-lining-nonwoven-fabric',
    category: 'apparel-footwear',
    shortDescription:
      'Nonwoven lining and reinforcement fabric for footwear — used in collars, quarters, insoles and toe puffs.',
    features: [
      'Abrasion resistant against the foot',
      'Skives and laminates cleanly',
      'Breathable open structure',
      'Consistent thickness for die-cutting',
    ],
    applications: [
      'Shoe collar and quarter lining',
      'Insole covering and backing',
      'Toe puff and counter reinforcement',
      'Sports and safety footwear linings',
    ],
    seo: {
      title: 'Shoe Lining Nonwoven Fabric | Kiran Nonwovens',
      metaDescription:
        'Nonwoven shoe lining and reinforcement fabric for collars, insoles, toe puffs and counters. Needle punched, export supply from India.',
    },
  }),

  /* ── Industrial & Others ──────────────────────────────────────────────── */
  product({
    name: 'Orthopaedic Cast Padding',
    slug: 'orthopaedic-cast-padding',
    category: 'industrial',
    shortDescription:
      'Soft, conformable nonwoven padding used under orthopaedic casts and splints as the layer against the skin.',
    features: [
      'Soft, low-irritation surface',
      'Conforms to limb contours',
      'Tears cleanly by hand',
      'Supplied in rolls or slit to width',
    ],
    applications: [
      'Under-cast and under-splint padding',
      'Compression bandage underlay',
      'Protective padding in orthotics',
      'Veterinary casting and bandaging',
    ],
    seo: {
      title: 'Orthopaedic Cast Padding | Kiran Nonwovens',
      metaDescription:
        'Soft conformable nonwoven orthopaedic cast padding for under-cast, splint and bandage underlay. Supplied in rolls or slit to width.',
    },
  }),
  product({
    name: 'Carpet Backing Felt',
    slug: 'carpet-backing-felt',
    category: 'industrial',
    shortDescription:
      'Dimensionally stable nonwoven felt used as primary and secondary carpet backing.',
    features: [
      'Dimensional stability under tension',
      'Good tuft-lock and adhesive anchorage',
      'Available in heavy GSM builds',
      'Full 5.2 m width for broadloom',
    ],
    applications: [
      'Primary and secondary carpet backing',
      'Rug and mat construction',
      'Exhibition and event carpet',
      'Automotive floor carpet substrates',
    ],
    seo: {
      title: 'Carpet Backing Felt | Kiran Nonwovens',
      metaDescription:
        'Needle punched carpet backing felt for broadloom, rugs, mats and exhibition carpet. Up to 1200 GSM and 5.2 m wide.',
    },
  }),
  product({
    name: 'Packaging Protective Felt',
    slug: 'packaging-protective-felt',
    category: 'industrial',
    shortDescription:
      'Cushioning nonwoven that protects finished surfaces in transit — interleaving, wrapping and crate lining.',
    features: [
      'Non-marking against finished surfaces',
      'Absorbs shock and vibration in transit',
      'Cuts to sheet, strip or roll',
      'Recycled fibre builds available',
    ],
    applications: [
      'Glass, panel and sheet interleaving',
      'Furniture and appliance wrapping',
      'Crate and container lining',
      'Component separation in transit',
    ],
    seo: {
      title: 'Packaging Protective Felt | Kiran Nonwovens',
      metaDescription:
        'Cushioning nonwoven packaging felt for interleaving, wrapping and crate lining. Non-marking protection for glass, panels and finished goods.',
    },
  }),
  product({
    name: 'Luggage & Bag Support Felt',
    slug: 'luggage-bag-support-felt',
    category: 'industrial',
    shortDescription:
      'Structural nonwoven that gives luggage, bags and cases their body without adding weight.',
    features: [
      'Stiffness without heavy weight',
      'Laminates and bonds cleanly',
      'Die-cuts without fraying',
      'Consistent thickness panel to panel',
    ],
    applications: [
      'Suitcase and trolley bag panels',
      'Handbag and backpack stiffening',
      'Instrument and tool case bodies',
      'Laptop sleeve and padded inserts',
    ],
    seo: {
      title: 'Luggage & Bag Support Felt | Kiran Nonwovens',
      metaDescription:
        'Structural nonwoven support felt for luggage panels, handbag stiffening and case bodies. Die-cuts cleanly, laminates well, made to your GSM.',
    },
  }),
  product({
    name: 'Flooring Underlay Felt',
    slug: 'flooring-underlay-felt',
    category: 'industrial',
    shortDescription:
      'Underlay felt laid beneath carpet, laminate and vinyl flooring for comfort, sound reduction and substrate levelling.',
    features: [
      'Impact sound reduction underfoot',
      'Evens out minor substrate variation',
      'Recovers after compression',
      'Broadloom widths, cut to length',
    ],
    applications: [
      'Carpet and rug underlay',
      'Laminate and engineered wood underlay',
      'Vinyl and LVT cushioning layers',
      'Acoustic underlay in apartments',
    ],
    seo: {
      title: 'Flooring Underlay Felt | Kiran Nonwovens',
      metaDescription:
        'Nonwoven flooring underlay felt for carpet, laminate and vinyl. Impact sound reduction and substrate levelling, up to 5.2 m wide.',
    },
  }),
  product({
    name: 'Multi-Colour Needle Punched Felt',
    slug: 'multi-colour-needle-punched-felt',
    category: 'industrial',
    shortDescription:
      'Needle punched felt produced in a range of colours for visible, decorative and craft-facing applications.',
    features: [
      'Colour run to order',
      'Even shade across the roll width',
      'Plain and marl effects',
      'Shade card — [pending from Sir]',
    ],
    applications: [
      'Display, exhibition and event surfaces',
      'Craft, hobby and stationery felt',
      'Decorative wall and panel covering',
      'Retail fixture and POS lining',
    ],
    seo: {
      title: 'Multi-Colour Needle Punched Felt | Kiran Nonwovens',
      metaDescription:
        'Coloured needle punched felt for display, exhibition, craft and decorative use. Even shade across full roll width, colour run to order.',
    },
  }),
  product({
    name: 'Customised Nonwoven Solutions',
    slug: 'customised-nonwoven-solutions',
    category: 'industrial',
    shortDescription:
      "Tell us the GSM, width, fibre and colour you need and we develop the material for it — this is where anything outside the standard range starts.",
    features: [
      'Developed to your specification',
      'Fibre blends matched to the application',
      'Any GSM within 100–1200',
      'Slit and cut to your working width',
    ],
    applications: [
      'New application development',
      'Replacing an imported material locally',
      'Non-standard width or GSM requirements',
      'Private-label and OEM supply',
    ],
    seo: {
      title: 'Customised Nonwoven Solutions | Kiran Nonwovens',
      metaDescription:
        'Custom needle punched and thermal bonded nonwovens developed to your GSM, width, fibre and colour. Tell us the specification and we build to it.',
    },
  }),
];

/* ── Lookup helpers (used by both the site and the API seed) ─────────────── */

export const findBusinessArea = (slug) =>
  businessAreas.find((b) => b.slug === slug) || null;

export const findProduct = (slug) =>
  products.find((p) => p.slug === slug) || null;

export const productsIn = (category) =>
  products.filter((p) => p.category === category);

export const businessAreaName = (slug) => findBusinessArea(slug)?.name || slug;
