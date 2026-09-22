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
 * Per-product `shortDescription`, `features` and `applications` are taken from
 * the company's own product-description document, lightly edited for the web
 * (sentence case, consistent British spelling, applications split into a list).
 * Nothing in them is invented.
 *
 * What that document does NOT give is a per-product GSM range — every product
 * is offered across the plant's 100–1200 GSM capability. Products therefore
 * carry `gsmConfirmed: false`, and the spec table and Spec Finder both say on
 * screen that the range shown is plant capability.
 */

/** Sentinel for a spec value nobody has supplied yet — renders as italic
 *  "To be confirmed" rather than a guessed number. */
export const TBD = null;

/**
 * Every product in the company's product-description document is offered in
 * "customised GSM, thickness, width and colour". So thickness, roll length and
 * colour are not unknowns — there is no single fixed value to state.
 */
export const MADE_TO_ORDER = 'Made to requirement';

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
      'Road, railway and embankment separation layers',
      'Subsurface drainage and perforated-pipe wrapping',
      'Slope, canal and embankment erosion control',
      'Pipeline and buried-cable protection',
      'Industrial dust-collection filter bags',
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
      'Carpet backing, floor mats and parcel trays',
      'Door panels, headliners and roof liners',
      'Boot liners and wheel-arch liners',
      'Dashboard and engine-bay insulation',
      'Seat padding and NVH control layers',
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
      'Shoulder pads for blazers, suits and coats',
      'Uniforms and ladies\u2019 fashion garments',
      'Shoe uppers and inner lining',
      'Insoles, heel counters and toe-puff support',
      'Sports, safety and casual footwear',
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
      'Orthopaedic undercast padding and medical immobilisation',
      'Carpet backing and flooring underlay',
      'Protective packaging for glass, furniture and electronics',
      'Luggage, bag and case structure',
      'Coloured felt for craft, décor and display',
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
 * `gsmConfirmed: false` means the GSM range shown is the plant's full
 * capability (100–1200) rather than a range confirmed for this product. The
 * spec table and the Spec Finder both say so on screen. If a product ever gets
 * a fixed range, set the real numbers and flip the flag to `true`.
 */
function product(p) {
  return {
    draft: false, // copy comes from the company's product-description document
    gsmConfirmed: false,
    downloads: [], // datasheets / test reports pending
    images: [`/images/products/${p.slug}.jpg`],
    ...p,
    specs: {
      // Default fibre is the full plant range. Where the product document
      // names the fibre, the product overrides this and the spec table drops
      // its "full plant range" caveat.
      fibre: PLANT.fibres,
      gsmMin: PLANT.gsmMin,
      gsmMax: PLANT.gsmMax,
      thickness: MADE_TO_ORDER,
      width: PLANT.widthLabel,
      rollLength: MADE_TO_ORDER,
      colour: MADE_TO_ORDER,
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
      'PP needle-punched geotextile for civil construction and infrastructure — a strong, permeable layer that handles separation, filtration, drainage, protection and reinforcement at once.',
    features: [
      'High strength and tear resistance',
      'Excellent water permeability and drainage support',
      'Helps separate soil layers and prevent mixing',
      'Supports soil stabilisation and reinforcement',
      'Resistant to moisture, chemicals and biological degradation',
      'Available in customised GSM, width and roll length',
    ],
    applications: [
      'Road and railway construction',
      'Landfills, retaining walls and embankments',
      'Foundations and pavement subgrades',
      'Drainage systems and canal lining protection',
      'Landscaping and general civil-engineering works',
    ],
    specs: { fibre: ['PP (virgin)', 'PP (recycled)'] },
    seo: {
      title: 'PP Geotextile Fabric for Civil Works | Kiran Nonwovens',
      metaDescription:
        'Needle punched PP geotextile for roads, embankments, subgrades and drainage — separation, filtration and reinforcement in one layer. Customised GSM, width and roll length.',
    },
  }),
  product({
    name: 'Drainage & Soil Erosion Control Geotextile',
    slug: 'drainage-soil-erosion-control-geotextile',
    category: 'geotextile',
    shortDescription:
      'Needle-punched geotextile that supports efficient drainage and protects soil from erosion — water flows through freely while soil particles stay put, preventing clogging and washout.',
    features: [
      'Allows fast water flow while retaining soil particles',
      'Helps prevent drainage-system clogging',
      'Controls soil erosion and surface washout',
      'Flexible, durable and easy to install',
      'Provides a protective and separating layer',
      'Available in customised GSM, width and roll length',
    ],
    applications: [
      'French drains and subsurface drainage',
      'Perforated-pipe wrapping',
      'Slope protection, embankments and retaining walls',
      'Canals, ponds and rainwater-harvesting systems',
      'Landscaping, gardens and erosion-control projects',
    ],
    seo: {
      title: 'Drainage & Soil Erosion Control Geotextile | Kiran Nonwovens',
      metaDescription:
        'Permeable needle punched geotextile for French drains, perforated-pipe wrapping, slope protection and erosion control. Fast water flow with soil retention.',
    },
  }),
  product({
    name: 'Pipeline & Cable Protection Geotextile',
    slug: 'pipeline-cable-protection-geotextile',
    category: 'geotextile',
    shortDescription:
      'Needle-punched nonwoven geotextile that shields buried pipelines, cables and utility lines from puncture, abrasion and impact, while still letting water drain through.',
    features: [
      'Protects pipelines and cables from puncture and abrasion',
      'Provides cushioning against stones and backfill material',
      'Offers separation and filtration support',
      'Allows water drainage while helping retain soil particles',
      'Durable, flexible and easy to install',
      'Resistant to moisture, chemicals, rot and biological degradation',
    ],
    applications: [
      'Oil, gas and water-supply pipelines',
      'Drainage pipes and sewer lines',
      'Electrical, telecom and fibre-optic cables',
      'Utility corridors and underground infrastructure',
      'Civil-engineering projects',
    ],
    specs: { fibre: ['Polyester', 'PP (virgin)', 'PP (recycled)'] },
    seo: {
      title: 'Pipeline & Cable Protection Geotextile | Kiran Nonwovens',
      metaDescription:
        'Needle punched geotextile protecting buried pipelines, sewer lines and telecom cables from puncture, abrasion and backfill damage. PP or polyester, customised GSM.',
    },
  }),
  product({
    name: 'Filter Geo Bag Felt',
    slug: 'filter-geo-bag-felt',
    category: 'geotextile',
    shortDescription:
      'Dense needle-punched filtration felt for dust-collection and industrial air-filtration systems — it captures dust particles while holding air flow and mechanical strength.',
    features: [
      'Effective dust retention and filtration performance',
      'Good air permeability',
      'Strong, durable and tear resistant',
      'Uniform thickness and fibre distribution',
      'Suitable for cutting, stitching and bag fabrication',
      'Available in customised specifications',
    ],
    applications: [
      'Dust-collector filter bags and baghouse systems',
      'Cement and mineral plants',
      'Woodworking and metal-processing units',
      'Food-processing and pharmaceutical dust collection',
      'Boilers and general industrial air-filtration systems',
    ],
    specNote:
      'Fibre composition and finish are matched to your operating temperature, dust type and filtration requirement.',
    seo: {
      title: 'Filter Geo Bag Felt — Dust Filtration | Kiran Nonwovens',
      metaDescription:
        'Needle punched filter felt for dust-collector bags and baghouse systems in cement, mineral, woodworking and food-processing plants. Made to your temperature and dust type.',
    },
  }),

  /* ── Automotive ───────────────────────────────────────────────────────── */
  product({
    name: 'Automotive Needle Punched Felt',
    slug: 'automotive-needle-punched-felt',
    category: 'automotive',
    shortDescription:
      'Needle-punched felt engineered for vehicle interiors — durable, sound absorbing and thermally insulating, with a uniform structure that cuts, moulds, laminates and die-cuts cleanly.',
    features: [
      'Excellent sound absorption and vibration reduction',
      'Good thermal insulation',
      'Durable, lightweight and resilient',
      'Easy to mould, cut, laminate and stitch',
      'Uniform thickness and smooth finish',
      'Customised GSM, thickness, width and colour options',
    ],
    applications: [
      'Carpet backing and floor mats',
      'Boot liners and parcel trays',
      'Door panels and headliners',
      'Wheel-arch liners and dashboard insulation',
      'Seat padding and other interior components',
    ],
    specs: { fibre: ['Polyester', 'PP (virgin)', 'PP (recycled)'] },
    seo: {
      title: 'Automotive Needle Punched Felt | Kiran Nonwovens',
      metaDescription:
        'Needle punched automotive felt for carpet backing, boot liners, door panels, headliners and dashboard insulation. Polyester and polypropylene, made to your GSM.',
    },
  }),
  product({
    name: 'NVH & Sound Insulation Fabric',
    slug: 'nvh-sound-insulation-fabric',
    category: 'automotive',
    shortDescription:
      'Needle-punched NVH fabric built to control noise, vibration and harshness — a dense, resilient fibre structure that absorbs sound energy and damps vibration transfer.',
    features: [
      'Helps reduce noise, vibration and harshness',
      'Effective sound absorption and acoustic insulation',
      'Supports thermal-insulation performance',
      'Lightweight, durable and resilient',
      'Easy to cut, laminate, mould and process',
      'Available in customised GSM, thickness, density, width and colour',
    ],
    applications: [
      'Automotive carpets, door panels and headliners',
      'Boot liners, wheel-arch liners and dashboard insulation',
      'Engine-bay insulation and generator enclosures',
      'HVAC ducts and machinery covers',
      'Acoustic wall panels and construction sound-control systems',
    ],
    specs: { fibre: ['Polyester', 'PP (virgin)', 'PP (recycled)'] },
    seo: {
      title: 'NVH & Sound Insulation Nonwoven Fabric | Kiran Nonwovens',
      metaDescription:
        'Needle punched NVH fabric controlling noise, vibration and harshness in automotive, industrial and appliance builds. Tuned for sound absorption, density and weight.',
    },
  }),
  product({
    name: 'Acoustic & Thermal Insulation Felt',
    slug: 'acoustic-thermal-insulation-felt',
    category: 'automotive',
    shortDescription:
      'Needle-punched felt that cuts unwanted noise and holds temperature in the same layer — a resilient structure that traps sound energy and slows heat transfer.',
    features: [
      'Effective sound absorption and noise reduction',
      'Good thermal insulation properties',
      'Lightweight, soft and durable',
      'Resilient structure with good shape retention',
      'Easy to cut, laminate, mould and process',
      'Available in customised GSM, thickness, width, density and colour',
    ],
    applications: [
      'Automotive interiors and engine compartments',
      'Door panels and roof liners',
      'HVAC systems and appliances',
      'Machinery covers and generator enclosures',
      'Wall and ceiling insulation, partitions and furniture',
    ],
    specs: { fibre: ['Polyester', 'PP (virgin)', 'PP (recycled)'] },
    seo: {
      title: 'Acoustic & Thermal Insulation Felt | Kiran Nonwovens',
      metaDescription:
        'Needle punched felt combining sound absorption and thermal resistance for automotive interiors, HVAC, appliances, machinery covers and building insulation.',
    },
  }),

  /* ── Apparel & Footwear ───────────────────────────────────────────────── */
  product({
    name: 'Shoulder Pad Nonwoven Fabric',
    slug: 'shoulder-pad-nonwoven-fabric',
    category: 'apparel-footwear',
    shortDescription:
      'Needle-punched polyester shoulder pad fabric that gives garments a smooth shape, comfortable support and a premium finish — clean, well-defined shoulders without bulk.',
    features: [
      'Soft, lightweight and comfortable',
      'Good shape retention and resilience',
      'Smooth and uniform surface',
      'Easy to cut, stitch and laminate',
      'Available in different thicknesses, GSM, widths and colours',
      'Suitable for customised garment requirements',
    ],
    applications: [
      'Blazers, suits and coats',
      'Jackets and uniforms',
      "Ladies' fashion garments",
      'Other apparel requiring shoulder support and structure',
    ],
    specs: { fibre: ['Polyester'] },
    seo: {
      title: 'Shoulder Pad Nonwoven Fabric | Kiran Nonwovens',
      metaDescription:
        'Needle punched polyester shoulder pad fabric for blazers, suits, coats, jackets and uniforms. Holds its shape through wear, cuts and stitches cleanly.',
    },
  }),
  product({
    name: 'Shoe Lining Nonwoven Fabric',
    slug: 'shoe-lining-nonwoven-fabric',
    category: 'apparel-footwear',
    shortDescription:
      'Needle-punched polyester lining fabric for footwear — a smooth, cushioned surface that stays comfortable against the foot and helps the shoe hold its shape and finish.',
    features: [
      'Soft and comfortable against the foot',
      'Lightweight and breathable',
      'Durable with good abrasion resistance',
      'Good cushioning and shape retention',
      'Easy to cut, stitch, laminate and bond',
      'Available in customised GSM, thickness, width and colour',
    ],
    applications: [
      'Shoe uppers and inner lining',
      'Insoles and heel counters',
      'Toe-puff support',
      'Sports, safety and casual footwear',
      'Slipper lining and other footwear components',
    ],
    specs: { fibre: ['Polyester'] },
    seo: {
      title: 'Shoe Lining Nonwoven Fabric | Kiran Nonwovens',
      metaDescription:
        'Needle punched polyester shoe lining fabric for uppers, inner lining, insoles, heel counters and toe puffs. Breathable, abrasion resistant, made to your GSM.',
    },
  }),

  /* ── Industrial & Others ──────────────────────────────────────────────── */
  product({
    name: 'Orthopaedic Cast Padding',
    slug: 'orthopaedic-cast-padding',
    category: 'industrial',
    shortDescription:
      'Soft nonwoven padding that sits between the skin and a plaster or synthetic cast, protecting sensitive areas from pressure, friction and irritation.',
    features: [
      'Soft and skin-friendly',
      'Lightweight and breathable',
      'Provides cushioning and pressure protection',
      'Easy to tear, wrap and apply',
      'Uniform thickness for consistent coverage',
      'Available in customised widths, thicknesses, GSM and roll lengths',
    ],
    applications: [
      'Undercast padding for plaster and synthetic casts',
      'Orthopaedic supports and splinting',
      'Medical immobilisation applications',
    ],
    seo: {
      title: 'Orthopaedic Cast Padding | Kiran Nonwovens',
      metaDescription:
        'Soft, breathable nonwoven undercast padding for plaster and synthetic casts, orthopaedic supports and medical immobilisation. Tears and wraps by hand.',
    },
  }),
  product({
    name: 'Carpet Backing Felt',
    slug: 'carpet-backing-felt',
    category: 'industrial',
    shortDescription:
      'Needle-punched backing felt that gives carpets and floor coverings strength, cushioning and dimensional stability, and improves comfort underfoot.',
    features: [
      'Provides strength and dimensional stability',
      'Soft cushioning for improved walking comfort',
      'Helps reduce sound and impact noise',
      'Good thermal-insulation properties',
      'Durable, lightweight and resilient',
      'Easy to laminate, cut and process',
    ],
    applications: [
      'Wall-to-wall carpets and area rugs',
      'Automotive and exhibition carpets',
      'Floor mats',
      'Commercial and residential flooring',
      'Hotel and office carpets',
    ],
    specs: { fibre: ['Polyester', 'PP (virgin)', 'PP (recycled)'] },
    seo: {
      title: 'Carpet Backing Felt | Kiran Nonwovens',
      metaDescription:
        'Needle punched carpet backing felt for wall-to-wall carpets, rugs, exhibition and automotive carpets. Dimensional stability, cushioning and quieter floors.',
    },
  }),
  product({
    name: 'Packaging Protective Felt',
    slug: 'packaging-protective-felt',
    category: 'industrial',
    shortDescription:
      'Cushioning nonwoven that protects finished surfaces from scratches, abrasion and impact during storage, handling, transport and packing — soft, reusable and easy to convert.',
    features: [
      'Protects against scratches, scuffs and abrasion',
      'Provides cushioning against minor impact and vibration',
      'Soft, non-abrasive surface',
      'Lightweight, flexible and easy to handle',
      'Reusable and durable',
      'Easy to cut, wrap, laminate and convert',
    ],
    applications: [
      'Furniture wrapping and glass protection',
      'Metal-sheet and automotive-component packaging',
      'Electronics and appliance protection',
      'Wooden products, leather goods and luggage',
      'Machinery parts and general industrial packing',
    ],
    seo: {
      title: 'Packaging Protective Felt | Kiran Nonwovens',
      metaDescription:
        'Soft, reusable nonwoven packaging felt protecting glass, furniture, metal sheet, electronics and finished surfaces from scratches and impact in transit.',
    },
  }),
  product({
    name: 'Luggage & Bag Support Felt',
    slug: 'luggage-bag-support-felt',
    category: 'industrial',
    shortDescription:
      'Needle-punched support felt that gives bags, luggage and cases a firm but flexible shape, while cushioning the contents against impact and abrasion.',
    features: [
      'Provides shape, structure and support',
      'Good cushioning and impact protection',
      'Lightweight, durable and flexible',
      'Good tear and abrasion resistance',
      'Easy to cut, stitch, laminate and bond',
      'Available in customised GSM, thickness, width and colour',
    ],
    applications: [
      'Travel luggage and trolley bags',
      'Handbags, backpacks and laptop bags',
      'Briefcases and cosmetic bags',
      'Shopping bags, organisers and protective cases',
      'Bag lining and reinforcement components',
    ],
    seo: {
      title: 'Luggage & Bag Support Felt | Kiran Nonwovens',
      metaDescription:
        'Needle punched support felt giving trolley bags, handbags, backpacks and cases their structure. Bonds to fabric, leather and synthetics; die-cuts cleanly.',
    },
  }),
  product({
    name: 'Flooring Underlay Felt',
    slug: 'flooring-underlay-felt',
    category: 'industrial',
    shortDescription:
      'Needle-punched underlay that creates a comfortable, stable layer beneath floor coverings — cushioning underfoot, quieter impact sound and a smoother subfloor.',
    features: [
      'Provides cushioning and walking comfort',
      'Helps reduce impact noise and sound transmission',
      'Supports thermal insulation',
      'Helps protect the floor covering from wear',
      'Creates a smooth, stable underlay surface',
      'Lightweight, durable and easy to install',
    ],
    applications: [
      'Carpet and rug underlay',
      'Laminate, vinyl and wooden flooring',
      'Commercial and residential flooring',
      'Offices, hotels and exhibition spaces',
      'Other interior floor-covering applications',
    ],
    seo: {
      title: 'Flooring Underlay Felt | Kiran Nonwovens',
      metaDescription:
        'Nonwoven flooring underlay for carpet, laminate, vinyl and wooden floors. Cushions underfoot, reduces impact noise and smooths minor subfloor irregularities.',
    },
  }),
  product({
    name: 'Multi-Colour Needle Punched Felt',
    slug: 'multi-colour-needle-punched-felt',
    category: 'industrial',
    shortDescription:
      'Needle-punched felt in a wide range of colours — soft, durable and smoothly finished, for decorative, craft, footwear, automotive, furniture and industrial use.',
    features: [
      'Available in a wide variety of vibrant colours',
      'Soft, durable and lightweight',
      'Uniform thickness and smooth surface',
      'Good shape retention and abrasion resistance',
      'Easy to cut, stitch, laminate, print and die-cut',
      'Customised GSM, thickness, width and colour options',
    ],
    applications: [
      'Craft and decorative items',
      'Bags and footwear lining',
      'Furniture padding and automotive interiors',
      'Wall panels and packaging',
      'Toys, garment accessories and promotional products',
    ],
    specs: { colour: 'Single, multi-colour or matched to your shade' },
    seo: {
      title: 'Multi-Colour Needle Punched Felt | Kiran Nonwovens',
      metaDescription:
        'Coloured needle punched felt for craft, décor, bags, footwear lining, furniture padding and automotive interiors. Cuts, prints, embosses and die-cuts cleanly.',
    },
  }),
  product({
    name: 'Customised Nonwoven Solutions',
    slug: 'customised-nonwoven-solutions',
    category: 'industrial',
    shortDescription:
      'Needle-punched nonwovens developed to your specification — GSM, thickness, width, density, fibre blend, colour, surface finish, strength, softness and roll length, all tailored to the product.',
    features: [
      'GSM, thickness, density and width to specification',
      'Polyester, polypropylene, viscose, recycled or blended fibres',
      'Single colour, multi-colour or a matched shade',
      'Soft, firm, smooth, dense or resilient fabric feel',
      'Custom roll length and packaging',
      'Surface finishing, lamination, embossing and bonding compatibility',
      'Application-specific strength, permeability and cushioning',
    ],
    applications: [
      'Automotive, footwear, furniture and luggage',
      'Packaging, filtration and insulation',
      'Medical padding and geotextiles',
      'Drainage, agriculture and construction',
      'Industrial components, crafts and décor',
    ],
    seo: {
      title: 'Customised Nonwoven Solutions | Kiran Nonwovens',
      metaDescription:
        'Custom needle punched nonwovens built to your GSM, thickness, density, fibre blend, colour and finish — for cushioning, filtration, insulation, support or drainage.',
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
