/**
 * Kiran Nonwovens — canonical catalogue.
 *
 * This file is the single source of truth for the 4 business areas and the
 * 16 products. It is used in two ways:
 *
 *   1. The React client imports it directly as the fallback catalogue, so
 *      every page renders — and prerenders — with no database and no API
 *      running.
 *   2. The Express server's seed script (`server/seed/seed.js`)
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
 * Per-product `name`, `description`, `features` and `applications` are taken
 * VERBATIM from the company's product-description document
 * (product_description.pdf) — same wording, same spelling. The only changes:
 * PDF ligature glitches fixed ("soŌness" -> "softness") and each comma-separated
 * applications sentence split into list items. `shortDescription` is the first
 * sentence of `description[0]`, used on cards, listings and as the meta
 * fallback. Nothing in them is invented.
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
      'Kiran Nonwovens supplies needle-punched geotextiles for civil construction, infrastructure and industrial filtration. The range covers the jobs a nonwoven geotextile is most often asked to do: separating soil layers, filtering and draining water, controlling erosion, and protecting buried pipelines and cables.\n\n' +
      'Our PP geotextile for civil works forms a strong, permeable layer under roads, railways, embankments and pavement subgrades. For drainage and erosion control, the fabric lets water flow through freely while retaining soil particles — around perforated pipes, beneath drainage layers and on slopes. Pipeline and cable protection geotextile cushions underground utilities against stones, backfill and abrasion, and our filter geo bag felt is made for dust-collection and industrial air-filtration systems.\n\n' +
      'Every geotextile is produced to the project’s requirement — GSM, thickness, width and roll length — across a 100–1200 GSM range, in roll widths of 5.0–5.2 m.',
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
      'Kiran Nonwovens makes needle-punched felt for vehicle interiors and for any application where noise, vibration and heat need to be controlled. Manufactured from polyester and polypropylene fibres, our automotive felts combine sound absorption, thermal insulation and cushioning in a lightweight, resilient structure.\n\n' +
      'The range covers automotive needle-punched felt for carpet backing, floor mats, boot liners, parcel trays, door panels and headliners; acoustic and thermal insulation felt for interiors, engine compartments and roof liners; and NVH fabric designed specifically to reduce noise, vibration and harshness.\n\n' +
      'The felts are easy to cut, mould, laminate, stitch and die-cut, so they move straight into component production. GSM, thickness, density, width, colour and fibre blend are set to each component’s requirement.',
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
      'For garment and footwear manufacturers, Kiran Nonwovens supplies needle-punched polyester nonwovens that give products structure, comfort and a clean finish.\n\n' +
      'Our shoulder pad nonwoven fabric shapes blazers, suits, coats, jackets, uniforms and ladies’ fashion garments — soft and lightweight, it holds a well-defined shoulder through regular wear without adding unnecessary bulk. Our shoe lining fabric works inside footwear as upper and inner lining, insoles, heel counters and toe-puff support, with a smooth, breathable, abrasion-resistant surface against the foot.\n\n' +
      'Both fabrics cut, stitch, laminate and bond easily with other materials, and are available in customised GSM, thickness, width and colour to suit each design and production line.',
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
      'Beyond geotextiles, automotive and apparel, Kiran Nonwovens produces needle-punched felts for medical, flooring, packaging, luggage and decorative applications — and develops fully customised nonwovens where no standard material fits.\n\n' +
      'The range includes soft, skin-friendly orthopaedic cast padding; carpet backing felt and flooring underlay felt that add stability, cushioning and quieter floors; packaging protective felt that guards glass, furniture, metal sheet and electronics against scratches and impact; luggage and bag support felt for shape and protection; and multi-colour felt for craft, décor and display.\n\n' +
      'When a product needs something different, we tailor GSM, thickness, width, density, fibre blend, colour, surface finish, strength, softness and roll length to the application.',
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
  /* ── Geotextile ──────────────────────────────────────────────────────── */
  product({
    name: 'PP Geotextile Fabric for Civil Works',
    slug: 'pp-geotextile-fabric-for-civil-works',
    category: 'geotextile',
    shortDescription: 'Our PP needle-punched geotextile fabric is engineered for civil-construction and infrastructure applications where separation, filtration, drainage, protection, and reinforcement are required.',
    description: [
      'Our PP needle-punched geotextile fabric is engineered for civil-construction and infrastructure applications where separation, filtration, drainage, protection, and reinforcement are required. Made from durable polypropylene fibres, the fabric forms a strong, permeable layer that allows water to pass while helping control the movement of soil particles.',
      'It helps improve the stability and life of roads, pavements, drainage systems, embankments, and other civil works. Available in different GSM, thicknesses, widths, roll lengths, and performance specifications to suit project requirements.',
    ],
    features: [
      'High strength and tear resistance',
      'Excellent water permeability and drainage support',
      'Helps separate soil layers and prevent mixing',
      'Supports soil stabilisation and reinforcement',
      'Resistant to moisture, chemicals, and biological degradation',
      'Available in customised GSM, width, and roll length',
    ],
    applications: [
      'Road and railway construction',
      'Landfills',
      'Retaining walls',
      'Embankments',
      'Foundations',
      'Pavement subgrades',
      'Drainage systems',
      'Canal lining protection',
      'Landscaping',
      'General civil-engineering works',
    ],
    specs: { fibre: ['PP (virgin)', 'PP (recycled)'] },
    seo: {
      title: 'PP Geotextile Fabric for Civil Works | Kiran Nonwovens',
      metaDescription:
        'Needle punched PP geotextile for roads, embankments, subgrades and drainage — separation, filtration and reinforcement in one layer. Customised GSM, width and roll length.',
    },
  }),
  product({
    name: 'Geotextile Fabric for Drainage and Soil Erosion Control',
    slug: 'drainage-soil-erosion-control-geotextile',
    category: 'geotextile',
    shortDescription: 'Our needle-punched geotextile fabric is designed to support efficient drainage and protect soil from erosion.',
    description: [
      'Our needle-punched geotextile fabric is designed to support efficient drainage and protect soil from erosion. Its permeable nonwoven structure allows water to flow through freely while retaining soil particles, helping prevent clogging, washout, and loss of ground material.',
      'The fabric can be used beneath drainage layers, around perforated pipes, on slopes, and in areas exposed to rainwater flow. It helps improve drainage performance, maintain soil stability, and reduce erosion in construction, agricultural, landscaping, and water-management projects.',
    ],
    features: [
      'Allows fast water flow while retaining soil particles',
      'Helps prevent drainage-system clogging',
      'Controls soil erosion and surface washout',
      'Flexible, durable, and easy to install',
      'Provides a protective and separating layer',
      'Available in customised GSM, widths, and roll lengths',
    ],
    applications: [
      'French drains',
      'Subsurface drainage',
      'Perforated-pipe wrapping',
      'Slope protection',
      'Embankments',
      'Canals',
      'Ponds',
      'Rainwater-harvesting systems',
      'Landscaping',
      'Gardens',
      'Retaining walls',
      'Erosion-control projects',
    ],
    seo: {
      title: 'Geotextile Fabric for Drainage and Soil Erosion Control | Kiran Nonwovens',
      metaDescription:
        'Permeable needle punched geotextile for French drains, perforated-pipe wrapping, slope protection and erosion control. Fast water flow with soil retention.',
    },
  }),
  product({
    name: 'Needle-Punched Felt for Filter Geo Bags',
    slug: 'filter-geo-bag-felt',
    category: 'geotextile',
    shortDescription: 'Our needle-punched filter geo bag felt is a durable nonwoven filtration material designed for dust-collection and industrial air-filtration systems.',
    description: [
      'Our needle-punched filter geo bag felt is a durable nonwoven filtration material designed for dust-collection and industrial air-filtration systems. Its dense and uniform fibre structure helps capture dust particles while maintaining suitable air flow and mechanical strength.',
      'The felt can be supplied in different GSM, thicknesses, widths, fibre compositions, and finishes based on the operating temperature, dust type, and filtration requirement. It is suitable for further processing into filter bags and filtration components.',
    ],
    features: [
      'Effective dust retention and filtration performance',
      'Good air permeability',
      'Strong, durable, and tear resistant',
      'Uniform thickness and fibre distribution',
      'Suitable for cutting, stitching, and bag fabrication',
      'Available in customised specifications',
    ],
    applications: [
      'Dust-collector filter bags',
      'Baghouse systems',
      'Cement and mineral plants',
      'Woodworking units',
      'Food-processing units',
      'Pharmaceutical dust collection',
      'Metal-processing units',
      'Boilers',
      'General industrial air-filtration systems',
    ],
    seo: {
      title: 'Needle-Punched Felt for Filter Geo Bags | Kiran Nonwovens',
      metaDescription:
        'Needle punched filter felt for dust-collector bags and baghouse systems in cement, mineral, woodworking and food-processing plants. Made to your temperature and dust type.',
    },
  }),
  product({
    name: 'Pipeline and Cable Protection Geotextile',
    slug: 'pipeline-cable-protection-geotextile',
    category: 'geotextile',
    shortDescription: 'Our needle-punched nonwoven geotextile is designed to protect underground pipelines, cables, and utility lines from puncture, abrasion, impact, and contact with sharp stones or soil particles.',
    description: [
      'Our needle-punched nonwoven geotextile is designed to protect underground pipelines, cables, and utility lines from puncture, abrasion, impact, and contact with sharp stones or soil particles. Made from durable polypropylene or polyester fibres, it provides a resilient protective layer while allowing water to pass through.',
      'The fabric acts as a cushioning, separation, and filtration layer around buried utilities. It helps reduce mechanical damage during installation, backfilling, and long-term underground use. Available in customised GSM, thicknesses, widths, and roll lengths according to project requirements.',
    ],
    features: [
      'Protects pipelines and cables from puncture and abrasion',
      'Provides cushioning against stones and backfill material',
      'Offers separation and filtration support',
      'Allows water drainage while helping retain soil particles',
      'Durable, flexible, and easy to install',
      'Resistant to moisture, chemicals, rot, and biological degradation',
      'Available in customised GSM, width, and roll length',
    ],
    applications: [
      'Oil and gas pipelines',
      'Water-supply pipelines',
      'Drainage pipes',
      'Sewer lines',
      'Electrical cables',
      'Telecom cables',
      'Fibre-optic networks',
      'Utility corridors',
      'Underground infrastructure',
      'Civil-engineering projects',
    ],
    specs: { fibre: ['Polyester', 'PP (virgin)', 'PP (recycled)'] },
    seo: {
      title: 'Pipeline and Cable Protection Geotextile | Kiran Nonwovens',
      metaDescription:
        'Needle punched geotextile protecting buried pipelines, sewer lines and telecom cables from puncture, abrasion and backfill damage. PP or polyester, customised GSM.',
    },
  }),

  /* ── Automotive ──────────────────────────────────────────────────────── */
  product({
    name: 'Automotive Needle-Punched Felt',
    slug: 'automotive-needle-punched-felt',
    category: 'automotive',
    shortDescription: 'Our automotive needle-punched felt is engineered for durability, sound absorption, thermal insulation, and reliable performance in vehicle interiors.',
    description: [
      'Our automotive needle-punched felt is engineered for durability, sound absorption, thermal insulation, and reliable performance in vehicle interiors. Manufactured from high-quality polyester and polypropylene fibres, it offers a uniform structure, excellent resilience, and easy processability for cutting, moulding, laminating, and die-cutting.',
      'The felt helps reduce road and engine noise while providing cushioning and insulation. It is available in different GSM, thicknesses, widths, colours, and fibre blends to meet specific automotive-component requirements.',
    ],
    features: [
      'Excellent sound absorption and vibration reduction',
      'Good thermal insulation',
      'Durable, lightweight, and resilient',
      'Easy to mould, cut, laminate, and stitch',
      'Uniform thickness and smooth finish',
      'Customised GSM, thickness, width, and colour options',
    ],
    applications: [
      'Carpet backing',
      'Floor mats',
      'Boot liners',
      'Parcel trays',
      'Door panels',
      'Headliners',
      'Wheel-arch liners',
      'Dashboard insulation',
      'Seat padding',
      'Other automotive interior components',
    ],
    specs: { fibre: ['Polyester', 'PP (virgin)', 'PP (recycled)'] },
    seo: {
      title: 'Automotive Needle-Punched Felt | Kiran Nonwovens',
      metaDescription:
        'Needle punched automotive felt for carpet backing, boot liners, door panels, headliners and dashboard insulation. Polyester and polypropylene, made to your GSM.',
    },
  }),
  product({
    name: 'Acoustic and Thermal Insulation Felt',
    slug: 'acoustic-thermal-insulation-felt',
    category: 'automotive',
    shortDescription: 'Our needle-punched nonwoven acoustic and thermal insulation felt is designed to reduce unwanted noise while helping maintain a comfortable temperature.',
    description: [
      'Our needle-punched nonwoven acoustic and thermal insulation felt is designed to reduce unwanted noise while helping maintain a comfortable temperature. Made from high-quality polyester and polypropylene fibres, it provides effective sound absorption, thermal resistance, and long-lasting performance.',
      'The felt has a uniform, resilient structure that traps sound energy and reduces heat transfer. It is lightweight, easy to cut, laminate, stitch, and mould, making it suitable for a wide range of industrial, automotive, construction, and appliance applications.',
    ],
    features: [
      'Effective sound absorption and noise reduction',
      'Good thermal insulation properties',
      'Lightweight, soft, and durable',
      'Resilient structure with good shape retention',
      'Easy to cut, laminate, mould, and process',
      'Available in customised GSM, thickness, width, density, and colour',
    ],
    applications: [
      'Automotive interiors',
      'Engine compartments',
      'Door panels',
      'Roof liners',
      'HVAC systems',
      'Appliances',
      'Machinery covers',
      'Generator enclosures',
      'Wall and ceiling insulation',
      'Partitions',
      'Furniture',
      'Industrial noise-control applications',
    ],
    specs: { fibre: ['Polyester', 'PP (virgin)', 'PP (recycled)'] },
    seo: {
      title: 'Acoustic and Thermal Insulation Felt | Kiran Nonwovens',
      metaDescription:
        'Needle punched felt combining sound absorption and thermal resistance for automotive interiors, HVAC, appliances, machinery covers and building insulation.',
    },
  }),
  product({
    name: 'NVH and Sound Insulation Nonwoven Fabric',
    slug: 'nvh-sound-insulation-fabric',
    category: 'automotive',
    shortDescription: 'Our needle-punched NVH nonwoven fabric is designed to help control Noise, Vibration, and Harshness in automotive, industrial, construction, and appliance applications.',
    description: [
      'Our needle-punched NVH nonwoven fabric is designed to help control Noise, Vibration, and Harshness in automotive, industrial, construction, and appliance applications. Its dense, resilient fibre structure absorbs sound energy, reduces vibration transfer, and supports improved acoustic comfort.',
      'Manufactured from high-quality polyester and polypropylene fibres, the fabric can be customised for sound absorption, thermal insulation, thickness, density, weight, and processing requirements. It is lightweight, durable, and easy to cut, laminate, mould, stitch, and bond with other materials.',
    ],
    features: [
      'Helps reduce noise, vibration, and harshness',
      'Effective sound absorption and acoustic insulation',
      'Supports thermal-insulation performance',
      'Lightweight, durable, and resilient',
      'Easy to cut, laminate, mould, and process',
      'Available in customised GSM, thickness, density, width, and colour',
    ],
    applications: [
      'Automotive carpets',
      'Door panels',
      'Headliners',
      'Boot liners',
      'Wheel-arch liners',
      'Dashboard insulation',
      'Engine-bay insulation',
      'Generator enclosures',
      'HVAC ducts',
      'Machinery covers',
      'Acoustic wall panels',
      'Appliances',
      'Industrial equipment',
      'Construction sound-control systems',
    ],
    specs: { fibre: ['Polyester', 'PP (virgin)', 'PP (recycled)'] },
    seo: {
      title: 'NVH and Sound Insulation Nonwoven Fabric | Kiran Nonwovens',
      metaDescription:
        'Needle punched NVH fabric controlling noise, vibration and harshness in automotive, industrial and appliance builds. Tuned for sound absorption, density and weight.',
    },
  }),

  /* ── Apparel & Footwear ──────────────────────────────────────────────── */
  product({
    name: 'Shoulder Pad Nonwoven Fabric',
    slug: 'shoulder-pad-nonwoven-fabric',
    category: 'apparel-footwear',
    shortDescription: 'Our needle-punched nonwoven shoulder pad fabric is designed to give garments a smooth shape, comfortable support, and a premium finished appearance.',
    description: [
      'Our needle-punched nonwoven shoulder pad fabric is designed to give garments a smooth shape, comfortable support, and a premium finished appearance. Made from high-quality polyester fibres, it provides excellent resilience, softness, and durability while maintaining the desired shoulder structure.',
      'The fabric is lightweight, breathable, and easy to cut and stitch, making it suitable for use in formal wear, blazers, coats, jackets, uniforms, ladies’ garments, and fashion apparel. It retains its shape well during regular wear and helps create clean, well-defined shoulders without adding unnecessary bulk.',
    ],
    features: [
      'Soft, lightweight, and comfortable',
      'Good shape retention and resilience',
      'Smooth and uniform surface',
      'Easy to cut, stitch, and laminate',
      'Available in different thicknesses, GSM, widths, and colours',
      'Suitable for customised garment requirements',
    ],
    applications: [
      'Blazers',
      'Suits',
      'Coats',
      'Jackets',
      'Uniforms',
      'Ladies’ fashion garments',
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
    name: 'Nonwoven Shoe Lining Fabric',
    slug: 'shoe-lining-nonwoven-fabric',
    category: 'apparel-footwear',
    shortDescription: 'Our needle-punched nonwoven shoe lining fabric is designed to provide comfort, softness, and durability inside footwear.',
    description: [
      'Our needle-punched nonwoven shoe lining fabric is designed to provide comfort, softness, and durability inside footwear. Made from high-quality polyester fibres, it offers a smooth surface, good cushioning, and reliable support while helping maintain the shape and finish of the shoe.',
      'The fabric is lightweight, breathable, and easy to cut, stitch, laminate, or bond with other footwear materials. It is available in different GSM, thicknesses, widths, colours, and finishes to suit a variety of shoe designs and manufacturing requirements.',
    ],
    features: [
      'Soft and comfortable against the foot',
      'Lightweight and breathable',
      'Durable with good abrasion resistance',
      'Good cushioning and shape retention',
      'Easy to cut, stitch, laminate, and bond',
      'Available in customised GSM, thickness, width, and colour',
    ],
    applications: [
      'Shoe uppers',
      'Inner lining',
      'Insoles',
      'Heel counters',
      'Toe-puff support',
      'Slipper lining',
      'Sports shoes',
      'Safety shoes',
      'Casual footwear',
      'Other footwear components',
    ],
    specs: { fibre: ['Polyester'] },
    seo: {
      title: 'Nonwoven Shoe Lining Fabric | Kiran Nonwovens',
      metaDescription:
        'Needle punched polyester shoe lining fabric for uppers, inner lining, insoles, heel counters and toe puffs. Breathable, abrasion resistant, made to your GSM.',
    },
  }),

  /* ── Industrial & Others ─────────────────────────────────────────────── */
  product({
    name: 'Orthopaedic Cast Padding',
    slug: 'orthopaedic-cast-padding',
    category: 'industrial',
    shortDescription: 'Our nonwoven orthopaedic cast padding is designed to provide a soft, protective cushioning layer between the skin and a plaster or synthetic cast.',
    description: [
      'Our nonwoven orthopaedic cast padding is designed to provide a soft, protective cushioning layer between the skin and a plaster or synthetic cast. Made from gentle, lightweight fibres, it helps improve patient comfort while protecting sensitive areas from pressure, friction, and irritation.',
      'The padding is soft, breathable, and easy to wrap around the body part before cast application. Its uniform structure supports smooth application and helps create an even protective layer under the cast.',
    ],
    features: [
      'Soft and skin-friendly',
      'Lightweight and breathable',
      'Provides cushioning and pressure protection',
      'Easy to tear, wrap, and apply',
      'Uniform thickness for consistent coverage',
      'Available in customised widths, thicknesses, GSM, and roll lengths',
    ],
    applications: [
      'Undercast padding for orthopaedic supports',
      'Other medical immobilisation applications',
    ],
    seo: {
      title: 'Orthopaedic Cast Padding | Kiran Nonwovens',
      metaDescription:
        'Soft, breathable nonwoven undercast padding for plaster and synthetic casts, orthopaedic supports and medical immobilisation. Tears and wraps by hand.',
    },
  }),
  product({
    name: 'Multi-Colour Needle-Punched Felt',
    slug: 'multi-colour-needle-punched-felt',
    category: 'industrial',
    shortDescription: 'Our multi-colour needle-punched felt is a versatile nonwoven fabric made from quality synthetic fibres and available in a wide range of attractive colours.',
    description: [
      'Our multi-colour needle-punched felt is a versatile nonwoven fabric made from quality synthetic fibres and available in a wide range of attractive colours. It combines softness, durability, and a smooth uniform finish, making it suitable for decorative, craft, footwear, automotive, furniture, and industrial applications.',
      'The felt can be produced in customised colours, GSM, thicknesses, widths, and roll lengths to match specific customer and product requirements. It is easy to cut, stitch, laminate, print, emboss, and mould.',
    ],
    features: [
      'Available in a wide variety of vibrant colours',
      'Soft, durable, and lightweight',
      'Uniform thickness and smooth surface',
      'Good shape retention and abrasion resistance',
      'Easy to cut, stitch, laminate, print, and die-cut',
      'Customised GSM, thickness, width, and colour options available',
    ],
    applications: [
      'Craft and decorative items',
      'Bags',
      'Footwear lining',
      'Furniture padding',
      'Automotive interiors',
      'Wall panels',
      'Packaging',
      'Toys',
      'Garment accessories',
      'Promotional products',
      'General industrial uses',
    ],
    specs: { colour: 'Wide range of colours, customised to requirement' },
    seo: {
      title: 'Multi-Colour Needle-Punched Felt | Kiran Nonwovens',
      metaDescription:
        'Coloured needle punched felt for craft, décor, bags, footwear lining, furniture padding and automotive interiors. Cuts, prints, embosses and die-cuts cleanly.',
    },
  }),
  product({
    name: 'Carpet Backing Felt',
    slug: 'carpet-backing-felt',
    category: 'industrial',
    shortDescription: 'Our needle-punched carpet backing felt is designed to provide strength, cushioning, stability, and improved performance for carpets and floor coverings.',
    description: [
      'Our needle-punched carpet backing felt is designed to provide strength, cushioning, stability, and improved performance for carpets and floor coverings. Made from high-quality polyester and polypropylene fibres, it creates a durable backing layer that helps the carpet retain its shape and improves comfort underfoot.',
      'The felt is lightweight, resilient, and easy to laminate or bond with carpet materials. It helps enhance sound absorption, thermal insulation, and overall carpet life while providing a smooth and uniform base.',
    ],
    features: [
      'Provides strength and dimensional stability',
      'Soft cushioning for improved walking comfort',
      'Helps reduce sound and impact noise',
      'Good thermal-insulation properties',
      'Durable, lightweight, and resilient',
      'Easy to laminate, cut, and process',
      'Available in customised GSM, thickness, width, and roll length',
    ],
    applications: [
      'Wall-to-wall carpets',
      'Area rugs',
      'Automotive carpets',
      'Exhibition carpets',
      'Floor mats',
      'Commercial flooring',
      'Residential flooring',
      'Hotel carpets',
      'Office carpets',
      'Other floor-covering products',
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
    shortDescription: 'Our needle-punched packaging protective felt is designed to safeguard products from scratches, abrasion, impact, and surface damage during storage, handling, transportation, and packing.',
    description: [
      'Our needle-punched packaging protective felt is designed to safeguard products from scratches, abrasion, impact, and surface damage during storage, handling, transportation, and packing. Made from soft yet durable synthetic fibres, it provides a cushioning protective layer for delicate and finished surfaces.',
      'The felt is lightweight, flexible, reusable, and easy to cut, wrap, laminate, or stitch into customised packaging solutions. It can be supplied in different GSM, thicknesses, widths, colours, and roll lengths based on the required level of protection.',
    ],
    features: [
      'Protects against scratches, scuffs, and abrasion',
      'Provides cushioning against minor impact and vibration',
      'Soft, non-abrasive surface',
      'Lightweight, flexible, and easy to handle',
      'Reusable and durable',
      'Easy to cut, wrap, laminate, and convert',
      'Available in customised GSM, thickness, width, and colour',
    ],
    applications: [
      'Furniture wrapping',
      'Glass protection',
      'Metal-sheet protection',
      'Automotive-component packaging',
      'Electronics packaging',
      'Appliance protection',
      'Wooden products',
      'Leather goods',
      'Luggage',
      'Machinery parts',
      'General industrial packing',
    ],
    seo: {
      title: 'Packaging Protective Felt | Kiran Nonwovens',
      metaDescription:
        'Soft, reusable nonwoven packaging felt protecting glass, furniture, metal sheet, electronics and finished surfaces from scratches and impact in transit.',
    },
  }),
  product({
    name: 'Luggage and Bag Support Felt',
    slug: 'luggage-bag-support-felt',
    category: 'industrial',
    shortDescription: 'Our needle-punched luggage and bag support felt is designed to provide structure, cushioning, and durability to bags, luggage, backpacks, cases, and organisers.',
    description: [
      'Our needle-punched luggage and bag support felt is designed to provide structure, cushioning, and durability to bags, luggage, backpacks, cases, and organisers. Made from high-quality synthetic fibres, it gives products a firm yet flexible shape while helping protect the contents from impact and abrasion.',
      'The felt is lightweight, easy to cut, stitch, laminate, emboss, and bond with fabric, leather, or synthetic materials. It is available in customised GSM, thicknesses, colours, widths, and roll lengths to meet varied luggage and bag-manufacturing requirements.',
    ],
    features: [
      'Provides shape, structure, and support',
      'Good cushioning and impact protection',
      'Lightweight, durable, and flexible',
      'Good tear and abrasion resistance',
      'Easy to cut, stitch, laminate, and bond',
      'Available in customised GSM, thickness, width, and colour',
    ],
    applications: [
      'Travel luggage',
      'Trolley bags',
      'Handbags',
      'Backpacks',
      'Laptop bags',
      'Briefcases',
      'Cosmetic bags',
      'Shopping bags',
      'Organisers',
      'Protective cases',
      'Bag lining or reinforcement components',
    ],
    seo: {
      title: 'Luggage and Bag Support Felt | Kiran Nonwovens',
      metaDescription:
        'Needle punched support felt giving trolley bags, handbags, backpacks and cases their structure. Bonds to fabric, leather and synthetics; die-cuts cleanly.',
    },
  }),
  product({
    name: 'Flooring Underlay Felt',
    slug: 'flooring-underlay-felt',
    category: 'industrial',
    shortDescription: 'Our needle-punched flooring underlay felt is designed to create a comfortable, stable, and protective layer beneath floor coverings.',
    description: [
      'Our needle-punched flooring underlay felt is designed to create a comfortable, stable, and protective layer beneath floor coverings. Made from durable synthetic fibres, it provides cushioning, helps reduce impact sound, and improves thermal comfort while supporting the life and appearance of the finished floor.',
      'The felt offers a uniform surface that helps smooth minor subfloor irregularities and provides added comfort under carpets, laminate flooring, vinyl, and other floor coverings. It is lightweight, easy to cut, roll out, and install.',
    ],
    features: [
      'Provides cushioning and walking comfort',
      'Helps reduce impact noise and sound transmission',
      'Supports thermal insulation',
      'Helps protect the floor covering from wear',
      'Creates a smooth, stable underlay surface',
      'Lightweight, durable, and easy to install',
      'Available in customised GSM, thickness, width, and roll length',
    ],
    applications: [
      'Carpet underlay',
      'Laminate flooring',
      'Vinyl flooring',
      'Wooden flooring',
      'Rugs',
      'Commercial flooring',
      'Residential flooring',
      'Offices',
      'Hotels',
      'Exhibition spaces',
      'Other interior floor-covering applications',
    ],
    seo: {
      title: 'Flooring Underlay Felt | Kiran Nonwovens',
      metaDescription:
        'Nonwoven flooring underlay for carpet, laminate, vinyl and wooden floors. Cushions underfoot, reduces impact noise and smooths minor subfloor irregularities.',
    },
  }),
  product({
    name: 'Customized Nonwoven Fabric for Specialized Applications',
    slug: 'customised-nonwoven-solutions',
    category: 'industrial',
    shortDescription: 'We manufacture customized needle-punched nonwoven fabrics developed to meet specific application, performance, and processing requirements.',
    description: [
      'We manufacture customized needle-punched nonwoven fabrics developed to meet specific application, performance, and processing requirements. Our team can tailor the fabric’s GSM, thickness, width, density, fibre blend, colour, surface finish, strength, softness, and roll length according to your product needs.',
      'Whether the requirement is cushioning, filtration, insulation, protection, support, separation, sound absorption, drainage, or decorative use, we provide nonwoven solutions designed for the intended application. Our fabrics are suitable for further processing such as cutting, stitching, laminating, moulding, embossing, die-cutting, and bonding.',
      'Contact us with your required specifications, and we will help develop the right nonwoven fabric solution for your product.',
    ],
    featuresLabel: 'Customization Options',
    features: [
      'GSM, thickness, density, and width',
      'Polyester, polypropylene, viscose, recycled, or blended fibres',
      'Single colour, multi-colour, or customised colour shades',
      'Soft, firm, smooth, dense, or resilient fabric feel',
      'Custom roll length and packaging',
      'Surface finishing, lamination, embossing, and bonding compatibility',
      'Application-specific strength, permeability, and cushioning requirements',
    ],
    applications: [
      'Automotive',
      'Footwear',
      'Furniture',
      'Luggage',
      'Packaging',
      'Filtration',
      'Insulation',
      'Medical padding',
      'Geotextiles',
      'Drainage',
      'Agriculture',
      'Construction',
      'Industrial components',
      'Crafts',
      'Décor',
      'Other specialised applications',
    ],
    seo: {
      title: 'Customized Nonwoven Fabric for Specialized Applications | Kiran Nonwovens',
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
