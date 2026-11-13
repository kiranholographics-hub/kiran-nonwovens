/**
 * Product-specific buying notes: the part of each product page that no other
 * product page shares. The rest of a product page (spec table, ordering terms,
 * sample and lead-time answers) is common to all 16, which made the pages read
 * as near-copies (8-word shingle check, 11 Nov 2026: 43–51% unique). This file
 * gives each page its own "how to choose" section and its own questions.
 *
 * Kept outside catalog.js on purpose: products can be replaced by the live API
 * after the page loads, and this copy must stay on the page either way.
 *
 * Rules: general application knowledge and the plant's stated range only. No
 * price, MOQ figure, test value, certificate, client or standard-compliance
 * claim. Where a value depends on a design or a buyer's process, say so.
 * Markup: [text](/path) becomes an internal link.
 */

export const PRODUCT_DETAILS = {
  'pp-geotextile-fabric-for-civil-works': {
    h: 'Choosing PP geotextile for civil works',
    p: [
      'On most civil jobs the fabric is doing one main job: keeping two layers apart (separation), letting water out while soil stays (filtration), or both. Name that job first; it decides whether weight, opening size or permeability matters most.',
      'Virgin PP is the usual choice where a specification calls for consistent test values. Recycled PP suits temporary works, site roads and landscaping, where cost matters more and the design does not fix a polymer grade.',
    ],
    table: {
      head: ['Job on site', 'What matters most', 'Guide'],
      rows: [
        ['Separation under a road, yard or platform', 'Puncture and strength against the stone placed on it', '[Road GSM](/guides/geotextile-gsm-for-road-construction-india)'],
        ['Under railway ballast', 'Puncture and abrasion under repeated load', '[Railway track](/guides/nonwoven-geotextile-for-railway-track-india)'],
        ['Embankment on soft, wet ground', 'Separation plus drainage of the subgrade', '[Embankments](/guides/geotextile-embankment-soft-soil-india)'],
        ['Under paver blocks or tiles', 'Keeping bedding sand out of the subbase', '[Paver blocks](/guides/geotextile-under-paver-blocks-india)'],
        ['Cushion under a pond or canal liner', 'Protection value against stones', '[Geotextile vs geomembrane](/guides/geotextile-vs-geomembrane)'],
      ],
    },
    specify: [
      'The job (separation, filtration or protection) and where the fabric sits in the drawing',
      'GSM, or better, the strength, puncture and permeability values with their test methods',
      'Virgin or recycled PP',
      'Area to cover, so roll count and any slitting can be planned ([roll weight and coverage](/guides/geotextile-roll-weight-and-coverage))',
    ],
    faqs: [
      {
        q: 'Is recycled PP geotextile good enough for a road?',
        a: 'For site roads, temporary works and landscaping it is often used. For public road works the tender usually sets test values and sometimes the polymer, so follow that; virgin PP gives more consistent results roll to roll.',
      },
      {
        q: 'Do you make thermal bonded PP geotextile as well as needle punched?',
        a: 'Both processes are available at the plant. Most civil specifications ask for needle punched, which is thicker and drains better; tell us if your design names thermal bonded.',
      },
    ],
  },

  'drainage-soil-erosion-control-geotextile': {
    h: 'Choosing a geotextile for drainage and erosion control',
    p: [
      'In a drain the fabric is a filter: water has to pass freely while the soil around the drain stays where it is. The soil decides the fabric. Fine silt and clay need a tighter filter than sand or gravel, and a fabric that is too tight can clog.',
      'On slopes and banks the fabric sits under stone, gabions or a cover layer and stops soil washing out through the gaps. There the stone size and how it is placed decide how much puncture resistance the fabric needs.',
    ],
    table: {
      head: ['Where it goes', 'Its job', 'Guide'],
      rows: [
        ['Around a French drain or perforated pipe', 'Filter, so the drain does not silt up', '[Drainage and erosion control](/guides/geotextile-for-drainage-and-erosion-control)'],
        ['Behind a retaining wall', 'Filter and drainage layer against the backfill', '[Retaining walls](/guides/geotextile-retaining-wall-drainage-india)'],
        ['Under stone pitching or gabions', 'Filter between soil and stone', '[Gabions and stone pitching](/guides/geotextile-gabion-stone-pitching-india)'],
        ['Hill road cuttings and slips', 'Filter and separator in the repair', '[Hill slopes](/guides/geotextile-hill-slope-protection-india)'],
        ['Sports fields and lawns', 'Lining drain trenches', '[Sports field drainage](/guides/geotextile-sports-field-turf-drainage-india)'],
      ],
    },
    specify: [
      'The soil the fabric faces (a grading curve if you have one, or a description)',
      'Opening size and permeability values if the design gives them ([test methods](/guides/geotextile-test-methods-explained))',
      'What is placed on the fabric: pipe, gravel, stone size, gabion',
      'Fibre: PP for most soils; ask if the ground is strongly alkaline or the site is hot',
    ],
    faqs: [
      {
        q: 'Can a geotextile drain clog?',
        a: 'It can, if the openings are too fine for the soil or if fine soil is pumped against it. That is why the soil grading, not the fabric weight alone, should set the filter. A drain wrapped in the right fabric keeps working; see our [drainage guide](/guides/geotextile-for-drainage-and-erosion-control).',
      },
      {
        q: 'Should the fabric go around the pipe or around the whole gravel trench?',
        a: 'Practice varies and the drawing decides. Lining the whole trench keeps soil out of the gravel as well as the pipe, which is common in fine soils; a sock around the pipe alone is used where the trench fill is clean and the soil is coarse.',
      },
    ],
  },

  'filter-geo-bag-felt': {
    h: 'Choosing needle punched felt for filter bags',
    p: [
      'For dust collection the first question is not GSM but the gas: its temperature, moisture and chemistry. Polyester is the common felt for dry dust at moderate temperatures. Polypropylene suits damp or chemically aggressive dust at lower temperatures. Above what polyester tolerates, other fibres are needed, which we do not supply.',
      'Weight and needling density then set how much dust the felt holds on its surface, how freely air passes and how well the bag survives pulse-jet cleaning. Finishes such as singeing or calendering on the dust side help the cake release; agree them with your bag maker.',
    ],
    table: {
      head: ['Condition in the baghouse', 'Felt usually considered', 'Guide'],
      rows: [
        ['Dry dust, moderate temperature', 'Polyester', '[Dust collector filter felt](/guides/dust-collector-filter-bag-felt)'],
        ['Damp, sticky or chemically aggressive dust, lower temperature', 'Polypropylene', '[Polyester vs polypropylene](/guides/polyester-vs-polypropylene-nonwoven)'],
        ['Cement, steel and power plant points', 'Depends on the point; some need fibres we do not make', '[Cement, steel and power plants](/guides/bag-filter-felt-cement-steel-power-india)'],
        ['Hot gas beyond polyester\'s range', 'Aramid, PPS, PTFE or glass (not supplied by us)', 'Ask a specialist felt maker'],
      ],
    },
    specify: [
      'Gas temperature (normal and peak), moisture and what the dust is',
      'Cleaning method: pulse jet, reverse air or shaking',
      'GSM and air permeability your bag design uses, if known',
      'Any surface finish wanted, and whether you buy roll goods (we supply felt, not finished bags)',
    ],
    faqs: [
      {
        q: 'Which felt is used for cement plant bag filters?',
        a: 'It depends on the point in the plant. Cooler, dry points often use polyester; hot kiln and cooler exhaust points can need fibres we do not make. Our [cement, steel and power plant guide](/guides/bag-filter-felt-cement-steel-power-india) goes point by point.',
      },
      {
        q: 'Do you make finished filter bags?',
        a: 'No. We supply needle punched filter felt in rolls to bag makers and plants that stitch their own bags.',
      },
    ],
  },

  'pipeline-cable-protection-geotextile': {
    h: 'Choosing a protection geotextile for pipes and cables',
    p: [
      'A buried pipe or cable is usually damaged in the trench, not in service: sharp stones in the backfill, rock at the trench bottom, or a careless shovel. A thick nonwoven wrapped around the pipe, or laid as a bed and cover, spreads those point loads so the coating or sheath is not cut.',
      'The trench decides the grade. Sand bedding and soft soil need only light protection; rocky ground with crushed-stone backfill needs a heavier, thicker felt. Where a project uses a protection standard or a specific puncture test, follow it.',
    ],
    table: {
      head: ['Trench condition', 'Typical approach'],
      rows: [
        ['Sand bed and sieved backfill', 'Light protection, or a separator only'],
        ['Mixed soil with some stones', 'Wrap or bed and cover in a medium grade'],
        ['Rocky trench, crushed backfill', 'Heavier, thicker felt; the design may set a puncture value'],
        ['Cable or duct bank', 'Protection layer over and under, as the drawing shows'],
      ],
    },
    specify: [
      'Pipe or cable diameter and coating type',
      'Trench bottom and backfill: sand, soil, stone size',
      'Wrap, bed-and-cover or both; roll width wanted (we slit from 5.0–5.2 m)',
      'Any puncture or protection value in the specification ([test methods](/guides/geotextile-test-methods-explained))',
    ],
    faqs: [
      {
        q: 'Can rolls be cut to wrap a pipe?',
        a: 'Yes. Rolls are 5.0–5.2 m wide and can be slit narrower so one width wraps the pipe with the overlap your method needs. Tell us the pipe diameter and overlap.',
      },
      {
        q: 'Is a protection geotextile a substitute for sand bedding?',
        a: 'Sometimes it is used to reduce imported sand, but that is a design decision. The pipe specification or the engineer decides whether fabric can replace or only add to bedding.',
      },
    ],
  },

  'automotive-needle-punched-felt': {
    h: 'Choosing needle punched felt for vehicle parts',
    p: [
      'Automotive felt is chosen part by part. A boot liner needs a firm, even face that looks right after moulding; a dashboard pad needs bulk for sound and heat; a wheel-arch liner has to take water, grit and flexing. The same roll rarely suits all three.',
      'Two questions settle most choices: how the part is formed (cut flat, needled to a face fabric, laminated, or heat-moulded) and how close it sits to heat. Polyester and PP/polyester blends are common, and the blend affects how well the felt holds a moulded shape.',
    ],
    table: {
      head: ['Part', 'What matters', 'Guide'],
      rows: [
        ['Carpet backing and floor mats', 'Even weight, bond to the face, mouldability', '[OEM interiors](/guides/automotive-felt-oem-interiors-india)'],
        ['Boot liners and parcel trays', 'Stiffness after moulding, surface finish', '[OEM interiors](/guides/automotive-felt-oem-interiors-india)'],
        ['Door panels and headliners', 'Low weight, lamination to trim', '[NVH felt](/guides/automotive-nvh-felt-guide)'],
        ['Wheel-arch liners', 'Water and abrasion resistance, durability', '[NVH felt](/guides/automotive-nvh-felt-guide)'],
        ['Dashboard and engine-side pads', 'Thickness for sound and heat; fibre for temperature', '[NVH felt](/guides/automotive-nvh-felt-guide)'],
      ],
    },
    specify: [
      'The part and how it is made (die-cut, laminated, moulded) and at what temperature',
      'GSM and thickness from the drawing or the current sample',
      'Fibre or blend if the OEM specification fixes it; colour if visible',
      'Any flammability or odour test your customer runs, so the sample can be checked against it',
    ],
    faqs: [
      {
        q: 'Can you match a felt sample we already use?',
        a: 'Send the sample with its part name and process. We check weight, thickness and fibre and propose a matching grade, then send a free sample to trial on your line.',
      },
      {
        q: 'Do you supply moulded parts?',
        a: 'No. We supply felt in rolls for component makers who cut, laminate or mould the parts.',
      },
    ],
  },

  'acoustic-thermal-insulation-felt': {
    h: 'Choosing acoustic and thermal insulation felt',
    p: [
      'Felt absorbs sound and slows heat because of the air trapped between its fibres. More thickness generally means more of both, so for insulation the thickness at the fitted size matters more than the GSM on its own. Density then sets how well the felt keeps that thickness when compressed.',
      'The surroundings decide the fibre and facing: polyester near warm machinery, a foil or film facing where moisture or easy cleaning matters, and a fire-performance check wherever a building code or appliance standard applies. Facings are laminated by the converter; we supply the felt.',
    ],
    table: {
      head: ['Use', 'What matters'],
      rows: [
        ['Appliances (AC, refrigerator, washing machine)', 'Fit in a narrow gap, steady thickness, odour'],
        ['Generator and machinery enclosures', 'Thickness for sound, heat near the engine'],
        ['HVAC ducts and units', 'Thickness, facing, cleanliness of fibre'],
        ['Wall, ceiling and partition panels', 'Thickness and density; fire rule of the building'],
        ['Vehicle engine side and floor', 'Temperature, moulding'],
      ],
    },
    specify: [
      'Thickness at the fitted size and the gap it has to fill',
      'The operating temperature and whether moisture or oil is present',
      'Any facing or adhesive to be laminated, and by whom',
      'Fire, smoke or odour tests that apply to your product',
    ],
    faqs: [
      {
        q: 'Is a heavier GSM always better for sound insulation?',
        a: 'Not always. Thickness and density together decide absorption, and a heavier felt compressed into a small gap may perform no better than a lighter, loftier one. Trial a sample in the real assembly.',
      },
      {
        q: 'Is this felt fire rated?',
        a: 'We do not publish a fire rating. If your product or building needs one, tell us the test, and have the sample tested in your assembly; many fire results depend on the facing and the build-up, not the felt alone.',
      },
    ],
  },

  'nvh-sound-insulation-fabric': {
    h: 'Choosing NVH and sound insulation fabric',
    p: [
      'NVH work starts from where the noise comes from. Airborne noise, such as engine and road roar through the floor and firewall, is reduced by thick, absorbent layers. Structure-borne vibration is handled mainly by damping materials on the panels, with felt as the decoupler between the panel and the trim.',
      'So the felt is usually one layer in a stack: a heavy layer or barrier, a felt decoupler and absorber, and the trim on top. Its thickness, density and how evenly it is made decide how well that stack works.',
    ],
    table: {
      head: ['Noise path', 'Role of the felt', 'Guide'],
      rows: [
        ['Engine noise through the firewall and dashboard', 'Absorber and decoupler behind the trim', '[NVH felt](/guides/automotive-nvh-felt-guide)'],
        ['Road and tyre noise through the floor', 'Absorber under the carpet, with a barrier layer', '[OEM interiors](/guides/automotive-felt-oem-interiors-india)'],
        ['Wheel-arch splash and stone noise', 'Absorbent liner in the arch', '[NVH felt](/guides/automotive-nvh-felt-guide)'],
        ['Generators, compressors, HVAC units', 'Absorber lining the enclosure', '[Acoustic insulation felt](/products/automotive/acoustic-thermal-insulation-felt)'],
      ],
    },
    specify: [
      'The noise problem and where the felt sits in the stack',
      'Thickness and density, or the current part sample',
      'How it is bonded or moulded to the barrier and trim',
      'Any acoustic test your customer runs, so trials can be compared like for like',
    ],
    faqs: [
      {
        q: 'What is the difference between NVH felt and acoustic insulation felt?',
        a: 'They overlap. NVH felt is usually specified as part of a vehicle stack (decoupler and absorber with a barrier and trim). Acoustic insulation felt is the broader use in appliances, machinery and buildings. Both are needle punched; the part decides thickness and density.',
      },
      {
        q: 'Can felt alone stop vibration?',
        a: 'No. Felt absorbs airborne sound and decouples layers, but panel vibration is mainly reduced by damping materials. In most designs the two are used together.',
      },
    ],
  },

  'shoulder-pad-nonwoven-fabric': {
    h: 'Choosing nonwoven fabric for shoulder pads',
    p: [
      'A shoulder pad has to give shape without showing through the garment, keep that shape after pressing and dry cleaning, and stay light. That is why soft polyester nonwovens are used: they can be cut and layered to the pad profile and hold their loft.',
      'The garment decides the build. A tailored blazer usually wants a firmer, more shaped pad; a soft jacket or ladies\' top a thinner, softer one. Pad makers often combine more than one weight in a pad.',
    ],
    table: {
      head: ['Garment', 'Pad feel usually wanted'],
      rows: [
        ['Suits and blazers', 'Firm, shaped, holds a clean line'],
        ['Coats and overcoats', 'Fuller, may be thicker'],
        ['Uniforms', 'Durable through repeated washing or cleaning'],
        ['Soft jackets and ladies\' wear', 'Thin, soft, light'],
      ],
    },
    specify: [
      'Pad type and garment, or a sample pad you use now',
      'Weight and thickness of each layer',
      'How the garment is cleaned (washing or dry cleaning) and pressed',
      'Colour, if the pad may show through light fabric',
    ],
    faqs: [
      {
        q: 'Will a polyester shoulder pad survive dry cleaning?',
        a: 'Polyester nonwovens are used in dry-cleaned garments, but test your pad build through your own cleaning and pressing cycle before bulk, especially if it is bonded with adhesive. See our [shoulder pad guide](/guides/shoulder-pad-nonwoven-fabric-india).',
      },
      {
        q: 'Do you make finished shoulder pads?',
        a: 'No. We supply the nonwoven fabric in rolls to pad makers and garment factories.',
      },
    ],
  },

  'shoe-lining-nonwoven-fabric': {
    h: 'Choosing nonwoven fabric for footwear',
    p: [
      'Inside a shoe the same nonwoven family does several jobs: a soft lining against the foot, a firmer reinforcement behind the upper, or a base layer in an insole. Each needs a different balance of softness, stiffness and how well it takes adhesive.',
      'Production decides a lot. Fabric that will be laminated to leather or PU, or stiffened with resin for a toe puff or counter, needs to behave consistently in that process; trial it on your own line before bulk.',
    ],
    table: {
      head: ['Component', 'What matters'],
      rows: [
        ['Inner lining', 'Soft feel, abrasion, breathability'],
        ['Upper reinforcement', 'Body and shape retention, bonding'],
        ['Insole layers', 'Cushioning, resilience'],
        ['Toe puff and heel counter base', 'Takes resin or adhesive evenly'],
        ['Slippers and casual shoes', 'Softness and cost'],
      ],
    },
    specify: [
      'The component and the material it is bonded to',
      'Weight, thickness and colour',
      'The bonding or stiffening process and its temperature',
      'Any abrasion or comfort test your brand requires',
    ],
    faqs: [
      {
        q: 'Can the nonwoven be laminated to PU or leather?',
        a: 'Yes, nonwovens are routinely laminated in footwear. The adhesive and heat settings are yours; send your process details and trial a free sample on your line. See the [footwear and apparel guide](/guides/nonwoven-fabric-for-footwear-and-apparel).',
      },
      {
        q: 'Which fibre is used for shoe lining nonwoven?',
        a: 'Polyester is the usual fibre: it is durable, takes adhesive well and keeps its shape. Weight, thickness and colour are then set to the component.',
      },
    ],
  },

  'orthopaedic-cast-padding': {
    h: 'Choosing nonwoven for cast padding',
    p: [
      'Undercast padding sits between the skin and a plaster or synthetic cast. It has to cushion bony points, conform as it is wound, tear cleanly by hand where clinicians expect it, and let the cast be removed without tearing skin.',
      'Product makers set the fibre (synthetic, viscose or a blend), weight and roll width to their own product. Medical products also carry regulatory and testing duties that belong to the brand owner; we supply the nonwoven roll goods for converting.',
    ],
    table: {
      head: ['Property', 'Why it matters'],
      rows: [
        ['Softness and loft', 'Comfort and cushioning over bony points'],
        ['Conformability', 'Winds smoothly without ridges'],
        ['Hand-tearability', 'Clinicians tear to length'],
        ['Fibre choice', 'Synthetic padding is often paired with synthetic casts; viscose blends add softness'],
      ],
    },
    specify: [
      'Fibre or blend, weight and loft',
      'Slit width of the finished rolls (we supply wide rolls; converters usually slit)',
      'Whether the padding is for plaster or synthetic casts',
      'Your own regulatory and testing requirements',
    ],
    faqs: [
      {
        q: 'Do you supply finished, packed cast padding rolls?',
        a: 'No. We supply the nonwoven in wide rolls for converters who slit, wind, pack and register the finished medical product. See our [cast padding guide](/guides/orthopaedic-cast-padding-nonwoven-india).',
      },
      {
        q: 'Is the cast padding nonwoven sterile or medical certified?',
        a: 'We do not claim sterility or medical certification for the roll goods. Those requirements sit with the brand owner of the finished product.',
      },
    ],
  },

  'multi-colour-needle-punched-felt': {
    h: 'Choosing coloured needle punched felt',
    p: [
      'Colour in needle punched felt comes from dyed fibre blended before needling, so the shade runs through the thickness, not just on the surface. Single colours, mixed (melange) shades and matched shades are possible.',
      'Shade can vary a little between batches, as with any dyed fibre. For visible parts, keep an approved swatch as the reference and order enough for one job in a single batch where you can.',
    ],
    table: {
      head: ['Use', 'What matters', 'Guide'],
      rows: [
        ['Exhibition and event carpet', 'Colour, surface, cost per square metre', '[Exhibition carpet](/guides/exhibition-carpet-needle-punched-nonwoven-india)'],
        ['Grow bags and planters', 'Breathability, durability outdoors', '[Felt grow bags](/guides/felt-grow-bag-fabric-nonwoven-india)'],
        ['Bags, décor and promotional items', 'Colour, stiffness, cut edge'],
        ['Wall panels and pinboards', 'Thickness, colour, density'],
      ],
    },
    specify: [
      'Colour: a swatch, a shade card reference or a sample to match',
      'Weight, thickness and stiffness for the end use',
      'Indoor or outdoor use (sunlight affects colour and strength)',
      'Quantity per shade, so a batch can be planned',
    ],
    faqs: [
      {
        q: 'Can you match our colour?',
        a: 'Send a physical swatch rather than a screen colour. We confirm what can be matched in fibre and send a free sample for approval before bulk.',
      },
      {
        q: 'Will the colour stay the same in every order?',
        a: 'Close, but dyed fibre varies slightly between batches. Keep an approved reference swatch and agree the acceptable variation in writing for visible products.',
      },
    ],
  },

  'carpet-backing-felt': {
    h: 'Choosing carpet backing felt',
    p: [
      'A backing felt gives a carpet body, stability and a surface for the next layer, whether that is a latex coat, a secondary backing or a moulding process. It needs even weight across the roll so the carpet lays flat and cuts cleanly.',
      'Automotive carpets are usually moulded to the floor shape, so the backing has to stretch and hold the moulded form. Flat carpets and rugs need more dimensional stability and good bonding to the coating.',
    ],
    table: {
      head: ['Carpet type', 'What matters', 'Guide'],
      rows: [
        ['Automotive moulded carpet', 'Mouldability, heat behaviour, weight', '[Automotive felt](/guides/automotive-felt-oem-interiors-india)'],
        ['Wall-to-wall and office carpet', 'Stability, even weight, bonding', '[Carpet backing and underlay](/guides/carpet-backing-and-underlay-felt)'],
        ['Rugs and mats', 'Body, cut edge, cost'],
        ['Exhibition carpet', 'Colour, single-use cost', '[Exhibition carpet](/guides/exhibition-carpet-needle-punched-nonwoven-india)'],
      ],
    },
    specify: [
      'The carpet construction and where the felt sits in it',
      'Coating or bonding method and temperature',
      'Weight, thickness and roll width (slit if your line is narrower)',
      'Flat or moulded product',
    ],
    faqs: [
      {
        q: 'What is the difference between carpet backing felt and underlay felt?',
        a: 'Backing felt is part of the carpet itself, bonded to it during manufacture. Underlay felt is a separate layer laid on the floor under the carpet or flooring. See our [carpet backing and underlay guide](/guides/carpet-backing-and-underlay-felt).',
      },
      {
        q: 'Can backing felt be moulded for car floors?',
        a: 'Yes, needle punched backing is used in moulded automotive carpet. The fibre blend and weight should be trialled through your moulding cycle before bulk.',
      },
    ],
  },

  'packaging-protective-felt': {
    h: 'Choosing protective packaging felt',
    p: [
      'Packaging felt does two jobs: it stops scratches on finished surfaces and cushions against knocks in transit. Soft, smooth felt suits polished furniture, glass and painted metal; thicker, denser felt suits heavy machined parts that need cushioning.',
      'Because packaging is often reused or thrown away after one trip, recycled fibre is common here. Where the felt touches a high-gloss or coloured surface, choose a clean, light-coloured grade and test that it does not mark the surface.',
    ],
    table: {
      head: ['Goods', 'Felt usually wanted', 'Guide'],
      rows: [
        ['Polished furniture and wood', 'Soft, smooth, non-marking', '[Packaging felt](/guides/packaging-protective-felt-india)'],
        ['Glass and mirrors', 'Soft, clean, even thickness'],
        ['Sheet metal and painted panels', 'Scratch protection between sheets'],
        ['Machined and automotive parts', 'Thicker cushioning, may be reusable'],
        ['Electronics and appliances', 'Clean, low-lint, cushioning'],
      ],
    },
    specify: [
      'What is packed and its surface finish',
      'Thickness and softness, or a sample of what you use',
      'Roll width or cut size',
      'Single trip or returnable packaging (decides virgin or recycled)',
    ],
    faqs: [
      {
        q: 'Can packaging felt be supplied in narrow rolls or sheets?',
        a: 'Rolls are made 5.0–5.2 m wide and can be slit narrower. Tell us the width or cut size you need.',
      },
      {
        q: 'Is recycled felt safe on polished surfaces?',
        a: 'Often, but test it. Recycled fibre can vary in colour and cleanliness; for high-gloss or light surfaces choose a clean grade and check a free sample on the real finish.',
      },
    ],
  },

  'luggage-bag-support-felt': {
    h: 'Choosing support felt for luggage and bags',
    p: [
      'Inside a bag, felt is the hidden layer that gives the panels body, holds their shape when the bag is empty and adds some padding. Trolley cases and briefcases want stiffer support; backpacks and handbags want softer, lighter layers that still keep their form.',
      'The make-up process matters: felt that is stitched, laminated to the outer fabric or heat-pressed has to bond and sew cleanly without puckering.',
    ],
    table: {
      head: ['Product', 'Support usually wanted', 'Guide'],
      rows: [
        ['Trolley bags and briefcases', 'Stiff, holds flat panels', '[Luggage support felt](/guides/luggage-bag-support-felt-india)'],
        ['Laptop bags and protective cases', 'Padding plus shape', '[Luggage support felt](/guides/luggage-bag-support-felt-india)'],
        ['Backpacks', 'Light, flexible support'],
        ['Handbags and cosmetic bags', 'Soft body, smooth under the face fabric'],
      ],
    },
    specify: [
      'The product and which panels get the felt',
      'Stiffness, weight and thickness, or a sample',
      'How it is joined: stitched, laminated or pressed',
      'Colour if it may show at seams',
    ],
    faqs: [
      {
        q: 'Can the felt be laminated to the bag fabric?',
        a: 'Yes, support felt is often laminated to the face fabric. Your adhesive and press settings decide the result, so trial a free sample on your line first.',
      },
      {
        q: 'Do you supply cut panels?',
        a: 'We supply felt in rolls; bag makers usually cut panels themselves. Rolls can be slit narrower if your cutting table needs it.',
      },
    ],
  },

  'flooring-underlay-felt': {
    h: 'Choosing felt underlay for flooring',
    p: [
      'Underlay sits between the subfloor and the finished floor. Under carpet it adds comfort and helps the carpet last; under laminate and wood it evens out small irregularities and reduces footfall noise. The floor type decides how thick and how firm it should be.',
      'Floor makers usually set a limit on underlay thickness, because a soft, thick layer under a click-lock floor can let the joints flex and open. Follow the flooring manufacturer\'s instructions first; moisture protection, where needed, usually comes from a separate film.',
    ],
    table: {
      head: ['Floor', 'Underlay usually wanted', 'Guide'],
      rows: [
        ['Carpet', 'Thicker, comfortable, resilient', '[Carpet backing and underlay](/guides/carpet-backing-and-underlay-felt)'],
        ['Laminate and engineered wood', 'Thin, firm, even', '[Carpet backing and underlay](/guides/carpet-backing-and-underlay-felt)'],
        ['Vinyl planks', 'Very thin and firm, only if the vinyl maker allows', '[Carpet backing and underlay](/guides/carpet-backing-and-underlay-felt)'],
        ['Exhibition floors', 'Low cost, quick to lay', '[Exhibition carpet](/guides/exhibition-carpet-needle-punched-nonwoven-india)'],
      ],
    },
    specify: [
      'The floor type and its maker\'s underlay limits',
      'Thickness and firmness',
      'Whether a moisture film is laminated or laid separately',
      'Roll width and length for your installation',
    ],
    faqs: [
      {
        q: 'Can felt underlay be used under laminate flooring?',
        a: 'Yes, thin, firm felt underlays are used under laminate. Check the laminate maker\'s limit on underlay thickness and softness, and add a moisture film over concrete if they require it.',
      },
      {
        q: 'Does felt underlay reduce noise?',
        a: 'It helps with footfall noise in the room and can reduce sound passing to the floor below. How much depends on thickness, density and the floor build-up; test results belong to the complete floor, not the felt alone.',
      },
    ],
  },

  'customised-nonwoven-solutions': {
    h: 'Developing a custom nonwoven',
    p: [
      'When no standard grade fits, a nonwoven can be built to the job: fibre or blend, weight from 100 to 1200 GSM, thickness and density from the needling, thermal bonding for a firmer, flatter sheet, colour, and roll width and length.',
      'The fastest route is to start from what you have: a sample of the material you use now, or a clear description of what the part has to do and how it is made. From that we propose a grade and send a free sample to trial.',
    ],
    table: {
      head: ['What can be set', 'Range or options'],
      rows: [
        ['Process', 'Needle punched, thermal bonded, or both'],
        ['Fibre', 'Polyester, PP (virgin or recycled), viscose, blends'],
        ['Weight', '100–1200 GSM'],
        ['Width and length', '5.0–5.2 m, slit narrower; 50 m standard roll, other lengths on request'],
        ['Colour', 'Natural, single colour, mixed or matched'],
      ],
    },
    specify: [
      'What the material does in your product and how it is processed',
      'A current sample, if you have one',
      'The properties you test for (weight, thickness, strength, feel)',
      'Expected quantities, so production can be planned',
    ],
    faqs: [
      {
        q: 'How do I develop a custom nonwoven with you?',
        a: 'Send the application and, if possible, a sample of the material you use. We propose a grade, send a free sample, and fix the agreed specification before bulk. Our [sample guide](/guides/how-to-test-a-nonwoven-felt-sample) covers the trial step.',
      },
      {
        q: 'Which nonwovens can you not make?',
        a: 'Spunbond, spunlace and meltblown fabrics, and high-temperature fibres such as aramid or PTFE. We make needle punched and thermal bonded nonwovens only.',
      },
    ],
  },
};

export const productDetails = (slug) => PRODUCT_DETAILS[slug] || null;
