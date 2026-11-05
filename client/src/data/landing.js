/**
 * Manufacturer landing pages: one per product family a buyer searches for as
 * "<product> manufacturer in India". Rendered by pages/Landing.jsx.
 *
 * Facts come from the plant capability (PLANT), the owner-confirmed ordering
 * terms (ORDERING) and the guides. Each page says what we do not supply, and
 * none states a price, a certificate, a capacity or a standard.
 */

export const LANDING = {
  geotextile: {
    path: '/non-woven-geotextile-manufacturer-india',
    category: 'geotextile',
    trailLabel: 'Nonwoven geotextile',
    seo: {
      title: 'Non Woven Geotextile Manufacturer, India',
      description:
        'Needle punched nonwoven geotextile from Jaipur, India: polyester and PP, 100–1200 GSM, 5.0–5.2 m rolls, made to order. Free samples, export packing.',
    },
    kicker: 'Nonwoven geotextile · Jaipur, India',
    h1: 'Non woven geotextile manufacturer in India',
    lead: 'Needle punched nonwoven geotextile in polyester and PP, made to your specification at our manufacturing partner’s plant in Phagi, Jaipur, and exported to buyers worldwide.',
    intro: [
      'A nonwoven geotextile is a needle punched fabric that sits in the ground and does one of four jobs: it separates two layers of soil or stone, filters water while holding soil back, drains water along its own plane, or protects a membrane or pipe. This page sets out what we supply for those jobs and how an order works.',
      'The fabric is made to order. You give us the application, fibre, weight and width, we confirm a specification and a sample, and the roll is produced against it. Your project specification sets the weight and any test values; we do not quote one weight for every job.',
    ],
    specCaption: 'Nonwoven geotextile: what we supply',
    specNote:
      'Thickness is set for each order, so it is quoted with the specification rather than listed as one fixed figure.',
    supplyTitle: 'What we supply',
    supply: [
      'Needle punched nonwoven geotextile in PP (virgin or recycled) and polyester, in the weight your specification sets',
      'Rolls up to 5.0–5.2 m wide, slit narrower to suit your layout; standard roll length 50 m, other lengths on request',
      'Roll stock for you or your contractor to lay. We supply the fabric, not the installation',
    ],
    usesTitle: 'Where nonwoven geotextile is used',
    uses: [
      '[Roads](/guides/geotextile-for-road-construction) and [road GSM](/guides/geotextile-gsm-for-road-construction-india): separation between subgrade and aggregate',
      '[Railway track](/guides/nonwoven-geotextile-for-railway-track-india) and [embankments on soft soil](/guides/geotextile-embankment-soft-soil-india)',
      '[Drainage and erosion control](/guides/geotextile-for-drainage-and-erosion-control), [retaining walls](/guides/geotextile-retaining-wall-drainage-india) and [hill slopes](/guides/geotextile-hill-slope-protection-india)',
      '[Gabions and stone pitching](/guides/geotextile-gabion-stone-pitching-india), [paver block bases](/guides/geotextile-under-paver-blocks-india) and [green roofs](/guides/geotextile-green-roof-terrace-garden-india)',
      '[Canal and pond lining](/guides/geotextile-canal-pond-lining-india), [landfill and mining](/guides/geotextile-landfill-mining-india) and [geobags](/guides/geobag-fabric-nonwoven-geotextile-india)',
    ],
    notTitle: 'What we do not supply',
    notText: [
      'We make needle punched and thermal bonded nonwovens only. We do not make woven geotextile, geogrid or geocell, geomembrane or liners, erosion-control mats, jute or coir netting, or gabion mesh, and we do not install. If your drawing calls for one of those, you will buy it elsewhere; the [woven vs nonwoven guide](/guides/woven-vs-nonwoven-geotextile) helps tell which your job needs.',
      'Test values on a project come from an independent laboratory, not from us. If your specification names a test, tell us which one and whose method before production, and confirm the current edition of any standard with your engineer.',
    ],
    fibreTitle: 'Choosing the fibre and the weight',
    fibres: [
      {
        title: 'PP, virgin or recycled',
        text: 'The usual geotextile fibre: economical and resistant to soil chemistry. It weakens under long sunlight exposure, so cover it soon after laying.',
      },
      {
        title: 'Polyester',
        text: 'Supplied where the specification calls for polyester. The trade-off against PP depends on the job and the soil.',
      },
      {
        title: 'Weight (GSM)',
        text: 'Set by the design: soil, load and how the fabric is placed. Confirm against a sample before bulk.',
      },
      {
        title: 'Roll width and length',
        text: 'Matched to the layout, so overlaps and waste work out. Say what suits your crew and your site.',
      },
    ],
    productsTitle: 'Geotextile products',
    productsLead:
      'Each product page lists its applications, specification and an enquiry form.',
    reading: [
      '[Nonwoven geotextile guide](/guides/nonwoven-geotextile-guide) — functions and fibre choice',
      '[Woven vs nonwoven geotextile](/guides/woven-vs-nonwoven-geotextile) — which one a job needs',
      '[Polyester vs polypropylene](/guides/polyester-vs-polypropylene-nonwoven) — choosing a fibre',
      '[Roll weight and coverage](/guides/geotextile-roll-weight-and-coverage) — how much to order',
      '[How to install nonwoven geotextile](/guides/how-to-install-nonwoven-geotextile) — site steps',
      '[Geotextile test methods explained](/guides/geotextile-test-methods-explained) — tensile, CBR puncture, AOS, permeability',
      '[How to test a sample](/guides/how-to-test-a-nonwoven-felt-sample) — before you order in bulk',
    ],
    faqs: [
      {
        q: 'What is nonwoven geotextile?',
        a: 'A needle punched fabric, made by punching barbed needles through a web of fibre so the fibres tangle together. It separates, filters, drains or protects in the ground. The [nonwoven geotextile guide](/guides/nonwoven-geotextile-guide) explains each job.',
      },
      {
        q: 'Are you the manufacturer?',
        a: 'We are an exporter working with a manufacturing partner. Miracle Nonwoven Industries makes the material at its plant in Phagi, Jaipur, against the specification agreed with each buyer.',
      },
      {
        q: 'What GSM and width can you make?',
        a: '100 to 1200 GSM, in roll widths of 5.0–5.2 m, slit narrower if your layout needs it. Your specification sets the weight; [roll weight and coverage](/guides/geotextile-roll-weight-and-coverage) shows how to work out quantity.',
      },
      {
        q: 'Do you make woven geotextile or geogrid?',
        a: 'No. We make needle punched and thermal bonded nonwoven fabric only.',
      },
      {
        q: 'Can you supply to a project specification?',
        a: 'Send the specification with the enquiry and we will say whether the material we make suits it. Test reports come from an independent laboratory, and the current edition of any standard should be confirmed with your engineer.',
      },
      {
        q: 'Are samples free?',
        a: 'Yes, free, to any location. How long a sample takes to reach you depends on where you are.',
      },
    ],
    faqTitle: 'Nonwoven geotextile: common questions',
  },

  filter: {
    path: '/filter-felt-manufacturer-india',
    category: null,
    productSlugs: [],
    trailLabel: 'Filter felt',
    seo: {
      title: 'Filter Felt Manufacturer, India',
      description:
        'Needle punched polyester and PP filter felt from Jaipur, India, as roll stock for cool and moderate-temperature dust collection. Made to order, free samples.',
    },
    kicker: 'Needle punched filter felt · Jaipur, India',
    h1: 'Filter felt manufacturer in India',
    lead: 'Needle punched polyester and PP filter felt as roll stock, made to your specification at our manufacturing partner’s plant in Phagi, Jaipur, for cool and moderate-temperature dust collection.',
    intro: [
      'Dust collectors and bag filters use needle punched felt because its open, tangled fibre structure holds dust at the surface while air passes through. This page is for buyers of felt as roll stock for filter bags: what we make, where it fits, and where it does not.',
      'Temperature decides the fibre before anything else does. Polyester and PP cover the cool and moderate-temperature range that most dust collection falls into. We do not make aramid, PPS, PTFE or fibreglass media, so for kiln exhaust, furnace fume or hot flue gas we are not your supplier.',
    ],
    specCaption: 'Filter felt: what we supply',
    specNote:
      'Weight, thickness and finish are set for each order from your gas temperature, dust and cleaning method, so they are quoted with the specification.',
    supplyTitle: 'What we supply',
    supply: [
      'Needle punched felt in polyester, PP (virgin or recycled), viscose or a custom blend, as roll stock',
      'Weight and width to your enquiry, within the plant range: 100–1200 GSM, rolls up to 5.0–5.2 m wide',
      'A sample to try before you commit to bulk',
    ],
    usesTitle: 'Where it fits, and how to choose',
    uses: [
      'Fibre by gas temperature, dust and moisture: the [dust collector filter felt guide](/guides/dust-collector-filter-bag-felt)',
      'Point by point in cement, steel and power plants, including where polyester or PP does not fit: the [bag filter felt guide](/guides/bag-filter-felt-cement-steel-power-india)',
      'Weight and feel before you order: [GSM in nonwoven fabric](/guides/gsm-in-nonwoven-fabric)',
    ],
    notTitle: 'What we do not supply',
    notText: [
      'We do not make aramid, PPS, PTFE or fibreglass media, so we are not the right source for kiln exhaust, clinker coolers, furnace fume or flue gas from a boiler. We would rather say that now than supply something that fails early.',
      'We supply roll stock, not finished bags, cages or collectors. We do not quote an air permeability or efficiency figure for a felt nobody has tested on your dust; confirm against a sample, and use an independent laboratory where your specification needs a test.',
    ],
    fibreTitle: 'What to settle before you order',
    fibres: [
      {
        title: 'Temperature first',
        text: 'Give the continuous and the peak gas temperature at each collection point. If it is unknown, say so: it is the one figure worth measuring.',
      },
      {
        title: 'Polyester or PP',
        text: 'Both suit cool and moderate-temperature duty. The right one depends on moisture, acid or alkali in the stream and your cleaning method.',
      },
      {
        title: 'Weight and finish',
        text: 'Set from the dust and the cleaning method. Tell us what you use today and we will work from that.',
      },
      {
        title: 'Roll width',
        text: 'Matched to how your bags are cut, so waste stays low.',
      },
    ],
    productsTitle: 'Related products',
    productsLead:
      'Filter felt is made to order, so there is no fixed catalogue entry. These pages show the range it comes from.',
    productPaths: [
      ['multi-colour-needle-punched-felt', 'industrial'],
      ['customised-nonwoven-solutions', 'industrial'],
    ],
    reading: [
      '[Dust collector filter bag felt](/guides/dust-collector-filter-bag-felt) — fibre and temperature',
      '[Bag filter felt for cement, steel and power plants](/guides/bag-filter-felt-cement-steel-power-india) — point by point',
      '[Polyester vs polypropylene](/guides/polyester-vs-polypropylene-nonwoven) — choosing a fibre',
      '[How to test a sample](/guides/how-to-test-a-nonwoven-felt-sample) — before you order in bulk',
      '[The quote checklist](/guides/how-to-request-a-nonwoven-felt-quote) — what to send with an enquiry',
    ],
    faqs: [
      {
        q: 'What is filter felt?',
        a: 'Needle punched nonwoven felt used as the media in dust collector bags. Its tangled fibre structure holds dust at the surface while air passes through. The [dust collector filter felt guide](/guides/dust-collector-filter-bag-felt) explains how.',
      },
      {
        q: 'Are you the manufacturer?',
        a: 'We are an exporter working with a manufacturing partner. Miracle Nonwoven Industries makes the material at its plant in Phagi, Jaipur, against the specification agreed with each buyer.',
      },
      {
        q: 'Do you make high-temperature filter media?',
        a: 'No. We make polyester, PP, viscose and blended felt, which covers cool and moderate-temperature collection points. We do not make aramid, PPS, PTFE or fibreglass media.',
      },
      {
        q: 'Do you supply finished filter bags?',
        a: 'No. We supply felt as roll stock for you or your bag maker to cut and sew.',
      },
      {
        q: 'What should I send with an enquiry?',
        a: 'The application and collection point, continuous and peak gas temperature, dust type, moisture, cleaning method, and the weight and width you use today. The [quote checklist](/guides/how-to-request-a-nonwoven-felt-quote) covers the rest.',
      },
      {
        q: 'Are samples free?',
        a: 'Yes, free, to any location. How long a sample takes to reach you depends on where you are.',
      },
    ],
    faqTitle: 'Filter felt: common questions',
  },

  automotive: {
    path: '/automotive-felt-manufacturer-india',
    category: 'automotive',
    trailLabel: 'Automotive felt',
    seo: {
      title: 'Automotive Felt Manufacturer, India',
      description:
        'Needle punched and thermal bonded felt for car interiors and NVH insulation, from Jaipur, India. Polyester and PP, made to order, free samples.',
    },
    kicker: 'Automotive nonwoven felt · Jaipur, India',
    h1: 'Automotive felt manufacturer in India',
    lead: 'Needle punched and thermal bonded felt for car interior trim and noise insulation, made to your specification at our manufacturing partner’s plant in Phagi, Jaipur.',
    intro: [
      'Nonwoven felt sits behind and under much of a car interior, where it shapes parts, cushions them and absorbs noise. This page is for moulders, trim makers and component suppliers looking for the felt itself: what we make, which process suits which part, and what we leave to others.',
      'The felt is made to order. You give us the part, the press temperature and cycle, and the weight, and we confirm a construction to trial. Polyester generally tolerates higher temperatures than PP, so it is the usual choice near the engine.',
    ],
    specCaption: 'Automotive felt: what we supply',
    specNote:
      'Thickness, density and colour are set from the part and the moulding route, so they are quoted with the specification.',
    supplyTitle: 'What we supply',
    supply: [
      'Needle punched felt, and thermal bonded felt for moulded parts, in polyester, PP or a blend',
      'Weight and width to your enquiry: 100–1200 GSM, rolls up to 5.0–5.2 m wide',
      'Felt for interior trim, floor and carpet underlay, insulation and noise (NVH) layers',
    ],
    usesTitle: 'Where it fits',
    uses: [
      'Part by part, and how felt is moulded: the [OEM interior felt guide](/guides/automotive-felt-oem-interiors-india)',
      'Noise, vibration and harshness layers: the [automotive NVH felt guide](/guides/automotive-nvh-felt-guide)',
      'Choosing between the two processes: [needle punched vs thermal bonded](/guides/needle-punched-vs-thermal-bonded-nonwoven)',
    ],
    notTitle: 'What we do not supply',
    notText: [
      'We supply felt, not finished parts. We do not mould or assemble parts, and we do not make the face fabrics, foams or films that are laminated to the felt.',
      'OEM and tier-one buyers often need supplier approvals and documents. Tell us at the start which ones your order depends on, and we will say plainly what we can provide rather than leave it to the end.',
    ],
    fibreTitle: 'Choosing the construction',
    fibres: [
      {
        title: 'Polyester',
        text: 'Generally tolerates higher temperatures than PP, so it is the usual choice for parts near heat and for moulding at higher press temperatures.',
      },
      {
        title: 'PP',
        text: 'Used where cost matters and the part does not see high temperature.',
      },
      {
        title: 'Needle punched or thermal bonded',
        text: 'Thermal bonding suits parts that are moulded; needle punching suits underlay and insulation. Send the press temperature and cycle time and we will suggest a construction to trial.',
      },
      {
        title: 'Weight and thickness',
        text: 'Set from the part and its function. Confirm against a sample before production.',
      },
    ],
    productsTitle: 'Automotive products',
    productsLead:
      'Each product page lists its applications, specification and an enquiry form.',
    reading: [
      '[Felt for OEM interiors](/guides/automotive-felt-oem-interiors-india) — part by part',
      '[Automotive NVH felt](/guides/automotive-nvh-felt-guide) — noise, vibration and harshness',
      '[Needle punched vs thermal bonded](/guides/needle-punched-vs-thermal-bonded-nonwoven) — which process',
      '[How to test a sample](/guides/how-to-test-a-nonwoven-felt-sample) — before you order in bulk',
      '[The quote checklist](/guides/how-to-request-a-nonwoven-felt-quote) — what to send with an enquiry',
    ],
    faqs: [
      {
        q: 'What is automotive felt?',
        a: 'Nonwoven felt used in cars as moulded interior substrate, underlay and noise insulation. The [OEM interior felt guide](/guides/automotive-felt-oem-interiors-india) goes through the parts.',
      },
      {
        q: 'Are you the manufacturer?',
        a: 'We are an exporter working with a manufacturing partner. Miracle Nonwoven Industries makes the material at its plant in Phagi, Jaipur, against the specification agreed with each buyer.',
      },
      {
        q: 'Do you supply finished moulded parts?',
        a: 'No. We supply the felt. We do not mould or assemble parts, and we do not make face fabrics, foams or films.',
      },
      {
        q: 'Which fibre is used near the engine?',
        a: 'Polyester generally tolerates higher temperatures than PP, so it is the usual choice there. Send your press temperature and cycle time and we will suggest a construction to trial.',
      },
      {
        q: 'Can you meet OEM approval requirements?',
        a: 'Tell us at the start which supplier approvals and documents your order depends on, and we will say plainly what we can provide.',
      },
      {
        q: 'Are samples free?',
        a: 'Yes, free, to any location. How long a sample takes to reach you depends on where you are.',
      },
    ],
    faqTitle: 'Automotive felt: common questions',
  },
};

export const LANDING_LIST = [LANDING.geotextile, LANDING.filter, LANDING.automotive];
