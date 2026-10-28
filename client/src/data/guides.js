/**
 * Buyer's guides — the long-form, informational pages that answer what an
 * importer, specifier or product developer types into a search box *before*
 * they know which supplier they want.
 *
 * Written from two sources only: (1) what the company's own catalogue already
 * says about its plant and products (100–1200 GSM, roll widths 5.0–5.2 m,
 * needle punched + thermal bonded, PP / polyester / viscose / blends, made to
 * order, samples on request), and (2) well-established, general nonwoven
 * knowledge. Nothing claims a certification, founding year, capacity, lead
 * time, minimum order or price — those are pending from the company.
 *
 * Markup inside strings: [text](/path) becomes an internal link.
 * Pure data, no imports — the prerender step and the smoke test import it in
 * Node.
 */

export const GUIDES_PUBLISHED = '2026-10-07';

export const guides = [
  {
    slug: 'needle-punched-vs-thermal-bonded-nonwoven',
    title: 'Needle punched vs thermal bonded nonwoven: how to choose',
    seoTitle: 'Needle Punched vs Thermal Bonded Nonwoven',
    description:
      'How needle punched and thermal bonded nonwovens are made, how they differ in density, loft and finish, and which one suits your application.',
    readMins: 5,
    intro:
      'Both processes turn loose fibre into a fabric without weaving or knitting, but they hold the fibre together in different ways — and that changes how the finished roll behaves. This guide explains how each works and how to choose between them.',
    sections: [
      {
        h: 'How needle punching works',
        p: [
          'Fibres are first carded into a web. The web then passes under boards of barbed needles that punch through it many times. Each stroke drags fibres from the surface down into the body of the web, tangling them mechanically. No adhesive and no heat are needed to hold the fabric together.',
          'Because the needling can be set lightly or heavily, density and thickness are controlled directly by the process. That is why needle punching is the usual route to dense, dimensionally stable felts.',
        ],
      },
      {
        h: 'How thermal bonding works',
        p: [
          'In thermal bonding the web includes low-melt fibre. When the web passes through heat, the low-melt fibre softens and fuses where fibres cross, then locks the structure as it cools. The bond comes from the fibre itself, so no chemical binder is needed.',
          'The result is generally a lighter, loftier and softer material with a clean surface, which is why it is chosen where feel and resilience matter.',
        ],
      },
      {
        h: 'The two processes side by side',
        table: {
          head: ['', 'Needle punched', 'Thermal bonded'],
          rows: [
            ['How fibres are held', 'Mechanically entangled by barbed needles', 'Low-melt fibre fused by heat'],
            ['Typical character', 'Dense, firm, dimensionally stable', 'Lighter, loftier, softer'],
            ['Density and thickness set by', 'How heavily the web is needled', 'Web weight and how it is heated'],
            ['Fibre choice', 'Wide — most fibres can be needled', 'Needs low-melt fibre in the blend'],
            ['Common uses', 'Geotextiles, automotive and NVH felt, filter felt, carpet backing, packaging felt', 'Padding, linings and products that need a soft, resilient, clean surface'],
          ],
        },
      },
      {
        h: 'Which one should you choose?',
        p: [
          'Start from the job the material has to do. If it will carry load, resist abrasion or hold its shape — under a road, in a vehicle floor, in a filter bag — a needle punched felt is the usual choice. If softness, loft and a clean face are the priority, thermal bonding is worth considering.',
          'Fibre matters too. Thermal bonding depends on low-melt fibre being in the blend, which narrows the fibre options; needle punching works with a wider range. If you are unsure, describe the application in an [enquiry](/contact#enquiry) and we will recommend a material — samples are available on request.',
        ],
      },
      {
        h: 'What Kiran Nonwovens makes',
        p: [
          'Kiran Nonwovens produces both needle punched and thermal bonded nonwovens, from 100 to 1200 GSM in roll widths of 5.0–5.2 m. Needle punching is the process behind our [geotextiles](/products/geotextile), automotive felt and most of the range; see [how it is made](/manufacturing) for the manufacturing capability.',
          'Seen "airlay" listed next to "needle punched"? Airlay is a way of forming the web before it is bonded, not a rival to needle punching; our [airlay vs needle punch guide](/guides/airlay-vs-needle-punch-nonwoven) explains.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is needle punched nonwoven stronger than thermal bonded?',
        a: 'It depends on the fibre, the weight and the construction, so there is no single answer. Needle punched felts are typically dense and dimensionally stable, which is why they are the usual choice for geotextiles and automotive felt. Tell us the strength or stability your application needs and we will confirm what suits it.',
      },
      {
        q: 'Do these fabrics use glue or chemical binder?',
        a: 'Neither process needs a chemical adhesive to hold the web together. Needle punching entangles the fibres mechanically; thermal bonding fuses low-melt fibre with heat. A fabric can still be laminated or bonded to another layer as a separate step.',
      },
      {
        q: 'Does Kiran Nonwovens offer both processes?',
        a: 'Yes. We make needle punched and thermal bonded nonwovens in polyester, PP (virgin and recycled), viscose and custom blends, and develop custom materials where no standard product fits.',
      },
      {
        q: 'Which is better for insulation and padding?',
        a: 'Thermal bonded nonwoven is often chosen for lofty, resilient padding and wadding, because heat-set low-melt fibre holds an open, springy structure. Needle punched felt is denser, so it is common where a firmer insulation layer is needed, such as automotive felt. The thickness and density your part needs decide.',
      },
      {
        q: 'Which one is used for geotextile?',
        a: 'Nonwoven geotextiles for roads, drains and liner protection are usually needle punched, because the entangled structure is tough, permeable and stays stable under load. See our [nonwoven geotextile guide](/guides/nonwoven-geotextile-guide) for the uses.',
      },
      {
        q: 'Can a fabric be both needle punched and thermal bonded?',
        a: 'Yes. A web can be needle punched and then heat-set, combining mechanical entanglement with thermal bonding to adjust stiffness, surface and stability. Tell us the property you need and we will suggest a construction to sample.',
      },
    ],
    relatedProducts: [
      'geotextile/pp-geotextile-fabric-for-civil-works',
      'automotive/automotive-needle-punched-felt',
      'industrial/customised-nonwoven-solutions',
    ],
    relatedGuides: [
      'nonwoven-manufacturers-in-india',
      'gsm-in-nonwoven-fabric',
      'nonwoven-fabric-for-footwear-and-apparel',
    ],
  },

  {
    slug: 'gsm-in-nonwoven-fabric',
    title: 'GSM in nonwoven fabric: what it means and how to choose',
    seoTitle: 'What Is GSM in Nonwoven Fabric?',
    description:
      'GSM means grams per square metre. What it tells you about nonwoven felt and geotextile, why it is not thickness, and how to pick the right GSM.',
    readMins: 4,
    intro:
      'GSM is the first number on almost every nonwoven enquiry, and the one most often misunderstood. Here is what it measures, what it does not, and how to specify it so the quote you receive matches the material you need.',
    sections: [
      {
        h: 'What GSM means',
        p: [
          'GSM stands for grams per square metre: the weight of one square metre of the fabric. A 200 GSM felt weighs 200 grams for every square metre of roll. It is a measure of weight, not of thickness.',
          'Kiran Nonwovens makes nonwovens across a 100–1200 GSM range, so the same production range covers light linings and padding as well as heavy felt and geotextile.',
        ],
      },
      {
        h: 'GSM, thickness and density are three different numbers',
        p: [
          'Thickness is measured in millimetres. Density is how much fibre is packed into that thickness. Two fabrics with the same GSM can have different thicknesses depending on the fibre, the needling or bonding, and how much loft is left in the web.',
          'That is why a good specification gives GSM and thickness together — and, where it matters, the density or the feel you are after (soft and lofty, or firm and dense).',
        ],
      },
      {
        h: 'Heavier is not automatically better',
        p: [
          'More GSM usually means more fibre, so more cost per square metre, and often a stiffer fabric that is harder to cut, stitch or mould. The right weight is the lightest one that reliably does the job: enough to cushion, filter, insulate or protect, without adding cost or bulk you do not need.',
          'As a rough guide, light weights suit linings and padding, mid-range weights suit many interior felts and geotextiles, and heavy weights suit applications that need cushioning, abrasion resistance or long service under load. The real number comes from your requirement, not a rule of thumb.',
        ],
      },
      {
        h: 'Agree a tolerance',
        p: [
          'Nonwovens vary slightly in weight across the width and along the roll. Agree the tolerance you can accept — for example a plus-or-minus percentage on GSM — when you place the order, so both sides measure against the same target.',
        ],
      },
      {
        h: 'What to tell your supplier',
        list: [
          'The application — what the material will be used for',
          'Target GSM and the tolerance you can accept',
          'Thickness, and how you want it measured',
          'Fibre — polyester, PP (virgin or recycled), viscose or a blend',
          'Roll width, roll length and colour',
          'Quantity per order or per month',
        ],
        p: [
          'If you do not know the GSM yet, describe the application and send a sample of what you use today; we can work back from it. You can start on the [contact page](/contact#enquiry) or try the [Spec Finder](/#spec-finder) on the home page.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What GSM range does Kiran Nonwovens make?',
        a: 'Our nonwovens are made across a 100–1200 GSM range, in roll widths of 5.0–5.2 m. GSM, thickness, width, density, fibre blend, colour and roll length are set for each order.',
      },
      {
        q: 'Does a higher GSM mean a stronger fabric?',
        a: 'Not always. Strength depends on the fibre, the process and the construction as well as the weight. Two fabrics at the same GSM can perform differently, so give us the property you need — cushioning, filtration, tear resistance, insulation — and not only the number.',
      },
      {
        q: 'Can I get a nonwoven made to a specific GSM?',
        a: 'Yes. Every material is produced to the buyer’s specification. Send your target GSM, thickness and width in an enquiry and we will confirm exact figures with the quote.',
      },
    ],
    relatedProducts: [
      'industrial/customised-nonwoven-solutions',
      'industrial/packaging-protective-felt',
      'apparel-footwear/shoulder-pad-nonwoven-fabric',
    ],
    relatedGuides: ['hs-code-nonwoven-felt-geotextile', 'needle-punched-vs-thermal-bonded-nonwoven', 'carpet-backing-and-underlay-felt', 'geotextile-roll-weight-and-coverage'],
  },

  {
    slug: 'nonwoven-geotextile-guide',
    title: 'Nonwoven geotextile: functions, uses and how to specify',
    seoTitle: 'Non Woven Geotextile Uses and Functions',
    description:
      'Uses of non woven geotextile in roads, railways, drains, walls, canals and landfills, the five jobs it does, and what to specify when you order.',
    readMins: 6,
    intro:
      'A nonwoven geotextile is a permeable fabric laid in or on the ground to make a structure work better and last longer. This guide covers the jobs it does, where it is used, and the details to settle before you order.',
    sections: [
      {
        h: 'What a nonwoven geotextile is',
        p: [
          'Needle punched geotextiles are made from polypropylene or polyester fibre that is carded into a web and mechanically entangled with barbed needles. The result is a thick, felt-like fabric that lets water pass through while holding soil in place.',
          'That felt-like structure is what suits it to the jobs below. It is permeable, it cushions, and it has a wide, consistent surface that fine soil cannot easily wash through.',
        ],
      },
      {
        h: 'The jobs a geotextile does',
        list: [
          'Separation — keeps a soft subgrade and the aggregate above it from mixing, so the road or platform keeps its designed thickness.',
          'Filtration — lets water pass while retaining soil particles, so a drain does not clog with fines.',
          'Drainage — carries water through and, in thicker grades, along the plane of the fabric.',
          'Protection — cushions a membrane, pipe or cable against stones, backfill and abrasion.',
          'Erosion control — holds soil under rock or on a slope while water flows through.',
        ],
        p: [
          'Where a project also needs the fabric to add tensile strength, confirm the required strength against the project design before choosing a grade.',
        ],
      },
      {
        h: 'Uses of non woven geotextile',
        table: {
          head: ['Use', 'Main job', 'Read more'],
          rows: [
            ['Roads and pavements', 'Separation, filtration', 'Geotextile for road construction'],
            ['Railway track', 'Separation under ballast', 'Railway track guide'],
            ['Embankments on soft soil', 'Separation, drainage', 'Embankments guide'],
            ['Drains and pipe wrapping', 'Filtration', 'Drainage and erosion control guide'],
            ['Behind retaining walls', 'Filtration, drainage', 'Retaining wall drainage guide'],
            ['Canals and ponds', 'Protecting the liner', 'Canal and pond lining guide'],
            ['Landfills and mines', 'Protection, filtration', 'Landfill and mining guide'],
            ['Geobags for river and coast', 'Containment, filtration', 'Geobag fabric guide'],
            ['Buried pipes and cables', 'Protection', 'Pipeline and cable protection geotextile'],
          ],
        },
        p: [
          'Each use has its own guide: [roads](/guides/geotextile-for-road-construction), [railway track](/guides/nonwoven-geotextile-for-railway-track-india), [embankments on soft soil](/guides/geotextile-embankment-soft-soil-india), [drains and slopes](/guides/geotextile-for-drainage-and-erosion-control), [retaining walls](/guides/geotextile-retaining-wall-drainage-india), [canals and ponds](/guides/geotextile-canal-pond-lining-india), [landfills and mines](/guides/geotextile-landfill-mining-india) and [geobags](/guides/geobag-fabric-nonwoven-geotextile-india). For laying it on site, see [how to install nonwoven geotextile](/guides/how-to-install-nonwoven-geotextile).',
          'Our products for these uses: [PP geotextile for civil works](/products/geotextile/pp-geotextile-fabric-for-civil-works) for separation and filtration under roads, railways and embankments; [drainage and erosion control geotextile](/products/geotextile/drainage-soil-erosion-control-geotextile) for drains, walls and slopes; and [pipeline and cable protection geotextile](/products/geotextile/pipeline-cable-protection-geotextile) for buried services.',
        ],
      },
      {
        h: 'Polypropylene or polyester?',
        p: [
          'Both are used for needle punched geotextiles. The choice depends on the soil chemistry, temperature and exposure on your site — see our comparison of [polyester and polypropylene nonwoven](/guides/polyester-vs-polypropylene-nonwoven).',
        ],
      },
      {
        h: 'What to specify when you order',
        list: [
          'Function — separation, filtration, drainage, protection or a combination',
          'Fibre — PP (virgin or recycled) or polyester',
          'GSM and thickness, as set by your project design',
          'Roll width and roll length — we supply widths of 5.0–5.2 m',
          'Any strength or permeability figures your design requires',
          'How long the fabric will be exposed before it is covered',
        ],
        p: [
          'Follow the project engineer’s installation details for overlaps and cover. Polypropylene is sensitive to prolonged sunlight, so geotextiles are normally covered soon after they are laid — confirm exposure limits for your project with the supplier.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is nonwoven geotextile used for?',
        a: 'Mainly separation, filtration, drainage, protection and erosion control: under roads and railways, around drainage pipes, on slopes and canals, and around buried pipelines and cables.',
      },
      {
        q: 'What roll widths do you supply?',
        a: 'Roll widths of 5.0–5.2 m, a standard roll length of 50 m (other lengths on request), and GSM and thickness set to the project’s requirement.',
      },
      {
        q: 'Should a geotextile be covered after installation?',
        a: 'Normally yes, soon after it is laid. Polypropylene is sensitive to prolonged UV exposure, so follow your project’s installation details and confirm exposure limits with the supplier.',
      },
      {
        q: 'Can I get a geotextile sample before ordering?',
        a: 'Yes, samples are free. Send the application and the GSM and width you have in mind through the enquiry form.',
      },
    ],
    relatedProducts: [
      'geotextile/pp-geotextile-fabric-for-civil-works',
      'geotextile/drainage-soil-erosion-control-geotextile',
      'geotextile/pipeline-cable-protection-geotextile',
    ],
    relatedGuides: ['geotextile-for-road-construction', 'geotextile-for-drainage-and-erosion-control', 'polyester-vs-polypropylene-nonwoven', 'gsm-in-nonwoven-fabric', 'geotextile-roll-weight-and-coverage', 'geotextile-retaining-wall-drainage-india', 'woven-vs-nonwoven-geotextile'],
  },

  {
    slug: 'polyester-vs-polypropylene-nonwoven',
    title: 'Polyester vs polypropylene nonwoven felt: which fibre to use',
    seoTitle: 'Polypropylene vs Polyester Felt Compared',
    description:
      'PP or polyester felt? A side-by-side table on weight, heat, chemicals and recycled fibre, and a simple way to pick the right one for your job.',
    readMins: 5,
    intro:
      'Two fibres cover most nonwoven felt and geotextile: polyester and polypropylene. They look similar on a roll but behave differently in heat, chemicals and sunlight. Here is how they compare, and where viscose and blends fit.',
    sections: [
      {
        h: 'Polypropylene (PP)',
        p: [
          'Polypropylene is one of the lightest common fibres — lighter than water — so a roll covers more area per kilogram. It absorbs very little moisture and resists many acids, alkalis and salts, which is why it is widely used in geotextiles and in filtration.',
          'Its limits are heat and sunlight. It softens at a lower temperature than polyester, and unprotected polypropylene degrades in prolonged UV exposure, so it is normally covered soon after installation or supplied stabilised.',
        ],
      },
      {
        h: 'Polyester (PET)',
        p: [
          'Polyester is denser and stiffer, with a higher melting point, so it tolerates more heat and generally holds its shape and resilience well. It is a common choice for automotive felt, where components sit near warm areas, and for products that need a firm, springy hand.',
          'It is less suited to strongly alkaline environments, where the fibre can break down over time. Polyester also takes colour readily, which helps where a coloured felt is needed.',
        ],
      },
      {
        h: 'Viscose and blends',
        p: [
          'Viscose is a soft, absorbent cellulosic fibre, usually used in a blend to improve feel and comfort. Blends let a felt combine properties — for example resilience from polyester with the lightness of polypropylene — and are developed to the application.',
        ],
      },
      {
        h: 'Comparison at a glance',
        table: {
          head: ['', 'Polypropylene', 'Polyester', 'Viscose'],
          rows: [
            ['Weight', 'Very light', 'Heavier than PP', 'Soft, medium'],
            ['Heat tolerance', 'Lower', 'Higher', 'Not chosen for heat'],
            ['Chemical resistance', 'Good against many acids and alkalis', 'Good, but weak in strong alkali', 'Limited'],
            ['Moisture', 'Absorbs very little', 'Absorbs little', 'Absorbent'],
            ['Sunlight', 'Needs protection or stabiliser', 'Better UV resistance', '—'],
            ['Typical uses', 'Geotextile, filtration, packaging felt', 'Automotive felt, footwear, garment padding', 'Soft-touch blends'],
          ],
        },
      },
      {
        h: 'Recycled fibre',
        p: [
          'We supply PP in both virgin and recycled grades. Recycled fibre suits applications where cost and sustainability matter and a uniform appearance is secondary — packaging, underlay and many industrial felts. Where colour consistency or a controlled specification is critical, virgin fibre is usually specified. Tell us the requirement and we will advise.',
        ],
      },
      {
        h: 'How to choose',
        p: [
          'Work from the environment first: the temperature the material will see, the chemistry it will touch and how long it is exposed to sunlight. Then decide weight, thickness and finish. If the answer is not obvious, describe the application in an [enquiry](/contact#enquiry) — fibre selection is part of how we quote, and samples are available on request.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Which fibre is better for geotextile — PP or polyester?',
        a: 'Polypropylene is common in geotextile because it resists many soil chemicals and absorbs little water. Polyester is used where temperature or UV resistance matters more. The right choice depends on your site’s soil chemistry, temperature and exposure, so confirm it against the project design.',
      },
      {
        q: 'Which fibre handles heat better?',
        a: 'Polyester generally tolerates higher temperatures than polypropylene, so heat-exposed areas often call for polyester. Tell us the operating temperature and we will recommend a fibre.',
      },
      {
        q: 'Can you supply recycled or blended fibre?',
        a: 'Yes. Our fibre range is polyester, PP (virgin and recycled), viscose and custom blends.',
      },
    ],
    relatedProducts: [
      'geotextile/filter-geo-bag-felt',
      'apparel-footwear/shoe-lining-nonwoven-fabric',
      'industrial/multi-colour-needle-punched-felt',
    ],
    relatedGuides: [
      'nonwoven-geotextile-guide',
      'automotive-nvh-felt-guide',
      'dust-collector-filter-bag-felt',
    ],
  },

  {
    slug: 'automotive-nvh-felt-guide',
    title: 'Automotive NVH felt: how nonwoven felt reduces noise and heat',
    seoTitle: 'Automotive NVH Felt for Noise and Heat',
    description:
      'How needle punched nonwoven felt controls noise, vibration and heat in vehicle interiors, where it is used and what to specify.',
    readMins: 5,
    intro:
      'Quiet, comfortable vehicle interiors depend on layers of material most drivers never see. Needle punched nonwoven felt is one of the most widely used of them. This guide explains what NVH means, how felt helps, and what to specify.',
    sections: [
      {
        h: 'What NVH means',
        p: [
          'NVH stands for noise, vibration and harshness: the sound and feel that reach the people in a vehicle from the road, the engine and the body. Controlling it is a matter of absorbing sound, damping vibration and blocking heat before they reach the cabin.',
        ],
      },
      {
        h: 'How nonwoven felt helps',
        p: [
          'A needle punched felt is a dense network of fibres with air trapped between them. As sound passes through, the moving air rubs against the fibres and part of its energy is lost as heat, so less sound is reflected back or passed on. The same trapped air slows the flow of heat, which is why the felt also works as thermal insulation.',
          'Performance is set by thickness, density, fibre and surface finish, which is why the felt is specified per component rather than off a shelf. Felt is also resilient and lightweight, which helps a vehicle keep weight down.',
        ],
      },
      {
        h: 'Where it is used in a vehicle',
        list: [
          'Carpet backing, floor mats and parcel trays',
          'Door panels, headliners and roof liners',
          'Boot liners and wheel-arch liners',
          'Dashboard and engine-bay insulation',
          'Seat padding and NVH control layers',
        ],
        p: [
          'Our range is set out on the [automotive products page](/products/automotive): general [needle punched interior felt](/products/automotive/automotive-needle-punched-felt), [acoustic and thermal insulation felt](/products/automotive/acoustic-thermal-insulation-felt), and [NVH and sound insulation fabric](/products/automotive/nvh-sound-insulation-fabric).',
        ],
      },
      {
        h: 'Choosing between the three materials',
        p: [
          'General interior felt is the starting point for backing, liners and trays where the job is cushioning, shape and light insulation. Acoustic and thermal insulation felt is the choice where both sound and heat need managing — engine compartments, roof liners and interior panels.',
          'NVH and sound insulation fabric is for assemblies where controlling noise, vibration and harshness is the main requirement, in automotive, industrial and appliance builds. Where a component sits between these, describe it and we will suggest a construction.',
        ],
      },
      {
        h: 'Test it in your own component',
        p: [
          'Felt behaves differently once it is moulded, laminated or stitched into a part, so trial a sample in the real component: check how it forms, how it fits, and how it performs against your own acoustic and thermal tests. Samples are available on request, and GSM, thickness and density can be adjusted after you have tested.',
        ],
      },
      {
        h: 'What to specify',
        list: [
          'The component — floor, door panel, headliner, engine bay — and how the felt is used',
          'GSM, thickness and density, or the acoustic or thermal target',
          'Fibre — polyester or PP; polyester is generally the choice near heat',
          'Operating temperature the felt will see',
          'Colour and surface finish',
          'Roll width — we supply 5.0–5.2 m — and how it will be cut or moulded',
        ],
        p: [
          'The felts are easy to cut, mould, laminate, stitch and die-cut, so they move straight into component production.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the difference between NVH fabric and acoustic and thermal insulation felt?',
        a: 'NVH fabric is designed specifically to reduce noise, vibration and harshness, and is tuned for sound absorption, density and weight. Acoustic and thermal insulation felt combines sound absorption with heat insulation for interiors, engine compartments and roof liners.',
      },
      {
        q: 'Can automotive felt be moulded to shape?',
        a: 'Yes. Our felts can be cut, moulded, laminated, stitched and die-cut, so they can be formed to a component.',
      },
      {
        q: 'Which fibre should I choose for an engine bay?',
        a: 'Polyester generally tolerates higher temperatures than polypropylene, so heat-exposed areas often call for polyester. Send us the operating temperature and we will recommend a fibre and construction.',
      },
    ],
    relatedProducts: [
      'automotive/nvh-sound-insulation-fabric',
      'automotive/acoustic-thermal-insulation-felt',
      'automotive/automotive-needle-punched-felt',
    ],
    relatedGuides: [
      'needle-punched-vs-thermal-bonded-nonwoven',
      'polyester-vs-polypropylene-nonwoven',
      'carpet-backing-and-underlay-felt',
    ],
  },

  {
    slug: 'how-to-request-a-nonwoven-felt-quote',
    title: 'How to request a quote for nonwoven felt or geotextile from India',
    seoTitle: 'Nonwoven Felt RFQ Checklist for Buyers',
    description:
      'What importers should include when requesting a quote for nonwoven felt or geotextile: application, fibre, GSM, width, quantity, destination and samples.',
    readMins: 4,
    intro:
      'Nonwoven felt and geotextile are made to order, so a price cannot be given without a specification. The more of the details below you send, the faster and more accurate the reply. Use this as a checklist for your first enquiry.',
    sections: [
      {
        h: 'Why the details matter',
        p: [
          'At Kiran Nonwovens, GSM, thickness, width, density, fibre blend, colour and roll length are set for each order. Two enquiries that both say “needle punched felt” can end up as very different materials. A complete request lets us quote the right one the first time.',
        ],
      },
      {
        h: 'The checklist',
        list: [
          'Application — what the material will be used for, and what it has to do',
          'Fibre preference — polyester, PP (virgin or recycled), viscose or a blend',
          'GSM, thickness and roll width',
          'Colour and roll length',
          'Quantity — per order or per month',
          'Destination country, and any standard or test the material must meet',
          'Packaging and delivery terms you prefer',
        ],
        p: [
          'You can send all of this through the [enquiry form](/contact#enquiry), or use the spec-based form on any product page.',
        ],
      },
      {
        h: 'If you do not know the specification',
        p: [
          'You do not need the full specification to start. Describe the application — what the material becomes, and what it must withstand — and send a sample of what you use today if you have one. We will recommend a material and confirm exact figures with the quote.',
        ],
      },
      {
        h: 'Try a sample before a bulk order',
        p: [
          'Samples are free, so you can test the material in your own process — cutting, stitching, laminating, moulding, embossing, die-cutting or bonding — before you commit to a volume.',
        ],
      },
      {
        h: 'What happens after you send an enquiry',
        p: [
          'Our export team reads the specification and replies with specifications and pricing. If something is missing — a width, a tolerance, the fibre — we ask before we quote, rather than guess. Exact figures are confirmed with each quote, because the material is made to your requirement.',
          'If you asked for a sample, you can test it and then confirm the specification for a bulk order. Tell us what you found so the material can be adjusted.',
        ],
      },
      {
        h: 'Common mistakes that slow a quote down',
        list: [
          'Asking for “nonwoven felt” without a GSM or thickness',
          'Leaving out the roll width or the roll length',
          'Not saying what the material is used for, so the fibre cannot be checked against the job',
          'Omitting the destination country, which affects packing and paperwork',
          'Sending a quantity with no indication of whether it is per order or per month',
        ],
        p: [
          'None of these stop us replying — but each one costs a round of questions. Send what you have; we will ask for the rest.',
        ],
      },
      {
        h: 'Paperwork and classification',
        p: [
          'Felt and nonwovens fall under chapter 56 of the Harmonized System, and the exact code depends on the construction. Confirm the code you need with your customs broker. Tell us early which documents and test reports your market requires, so they can be discussed before you order — see [export documents](/guides/export-documents-nonwoven-geotextile-india) for the usual set, and [EXW, FOB or CIF](/guides/incoterms-nonwoven-felt-india) for what the term decides.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What information gets the fastest quote?',
        a: 'The application, fibre preference, GSM, thickness, roll width, colour, roll length, quantity and destination country. If you are missing some of these, send what you have and describe the application.',
      },
      {
        q: 'Do you supply samples?',
        a: 'Yes, samples are free, sent to any location, so you can try the material in your own process before a bulk order.',
      },
      {
        q: 'Can you make nonwoven felt to my GSM and width?',
        a: 'Yes. Every material is produced to the buyer’s specification, across a 100–1200 GSM range and roll widths of 5.0–5.2 m.',
      },
      {
        q: 'Do you export?',
        a: 'Yes. Kiran Nonwovens supplies export buyers from India. Include your destination country in the enquiry so we can quote correctly.',
      },
    ],
    relatedProducts: [
      'industrial/customised-nonwoven-solutions',
      'geotextile/pp-geotextile-fabric-for-civil-works',
      'automotive/automotive-needle-punched-felt',
    ],
    relatedGuides: ['hs-code-nonwoven-felt-geotextile', 'gsm-in-nonwoven-fabric', 'polyester-vs-polypropylene-nonwoven'],
  },

  {
    slug: 'needle-punched-nonwoven-manufacturer-india',
    title: 'Buying needle punched nonwoven from India: what to check in a manufacturer',
    seoTitle: 'Nonwoven Felt Manufacturer India: Checklist',
    description:
      'How importers can evaluate a needle punched nonwoven felt or geotextile maker in India: range, made-to-order, samples, testing and export paperwork.',
    readMins: 5,
    intro:
      'India has many needle punched nonwoven makers, from small mills to large plants. For an importer, the useful question is not who is biggest but who can make your specification, repeatably, and ship it with the right paperwork. This checklist covers what to ask before you place a first order.',
    sections: [
      {
        h: 'Start with the range, not the brochure',
        p: [
          'Check that the maker produces the construction you need: needle punched or thermal bonded, the fibre (polyester, polypropylene, viscose or a blend), and the GSM and width range. At Kiran Nonwovens the range runs from 100 to 1200 GSM in roll widths of 5.0–5.2 m — see [needle punched vs thermal bonded](/guides/needle-punched-vs-thermal-bonded-nonwoven) if you are still choosing a construction.',
        ],
      },
      {
        h: 'Can they make to your specification?',
        p: [
          'Standard grades suit many buyers, but automotive, filtration, geotextile and footwear applications often need a custom GSM, thickness or fibre blend. Ask whether the plant produces to order, and what they need from you to quote — our [quote checklist](/guides/how-to-request-a-nonwoven-felt-quote) shows the details that matter.',
        ],
      },
      {
        h: 'Ask for samples and test your own process',
        p: [
          'A sample run through your own cutting, laminating, moulding or installation tells you more than a datasheet. Ask whether samples are available and what they cover.',
        ],
      },
      {
        h: 'Understand who actually makes the material',
        p: [
          'Some exporters trade, some manufacture, and some work with a manufacturing partner. All can be valid, but you should know which applies. Kiran Nonwovens exports material made at the plant of its manufacturing partner, Miracle Nonwoven Industries — details are on our [manufacturing page](/manufacturing).',
        ],
      },
      {
        h: 'Test reports and standards',
        p: [
          'Tell the supplier early which tests or standards your market requires, for example GSM, thickness, tensile, permeability or flammability figures. Ask which reports can be provided with a shipment, and confirm anything that matters for your tender.',
        ],
      },
      {
        h: 'Export paperwork and packing',
        p: [
          'Confirm the documents you need, how rolls are packed for sea or air freight, and the delivery terms you prefer. Felt and nonwovens fall under chapter 56 of the Harmonized System; confirm the exact code with your customs broker.',
        ],
      },
      {
        h: 'A short list to take into your first call',
        list: [
          'Which constructions and fibres can you make?',
          'What GSM and width range, and can it be customised?',
          'Do you supply samples before a bulk order?',
          'Who manufactures the material, and where?',
          'Which test reports can you provide?',
          'What export documents and packing do you provide?',
        ],
        p: [
          'To start, send your specification through the [enquiry form](/contact#enquiry) and our export team will reply with specifications and pricing. Buying from within India? Our [India page](/india) has the Jaipur office and plant details. Ready to see the range and ordering terms? Read our [needle punched felt page](/needle-punched-felt-india).',
        ],
      },
    ],
    faqs: [
      {
        q: 'What should I check before buying nonwoven felt from India?',
        a: 'The construction and fibre range, whether the plant makes to your specification, sample availability, test reports for your market, who manufactures the material, and export paperwork and packing.',
      },
      {
        q: 'Does Kiran Nonwovens make to order?',
        a: 'Yes. Material is produced to the buyer’s specification across 100–1200 GSM and roll widths of 5.0–5.2 m.',
      },
      {
        q: 'Who manufactures the material?',
        a: 'Kiran Nonwovens exports material made at the plant of its manufacturing partner, Miracle Nonwoven Industries.',
      },
      {
        q: 'Can I get a sample first?',
        a: 'Samples are available on request so you can test the material in your own process before a bulk order.',
      },
    ],
    relatedProducts: [
      'industrial/customised-nonwoven-solutions',
      'automotive/automotive-needle-punched-felt',
      'geotextile/pp-geotextile-fabric-for-civil-works',
    ],
    relatedGuides: ['nonwoven-manufacturers-in-india', 'how-to-request-a-nonwoven-felt-quote', 'gsm-in-nonwoven-fabric'],
  },

  {
    slug: 'hs-code-nonwoven-felt-geotextile',
    title: 'HS code for nonwoven felt and geotextile: a guide for importers',
    seoTitle: 'HS Code for Nonwoven Felt and Geotextile',
    description:
      'How nonwoven fabric, needle punched felt and geotextile are classified under HS chapter 56, and what to tell your supplier and customs broker before you order.',
    readMins: 4,
    intro:
      'Importers often start by searching for an HS code. Nonwovens and felt sit in chapter 56 of the Harmonized System, and the right code depends on how the fabric is made and how it is finished. This guide explains the logic so you can brief your supplier and your customs broker correctly.',
    sections: [
      {
        h: 'Where nonwovens sit in the HS',
        p: [
          'Felt is classified in heading 5602 and nonwovens in heading 5603, both in chapter 56. Which heading applies depends mainly on how the fabric is bonded and on whether it is coated, covered or laminated.',
          'Geotextiles do not have a heading of their own. A nonwoven geotextile is normally classified by its construction, in the same chapter. Needle punched polypropylene geotextile is often treated as needleloom felt under 5602.10, and US customs has issued rulings of that kind, while other constructions such as spunbond fall under 5603. The final code for your shipment is decided by your customs authority, so confirm it with your customs broker before you order.',
        ],
      },
      {
        h: 'What decides the code',
        list: [
          'Construction — needle punched, thermal bonded, spunbond or other',
          'Fibre — polyester, polypropylene, viscose or a blend',
          'Weight — GSM can move a product between sub-headings',
          'Finish — whether it is plain, impregnated, coated or laminated',
          'End use — only where the tariff text of your country specifies it',
        ],
        p: [
          'See [needle punched vs thermal bonded](/guides/needle-punched-vs-thermal-bonded-nonwoven) for how the constructions differ, and [GSM in nonwoven fabric](/guides/gsm-in-nonwoven-fabric) for the weight.',
        ],
      },
      {
        h: 'Codes differ by country',
        p: [
          'The first six digits are shared worldwide. Beyond that, each country adds its own digits, duty rates and rules, so the code on a shipment to the UAE can differ from one to Germany or the USA. Always check the tariff of your own country.',
        ],
      },
      {
        h: 'What to tell your supplier',
        list: [
          'The HS code you intend to use, if you already have one',
          'The construction, fibre, GSM and width you need',
          'Whether the fabric is plain or coated',
          'Any test reports or documents your customs office asks for',
        ],
        p: [
          'Our [quote checklist](/guides/how-to-request-a-nonwoven-felt-quote) lists every detail that helps. Send your specification through the [enquiry form](/contact#enquiry) and our export team replies with specifications and pricing.',
        ],
      },
      {
        h: 'Do not rely on a code alone',
        p: [
          'Two products under the same code can be very different. A code tells customs what to charge, not whether the material suits your job. Specify the fabric by construction, fibre, GSM, width and application, and use the code for paperwork.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the HS code for needle punched nonwoven felt?',
        a: 'Felt falls under heading 5602 and nonwovens under heading 5603 of chapter 56. The exact code depends on the construction and finish, so confirm it with your customs broker.',
      },
      {
        q: 'Is there a separate HS code for geotextile?',
        a: 'Geotextile has no heading of its own. A needle punched geotextile is often classified as needleloom felt (5602.10) and other constructions as nonwovens (5603), both in chapter 56. Confirm the code for your country with your customs broker.',
      },
      {
        q: 'Do HS codes differ between countries?',
        a: 'The first six digits are common worldwide. Each country adds its own digits and duty rates, so check your national tariff.',
      },
      {
        q: 'Can you tell me which code to use?',
        a: 'The final classification is decided by your customs authority. We supply the specification of the material, and you confirm the code with your customs broker.',
      },
    ],
    relatedProducts: [
      'industrial/customised-nonwoven-solutions',
      'geotextile/pp-geotextile-fabric-for-civil-works',
      'automotive/automotive-needle-punched-felt',
    ],
    relatedGuides: ['nonwoven-manufacturers-in-india', 'how-to-request-a-nonwoven-felt-quote', 'needle-punched-nonwoven-manufacturer-india'],
  },

  {
    slug: 'geotextile-for-road-construction',
    title: 'Geotextile for road construction in India: where it goes and what it does',
    seoTitle: 'Geotextile for Road Construction in India',
    description:
      'How nonwoven geotextile is used under roads in India: separation, filtration and drainage over soft subgrade and monsoon water, and what to specify.',
    readMins: 5,
    intro:
      'On a soft or wet subgrade, stone and soil mix under traffic and the road loses its thickness. A nonwoven geotextile placed between them keeps the layers apart and lets water through. This guide covers where it goes in a road, what it does, and what to settle before you order.',
    sections: [
      {
        h: 'The problem it solves',
        p: [
          'Without a barrier, the fine soil of a weak subgrade works up into the aggregate while stone presses down into the soil. Over time the base thins, water collects, and the surface rutts or cracks.',
        ],
      },
      {
        h: 'Where geotextile goes in a road',
        list: [
          'Between the subgrade and the aggregate base — separation and filtration',
          'Around edge and subsurface drains — filtration, so drains do not clog with fines',
          'Under embankments and on slopes — separation and erosion control',
          'Beneath railway ballast and haul roads — keeping the layers apart under heavy loads',
        ],
        p: [
          'These jobs are described in more detail in our [nonwoven geotextile guide](/guides/nonwoven-geotextile-guide). For track, see [nonwoven geotextile for railway track](/guides/nonwoven-geotextile-for-railway-track-india); for how to choose the weight, see [geotextile GSM for road construction](/guides/geotextile-gsm-for-road-construction-india).',
        ],
      },
      {
        h: 'Geotextile in Indian road projects',
        p: [
          'Soft or expansive subgrades, such as black cotton soil, and heavy monsoon rain make separation and drainage the main jobs a geotextile does on Indian roads, from rural access roads to highways and embankments.',
          'On public works, the use of geosynthetics is normally set by the project’s technical specification, which commonly refers to the MoRTH specifications and IRC guidance on geosynthetics in pavements. Your project engineer decides which clauses and test values apply; confirm the current edition and send us the figures your specification requires.',
        ],
      },
      {
        h: 'Separation, filtration and drainage',
        p: [
          'Needle punched geotextile is a thick, felt-like fabric. It separates two soil layers, lets water pass while holding fine soil back, and carries some water along its plane. Our [PP geotextile for civil works](/products/geotextile/pp-geotextile-fabric-for-civil-works) is made for this role, and [drainage and erosion control geotextile](/products/geotextile/drainage-soil-erosion-control-geotextile) suits drains and slopes.',
        ],
      },
      {
        h: 'What to specify when you order',
        list: [
          'Function — separation, filtration, drainage or a combination',
          'Fibre — PP (virgin or recycled) or polyester; see [polyester vs polypropylene](/guides/polyester-vs-polypropylene-nonwoven)',
          'GSM and thickness, as set by your project design',
          'Roll width and length, so overlaps and waste fit your layout',
          'Any strength or permeability figure your project design requires',
        ],
        p: [
          'Follow the project engineer’s installation details for overlaps and cover. Geotextile is normally covered soon after it is laid; confirm exposure limits with the supplier.',
        ],
      },
      {
        h: 'Ordering for a road project',
        p: [
          'Material is made to order across a 100–1200 GSM range and roll widths of 5.0–5.2 m. Share your application, GSM, quantity and destination port through the [enquiry form](/contact#enquiry), or read our [quote checklist](/guides/how-to-request-a-nonwoven-felt-quote) first. Samples are available on request.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is geotextile used in road construction in India?',
        a: 'Yes. It is used under pavements, behind drains, on embankments and on rural and haul roads, mainly for separation, filtration and drainage over soft subgrade. Your project specification sets the grade and test values.',
      },
      {
        q: 'Why use geotextile under a road?',
        a: 'It keeps a soft subgrade and the aggregate above it from mixing, lets water drain through, and helps the road keep its designed thickness.',
      },
      {
        q: 'Which geotextile is used for roads?',
        a: 'Needle punched nonwoven geotextile made from polypropylene or polyester is commonly used. The GSM and fibre depend on the project design.',
      },
      {
        q: 'What roll width do you supply?',
        a: 'Roll widths of 5.0–5.2 m, with GSM, thickness and roll length set to the project requirement.',
      },
      {
        q: 'Can I get a sample first?',
        a: 'Yes. Samples are available on request, so you can check the material before a bulk order.',
      },
    ],
    relatedProducts: [
      'geotextile/pp-geotextile-fabric-for-civil-works',
      'geotextile/drainage-soil-erosion-control-geotextile',
      'geotextile/pipeline-cable-protection-geotextile',
    ],
    relatedGuides: [
      'geotextile-gsm-for-road-construction-india',
      'nonwoven-geotextile-for-railway-track-india',
      'geotextile-for-drainage-and-erosion-control',
      'nonwoven-geotextile-guide',
      'woven-vs-nonwoven-geotextile',
    ],
  },
  {
    slug: 'dust-collector-filter-bag-felt',
    title: 'Filter felt for dust collector bags: how to choose the material',
    seoTitle: 'Dust Collector Filter Bag Felt Guide',
    description:
      'How needle punched filter felt works in a baghouse, which fibre suits your gas temperature and dust, and what to settle before you order filter media.',
    readMins: 6,
    published: '2026-10-10',
    intro:
      'A dust collector only performs as well as the media inside it. This guide explains what a filter bag has to do, why needle punched felt is the usual media for pulse-jet and reverse-air collectors, and which decisions — fibre, weight, permeability, finish — have to be made before the felt is ordered.',
    sections: [
      {
        h: 'What a filter bag actually has to do',
        p: [
          'Dust-laden gas is drawn through the fabric. Dust collects on the upstream face as a cake, the cleaned gas passes on, and the cake is knocked off periodically by a pulse of compressed air, by shaking or by reversing the flow. The fabric has to hold that cake, release it cleanly when cleaned, and survive the cycle thousands of times.',
          'So the media is judged on four things at once: how much dust it stops, how freely air passes through it, how readily the cake releases, and how long it lasts at the operating temperature. Pushing one of those up usually pushes another down, which is why filter felt is specified rather than picked off a shelf.',
        ],
      },
      {
        h: 'Why needle punched felt is used as filter media',
        p: [
          'Needle punching entangles the fibres mechanically, with no binder and no weave. That gives a thick, three-dimensional structure with fibres running in every direction, so particles are captured through the depth of the fabric and not only at the surface. A woven cloth of the same weight has a far more open, regular pore structure.',
          'The same process controls density directly: how heavily the web is needled sets how tight the felt is. For the difference between this and the other main bonding route, see [needle punched vs thermal bonded](/guides/needle-punched-vs-thermal-bonded-nonwoven).',
        ],
      },
      {
        h: 'Operating temperature decides the fibre first',
        p: [
          'Before weight or finish, settle the temperature of the gas stream — continuous and at peaks. Fibre choice follows from it, and a fibre run above its limit will fail whatever else is specified correctly.',
        ],
        table: {
          head: ['Fibre', 'Commonly quoted continuous service range', 'Usually chosen for'],
          rows: [
            ['Polypropylene', 'Up to roughly 90 °C', 'Cold, wet and chemically aggressive gas streams'],
            ['Polyester', 'Up to roughly 130–150 °C', 'General industrial dust collection — the most common choice'],
            ['Acrylic (homopolymer)', 'Up to roughly 125 °C', 'Moist streams with acid present'],
            ['Aramid', 'Up to roughly 200 °C', 'Hot gas, asphalt and foundry work'],
            ['PPS', 'Up to roughly 190 °C', 'Hot gas with acid and moisture'],
            ['PTFE and fibreglass', 'Roughly 250 °C and above', 'Incinerators, kilns and other high-temperature plant'],
          ],
        },
      },
      {
        h: 'Reading that table honestly',
        p: [
          'The figures above are general industry reference points, not a product specification, and they move with moisture, acid and oxygen content in the gas. Confirm the limit for your own system against the collector manufacturer’s data before committing.',
          'Kiran Nonwovens makes filter felt in polyester, PP (virgin and recycled), viscose and custom blends — which covers the cold and moderate-temperature range that most dust collection falls into. The high-temperature fibres are listed so you can see where the boundary lies; if your gas sits above the polyester range, say so in the enquiry rather than ordering to the limit.',
        ],
      },
      {
        h: 'Weight, density and air permeability',
        p: [
          'Media weight is quoted in GSM and sets the body of the felt. Industrial needle felt for dust collection is commonly supplied in the region of 400–550 GSM, with lighter and heavier constructions used where the duty calls for it. Our range runs from 100 to 1200 GSM, so the weight is a choice rather than a constraint — see [GSM in nonwoven fabric](/guides/gsm-in-nonwoven-fabric) for how weight relates to thickness and density.',
          'Air permeability — how much air passes through a given area at a given pressure — matters as much as weight. Too high, and fine dust drives into the felt and blinds it; too low, and the pressure drop across the collector climbs and the fan works harder. The target comes from the dust and the air-to-cloth ratio of your collector, so quote both when you ask for media.',
        ],
      },
      {
        h: 'Surface finishes and after-treatments',
        list: [
          'Singeing — burning off surface fibre so the cake releases more cleanly',
          'Calendering and glazing — pressing the face to close it and smooth it',
          'Heat setting — stabilising the felt so the bag holds its dimensions in service',
          'Membrane lamination — a microporous film on the face for very fine dust',
          'Water and oil repellent treatment — for damp or oily dust',
          'Antistatic construction — where combustible dust is handled',
        ],
        p: [
          'Not every finish suits every fibre or every duty, and some are a specialist conversion step rather than part of making the felt. Tell us the finish your system needs and we will confirm what can be supplied against your specification.',
        ],
      },
      {
        h: 'From roll stock to a finished bag',
        p: [
          'Kiran Nonwovens supplies the felt as roll stock, made to be cut, stitched and fabricated into bags and filtration components. If you convert media yourself, the practical questions are the ones your sewing line asks: bag diameter and length, top construction — snap band, flange or raw edge — bottom construction, seam type, and how the finished bag sits on the cage.',
          'Width matters here too, because it decides how many bag blanks come off a roll and how much offcut you carry. Our rolls are produced at 5.0–5.2 m width, which can be cut down to the width your layout needs.',
        ],
      },
      {
        h: 'What to send with your enquiry',
        list: [
          'Gas temperature — continuous and peak',
          'Dust type, particle size and whether it is damp, oily, abrasive or combustible',
          'Cleaning method — pulse jet, reverse air or shaker',
          'Air-to-cloth ratio, or the collector make and model',
          'Target GSM, thickness and air permeability, if your specification sets them',
          'Finish required, and the roll width that suits your cutting layout',
        ],
        p: [
          'If some of that is unknown, describe the plant and the dust and send a swatch of the media you use today. Send it through the [enquiry form](/contact#enquiry) and our team will recommend a construction; samples of [filter geo bag felt](/products/geotextile/filter-geo-bag-felt) are available on request so you can trial it before a bulk order.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What fabric is used for dust collector bags?',
        a: 'Needle punched nonwoven felt is the usual media for pulse-jet and reverse-air collectors, because its depth structure captures dust through the fabric and releases the cake when cleaned. Polyester is the most common fibre for general industrial dust; polypropylene is used for cold, wet or chemically aggressive streams.',
      },
      {
        q: 'What GSM is used for filter bag felt?',
        a: 'Industrial filter felt is commonly supplied in the region of 400–550 GSM, but the right weight depends on the dust, the cleaning method and the pressure drop you can accept. We produce from 100 to 1200 GSM, so the construction is set to your duty rather than to a standard weight.',
      },
      {
        q: 'Can polyester filter felt handle hot gas?',
        a: 'Polyester is generally used up to roughly 130–150 °C continuous, and the real limit drops when the gas carries moisture or acid. Above that range a high-temperature fibre is needed. Tell us your continuous and peak temperatures and we will confirm whether the material we make suits the duty.',
      },
      {
        q: 'Do you supply finished filter bags?',
        a: 'We supply the felt as roll stock, suitable for further processing into filter bags and filtration components. It is made to be cut, stitched and fabricated, and can be cut to the width your conversion line needs.',
      },
      {
        q: 'Can I test the media before ordering?',
        a: 'Yes. Samples are available on request, so you can check permeability, handling and stitching in your own process first.',
      },
    ],
    relatedProducts: [
      'geotextile/filter-geo-bag-felt',
      'industrial/customised-nonwoven-solutions',
      'geotextile/drainage-soil-erosion-control-geotextile',
    ],
    relatedGuides: ['polyester-vs-polypropylene-nonwoven', 'gsm-in-nonwoven-fabric'],
  },

  {
    slug: 'carpet-backing-and-underlay-felt',
    title: 'Carpet backing and flooring underlay felt: a buyer’s guide',
    seoTitle: 'Carpet Backing & Underlay Felt Guide',
    description:
      'The difference between carpet backing felt and flooring underlay, what each contributes to a floor, and how to specify weight, fibre and width when you order.',
    readMins: 5,
    published: '2026-10-10',
    intro:
      'Two of the largest uses for needle punched felt sit inside a floor, where nobody sees them: the backing laminated to a carpet, and the underlay rolled out beneath it. They are different jobs. This guide separates them and sets out what to specify for each.',
    sections: [
      {
        h: 'Two jobs, one family of material',
        p: [
          'Carpet backing is part of the carpet. It is bonded to the carpet during manufacture and travels with it, giving the finished product stability, body and a consistent base for the adhesive or the fitting method.',
          'Underlay is laid loose on the subfloor before the floor covering goes down. It is not part of the carpet, it can be replaced independently, and it is chosen for comfort, impact sound and for levelling out minor irregularities in the floor beneath.',
        ],
      },
      {
        h: 'Primary and secondary backing',
        table: {
          head: ['', 'Primary backing', 'Secondary backing'],
          rows: [
            ['Where it sits', 'The sheet the pile is tufted through', 'Laminated to the back of the tufted carpet'],
            ['Main job', 'Carrying and holding the tufts in place', 'Dimensional stability, body and a fitting surface'],
            ['What it must have', 'Consistent structure that needles and tufts cleanly', 'Strength, stability and a surface that bonds reliably'],
            ['Typical nonwoven role', 'Light to medium weight felt', 'Medium to heavy weight felt'],
          ],
        },
      },
      {
        h: 'What the felt contributes to a carpet',
        list: [
          'Dimensional stability, so the carpet keeps its shape and does not creep or curl',
          'Body underfoot, which changes how the carpet feels in use',
          'A uniform base that takes adhesive consistently across the roll',
          'Help with sound absorption and impact noise within the floor build-up',
          'Some thermal insulation, which makes a hard floor feel warmer',
          'Protection for the pile from grit pressed up from the subfloor',
        ],
        p: [
          'Our [carpet backing felt](/products/industrial/carpet-backing-felt) is made in polyester and PP for exactly this role, in wall-to-wall carpet, rugs, exhibition carpet, automotive carpet and floor mats.',
        ],
      },
      {
        h: 'Underlay: under carpet, laminate, vinyl and wood',
        p: [
          'An underlay has to do three unglamorous things well: cushion the step, take the edge off impact noise, and present a smooth, stable surface so small subfloor imperfections do not read through the finished floor. A needle punched felt does all three because the structure is compressible but recovers, and because the sheet is uniform across its width.',
          'The same material suits carpet, laminate, vinyl and wooden flooring, in residential rooms, offices, hotels and exhibition spaces. Our [flooring underlay felt](/products/industrial/flooring-underlay-felt) is supplied in rolls that cut and lay flat.',
        ],
      },
      {
        h: 'A word about acoustic and thermal numbers',
        p: [
          'Felt helps reduce impact noise and adds thermal resistance, but a rating belongs to a whole floor assembly, not to a fabric. Impact sound performance depends on the subfloor, the fixing method, the floor covering and the detailing at the edges. If your project needs a stated figure, it has to come from a test on the assembly you are actually building.',
          'What we can do is make the material to the weight, thickness and density your specifier asks for, and supply samples so the build-up can be tested as designed.',
        ],
      },
      {
        h: 'Choosing weight and fibre',
        p: [
          'Weight drives almost everything you feel in a floor: a heavier felt is firmer and more stable, a lighter one is softer and cheaper to ship. Backing for a commercial carpet and underlay for a hotel corridor sit at different points, and both are made to order across our 100–1200 GSM range. [GSM in nonwoven fabric](/guides/gsm-in-nonwoven-fabric) explains how weight, thickness and density relate.',
          'On fibre, polyester gives better resilience and recovery, which matters where a floor is walked on constantly; PP — virgin or recycled — is the economical choice and handles damp well. [Polyester vs polypropylene](/guides/polyester-vs-polypropylene-nonwoven) sets out the trade-off in full. Where the felt is visible, as in exhibition flooring, [multi-colour needle punched felt](/products/industrial/multi-colour-needle-punched-felt) is made to a colour.',
        ],
      },
      {
        h: 'What to settle before you order',
        list: [
          'Whether the felt is a carpet backing, an underlay, or both',
          'GSM, thickness and density, or the performance the floor has to deliver',
          'Fibre — polyester, PP (virgin or recycled) or a blend',
          'Roll width and roll length, matched to your laminating line or to the room',
          'Colour, where the material will be seen',
          'How it will be processed — laminated, bonded, cut to size or supplied in full rolls',
        ],
        p: [
          'Rolls are produced at 5.0–5.2 m width and can be cut down. Send the application and the figures you have through the [enquiry form](/contact#enquiry); samples are available on request so the material can be trialled in your own lamination or fitting process.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is carpet backing felt made of?',
        a: 'Needle punched carpet backing felt is usually made from polyester, polypropylene or a blend of the two. Polyester gives better resilience and recovery; PP is the more economical option and handles damp well. We supply both, and blends.',
      },
      {
        q: 'What is the difference between carpet backing and underlay?',
        a: 'Backing is bonded to the carpet during manufacture and is part of the finished product. Underlay is laid separately on the subfloor before the covering goes down, and can be replaced on its own. Backing is specified for stability and bonding; underlay for comfort, impact sound and a smooth base.',
      },
      {
        q: 'What GSM should I use for carpet backing or underlay?',
        a: 'There is no single figure — a secondary backing for a commercial carpet and an underlay for a residential room sit at very different weights. Material is made to order from 100 to 1200 GSM, so tell us the application and the feel or stability you need and we will recommend a weight.',
      },
      {
        q: 'Can nonwoven underlay go under laminate and vinyl?',
        a: 'Yes. The same felt is used under carpet, laminate, vinyl and wooden flooring. Confirm thickness against the floor covering manufacturer’s installation instructions, since some systems set a limit on underlay thickness or compressibility.',
      },
      {
        q: 'Can the felt be supplied in a colour or a cut width?',
        a: 'Colour, GSM, thickness, width and roll length are all made to requirement. Rolls are produced at 5.0–5.2 m and can be cut down to the width your line or your layout needs.',
      },
    ],
    relatedProducts: [
      'industrial/carpet-backing-felt',
      'industrial/flooring-underlay-felt',
      'industrial/multi-colour-needle-punched-felt',
    ],
    relatedGuides: ['gsm-in-nonwoven-fabric', 'polyester-vs-polypropylene-nonwoven', 'exhibition-carpet-needle-punched-nonwoven-india'],
  },

  {
    slug: 'nonwoven-fabric-for-footwear-and-apparel',
    title: 'Nonwoven fabric for footwear and apparel: where it is used',
    seoTitle: 'Nonwoven Fabric for Footwear & Apparel',
    description:
      'Where needle punched nonwoven goes in a shoe and in a garment — linings, insoles, toe puffs, heel counters and shoulder pads — and how to specify it.',
    readMins: 5,
    published: '2026-10-10',
    intro:
      'Most of the nonwoven in a shoe or a jacket is hidden. It lines, cushions, stiffens and holds a shape, and it has to survive cutting, stitching and lamination on the way there. This guide covers where the material sits in each product and what a buyer needs to settle before ordering.',
    sections: [
      {
        h: 'Why nonwoven rather than woven',
        p: [
          'A nonwoven has no warp and weft, so it has no grain to line up and it does not fray at a cut edge. That makes it cheap to nest and cut, and it means a die-cut component holds its outline without an overlocked edge.',
          'Needle punching also lets thickness and firmness be set by the process rather than by the yarn, so one fibre can produce a soft lining or a firm support simply by being needled differently. For how that compares with the other main route, see [needle punched vs thermal bonded](/guides/needle-punched-vs-thermal-bonded-nonwoven).',
        ],
      },
      {
        h: 'Inside a shoe: where the nonwoven goes',
        list: [
          'Inner lining — the face that sits against the foot, where softness and abrasion resistance matter',
          'Shoe uppers — as a backing layer behind the visible material',
          'Insoles — cushioning under the foot',
          'Heel counters — holding the back of the shoe in shape',
          'Toe-puff support — keeping the toe box from collapsing',
          'Slipper lining — soft, light and inexpensive to cut',
        ],
        p: [
          'The same material runs across sports, safety and casual footwear. Our [nonwoven shoe lining fabric](/products/apparel-footwear/shoe-lining-nonwoven-fabric) is a polyester needle punched felt made for these components.',
        ],
      },
      {
        h: 'What a footwear lining has to deliver',
        p: [
          'A lining fails in service in predictable ways: it wears through where the foot moves against it, it holds damp, or it packs down and loses its cushioning. So three properties get checked first — abrasion resistance at the contact face, breathability through the fabric, and recovery after repeated compression.',
          'Polyester is the usual fibre here because it recovers well and resists abrasion, and because it is stable when laminated. Weight and thickness then tune the balance between a thin lining that keeps the shoe’s internal volume and a thicker one that cushions.',
        ],
      },
      {
        h: 'Inside a garment: shoulder pads and structure',
        p: [
          'A shoulder pad has the opposite problem to a lining. It is not hidden from the eye — its shape is the garment’s shape — so it has to hold a smooth, defined form through wear and cleaning without reading as bulk from the outside.',
          'That calls for resilience rather than softness alone: the fabric must come back after being compressed, and it must not crease into a line that shows through the cloth. Our [shoulder pad nonwoven fabric](/products/apparel-footwear/shoulder-pad-nonwoven-fabric) is a lightweight polyester felt made for blazers, suits, coats, jackets, uniforms and ladies’ fashion garments.',
        ],
      },
      {
        h: 'Weight, thickness and colour',
        p: [
          'Footwear and apparel components live at the light end of the nonwoven range, where small changes in weight are felt immediately — in how a lining breathes, how a pad sits, how a stack of blanks cuts. Material is made to order, so weight and thickness are specified for the component rather than chosen from a stock list; [GSM in nonwoven fabric](/guides/gsm-in-nonwoven-fabric) explains how the two relate.',
          'Colour is a real consideration in these products, because a lining can be visible at the shoe’s opening and a pad can shadow through a pale garment. Colour, like weight and width, is set to requirement.',
        ],
      },
      {
        h: 'Processing: cutting, stitching, laminating, bonding',
        p: [
          'These components are rarely used as supplied. They are die-cut or cut on a cutter, stitched, laminated to foam or to a face fabric, and sometimes moulded or bonded into an assembly. A felt that behaves well in the roll can still misbehave on the line — fraying at a die edge, shifting under a laminating head, or shrinking with heat.',
          'That is the strongest argument for sampling. Samples are available on request, and the useful test is not a handfeel but a short run through your own cutting, stitching and lamination steps.',
        ],
      },
      {
        h: 'What to send with your enquiry',
        list: [
          'The component — lining, insole, heel counter, toe puff, upper backing, shoulder pad or interlining',
          'GSM and thickness, or a sample of the material you use today',
          'Colour, and whether the component is visible in the finished product',
          'Roll width, and whether you need it cut to a narrower width for your line',
          'The processing it must survive — die cutting, stitching, lamination, moulding, bonding',
          'Quantity per order or per month, and your destination country',
        ],
        p: [
          'An existing swatch is worth more than a paragraph of description, so send one if you have it. Use the [enquiry form](/contact#enquiry), or read the [quote checklist](/guides/how-to-request-a-nonwoven-felt-quote) first. Where no standard product fits, [customised nonwoven fabric](/products/industrial/customised-nonwoven-solutions) is developed to the application.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What fabric is used for shoe lining?',
        a: 'Needle punched polyester nonwoven is widely used for shoe linings, insoles, heel counters and toe-puff support, because it is soft at the contact face, resists abrasion, and cuts and stitches without fraying. GSM, thickness and colour are made to the component.',
      },
      {
        q: 'Is nonwoven shoe lining breathable?',
        a: 'A needle punched felt is a porous structure, so air and moisture vapour pass through it. How freely depends on the weight and how heavily the web is needled — a lighter, more open felt breathes more than a dense one. Tell us what the component needs and we will set the construction accordingly.',
      },
      {
        q: 'What GSM is used for shoulder pads?',
        a: 'It depends on the garment and the shape being built — a soft summer jacket and a structured blazer need different material. Shoulder pad fabric sits at the lighter end of our 100–1200 GSM range and is produced to the weight and thickness your pattern requires.',
      },
      {
        q: 'Can the fabric be laminated or bonded to other materials?',
        a: 'Yes. These felts are made to be cut, stitched, laminated and bonded with other footwear and garment materials. Lamination behaviour depends on the fibre and the adhesive system, so trial a sample through your own process before committing.',
      },
      {
        q: 'Can you supply it in our colour and cut width?',
        a: 'Colour, GSM, thickness, width and roll length are all made to requirement. Rolls are produced at 5.0–5.2 m width and can be cut down for your cutting or lamination line.',
      },
    ],
    relatedProducts: [
      'apparel-footwear/shoe-lining-nonwoven-fabric',
      'apparel-footwear/shoulder-pad-nonwoven-fabric',
      'industrial/luggage-bag-support-felt',
    ],
    relatedGuides: ['gsm-in-nonwoven-fabric', 'needle-punched-vs-thermal-bonded-nonwoven'],
  },

  {
    slug: 'geotextile-for-drainage-and-erosion-control',
    title: 'Geotextile for drainage and erosion control: how to specify it',
    seoTitle: 'Geotextile for Drainage & Erosion Control',
    description:
      'How nonwoven geotextile filters and drains in French drains, pipe wrapping, slopes and embankments — and what to settle before you order the fabric.',
    readMins: 6,
    published: '2026-10-10',
    intro:
      'Under a road, a geotextile mostly keeps two layers apart. In a drain or on a slope its job is different: water has to pass through it freely for years while the soil behind it stays put. This guide covers that filtration role, where the fabric goes, and what to specify.',
    sections: [
      {
        h: 'Filtration and drainage, not just separation',
        p: [
          'A drainage geotextile does two things at once that pull against each other. It must be open enough that water moves through it without building pressure, and tight enough that fine soil particles do not wash through and silt up the drain behind it.',
          'A needle punched nonwoven suits this because it is thick and three-dimensional. Water passes through the plane of the fabric and can also move along it, while the tangled fibre structure holds back fines. Separation is covered more broadly in our [nonwoven geotextile guide](/guides/nonwoven-geotextile-guide); this page is about the filtering jobs.',
        ],
      },
      {
        h: 'Where drainage geotextile is used',
        list: [
          'French drains — lining the trench so the stone stays clean',
          'Subsurface and trench drains under roads, yards and sports fields',
          'Wrapping perforated pipe, so the perforations do not block with fines',
          'Behind retaining walls, where water has to escape instead of loading the wall',
          'Slope and embankment protection, under rock or soil cover',
          'Canal, pond and reservoir banks',
          'Rainwater-harvesting structures and landscaping and garden drainage',
        ],
        p: [
          'Our [drainage and soil erosion control geotextile](/products/geotextile/drainage-soil-erosion-control-geotextile) is made for these applications, and [pipeline and cable protection geotextile](/products/geotextile/pipeline-cable-protection-geotextile) covers the related job of cushioning buried utilities against sharp backfill.',
        ],
      },
      {
        h: 'The filtration balance: retain soil, pass water',
        p: [
          'Two properties describe the balance. Permeability, usually expressed for geotextiles as permittivity, says how readily water crosses the fabric. Opening size — reported as apparent opening size or as O90 depending on the standard — says how large a particle can pass. A good filter has an opening size small enough to retain the soil it faces and a permeability comfortably higher than the soil’s own.',
          'The numbers that matter follow from the soil, not from the fabric. Fine silts and clays need a tighter filter than a sandy gravel, and a project design will normally state the required values. Send those values with your enquiry; where a design has not set them, describe the soil and the drain and we will discuss what suits.',
        ],
      },
      {
        h: 'Wrapping a drain or a perforated pipe',
        list: [
          'Line the trench before the stone goes in, with enough fabric to fold over the top of the backfill',
          'Lap joints generously — figures in the region of 300 mm are commonly specified, but the project detail governs',
          'Keep soil, mud and site traffic off the fabric face while it is open',
          'Lay it to the trench profile without stretching it taut across voids',
          'Cover it soon after laying, rather than leaving the drain open for days',
        ],
        p: [
          'Installation details are the engineer’s to set, and the figures above are general practice rather than a specification. Follow the drawings for your project.',
        ],
      },
      {
        h: 'Slopes, embankments and erosion control',
        p: [
          'On a slope the failure to prevent is washout: rainwater runs over or through the surface and carries soil with it. A geotextile placed under rock armour, gabions or a soil cover holds the ground surface together, lets water pass without pressure building behind the cover, and keeps the cover material from sinking into the soil.',
          'The same reasoning applies on canal and pond banks, and behind retaining walls, where water that cannot escape becomes a load on the structure. The fabric has to survive placement — stone dropped on it, plant tracking over it — so weight is chosen for the installation as much as for the filtration.',
        ],
      },
      {
        h: 'Durability underground, and exposure above it',
        p: [
          'Polypropylene and polyester nonwovens are resistant to moisture, rot, biological attack and most soil chemistry, which is why they last in a buried drain. [Polyester vs polypropylene](/guides/polyester-vs-polypropylene-nonwoven) sets out how the two differ.',
          'Sunlight is the one real weakness. Geotextiles lose strength with prolonged UV exposure, which is why they are specified to be covered soon after they are laid. If your programme means fabric will stay open for an extended period, say so when you enquire so it can be factored into the material and the handling.',
        ],
      },
      {
        h: 'What to settle before you order',
        list: [
          'The function — filtration, drainage, erosion control, or a combination',
          'Soil type at the interface, and the water flow you expect',
          'Any permeability, permittivity, opening size or strength value the design requires',
          'GSM and thickness, as set by that design',
          'Roll width and roll length, matched to the trench or slope layout so overlaps and waste work out',
          'Fibre — PP (virgin or recycled) or polyester',
          'Quantity, destination port and any test certificate your market requires',
        ],
        p: [
          'Material is made to order from 100 to 1200 GSM in roll widths of 5.0–5.2 m. Send the application, the design values and the quantity through the [enquiry form](/contact#enquiry); samples are available on request. If you are also laying fabric under a carriageway, read [geotextile for road construction](/guides/geotextile-for-road-construction).',
        ],
      },
    ],
    faqs: [
      {
        q: 'Which geotextile is used for a French drain?',
        a: 'A needle punched nonwoven geotextile, because water passes through its thickness while the fibre structure holds fine soil back. The weight and opening size depend on the soil at the trench face and on the project design.',
      },
      {
        q: 'Woven or nonwoven geotextile for drainage?',
        a: 'Nonwoven, for drainage and filtration. A thick needle punched fabric lets water move through and along it, which is what a drain needs. Woven geotextiles are generally chosen where tensile strength and reinforcement matter more than flow. See [woven vs nonwoven geotextile](/guides/woven-vs-nonwoven-geotextile).',
      },
      {
        q: 'What GSM is needed for drainage geotextile?',
        a: 'It follows from the soil, the flow and the installation conditions rather than from a standard figure, and a project design will usually state it. We produce from 100 to 1200 GSM to the specification you supply, and can discuss a weight if the design has not set one.',
      },
      {
        q: 'Can geotextile be left exposed to sunlight?',
        a: 'Only briefly. Prolonged UV exposure weakens the fabric, so geotextiles are normally specified to be covered soon after laying. If the fabric has to stay open for longer on your site, tell us when you enquire.',
      },
      {
        q: 'How much overlap is needed at a joint?',
        a: 'That is set by the project design. Figures in the region of 300 mm are commonly specified for drains, with more where the ground is soft or uneven, but follow the engineer’s detail for your site.',
      },
    ],
    relatedProducts: [
      'geotextile/drainage-soil-erosion-control-geotextile',
      'geotextile/pipeline-cable-protection-geotextile',
      'geotextile/pp-geotextile-fabric-for-civil-works',
    ],
    relatedGuides: ['geotextile-for-road-construction', 'nonwoven-geotextile-guide', 'geotextile-retaining-wall-drainage-india'],
  },

  {
    slug: 'geotextile-gsm-for-road-construction-india',
    title: 'Which GSM of nonwoven geotextile for road construction in India?',
    seoTitle: 'Which GSM Geotextile for Roads in India?',
    description:
      'Which GSM nonwoven geotextile for road work in India: indicative ranges, why heavier is not always better, and what else goes in the specification.',
    readMins: 6,
    published: '2026-10-16',
    intro:
      'Buyers often ask for “150 GSM geotextile” as if the number settles the choice. GSM is the weight of the fabric per square metre, and it is a useful starting point, but the right grade for a road depends on the subgrade, the aggregate, the traffic and the specification your engineer works to. This guide explains what GSM does and does not tell you.',
    sections: [
      {
        h: 'What GSM tells you',
        p: [
          'GSM is grams per square metre. In a needle punched nonwoven, more weight means more fibre, so a heavier fabric is generally thicker, stronger against puncture and better at carrying water along its own plane. Our [GSM guide](/guides/gsm-in-nonwoven-fabric) explains how it is measured.',
          'It does not tell you the strength, the pore size or the permeability of the fabric. Two fabrics of the same GSM, made from different fibre or with different needling, can behave differently.',
        ],
      },
      {
        h: 'Indicative ranges, not a specification',
        list: [
          'Lighter grades, roughly 100–200 GSM — commonly seen for separation and filtration over a reasonably firm subgrade with fine, rounded aggregate',
          'Mid grades, roughly 200–400 GSM — common where the subgrade is softer or wetter, or where drainage along the fabric matters',
          'Heavier grades, 400 GSM and above — used where angular stone, heavy traffic or a risk of puncture and installation damage calls for a thicker, tougher fabric',
        ],
        p: [
          'Treat these as the bands people usually discuss, not as design values. The grade for your road is set by the project design and the specification it cites.',
        ],
      },
      {
        h: 'What else belongs in the specification',
        list: [
          'Function — separation, filtration, drainage, protection or a combination',
          'Fibre — PP (virgin or recycled) or polyester; see [polyester vs polypropylene](/guides/polyester-vs-polypropylene-nonwoven)',
          'Strength and puncture figures your design requires',
          'Permeability and pore size, so the fabric passes water but holds the soil',
          'Thickness, roll width and roll length',
        ],
        p: [
          'On Indian public works, the technical specification commonly refers to the MoRTH specifications and IRC guidance on geosynthetics. Your project engineer decides which clauses and test values apply; confirm the current edition and send us the figures your specification asks for.',
        ],
      },
      {
        h: 'Higher GSM is not always better',
        p: [
          'A heavier fabric costs more per square metre and can be harder to handle. On a firm subgrade with fine aggregate, a very heavy fabric adds cost without adding performance. Match the grade to the job instead of defaulting to the heaviest.',
        ],
      },
      {
        h: 'What we can supply',
        p: [
          'Needle punched nonwoven geotextile is made to order across a 100–1200 GSM range in roll widths of 5.0–5.2 m, in PP (virgin or recycled) or polyester. See our [PP geotextile for civil works](/products/geotextile/pp-geotextile-fabric-for-civil-works), and the wider guide to [geotextile for road construction in India](/guides/geotextile-for-road-construction).',
          'Send the GSM and the test values your specification requires through the [enquiry form](/contact#enquiry), or read the [quote checklist](/guides/how-to-request-a-nonwoven-felt-quote) first. Samples are available on request.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What GSM geotextile is used for roads?',
        a: 'It depends on the subgrade, aggregate and traffic. Lighter grades of roughly 100–200 GSM are common for separation over firmer ground, and heavier grades are used on soft or wet subgrades or with angular stone. The project design and specification set the value.',
      },
      {
        q: 'Is a higher GSM geotextile always better?',
        a: 'No. A heavier fabric costs more and may add nothing on a firm subgrade. Choose the grade the design requires.',
      },
      {
        q: 'Is GSM enough to specify a geotextile?',
        a: 'No. Also give the function, fibre, strength and puncture figures, permeability, thickness and roll size your design requires.',
      },
      {
        q: 'What GSM range can you supply?',
        a: 'Needle punched nonwoven geotextile is made to order across 100–1200 GSM in roll widths of 5.0–5.2 m.',
      },
    ],
    relatedProducts: [
      'geotextile/pp-geotextile-fabric-for-civil-works',
      'geotextile/drainage-soil-erosion-control-geotextile',
      'geotextile/pipeline-cable-protection-geotextile',
    ],
    relatedGuides: ['geotextile-for-road-construction', 'gsm-in-nonwoven-fabric', 'geotextile-roll-weight-and-coverage'],
  },

  {
    slug: 'nonwoven-geotextile-for-railway-track-india',
    title: 'Nonwoven geotextile for railway track in India: separation under ballast',
    seoTitle: 'Nonwoven Geotextile for Railway Track India',
    description:
      'How a needle punched nonwoven geotextile separates ballast from subgrade on railway track in India, where it is laid, and what to specify before you order.',
    readMins: 5,
    published: '2026-10-16',
    intro:
      'Under a railway track, ballast sits on a formation of soil that is often softer and wetter than the stone above it. Without a barrier, fine soil is pumped up into the ballast under every passing train. A nonwoven geotextile keeps the layers apart and lets water drain. This guide covers where it is used and what to settle before you order.',
    sections: [
      {
        h: 'The problem under the ballast',
        p: [
          'Trains load the track thousands of times a day. Where the formation is soft or wet, fine soil works up into the ballast as slurry, and the ballast works down into the soil. The ballast becomes fouled, drains poorly and loses the support it was laid to give, so the track needs more frequent attention.',
        ],
      },
      {
        h: 'What the geotextile does',
        list: [
          'Separation — keeps ballast or blanket stone from mixing with the subgrade',
          'Filtration — lets water pass while holding fine soil back',
          'Drainage — carries water out from under the track',
          'Protection — cushions the formation against sharp stone',
        ],
        p: [
          'These functions are described in our [nonwoven geotextile guide](/guides/nonwoven-geotextile-guide).',
        ],
      },
      {
        h: 'Where it is used',
        list: [
          'Between the formation and the ballast or blanket layer on new track',
          'In formation rehabilitation, where soft spots and mud pumping have developed',
          'At level crossings, yards and sidings',
          'Under industrial and port rail sidings',
        ],
      },
      {
        h: 'Why a thick, needle punched fabric',
        p: [
          'Stone ballast is angular and heavy, and it is placed with machinery. A thick needle punched nonwoven resists puncture and abrasion better than a thin fabric, and its felt-like structure drains well. Heavier grades are normally chosen for this duty; see our [GSM guide for road geotextile](/guides/geotextile-gsm-for-road-construction-india) for how weight relates to performance.',
        ],
      },
      {
        h: 'Specifications on Indian rail projects',
        p: [
          'Railway works are normally tendered against the owner’s specification. RDSO has issued a specification for nonwoven geotextile used as a separator and filter in track, and tenders may cite it or the project’s own technical requirements. The engineer decides which test values apply; confirm the current edition and send us the figures your tender asks for.',
        ],
      },
      {
        h: 'What to specify when you order',
        list: [
          'Function — separation, filtration, drainage or a combination',
          'Fibre — PP (virgin or recycled) or polyester',
          'GSM, thickness, and the strength and puncture values your specification requires',
          'Roll width and length — we supply widths of 5.0–5.2 m',
          'Overlap and cover, as set by the engineer; PP is sensitive to prolonged sunlight, so it is normally covered soon after it is laid',
        ],
        p: [
          'Send your requirement through the [enquiry form](/contact#enquiry) or use the [quote checklist](/guides/how-to-request-a-nonwoven-felt-quote). Samples are available on request.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Why use geotextile under railway ballast?',
        a: 'It keeps ballast and the soft formation below from mixing, lets water drain, and helps the track hold its alignment between maintenance visits.',
      },
      {
        q: 'Which geotextile is used under railway track?',
        a: 'Thick needle punched nonwoven geotextile of polypropylene or polyester is commonly used. The grade is set by the project specification.',
      },
      {
        q: 'Is there an Indian railway specification for nonwoven geotextile?',
        a: 'RDSO has issued a specification for nonwoven geotextile used as a separator and filter in track. Confirm the current edition and the values your tender requires.',
      },
      {
        q: 'What roll width do you supply?',
        a: 'Roll widths of 5.0–5.2 m, with GSM, thickness and roll length set to the project requirement.',
      },
    ],
    relatedProducts: [
      'geotextile/pp-geotextile-fabric-for-civil-works',
      'geotextile/drainage-soil-erosion-control-geotextile',
      'geotextile/pipeline-cable-protection-geotextile',
    ],
    relatedGuides: ['geotextile-for-road-construction', 'nonwoven-geotextile-guide'],
  },

  {
    slug: 'nonwoven-manufacturers-in-india',
    title: 'Nonwoven manufacturers in India: types, uses and how to choose one',
    seoTitle: 'Nonwoven Manufacturers in India: Buyer Guide',
    description:
      'Indian nonwoven manufacturers differ by process: spunbond, spunlace, meltblown, needle punched, thermal bonded. See which suits your use and how to choose one.',
    readMins: 7,
    published: '2026-10-17',
    intro:
      'Searching for “nonwoven manufacturers in India” returns very different companies: some make light spunbond for bags and hygiene, others make thick needle punched felt for geotextile, automotive and filtration. They are not interchangeable. This guide explains the main processes, what each is used for, and how to pick the right manufacturer for your product.',
    sections: [
      {
        h: 'The main nonwoven processes',
        list: [
          'Spunbond — continuous filaments laid into a web and bonded; light, strong fabrics for bags, agriculture, hygiene and medical covers',
          'Spunlace — fibres entangled with water jets; soft, drapable fabric used for wipes and medical products',
          'Meltblown — very fine fibres; used where fine filtration is needed, for example in masks and filter layers',
          'Needle punched — fibres entangled mechanically with barbed needles; thick, dense felt for geotextile, automotive, filtration and industrial use',
          'Thermal bonded — a web of fibres with a low-melt component fused by heat; lighter, loftier material for insulation, linings and padding',
        ],
        p: [
          'Most Indian manufacturers specialise in one or two of these. A company that is excellent at spunbond for carry bags is not necessarily the right source for a 600 GSM geotextile.',
        ],
      },
      {
        h: 'Match the process to your product',
        list: [
          'Thin, light, smooth fabric for bags, covers or hygiene — look for spunbond or spunlace producers',
          'Fine filtration layers — look for meltblown producers',
          'Thick felt, geotextile, automotive felt, filter felt or padding — look for needle punched producers',
          'Light, lofty insulation or lining material — look for thermal bonded producers',
        ],
        p: [
          'Kiran Nonwovens works in the last two groups: needle punched and thermal bonded felt and geotextile, in a 100–1200 GSM range and roll widths of 5.0–5.2 m. We do not make spunbond, spunlace or meltblown fabric, and we would rather say so than quote on something we cannot supply well.',
        ],
      },
      {
        h: 'What to check in any manufacturer',
        list: [
          'Does the plant make the construction you need, in your GSM and width?',
          'Will it make to your specification, or only sell standard grades?',
          'Can you get a sample to test in your own process?',
          'Who actually makes the material, and where?',
          'Which test reports can it provide for your market?',
          'What export documents and packing does it provide?',
        ],
        p: [
          'Our [buyer checklist for nonwoven manufacturers](/guides/needle-punched-nonwoven-manufacturer-india) goes through each point, and our [quote checklist](/guides/how-to-request-a-nonwoven-felt-quote) lists what to send so you get an accurate price the first time.',
        ],
      },
      {
        h: 'Where our material is made',
        p: [
          'Kiran Nonwovens exports material made at the plant of its manufacturing partner, Miracle Nonwoven Industries, in Phagi, Jaipur. You agree the specification with us, approve a sample, and the order is produced and shipped against it. See the [manufacturing page](/manufacturing) for the processes, and the [needle punched felt page](/needle-punched-felt-india) for the range and how an order works.',
        ],
      },
      {
        h: 'Where needle punched nonwoven is used',
        p: [
          'The main uses of the material we make are geotextile for roads, railways and drainage (see [geotextile for road construction in India](/guides/geotextile-for-road-construction)), automotive felt (see the [NVH felt guide](/guides/automotive-nvh-felt-guide)), filter felt (see the [dust collector felt guide](/guides/dust-collector-filter-bag-felt)), footwear and apparel components, flooring, packaging and medical padding.',
        ],
      },
      {
        h: 'Buying from within India',
        p: [
          'Our office is in Adarsh Nagar, Jaipur, and the material is made at our partner\u2019s plant in Phagi, Jaipur. Where we are, which processes we run and what to send for a domestic order are on our [India page](/india).',
        ],
      },
      {
        h: 'Buying from India as an overseas importer',
        p: [
          'Confirm the construction, fibre, GSM and width first, then the paperwork: the HS code (see our [HS code guide](/guides/hs-code-nonwoven-felt-geotextile)), test reports your market asks for, and how the rolls are packed for sea or air freight. Send your specification through the [enquiry form](/contact#enquiry) and our export team replies with specifications and pricing. Samples are available on request.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What types of nonwoven fabric are made in India?',
        a: 'Spunbond, spunlace, meltblown, needle punched and thermal bonded nonwovens are all made in India. Each suits different uses, and most manufacturers specialise in one or two processes.',
      },
      {
        q: 'Which Indian manufacturer is the best for nonwoven fabric?',
        a: 'There is no single best. The right one depends on the process, GSM, width and application you need. Check that the plant makes your construction, will make to your specification and can provide samples and test reports.',
      },
      {
        q: 'What does Kiran Nonwovens make?',
        a: 'Needle punched and thermal bonded nonwoven felt and geotextile, in a 100–1200 GSM range and roll widths of 5.0–5.2 m, made to the buyer’s specification. We do not make spunbond, spunlace or meltblown fabric.',
      },
      {
        q: 'Do you export?',
        a: 'Yes. Kiran Nonwovens supplies export buyers from India. Include your destination country in the enquiry so we can quote correctly.',
      },
    ],
    relatedProducts: [
      'industrial/customised-nonwoven-solutions',
      'geotextile/pp-geotextile-fabric-for-civil-works',
      'automotive/automotive-needle-punched-felt',
    ],
    relatedGuides: ['needle-punched-nonwoven-manufacturer-india', 'needle-punched-vs-thermal-bonded-nonwoven'],
  },

  {
    slug: 'orthopaedic-cast-padding-nonwoven-india',
    title: 'Nonwoven orthopaedic cast padding from India: what to specify',
    seoTitle: 'Nonwoven Orthopaedic Cast Padding India Guide',
    description:
      'What converters and importers should specify when buying nonwoven undercast padding from India: fibre, GSM, thickness, tearability, width and roll length.',
    readMins: 5,
    published: '2026-10-16',
    intro:
      'Undercast padding sits between the skin and a plaster or synthetic cast. It is a simple material, but small differences in fibre, weight and tearability decide whether it wraps smoothly and feels comfortable. This guide covers what to specify when you buy nonwoven cast padding as roll stock from an Indian supplier.',
    sections: [
      {
        h: 'What cast padding has to do',
        list: [
          'Cushion the skin and bony points against the cast',
          'Spread pressure evenly so the cast does not rub',
          'Wrap and conform easily around a limb',
          'Tear cleanly by hand when the clinician needs to cut a length',
          'Stay in place while the cast material is applied over it',
        ],
        p: [
          'A needle punched or thermal bonded nonwoven suits this job because it is soft, uniform and does not fray at the edge.',
        ],
      },
      {
        h: 'Fibre: viscose, polyester or a blend',
        list: [
          'Viscose — soft and absorbent, often chosen where comfort and moisture handling matter most',
          'Polyester — resilient and quick to recover its loft; does not absorb moisture',
          'Blends — balance softness, loft and cost',
        ],
        p: [
          'Which one is right depends on your product and your market. See [polyester vs polypropylene nonwoven](/guides/polyester-vs-polypropylene-nonwoven) for how the synthetic fibres differ.',
        ],
      },
      {
        h: 'What to put in the specification',
        list: [
          'Fibre or blend',
          'GSM and thickness — these set the cushioning',
          'Tearability and softness, which you can judge on a sample',
          'Colour — usually white',
          'Roll width and length, so your slitting and rewinding line runs efficiently',
          'The finished bandage widths you plan to cut, because they decide the slit width',
        ],
        p: [
          'Our [GSM guide](/guides/gsm-in-nonwoven-fabric) explains how weight relates to thickness and feel.',
        ],
      },
      {
        h: 'Roll stock for converters',
        p: [
          'Most buyers convert the roll into finished padding rolls themselves: slitting, rewinding and packing. Ask for a roll width and length that match your equipment. Our [orthopaedic cast padding](/products/industrial/orthopaedic-cast-padding) is made to order in customised widths, thicknesses, GSM and roll lengths.',
        ],
      },
      {
        h: 'Medical-use requirements',
        p: [
          'We supply the nonwoven material. The requirements for the finished medical product, such as cleanliness, packaging and the regulatory status in your market, are for the converter and the market to settle. Tell us what you need early, and we will discuss what can be supplied before you order.',
        ],
      },
      {
        h: 'Sample first, then order',
        p: [
          'Padding is judged by hand, so test a sample before committing. Samples are available on request. Send your specification through the [enquiry form](/contact#enquiry), or use the [quote checklist](/guides/how-to-request-a-nonwoven-felt-quote) so we can quote accurately the first time. For the wider picture of buying from India, see [nonwoven manufacturers in India](/guides/nonwoven-manufacturers-in-india).',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is nonwoven cast padding made from?',
        a: 'Viscose, polyester or a blend of the two, formed into a soft nonwoven by needle punching or thermal bonding. The fibre is chosen for softness, loft and moisture handling.',
      },
      {
        q: 'What should I check in a cast padding sample?',
        a: 'Softness, how cleanly it tears by hand, how it wraps around a limb, and whether it holds its thickness.',
      },
      {
        q: 'Can you supply cast padding in custom widths and GSM?',
        a: 'Yes. It is made to order in customised widths, thicknesses, GSM and roll lengths.',
      },
      {
        q: 'Is the material sold as a finished medical product?',
        a: 'We supply the nonwoven material as roll stock. Requirements for the finished product are for the converter and the destination market, and we will discuss them before you order.',
      },
    ],
    relatedProducts: [
      'industrial/orthopaedic-cast-padding',
      'industrial/customised-nonwoven-solutions',
      'industrial/packaging-protective-felt',
    ],
    relatedGuides: ['gsm-in-nonwoven-fabric', 'nonwoven-manufacturers-in-india'],
  },
  {
    slug: 'shoulder-pad-nonwoven-fabric-india',
    title: 'Shoulder pad nonwoven fabric from India: how to specify it',
    seoTitle: 'Shoulder Pad Nonwoven Fabric India Guide',
    description:
      'What garment makers and pad converters should specify when buying shoulder pad nonwoven fabric from India: fibre, weight, loft, colour and roll width.',
    readMins: 5,
    published: '2026-10-17',
    intro:
      'A shoulder pad is a small component that decides how a whole garment reads. Get the material wrong and the shoulder collapses after a season, or worse, shows a ridge through the cloth. This guide covers what the nonwoven has to do, and what to settle before you buy it as roll stock from India.',
    sections: [
      {
        h: 'What the pad has to do',
        list: [
          'Build the shoulder line the pattern was cut for',
          'Hold that shape through wear, pressing and cleaning',
          'Stay invisible from outside — no ridge, no shadow, no crease line',
          'Add as little weight and bulk as the look allows',
          'Cut, stitch and laminate cleanly on a production line',
        ],
        p: [
          'The last point matters more than it sounds. A fabric that feels right by hand can still fray at a die edge or shift under a laminating head, and that only shows up in a production run.',
        ],
      },
      {
        h: 'Nonwoven wadding, moulded foam and cut-and-sewn pads',
        table: {
          head: ['', 'Nonwoven wadding', 'Moulded foam', 'Cut-and-sewn layers'],
          rows: [
            ['How the pad is built', 'Layers of needle punched fabric cut to shape', 'Foam moulded to a shoulder form', 'Several fabric layers stitched together'],
            ['Shape control', 'From the layering and the stitching', 'Built into the mould', 'From the pattern of each layer'],
            ['Feel', 'Softer, more textile', 'Firmer, more uniform', 'Varies with the layers chosen'],
            ['Breathability', 'Open fibre structure lets air through', 'Depends on the foam', 'Open, like the fabrics used'],
            ['Usual fit', 'Tailoring, formal wear, uniforms', 'Structured and sportswear shapes', 'Tailoring where a specific profile is wanted'],
          ],
        },
        p: [
          'We supply the nonwoven fabric for the first and third routes. The finished pad is assembled by the garment maker or a pad converter.',
        ],
      },
      {
        h: 'Why polyester needle punched fabric',
        p: [
          'Polyester recovers its loft after being compressed, which is what keeps a shoulder from going flat after a few wearings. It does not absorb moisture, so it is stable through pressing and cleaning, and it holds up to lamination.',
          'Needle punching sets the firmness through the process rather than the yarn, so the same fibre can give a soft, light wadding or a firmer support simply by being needled differently. See [needle punched vs thermal bonded](/guides/needle-punched-vs-thermal-bonded-nonwoven) for how the two main routes compare.',
        ],
      },
      {
        h: 'Weight, thickness and loft',
        p: [
          'Shoulder pad fabric sits at the light end of the nonwoven range, and small changes are felt immediately — in how the pad sits, how it presses, and how a stack of blanks cuts. A soft summer jacket and a structured blazer want different material, so weight and thickness are specified for the garment rather than picked from a stock list.',
          'Material is made to order from 100 to 1200 GSM, which covers this end comfortably. [GSM in nonwoven fabric](/guides/gsm-in-nonwoven-fabric) explains how weight, thickness and density relate.',
        ],
      },
      {
        h: 'Colour, and what shows through a pale cloth',
        p: [
          'White and ecru cover most work, but a pad under a pale or lightweight shell can shadow through, so the fabric is sometimes matched closer to the garment. Colour is made to requirement along with weight, thickness and width.',
        ],
      },
      {
        h: 'Cutting, stitching, laminating and pressing',
        p: [
          'Pads are die-cut or cut on a cutter, stitched, often laminated to foam or to a face fabric, and pressed. Each of those steps can expose a problem the roll does not show: a frayed die edge, slippage under the laminating head, or loss of loft under heat.',
          'That is the argument for sampling. Samples are available on request, and the test worth doing is a short run through your own cutting, stitching, lamination and pressing — not a handfeel. Confirm your pressing conditions against the sample rather than against a figure on paper.',
        ],
      },
      {
        h: 'Buying the fabric from India',
        p: [
          'India has a deep garment manufacturing base, so most buyers for this material are garment factories and pad converters sourcing roll stock, not finished pads. What you are buying is the fabric; the pad is made on your line or your converter’s.',
          'Kiran Nonwovens exports material made at the plant of its manufacturing partner, Miracle Nonwoven Industries — see the [manufacturing page](/manufacturing) for the processes. For the wider picture of sourcing nonwovens from India, read [nonwoven manufacturers in India](/guides/nonwoven-manufacturers-in-india).',
        ],
      },
      {
        h: 'What to send with your enquiry',
        list: [
          'The garment — blazer, suit, coat, jacket, uniform or fashion piece — and the shoulder shape you are building',
          'GSM and thickness, or a swatch of the material you use today',
          'Colour, and whether the shell fabric is pale or lightweight',
          'Roll width, and whether you need it cut narrower for your line',
          'The processing it must survive — die cutting, stitching, lamination, pressing',
          'Quantity per order or per month, and your destination country',
        ],
        p: [
          'A swatch is worth more than a paragraph of description, so send one if you have it. Use the [enquiry form](/contact#enquiry), or read the [quote checklist](/guides/how-to-request-a-nonwoven-felt-quote) first. Our [shoulder pad nonwoven fabric](/products/apparel-footwear/shoulder-pad-nonwoven-fabric) page lists the standard range, and where nothing standard fits, [customised nonwoven fabric](/products/industrial/customised-nonwoven-solutions) is developed to the application.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What fabric is used for shoulder pads?',
        a: 'Needle punched polyester nonwoven is widely used, because it recovers its loft after compression, stays stable through pressing and cleaning, and cuts without fraying. GSM, thickness and colour are made to the garment.',
      },
      {
        q: 'What GSM is used for shoulder pad fabric?',
        a: 'It depends on the garment and the shape being built — a soft summer jacket and a structured blazer need different material. The fabric sits at the lighter end of our 100–1200 GSM range and is produced to the weight and thickness your pattern requires.',
      },
      {
        q: 'What is the difference between nonwoven wadding and foam shoulder pads?',
        a: 'Wadding pads are built from layers of nonwoven fabric cut to shape, so the shape comes from the layering and stitching, and the pad feels more textile. Foam pads are moulded to a form, so the shape is built into the mould and the feel is firmer. We supply the nonwoven fabric, not moulded foam.',
      },
      {
        q: 'Do you supply finished shoulder pads?',
        a: 'We supply the fabric as roll stock, made to be cut, stitched and laminated. The finished pad is assembled by the garment maker or a pad converter.',
      },
      {
        q: 'Can you supply it in our colour and cut width?',
        a: 'Colour, GSM, thickness, width and roll length are all made to requirement. Rolls are produced at 5.0–5.2 m width and can be cut down for your cutting or lamination line. Samples are available on request.',
      },
    ],
    relatedProducts: [
      'apparel-footwear/shoulder-pad-nonwoven-fabric',
      'apparel-footwear/shoe-lining-nonwoven-fabric',
      'industrial/customised-nonwoven-solutions',
    ],
    relatedGuides: ['nonwoven-fabric-for-footwear-and-apparel', 'gsm-in-nonwoven-fabric', 'nonwoven-manufacturers-in-india'],
  },
  {
    slug: 'bag-filter-felt-cement-steel-power-india',
    title: 'Bag filter felt for cement, steel and power plants in India',
    seoTitle: 'Bag Filter Felt: Cement, Steel, Power Plants',
    description:
      'Which bag filter points in Indian cement, steel and power plants run cool enough for polyester or PP felt, and which need a high-temperature fibre instead.',
    readMins: 6,
    published: '2026-10-20',
    intro:
      'Cement, steel and power plants in India run some of the largest baghouses in the country, but the dust streams inside one plant are not alike. A kiln runs far hotter than a packing plant; an ash hopper is not a crusher. Temperature decides the media before anything else does, so this guide goes point by point through each plant and says plainly where a polyester or PP needle punched felt fits and where it does not.',
    sections: [
      {
        h: 'One plant, many different dust streams',
        p: [
          'It is tempting to talk about “cement plant filter bags” as one thing. In practice a single works has collection points separated by a hundred degrees or more, and media chosen for the hottest point is wasted money on the coolest one — while the reverse destroys bags in weeks.',
          'So the first job is not to pick a fabric. It is to list your collection points and write the continuous and peak gas temperature against each one. Everything else follows from that list.',
        ],
      },
      {
        h: 'Cement plants, point by point',
        table: {
          head: ['Collection point', 'Typically runs', 'Media usually needed'],
          rows: [
            ['Crusher and raw material handling', 'Near ambient', 'Polyester or PP needle felt'],
            ['Packing plant and bag house on dispatch', 'Near ambient', 'Polyester needle felt'],
            ['Cement mill and separator vents', 'Warm', 'Polyester, where the temperature stays inside its range'],
            ['Raw mill and kiln exhaust', 'Hot', 'High-temperature fibre, not polyester or PP'],
            ['Clinker cooler', 'Hot', 'High-temperature fibre'],
          ],
        },
        p: [
          'The cool end of a cement works — crushing, raw material handling, packing and dispatch — is squarely the kind of duty our felt is made for. The kiln and clinker cooler are not, and no amount of finishing changes that.',
        ],
      },
      {
        h: 'Steel plants: heat, fume and sparks',
        p: [
          'Steel making concentrates the hardest filtration duties in the country: furnace fume, sinter plant gas, and streams that carry hot particles capable of burning a hole through a bag. Those points call for high-temperature media, and often for spark protection designed into the system rather than into the fabric.',
          'The parts of a steel works that do suit a polyester or PP felt are the cooler, drier ones away from the furnace — raw material handling, screening, transfer points, storage and bagging. If your enquiry is for one of those, we can quote; if it is for furnace or sinter gas, we will say so rather than supply something that will not last.',
        ],
      },
      {
        h: 'Power plants: fly ash, moisture and acid',
        p: [
          'On a coal-fired unit, flue gas bag filters sit in a stream that is hot and can carry acid and moisture, which is why that duty is normally met with a high-temperature fibre rather than polyester. Polyester also loses strength when hot gas carries moisture, so the number on a datasheet is not the whole story.',
          'The plant’s material handling side is different. Coal handling, ash handling at ambient conditions, transfer towers and silo vents are cooler, dustier and abrasive rather than hot — and those are duties a dense needle punched felt is well suited to.',
        ],
      },
      {
        h: 'Where we are the right source, and where we are not',
        p: [
          'We make needle punched and thermal bonded nonwovens in polyester, PP (virgin and recycled), viscose and blends. That covers the cool and moderate-temperature collection points described above, which in most plants are the majority of the bags by count even when they are not the most talked-about.',
          'We do not make aramid, PPS, PTFE or fibreglass media, so for kiln exhaust, clinker coolers, furnace fume or flue gas we are not your supplier. Telling you that at the enquiry stage costs us an order and saves you a bag change. Our [dust collector filter felt guide](/guides/dust-collector-filter-bag-felt) carries the general fibre and temperature picture, with the figures labelled as industry reference rather than a product specification.',
        ],
      },
      {
        h: 'Past temperature: abrasion, moisture and acid',
        list: [
          'Abrasive dust — cement, clinker, ash and ore wear the face of a bag; a denser felt lasts longer against it',
          'Damp or sticky dust — material that cakes rather than releases changes how the collector has to be cleaned',
          'Acid and moisture together — these shorten fibre life well below the dry temperature limit',
          'Combustible dust — handled through the system design and an antistatic construction, not by the fabric alone',
          'Cleaning method — pulse jet, reverse air or shaker, which sets how hard the media is worked',
        ],
        p: [
          'These are the questions that separate two bags of the same weight and fibre, and they are worth answering in the enquiry rather than after the first change.',
        ],
      },
      {
        h: 'Roll stock, not finished bags',
        p: [
          'We supply the felt as roll stock, made to be cut, stitched and fabricated into bags and filtration components by your own line or your converter. Rolls are produced at 5.0–5.2 m width and can be cut to the width your layout needs, from 100 to 1200 GSM. Our [needle punched filter geo bag felt](/products/geotextile/filter-geo-bag-felt) is the product made for this duty.',
        ],
      },
      {
        h: 'What to send with your enquiry',
        list: [
          'The plant and the specific collection point — not just “cement plant”',
          'Continuous and peak gas temperature at that point',
          'Dust type, and whether it is abrasive, damp, sticky or combustible',
          'Cleaning method, and the collector make and model if you have it',
          'Target GSM, thickness and air permeability, if your specification sets them',
          'Roll width that suits your cutting layout, and quantity per order or per month',
        ],
        p: [
          'If the temperature at a point is unknown, say so — it is the one figure worth measuring before ordering. Send the details through the [enquiry form](/contact#enquiry); samples are available on request so you can trial the media before a bulk order. For sourcing background, see [nonwoven manufacturers in India](/guides/nonwoven-manufacturers-in-india).',
        ],
      },
    ],
    faqs: [
      {
        q: 'Which filter bag material is used in cement plants?',
        a: 'It depends on the collection point. Crushing, raw material handling, packing and dispatch run near ambient and commonly use polyester or PP needle punched felt. Kiln exhaust and clinker coolers run far hotter and need a high-temperature fibre, which we do not make.',
      },
      {
        q: 'Can polyester filter felt be used in a power plant?',
        a: 'On the material handling side — coal handling, ambient ash handling, transfer towers, silo vents — yes. For flue gas from a boiler, no: that stream is hot and can carry acid and moisture, which calls for a high-temperature fibre.',
      },
      {
        q: 'Do you supply aramid, PPS or PTFE filter media?',
        a: 'No. We make needle punched and thermal bonded nonwovens in polyester, PP, viscose and blends. For high-temperature media we are not the right source, and we would rather say that than supply something that fails early.',
      },
      {
        q: 'Do you supply finished filter bags?',
        a: 'We supply the felt as roll stock, suitable for cutting, stitching and fabrication into bags. It can be cut to the width your conversion line needs.',
      },
      {
        q: 'What GSM is used for bag filter felt?',
        a: 'Industrial filter felt is commonly supplied in the region of 400–550 GSM, but the right weight depends on the dust, the cleaning method and the pressure drop you can accept. We produce from 100 to 1200 GSM to the duty rather than to a standard weight.',
      },
    ],
    relatedProducts: [
      'geotextile/filter-geo-bag-felt',
      'industrial/customised-nonwoven-solutions',
      'geotextile/drainage-soil-erosion-control-geotextile',
    ],
    relatedGuides: ['dust-collector-filter-bag-felt', 'polyester-vs-polypropylene-nonwoven', 'nonwoven-manufacturers-in-india'],
  },
  {
    slug: 'geobag-fabric-nonwoven-geotextile-india',
    title: 'Geobag fabric: nonwoven geotextile for river and coastal works',
    seoTitle: 'Geobag Fabric: Nonwoven Geotextile India',
    description:
      'What a geobag has to survive — filling, dropping, abrasion and years underwater — and how to specify the nonwoven geotextile fabric it is stitched from.',
    readMins: 6,
    published: '2026-10-21',
    intro:
      'A geobag is a sand-filled bag stitched from geotextile and placed to hold a river bank or a coastline in place. It sounds simple, and the fabric is the whole product: once the bag is dropped into flowing water there is nothing else protecting the sand inside it. This guide covers what the fabric has to survive and how the specification is settled.',
    sections: [
      {
        h: 'What a geobag is, and what it replaces',
        p: [
          'A geobag is filled with locally available sand, closed by stitching, and placed as armour on a slope, a bank or a scour hole. Because the fill comes from site, the material moving to site is fabric rather than stone — which is why geobags are used on rivers where quarried rock is far away or the ground is too soft to carry it.',
          'In India they are most associated with river training and bank protection on large alluvial rivers, and with coastal protection and scour repair around structures.',
        ],
      },
      {
        h: 'Where geobags are used',
        list: [
          'River bank protection and anti-erosion works on alluvial rivers',
          'Launching aprons, where bags settle into a scour hole as the bed erodes',
          'Scour protection around bridge piers, guide bunds and spurs',
          'Coastal protection, groynes and temporary sea defences',
          'Emergency and flood-season repairs, where speed matters more than permanence',
          'Embankment and slope protection on canals and ponds',
        ],
        p: [
          'The filtering role in all of these is the same one described in our [drainage and erosion control guide](/guides/geotextile-for-drainage-and-erosion-control): water passes, soil stays.',
        ],
      },
      {
        h: 'What the fabric has to survive',
        p: [
          'A geobag fails at the fabric, not at the sand. Four things attack it, usually in this order:',
        ],
        list: [
          'Filling — the bag is loaded fast, and a weak fabric splits at the seam or the corner',
          'Placing — bags are dropped or rolled into water from a height, which is an impact and a puncture load at once',
          'Abrasion — sand-laden water works at the surface continuously once the bag is in place',
          'Sunlight — bags stacked on a bank before placement lose strength the longer they sit exposed',
        ],
      },
      {
        h: 'Why a needle punched nonwoven suits the job',
        p: [
          'A needle punched geotextile is thick and three-dimensional, with fibres running in every direction rather than in a regular weave. That structure absorbs a puncture load instead of letting a tear run, holds fine sand back while letting water through, and keeps working when the surface has been abraded.',
          'Woven geotextiles are also used for geobags, and the choice between them belongs to the project design rather than to a supplier. What we make is the needle punched kind — see our [nonwoven geotextile guide](/guides/nonwoven-geotextile-guide) for how the material behaves.',
        ],
      },
      {
        h: 'The specification comes from the project, not from us',
        p: [
          'Geobag works for river training are designed, and the design sets the numbers: bag size and filled weight, fabric mass per unit area, tensile and seam strength, puncture and tear resistance, opening size against the local sand, and permeability. Those values follow from the river, the velocity, the bed material and the depth of expected scour.',
          'Where your project cites a standard or a code of practice, confirm the current edition with your engineer and send us the clauses that apply to the fabric. We produce to a specification; we do not set the design values and would be guessing if we offered them.',
        ],
      },
      {
        h: 'Fabric, not finished bags',
        p: [
          'We supply the geotextile as roll stock, made to be cut and stitched into bags by a fabricator or on site. Rolls are produced at 5.0–5.2 m width, from 100 to 1200 GSM, and can be cut to the width that suits your bag size and cutting layout.',
          'Seam strength is usually the weak point of a finished geobag, and it depends on the stitching — thread, stitch type and seam construction — as much as on the fabric. That is the fabricator’s part of the job, so agree it with whoever is sewing the bags. Our [PP geotextile for civil works](/products/geotextile/pp-geotextile-fabric-for-civil-works) is the material made for this duty.',
        ],
      },
      {
        h: 'Fibre, and time in the sun',
        p: [
          'Polypropylene and polyester both resist moisture, rot and most soil chemistry, which is what matters once a bag is underwater; [polyester vs polypropylene](/guides/polyester-vs-polypropylene-nonwoven) sets out how the two differ. Recycled PP is available where the project allows it.',
          'Sunlight is the real enemy before placement. Bags filled and stacked on a bank through a season lose strength, so plan the work so that bags are placed rather than stored, and tell us if your programme means long exposure.',
        ],
      },
      {
        h: 'What to send with your enquiry',
        list: [
          'The work — bank protection, launching apron, scour repair or coastal defence',
          'Bag size and filled weight, and how the bags will be placed',
          'The design values the project sets: mass per unit area, tensile and seam strength, puncture, opening size, permeability',
          'The sand at site, if its grading is known, since it decides the opening size',
          'Fibre preference — PP (virgin or recycled) or polyester',
          'Roll width suited to your bag layout, quantity, and the delivery location',
        ],
        p: [
          'Send it through the [enquiry form](/contact#enquiry); samples are available on request so the fabric can be stitched and tested before a bulk order. For background on buying from an Indian supplier, see [nonwoven manufacturers in India](/guides/nonwoven-manufacturers-in-india).',
        ],
      },
    ],
    faqs: [
      {
        q: 'What fabric are geobags made from?',
        a: 'Geotextile — needle punched nonwoven or woven, depending on the project design. A needle punched nonwoven is thick and absorbs puncture and abrasion while letting water through and holding sand back. We make the needle punched kind.',
      },
      {
        q: 'What GSM is used for geobag fabric?',
        a: 'It is set by the project design, from the bag size, how the bags are placed and the river conditions — not by a standard figure. We produce from 100 to 1200 GSM to the specification you supply.',
      },
      {
        q: 'Do you supply filled or stitched geobags?',
        a: 'No. We supply the geotextile as roll stock, cut to the width that suits your bag size. The bags are cut, stitched and filled by a fabricator or on site, and seam strength depends on that stitching as much as on the fabric.',
      },
      {
        q: 'Can geobags be left in the sun before placing?',
        a: 'Only briefly. Prolonged UV exposure weakens geotextile, so bags are best placed rather than stored filled on a bank. If your programme means long exposure, say so when you enquire.',
      },
      {
        q: 'Which fibre is better for geobags, PP or polyester?',
        a: 'Both resist moisture, rot and most soil chemistry. The choice usually comes from the project design and the conditions at site rather than from a general rule, and we supply PP (virgin or recycled), polyester and blends.',
      },
    ],
    relatedProducts: [
      'geotextile/pp-geotextile-fabric-for-civil-works',
      'geotextile/drainage-soil-erosion-control-geotextile',
      'geotextile/pipeline-cable-protection-geotextile',
    ],
    relatedGuides: ['geotextile-for-drainage-and-erosion-control', 'nonwoven-geotextile-guide', 'nonwoven-manufacturers-in-india'],
  },
  {
    slug: 'geotextile-canal-pond-lining-india',
    title: 'Geotextile for canal and pond lining: the layer under the liner',
    seoTitle: 'Geotextile for Canal & Pond Lining India',
    description:
      'In a lined canal the waterproofing is a geomembrane; the geotextile protects it. What each layer does, and what to specify for the protection layer.',
    readMins: 6,
    published: '2026-10-22',
    intro:
      'Buyers searching for canal lining usually want two different materials without realising it. The layer that stops water is a geomembrane. The layer that stops the geomembrane getting punctured is a geotextile. They are made by different processes and they are not interchangeable. This guide separates them and covers the one we make.',
    sections: [
      {
        h: 'Two layers, two different materials',
        table: {
          head: ['', 'Geomembrane', 'Nonwoven geotextile'],
          rows: [
            ['What it is', 'An impermeable plastic sheet, commonly HDPE or LDPE', 'A permeable needle punched fabric'],
            ['Its job', 'Holding water in — the lining itself', 'Cushioning and protecting the membrane; filtering'],
            ['Water', 'Must not pass through', 'Must pass through'],
            ['Made by', 'Extruding and sheeting polymer', 'Mechanically entangling fibres'],
            ['Do we supply it?', 'No — we do not make geomembrane', 'Yes'],
          ],
        },
        p: [
          'If what you need is the waterproof sheet, we are not your supplier and will say so on the first reply rather than after an enquiry has gone back and forth.',
        ],
      },
      {
        h: 'Where the geotextile sits in a lined canal',
        list: [
          'Under the membrane, as a cushion between it and the prepared subgrade',
          'Over the membrane, where soil or concrete cover is placed on top',
          'In the anchor trench at the top of the slope',
          'Around any subsoil drainage laid to relieve pressure beneath the lining',
        ],
        p: [
          'The filtration role in that last one is the same job covered in our [drainage and erosion control guide](/guides/geotextile-for-drainage-and-erosion-control).',
        ],
      },
      {
        h: 'Why the cushion layer earns its place',
        p: [
          'A geomembrane is only as good as the surface it rests on. Subgrades hold stones, roots and clods however well they are trimmed, and a membrane pressed onto them under a head of water will find the sharp points. The same happens from above when cover material is tipped and spread, or when plant tracks across the lining during construction.',
          'A thick needle punched felt spreads those point loads so the membrane is not pressed onto a single stone. That is why protection layers are specified by the engineer rather than left out to save a line in the bill.',
        ],
      },
      {
        h: 'Earthen canals and ponds with no membrane',
        p: [
          'Not every canal is lined with a membrane. On an earthen channel the geotextile works on its own, as a filter and separator: water passes, the bank soil stays put, and the stone or block pitching above it does not sink into the ground.',
          'On pond and reservoir banks the duty is similar, with wave action at the waterline doing the work that flow does in a canal. Our [drainage and soil erosion control geotextile](/products/geotextile/drainage-soil-erosion-control-geotextile) is made for these applications, and [geobag fabric](/guides/geobag-fabric-nonwoven-geotextile-india) covers the sand-filled bags often used alongside them.',
        ],
      },
      {
        h: 'The numbers come from the design',
        p: [
          'A protection layer is specified on mass per unit area, thickness, puncture and tear resistance, and permeability — and those values follow from the membrane thickness, the subgrade, the head of water and the cover material. The project design sets them.',
          'Where your specification cites a standard or a code of practice, confirm the current edition with your engineer and send us the clauses that apply to the fabric. We produce to a specification; we would be guessing if we offered the design values ourselves.',
        ],
      },
      {
        h: 'What we make, plainly',
        p: [
          'Needle punched and thermal bonded nonwovens in polyester, PP (virgin and recycled), viscose and blends, from 100 to 1200 GSM, in roll widths of 5.0–5.2 m that can be cut narrower. That covers the protection, cushion, separation and filtration layers in a canal or pond.',
          'It does not cover geomembrane, and it does not cover woven geotextile or geogrid. Where a project needs those alongside ours, they come from elsewhere — tell us what the full build-up is and we will quote only our part of it.',
        ],
      },
      {
        h: 'What to send with your enquiry',
        list: [
          'The work — lined canal, earthen canal, pond, reservoir or farm pond',
          'Whether a geomembrane is used, and its thickness if known',
          'Where the geotextile sits: under the membrane, over it, or on its own',
          'The design values: mass per unit area, thickness, puncture, permeability',
          'The subgrade, and what cover material goes on top',
          'Roll width suited to your laying plan, quantity, and the delivery location',
        ],
        p: [
          'Send it through the [enquiry form](/contact#enquiry); samples are available on request. For the wider picture of buying nonwovens from an Indian supplier, see [nonwoven manufacturers in India](/guides/nonwoven-manufacturers-in-india).',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do you supply canal lining material?',
        a: 'We supply the nonwoven geotextile used as the protection, cushion, separation and filtration layer. The waterproof lining itself is a geomembrane, usually HDPE or LDPE, which is a different process and not something we make.',
      },
      {
        q: 'Why is a geotextile needed under a canal liner?',
        a: 'The subgrade holds stones, roots and clods even after trimming, and a membrane pressed onto them under a head of water can puncture. A thick needle punched felt spreads those point loads. The same protection is needed above the membrane where cover material is placed.',
      },
      {
        q: 'What GSM is used for a geomembrane protection layer?',
        a: 'It follows from the membrane thickness, the subgrade, the head of water and the cover material, so the project design sets it. We produce from 100 to 1200 GSM to the specification you supply.',
      },
      {
        q: 'Can geotextile line a pond on its own, without a membrane?',
        a: 'It can separate and filter on its own — holding bank soil in place and keeping pitching from sinking — but it is permeable, so it does not hold water. If the pond has to retain water, that needs an impermeable liner.',
      },
      {
        q: 'Do you supply woven geotextile or geogrid?',
        a: 'No. We make needle punched and thermal bonded nonwovens. Where a project needs woven geotextile or geogrid alongside ours, those come from elsewhere and we quote only our part.',
      },
    ],
    relatedProducts: [
      'geotextile/drainage-soil-erosion-control-geotextile',
      'geotextile/pp-geotextile-fabric-for-civil-works',
      'geotextile/pipeline-cable-protection-geotextile',
    ],
    relatedGuides: ['geotextile-for-drainage-and-erosion-control', 'geobag-fabric-nonwoven-geotextile-india', 'nonwoven-geotextile-guide'],
  },
  {
    slug: 'geotextile-landfill-mining-india',
    title: 'Geotextile for landfill and mining: where the nonwoven layer goes',
    seoTitle: 'Geotextile for Landfill & Mining India',
    description:
      'Where nonwoven geotextile sits in a landfill liner, cap and mine site, why PP is often chosen around leachate, and what to send for a quote.',
    readMins: 7,
    published: '2026-10-23',
    intro:
      'Landfills and mines are hard on fabric. The loads are heavy, the stone is coarse, the liquids can be aggressive and nobody wants to dig the layer up again. A nonwoven geotextile does several different jobs on these sites, and each one is specified differently. This guide maps them out so an enquiry names the right one.',
    sections: [
      {
        h: 'The jobs a nonwoven does on these sites',
        table: {
          head: ['Job', 'Where', 'What the fabric does'],
          rows: [
            ['Protection', 'Over and under a geomembrane liner', 'Spreads point loads from stone and waste so the liner is not punctured'],
            ['Filtration', 'Around leachate and groundwater drains', 'Lets liquid through while holding back fines that would clog the drain'],
            ['Separation', 'Between soil layers, under haul roads', 'Keeps aggregate and soft subgrade from mixing'],
            ['Erosion control', 'Cap slopes, spoil heaps, mine benches', 'Holds soil while vegetation establishes'],
          ],
        },
        p: [
          'One site can need all four. They are rarely the same grade, so a single figure for "landfill geotextile" is usually the first thing that goes wrong in a bill of quantities.',
        ],
      },
      {
        h: 'Inside an engineered landfill',
        p: [
          'An engineered landfill cell is a build-up of layers. At the base sits a liner system, typically a geomembrane, often with a compacted clay or geosynthetic clay liner beneath it. Above the liner is a drainage layer of gravel with pipes that collect leachate, and above that the waste.',
          'The geotextile has two places in that stack. Directly on the geomembrane, a heavy needle punched felt protects it from the drainage gravel and from the weight of waste on top. Above the gravel, a lighter filter fabric stops fine particles from the waste washing down and clogging the drainage layer.',
          'When the cell is full, the capping system repeats the idea in reverse: a barrier to keep rainwater out, a drainage layer above it, and soil on top. Protection, filtration and erosion-control fabrics all have a place there too.',
        ],
      },
      {
        h: 'Why the protection layer is often heavy',
        p: [
          'The geomembrane is the part that keeps leachate out of groundwater, and a single puncture defeats it. Drainage gravel is coarse and angular, and a landfill cell can carry many metres of waste above it, so the protection fabric under that load is usually much heavier than the grades used under a road.',
          'How heavy depends on the stone size, the waste height and the membrane, and the designer usually checks it with a puncture test against the actual gravel. Our range runs from 100 to 1200 GSM, which covers the heavy protection grades as well as the lighter filter fabrics. The canal-lining version of the same idea is covered in our [canal and pond lining guide](/guides/geotextile-canal-pond-lining-india).',
        ],
      },
      {
        h: 'PP or polyester around leachate',
        p: [
          'Leachate and some mine waters can be strongly alkaline or acidic. Polypropylene is generally regarded as resistant across a wide pH range, while polyester can lose strength over time in strongly alkaline conditions, for example in contact with lime or fresh concrete. For that reason PP is often preferred where the fabric sits in leachate or in alkaline water.',
          'That is a general rule, not a substitute for the design. The project engineer decides the polymer from the chemistry of the site, and we make both. For the wider comparison, see our [nonwoven geotextile guide](/guides/nonwoven-geotextile-guide).',
        ],
      },
      {
        h: 'On mine sites',
        list: [
          'Haul and access roads over soft ground, where a separation layer keeps aggregate from sinking into the subgrade',
          'Liners for process, tailings and water ponds, where the geotextile protects the geomembrane as it does in a landfill',
          'Drains around pits, dumps and benches, wrapped in filter fabric',
          'Spoil heaps and reclaimed slopes, where the fabric holds soil while vegetation takes',
        ],
        p: [
          'The road case is the same separation job described in our [geotextile for road construction guide](/guides/geotextile-for-road-construction), only with heavier trucks. Sand-filled bags for bunds and toe protection are covered in the [geobag fabric guide](/guides/geobag-fabric-nonwoven-geotextile-india).',
        ],
      },
      {
        h: 'The specification belongs to the design',
        p: [
          'Landfill and mine works are usually designed to rules on waste management, pollution control and mine closure, and the fabric values follow from that design: mass per unit area, thickness, puncture and tear resistance, permeability, apparent opening size and polymer. Where your specification cites a standard, a guideline or a code of practice, confirm the current edition with your engineer and send us the clauses that apply to the geotextile.',
          'We produce to a specification and can share test data for the grade you order. We do not set design values ourselves, and we do not make geomembrane, geosynthetic clay liner, woven geotextile or geogrid.',
        ],
      },
      {
        h: 'What to send with your enquiry',
        list: [
          'The site — landfill base liner, landfill cap, tailings or process pond, haul road, spoil slope',
          'The job for each layer: protection, filtration, separation or erosion control',
          'The design values for each layer: GSM, thickness, puncture, permeability, opening size',
          'Polymer if the design fixes it, or the leachate or water chemistry if it does not',
          'Roll width for your laying plan, quantity per grade, and the delivery location',
        ],
        p: [
          'Send it through the [enquiry form](/contact#enquiry); samples are available on request. For buying nonwovens from India more generally, see [nonwoven manufacturers in India](/guides/nonwoven-manufacturers-in-india).',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is geotextile used for in a landfill?',
        a: 'Mainly to protect the geomembrane liner from puncture by drainage gravel and waste, and to filter fines out of the leachate drainage layer so it does not clog. It is also used for separation and erosion control in the capping system.',
      },
      {
        q: 'What GSM geotextile is used to protect a landfill liner?',
        a: 'It depends on the drainage stone size, the waste height and the membrane, and the designer usually confirms it with a puncture test. Protection layers are typically much heavier than road grades. We produce from 100 to 1200 GSM to the specification you supply.',
      },
      {
        q: 'Is PP or polyester geotextile better for landfill?',
        a: 'PP is often preferred where the fabric is in contact with leachate or alkaline water, because polypropylene is generally resistant across a wide pH range while polyester can weaken in strongly alkaline conditions. The project engineer decides from the site chemistry; we make both.',
      },
      {
        q: 'Where is geotextile used in mining?',
        a: 'Under haul and access roads on soft ground, as a protection layer under pond and tailings liners, around drains, and on spoil heaps and reclaimed slopes to hold soil while vegetation establishes.',
      },
      {
        q: 'Do you supply geomembrane or GCL for landfills?',
        a: 'No. We make needle punched and thermal bonded nonwoven geotextile. Geomembrane, geosynthetic clay liner, woven geotextile and geogrid come from other suppliers, and we quote only our part of the build-up.',
      },
    ],
    relatedProducts: [
      'geotextile/pp-geotextile-fabric-for-civil-works',
      'geotextile/drainage-soil-erosion-control-geotextile',
      'geotextile/pipeline-cable-protection-geotextile',
    ],
    relatedGuides: ['geotextile-canal-pond-lining-india', 'nonwoven-geotextile-guide', 'geotextile-for-drainage-and-erosion-control'],
  },
  {
    slug: 'automotive-felt-oem-interiors-india',
    title: 'Automotive felt for OEM interiors: headliner, hood insulator and carpet underlay',
    seoTitle: 'Automotive Felt for OEM Interiors India',
    description:
      'What each interior part asks of its felt: headliner, hood insulator, dash insulator, carpet underlay, boot and wheel-arch liners. For component makers.',
    readMins: 7,
    published: '2026-10-23',
    intro:
      'A component maker does not buy "automotive felt". It buys a felt for a headliner, another for a hood insulator and another for the carpet underlay, and each one is judged on different properties. This guide goes part by part, for moulders, laminators and Tier-1 suppliers sourcing felt from India.',
    sections: [
      {
        h: 'Part by part: what the felt has to do',
        table: {
          head: ['Part', 'Main job of the felt', 'What usually matters most'],
          rows: [
            ['Headliner', 'Substrate or backing layer under the face fabric', 'Light weight, holding a moulded shape, sag resistance'],
            ['Hood (bonnet) insulator', 'Absorbing engine noise and shielding heat', 'Heat resistance, sound absorption, thickness'],
            ['Dash insulator (firewall)', 'Blocking engine-bay noise from the cabin', 'Density and thickness, mouldability around openings'],
            ['Carpet underlay', 'Cushioning and absorbing road noise under the carpet', 'Thickness, resilience, weight per square metre'],
            ['Boot (trunk) liner', 'Lining and finishing the load area', 'Abrasion resistance, appearance, mouldability'],
            ['Wheel-arch liner', 'Damping tyre and stone noise', 'Durability, resistance to water and grit'],
          ],
        },
        p: [
          'The values behind each column come from your drawing and your test plan. The table only shows why one GSM figure for "car felt" does not work across a vehicle.',
        ],
      },
      {
        h: 'Moulded parts and thermal bonding',
        p: [
          'Many interior parts are moulded to shape in a heated press. Felts made for this usually carry a share of low-melt fibre: when heated, that fibre softens and bonds, and when the part cools it holds the moulded shape. Thermal bonding is one of the two processes we run, so a felt can be built for moulding rather than adapted to it.',
          'For flat parts that are only cut, stitched or laminated, a plain needle punched felt is often enough. Tell us which route the part takes, and at what temperature and time it is pressed, and the construction follows from that.',
        ],
      },
      {
        h: 'Fibre: polyester, PP or blends',
        p: [
          'Polyester generally tolerates higher temperatures than polypropylene, so it is the usual choice near the engine. PP is lighter and is often used in cabin parts away from heat. Blends and recycled fibre are also used, depending on the part and the programme. The [polyester vs polypropylene guide](/guides/polyester-vs-polypropylene-nonwoven) sets out the trade-offs in more detail.',
          'Interior materials are usually tested for flammability, odour and fogging to the vehicle maker\'s own specification. Tell us which tests your programme runs and ask what data we can share for the grade you are sampling; we will not claim a result we have not tested.',
        ],
      },
      {
        h: 'From sample to production',
        list: [
          'Send the drawing or part description, the target GSM and thickness, and your process (moulded, laminated, die-cut or stitched)',
          'Trial the sample in your own press and against your own acoustic, thermal and flammability tests',
          'Adjust GSM, thickness, density or fibre mix after the trial; the felt is made to order, so it can change',
          'Agree the roll width and length that suit your cutting layout; we produce up to 5.0–5.2 m wide and can slit narrower',
        ],
        p: [
          'If your programme needs particular documentation from a supplier, ask at the start, so the answer comes before the trials rather than after them.',
        ],
      },
      {
        h: 'Where our range fits',
        p: [
          'General interior felt is on the [automotive needle punched felt](/products/automotive/automotive-needle-punched-felt) page; heat and sound together on [acoustic and thermal insulation felt](/products/automotive/acoustic-thermal-insulation-felt); and noise-first parts on [NVH and sound insulation fabric](/products/automotive/nvh-sound-insulation-fabric). If you are new to NVH, start with our [automotive NVH felt guide](/guides/automotive-nvh-felt-guide), which explains how felt absorbs sound and heat.',
          'We supply the felt. We do not mould or assemble finished parts, and we do not make the face fabrics, foams or films that are laminated to it.',
        ],
      },
      {
        h: 'What to send with your enquiry',
        list: [
          'The part, the vehicle segment, and whether it is moulded, laminated, die-cut or stitched',
          'GSM, thickness and density, or the acoustic and thermal target',
          'Fibre preference, and any recycled-content requirement',
          'The heat the part sees, and the flammability, odour and fogging tests it must pass',
          'Colour, surface finish, roll width and length, and annual or batch quantity',
          'Delivery location: your plant in India or a port abroad',
        ],
        p: [
          'Send it through the [enquiry form](/contact#enquiry); samples are available on request. For buying from an Indian supplier more generally, see [nonwoven manufacturers in India](/guides/nonwoven-manufacturers-in-india).',
        ],
      },
    ],
    faqs: [
      {
        q: 'What felt is used in a car headliner?',
        a: 'A light needle punched or thermal bonded felt is commonly used as the substrate or backing under the face fabric. It needs to hold its moulded shape and resist sagging, so moulded headliner felts often include low-melt fibre that bonds when the part is pressed.',
      },
      {
        q: 'What material is a hood insulator made of?',
        a: 'Hood insulators are commonly made from a heat-tolerant nonwoven felt, often polyester-based, sometimes with a facing layer. The felt absorbs engine noise and shields the bonnet from heat. We supply the felt; the facing and the moulding are done by the component maker.',
      },
      {
        q: 'Can you make mouldable felt for automotive parts?',
        a: 'Yes. We run thermal bonding as well as needle punching, so the felt can be built with low-melt fibre to bond and hold its shape when pressed. Send your press temperature and cycle time and we will suggest a construction to trial.',
      },
      {
        q: 'Do you supply finished moulded parts?',
        a: 'No. We supply felt in rolls, which can be slit to width. Moulding, lamination and assembly into finished parts are done by the component maker.',
      },
      {
        q: 'Is polyester or PP felt better for car interiors?',
        a: 'Polyester generally handles heat better, so it is the usual choice near the engine. PP is lighter and is often used in cabin parts away from heat. The part, its temperature and the vehicle maker\'s specification decide.',
      },
    ],
    relatedProducts: [
      'automotive/automotive-needle-punched-felt',
      'automotive/acoustic-thermal-insulation-felt',
      'automotive/nvh-sound-insulation-fabric',
    ],
    relatedGuides: ['automotive-nvh-felt-guide', 'polyester-vs-polypropylene-nonwoven', 'needle-punched-vs-thermal-bonded-nonwoven'],
  },

  {
    slug: 'geotextile-roll-weight-and-coverage',
    title: 'Geotextile roll weight calculator: coverage from GSM, width and length',
    seoTitle: 'Geotextile Roll Weight Calculator',
    description:
      'Free geotextile roll calculator: enter GSM, width and length for roll weight and area, square metres per tonne, rolls needed, and container loading notes.',
    readMins: 5,
    published: '2026-10-25',
    intro:
      'Buyers of geotextile ask the same practical questions before they order: how heavy is one roll, how much ground does a tonne cover, and how many rolls will a container take? All three come from one formula. This guide shows it, works through examples for the wide rolls we make, and explains what the answer does and does not tell you.',
    sections: [
      {
        h: 'Roll calculator',
        tool: 'roll-calculator',
        p: [
          'Enter the GSM, the roll width and length, and the area you need to cover. The figures update as you type. The formula behind them is set out below, with worked examples for 5.0 m and 5.2 m wide rolls.',
        ],
      },
      {
        h: 'The formula',
        p: [
          'GSM is grams per square metre, so the nominal weight of a roll is its area multiplied by its GSM.',
        ],
        list: [
          'Area in m² = width in metres × length in metres',
          'Weight in kg = GSM × area in m² ÷ 1,000',
          'Example: 200 GSM × 5.2 m × 100 m ÷ 1,000 = 104 kg',
        ],
      },
      {
        h: 'Worked examples: 100 m rolls',
        p: [
          'These are nominal fabric weights for a roll 100 m long. Our rolls are 5.0–5.2 m wide and can be cut narrower. Our standard roll is 50 m long (other lengths on request); the next section works it out for 50 m.',
        ],
        list: [
          '100 GSM: 50 kg at 5.0 m wide, 52 kg at 5.2 m wide',
          '150 GSM: 75 kg at 5.0 m wide, 78 kg at 5.2 m wide',
          '200 GSM: 100 kg at 5.0 m wide, 104 kg at 5.2 m wide',
          '300 GSM: 150 kg at 5.0 m wide, 156 kg at 5.2 m wide',
          '400 GSM: 200 kg at 5.0 m wide, 208 kg at 5.2 m wide',
          '600 GSM: 300 kg at 5.0 m wide, 312 kg at 5.2 m wide',
        ],
      },
      {
        h: 'Our standard 50 m roll',
        p: [
          'A 50 m roll covers 250 m² at 5.0 m wide and 260 m² at 5.2 m wide, before overlaps. Its nominal fabric weight is half the 100 m figure above:',
        ],
        list: [
          '100 GSM: 25 kg at 5.0 m wide, 26 kg at 5.2 m wide',
          '200 GSM: 50 kg at 5.0 m wide, 52 kg at 5.2 m wide',
          '300 GSM: 75 kg at 5.0 m wide, 78 kg at 5.2 m wide',
          '400 GSM: 100 kg at 5.0 m wide, 104 kg at 5.2 m wide',
          '600 GSM: 150 kg at 5.0 m wide, 156 kg at 5.2 m wide',
        ],
      },
      {
        h: 'How much does one tonne cover?',
        p: [
          'Turn the formula round: area in m² = 1,000,000 ÷ GSM for each tonne of fabric. A heavier fabric covers less ground per tonne, so compare price per square metre, not price per kilogram.',
        ],
        list: [
          '100 GSM: 10,000 m² per tonne',
          '150 GSM: about 6,667 m² per tonne',
          '200 GSM: 5,000 m² per tonne',
          '300 GSM: about 3,333 m² per tonne',
          '400 GSM: 2,500 m² per tonne',
        ],

      },
      {
        h: 'Finding the length you need',
        p: [
          'If you know the area to cover, divide it by the roll width to get the length. A 2,600 m² area with 5.2 m rolls needs 500 m of fabric before overlaps, so allow for overlap and waste in the design, which your engineer sets.',
        ],
      },
      {
        h: 'What the calculation does not include',
        list: [
          'The core and the packaging, which add to the shipping weight',
          'The manufacturing tolerance on GSM, so a roll can run slightly above or below nominal',
          'Overlaps, anchor trenches and cutting waste on site',
        ],
        p: [
          'Treat the figure as a nominal fabric weight. Packed and shipped weights are confirmed with your order.',
        ],
      },
      {
        h: 'Wide rolls and container loading',
        p: [
          'Rolls 5.0–5.2 m wide are longer than the width of a shipping container, so they are loaded lying lengthwise. A 20 ft container is about 5.9 m long inside, which leaves little spare room beside a 5.2 m roll. Confirm the loading plan and the container weight limit with your freight forwarder before you fix the roll length.',
          'If your site handling or your container plan prefers a narrower roll, rolls can be cut narrower than 5.0 m.',
        ],
      },
      {
        h: 'Ordering by weight or by area',
        p: [
          'Tell us the GSM, the width, the length per roll and the number of rolls, or the area in m². Our export team will confirm the roll count and the shipped weight with your quote. Read how GSM works in our [GSM guide](/guides/gsm-in-nonwoven-fabric), how to choose it for roads in the [road geotextile GSM guide](/guides/geotextile-gsm-for-road-construction-india), and what to include in an enquiry in the [quote checklist](/guides/how-to-request-a-nonwoven-felt-quote). Samples are available on request.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How do I calculate the weight of a geotextile roll?',
        a: 'Multiply GSM by the width in metres and the length in metres, then divide by 1,000 to get kilograms. A 200 GSM roll 5.2 m wide and 100 m long weighs about 104 kg of fabric.',
      },
      {
        q: 'How much area and weight is in a standard 50 m roll?',
        a: 'A 50 m roll covers 250 m² at 5.0 m wide or 260 m² at 5.2 m wide. At 200 GSM that is about 50–52 kg of fabric. Other roll lengths are available on request.',
      },
      {
        q: 'How many square metres does one tonne of geotextile cover?',
        a: 'Divide 1,000,000 by the GSM. A 200 GSM fabric covers 5,000 m² per tonne, and a 300 GSM fabric covers about 3,333 m².',
      },
      {
        q: 'Is the calculated weight the shipping weight?',
        a: 'No. It is the nominal fabric weight. The core, the packaging and the GSM tolerance change the real figure, so confirm packed weights with your order.',
      },
      {
        q: 'What roll width and GSM can you supply?',
        a: 'Roll widths of 5.0–5.2 m, which can be cut narrower, across a 100–1200 GSM range, with a standard roll length of 50 m (other lengths on request).',
      },
    ],
    relatedProducts: [
      'geotextile/pp-geotextile-fabric-for-civil-works',
      'geotextile/drainage-soil-erosion-control-geotextile',
      'industrial/customised-nonwoven-solutions',
    ],
    relatedGuides: ['gsm-in-nonwoven-fabric', 'geotextile-gsm-for-road-construction-india', 'how-to-request-a-nonwoven-felt-quote'],
  },

  {
    slug: 'geotextile-retaining-wall-drainage-india',
    title: 'Geotextile behind retaining walls in India: the filter that keeps drainage working',
    seoTitle: 'Geotextile for Retaining Walls India',
    description:
      'Where nonwoven geotextile goes behind a retaining wall in India, why it stops the drainage layer clogging in monsoon, common mistakes, and what to specify.',
    readMins: 6,
    published: '2026-10-25',
    intro:
      'A retaining wall holds back soil, and the wall can only do that safely if water does not build up behind it. A drainage layer of stone or a drainage board carries the water out through weep holes, and a nonwoven geotextile keeps the soil from washing into that layer. This guide covers where the fabric goes, what goes wrong when it is left out or chosen badly, and what to specify.',
    sections: [
      {
        h: 'Why water behind a wall matters',
        p: [
          'Water that cannot escape adds pressure on the wall on top of the push from the soil itself. In a monsoon, soil behind a wall can be saturated for weeks. Walls fail far more often from trapped water than from the soil alone, which is why nearly every retaining wall design includes drainage.',
        ],
      },
      {
        h: 'What the geotextile does',
        p: [
          'The drainage layer works only while it stays open. If fine soil washes into the stone, the voids fill, flow slows and pressure builds. A needle punched nonwoven geotextile is placed between the retained soil and the drainage layer as a filter: water passes through it, soil stays behind it.',
        ],
        list: [
          'Filtration — lets water into the drainage layer and holds soil particles back',
          'Separation — stops the drainage stone from mixing into the soil',
          'Protection — cushions a membrane or pipe against sharp stone, where one is used',
        ],
      },
      {
        h: 'Where it goes',
        list: [
          'On the soil side of the drainage stone or drainage board, wrapped so the stone is enclosed',
          'Around the perforated pipe at the toe or base of the wall, with the pipe inside a stone surround',
          'In front of weep holes, so soil is not carried out through the opening',
          'Under the base stone of some walls, as a separator over soft ground',
        ],
        p: [
          'The exact arrangement is shown on the design drawing. Follow it, and ask the project engineer if the drawing does not name the fabric.',
        ],
      },
      {
        h: 'Common mistakes',
        list: [
          'Leaving the fabric out, so fines clog the stone within a few seasons',
          'Using an impermeable plastic sheet instead of a permeable geotextile, which blocks the very water the drain is meant to carry',
          'Choosing a fabric by appearance, not by the weight and filtration figures the soil needs',
          'Not overlapping or wrapping the stone properly, which leaves a path for soil to reach it',
          'Leaving the fabric uncovered in sunlight; polypropylene is sensitive to prolonged UV exposure',
        ],
      },
      {
        h: 'Roads in the hills and on slopes',
        p: [
          'Retaining walls on hill roads, ghat sections and embankments face steep slopes and heavy runoff, and many walls are built from stone masonry or gabions with weep holes through the face. The same rule applies: water has to leave, and the soil has to stay. A geotextile filter between the fill and the drainage stone does that on both stone and concrete walls. See our guide on [geotextile for drainage and erosion control](/guides/geotextile-for-drainage-and-erosion-control).',
        ],
      },
      {
        h: 'What to specify when you order',
        list: [
          'Function — filtration and separation behind the wall',
          'Fibre — PP (virgin or recycled) or polyester',
          'GSM and thickness, set by the design; heavier grades where angular stone could puncture the fabric',
          'The filtration figures your design requires for the soil, such as pore size and permeability',
          'Roll width and length, so overlaps and waste fit the wall',
        ],
        p: [
          'On public works, the technical specification decides the grade and test values; confirm the current edition with your project engineer and send us the figures it asks for. Needle punched geotextile is made to order across 100–1200 GSM in rolls 5.0–5.2 m wide, and samples are available on request. Our [drainage and erosion control geotextile](/products/geotextile/drainage-soil-erosion-control-geotextile) is made for this role; send the requirement through the [enquiry form](/contact#enquiry).',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is geotextile needed behind a retaining wall?',
        a: 'Almost always where there is a drainage layer. The geotextile filters the retained soil so the stone or drainage board behind the wall does not clog, and the wall keeps draining.',
      },
      {
        q: 'Which geotextile is used behind retaining walls?',
        a: 'A permeable needle punched nonwoven geotextile of polypropylene or polyester is commonly used as the filter. The grade is set by the design and the soil.',
      },
      {
        q: 'Can I use plastic sheet instead of geotextile?',
        a: 'No, not as the filter. An impermeable sheet blocks the water the drain is meant to carry. The filter must let water through and hold the soil back.',
      },
      {
        q: 'What roll width and GSM can you supply?',
        a: 'Roll widths of 5.0–5.2 m, which can be cut narrower, across a 100–1200 GSM range, with a standard roll length of 50 m (other lengths on request).',
      },
    ],
    relatedProducts: [
      'geotextile/drainage-soil-erosion-control-geotextile',
      'geotextile/pp-geotextile-fabric-for-civil-works',
      'geotextile/pipeline-cable-protection-geotextile',
    ],
    relatedGuides: ['geotextile-for-drainage-and-erosion-control', 'nonwoven-geotextile-guide', 'geotextile-roll-weight-and-coverage'],
  },

  {
    slug: 'felt-grow-bag-fabric-nonwoven-india',
    title: 'Felt grow bag fabric from India: what to specify in a nonwoven for grow bags',
    seoTitle: 'Felt Grow Bag Fabric: Nonwoven Guide India',
    description:
      'What bag makers should specify when buying nonwoven felt for grow bags and root bags: GSM, thickness, fibre, colour, UV exposure and roll width.',
    readMins: 5,
    published: '2026-10-25',
    intro:
      'Grow bags made from nonwoven felt let air reach the roots and let excess water drain, which is why nurseries and balcony gardeners choose them over plastic pots. The bag is only as good as the fabric it is stitched from. This guide is for bag makers and importers who buy the felt as roll stock and need to know what to specify.',
    sections: [
      {
        h: 'Why felt works for plants',
        list: [
          'Air passes through the fabric, so roots near the wall are pruned by the air instead of circling',
          'Water drains through the wall, which reduces waterlogging',
          'The fabric is flexible and light, and it folds flat for shipping and storage',
          'A thick felt insulates the root zone from sudden heat',
        ],
        p: [
          'These effects depend on the weight and thickness of the felt, which is why they belong in the specification.',
        ],
      },
      {
        h: 'GSM and thickness',
        p: [
          'A heavier, thicker felt keeps its shape when the bag is full of wet soil and lasts through more seasons. A lighter felt costs less per bag but sags and tears sooner, particularly in larger bags. Match the weight to the bag size and the number of seasons you want it to last. Our [GSM guide](/guides/gsm-in-nonwoven-fabric) explains how weight relates to thickness and feel.',
        ],
      },
      {
        h: 'Fibre: polypropylene, polyester or recycled',
        list: [
          'Polypropylene — light, does not absorb water and resists rot; sensitive to long, direct sunlight',
          'Polyester — stable, with good recovery; a common choice for durable felt',
          'Recycled fibre — available as recycled PP or recycled PET in some grades; confirm the colour and consistency with a sample',
        ],
        p: [
          'See [polyester vs polypropylene](/guides/polyester-vs-polypropylene-nonwoven) for how the fibres compare. If the bags will sit in full sun for years, tell us before you order and ask what can be supplied for outdoor exposure.',
        ],
      },
      {
        h: 'Colour',
        p: [
          'Grey and black are common for grow bags. Darker colours absorb more heat in direct sun, so the colour affects the root zone as well as the look. Colour is set to order, and an approved sample fixes the shade for repeat orders.',
        ],
      },
      {
        h: 'Roll width and cutting',
        p: [
          'Our rolls are 5.0–5.2 m wide and can be cut narrower, which lets a bag maker choose the width that wastes the least fabric when cutting panels. Give us your bag dimensions and we can discuss a roll width and length that suit.',
        ],
      },
      {
        h: 'What we supply, and what the bag maker does',
        p: [
          'We supply the nonwoven felt in rolls. Cutting, stitching, handles and finished bags are made by the bag maker. Samples are available on request, so you can test stitching and a filled bag before you order in volume. Send your specification through the [enquiry form](/contact#enquiry), or use the [quote checklist](/guides/how-to-request-a-nonwoven-felt-quote). See our [multi-colour needle punched felt](/products/industrial/multi-colour-needle-punched-felt) for colour options.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What fabric are felt grow bags made from?',
        a: 'Needle punched nonwoven felt, usually polypropylene, polyester or recycled fibre. It is permeable to air and water, flexible and light.',
      },
      {
        q: 'What GSM is used for felt grow bags?',
        a: 'It depends on the bag size and the life you want. Heavier felt holds its shape and lasts longer, and lighter felt is cheaper but sags sooner. Send your bag size and we will suggest a weight to sample.',
      },
      {
        q: 'Do you make finished grow bags?',
        a: 'We supply the felt in rolls. Cutting, stitching and finished bags are made by the bag maker.',
      },
      {
        q: 'What colours are available?',
        a: 'Colour is set to order, and grey and black are common for grow bags. An approved sample fixes the shade for repeat orders.',
      },
    ],
    relatedProducts: [
      'industrial/multi-colour-needle-punched-felt',
      'industrial/customised-nonwoven-solutions',
      'industrial/packaging-protective-felt',
    ],
    relatedGuides: ['gsm-in-nonwoven-fabric', 'polyester-vs-polypropylene-nonwoven', 'nonwoven-manufacturers-in-india'],
  },

  {
    slug: 'exhibition-carpet-needle-punched-nonwoven-india',
    title: 'Needle punched exhibition carpet roll from India: what to specify',
    seoTitle: 'Needle Punched Exhibition Carpet Roll India',
    description:
      'What event and exhibition carpet makers and importers should specify in a needle punched nonwoven roll: fibre, GSM, colour consistency, width and roll length.',
    readMins: 5,
    published: '2026-10-25',
    intro:
      'Exhibition and event carpet is laid for days, walked on by crowds, rolled up and laid again. A needle punched nonwoven suits it because it is dense, hard-wearing and cheap enough to be treated as consumable. This guide is for carpet makers, converters and importers who buy the nonwoven as roll stock and need to know what to specify.',
    sections: [
      {
        h: 'What the carpet has to do',
        list: [
          'Lie flat and stay flat when walked on, wheeled over and rolled',
          'Hold its colour evenly across the whole roll, so panels match on the stand',
          'Resist crushing and pilling under foot traffic',
          'Roll and unroll without cracking or shedding fibre',
          'Be wide enough that few seams are needed',
        ],
      },
      {
        h: 'Fibre',
        list: [
          'Polyester (PET) — hard-wearing with good recovery; widely used for exhibition carpet',
          'Polypropylene — light and does not absorb water; a lower-cost option for short-term use',
          'Recycled fibre — available as recycled PP or PET in some grades; confirm the colour range with a sample',
        ],
        p: [
          'See [polyester vs polypropylene](/guides/polyester-vs-polypropylene-nonwoven) for how they compare.',
        ],
      },
      {
        h: 'GSM and thickness',
        p: [
          'A heavier, thicker carpet feels more solid underfoot and survives more events, but costs more and is heavier to ship and handle. A lighter carpet suits a short stand with light traffic. Our weights span 100–1200 GSM, so the weight can be matched to the job instead of defaulting to a standard grade. The [GSM guide](/guides/gsm-in-nonwoven-fabric) explains how weight relates to thickness and feel.',
        ],
      },
      {
        h: 'Colour consistency',
        p: [
          'On a show floor, a visible difference in shade between two panels is the commonest complaint. Approve a sample first, and ask that repeat orders are matched to it. Our [multi-colour needle punched felt](/products/industrial/multi-colour-needle-punched-felt) is made in a range of colours, set to order.',
        ],
      },
      {
        h: 'Roll width and length',
        p: [
          'Our rolls are 5.0–5.2 m wide and can be cut narrower to the widths you lay, with a standard roll length of 50 m (other lengths on request). A wide roll means fewer seams on a large hall. Tell us your standard widths and roll lengths so we can quote against them.',
        ],
      },
      {
        h: 'Roll stock, and what is finished elsewhere',
        p: [
          'We supply the needle punched nonwoven in rolls. Surface finishing such as ribbing, backing or printing is a separate step; if you need any of it, say so in your enquiry so we can confirm what can be arranged before you order. Samples are available on request. Send your specification through the [enquiry form](/contact#enquiry) or use the [quote checklist](/guides/how-to-request-a-nonwoven-felt-quote). Related: [carpet backing and flooring underlay felt](/guides/carpet-backing-and-underlay-felt).',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is exhibition carpet made of?',
        a: 'Usually a needle punched nonwoven made from polyester or polypropylene fibre. It is dense, hard-wearing and economical for short-term use.',
      },
      {
        q: 'What weight of carpet is best for an exhibition?',
        a: 'It depends on traffic and how many events the carpet must survive. Heavier carpet feels more solid and lasts longer, and lighter carpet suits short, light-use stands.',
      },
      {
        q: 'How do I keep the colour even between panels?',
        a: 'Approve a sample and ask that repeat orders are matched to it. Order enough from one batch for the whole hall where you can.',
      },
      {
        q: 'What roll width can you supply?',
        a: 'Roll widths of 5.0–5.2 m, which can be cut narrower, with a standard roll length of 50 m (other lengths on request).',
      },
    ],
    relatedProducts: [
      'industrial/multi-colour-needle-punched-felt',
      'industrial/carpet-backing-felt',
      'industrial/flooring-underlay-felt',
    ],
    relatedGuides: ['carpet-backing-and-underlay-felt', 'gsm-in-nonwoven-fabric', 'polyester-vs-polypropylene-nonwoven'],
  },
  {
    slug: 'luggage-bag-support-felt-india',
    title: 'Luggage and bag support felt: giving a bag its shape',
    seoTitle: 'Luggage & Bag Support Felt India',
    description:
      'Where support felt goes in a bag, case or backpack, how it compares with foam and board, and what to tell a felt supplier about stiffness and finish.',
    readMins: 6,
    published: '2026-10-24',
    intro:
      'A soft-sided bag holds its shape because of layers the buyer never sees. Needle punched felt is one of the most common of them: it sits between the outer fabric and the lining, gives the panel body, and takes some of the knocks. This guide is for bag, luggage and case makers choosing that layer.',
    sections: [
      {
        h: 'Where the felt goes',
        table: {
          head: ['Part of the bag', 'What the felt does'],
          rows: [
            ['Front, back and side panels', 'Gives the panel body so it stands up rather than collapses'],
            ['Base', 'Adds firmness and cushioning where the bag is set down'],
            ['Laptop and tablet sleeves', 'Cushions the device against knocks'],
            ['Organiser pockets and dividers', 'Keeps compartments upright and separate'],
            ['Straps and handles', 'Pads and spreads the load across a wider area'],
            ['Cases and pouches', 'Lines and protects the contents from scratches'],
          ],
        },
      },
      {
        h: 'Felt, foam or board',
        table: {
          head: ['', 'Needle punched felt', 'Foam', 'Rigid board'],
          rows: [
            ['Shape', 'Firm but flexible', 'Soft, springs back', 'Stiff, holds a flat shape'],
            ['Sewing', 'Stitches cleanly, holds the seam', 'Can tear at the needle line', 'Hard to stitch through'],
            ['Bonding and lamination', 'Takes adhesive and heat lamination well', 'Depends on the foam', 'Usually glued, not laminated'],
            ['Where it suits', 'Panels, bases, dividers, sleeves', 'Padding where softness matters most', 'Hard-wearing bases and frames'],
          ],
        },
        p: [
          'Many bags use more than one: board in the base, felt in the panels, foam in the laptop sleeve. The table is about where felt earns its place, not a claim that it replaces the others everywhere.',
        ],
      },
      {
        h: 'How stiffness is set',
        p: [
          'A felt gets stiffer as its weight, thickness and density go up, and the fibre and process matter too. Thermal bonded felt, where low-melt fibre is heat-set through the web, is generally firmer for the same weight than a felt that is only needle punched. Both are processes we run, so the felt can be built to the stiffness the panel needs.',
          'There is no single right GSM for a bag. A small pouch and a cabin case ask for very different panels, so start from a sample of the material you use today, or from the feel you want, and we will match or adjust it. The [GSM guide](/guides/gsm-in-nonwoven-fabric) explains what the number does and does not tell you.',
        ],
      },
      {
        h: 'Converting it in your factory',
        list: [
          'Cut by knife, die or press to your pattern',
          'Stitched into the panel with the outer fabric and lining',
          'Laminated or bonded to fabric, PU, PVC or leather',
          'Embossed where a surface pattern is wanted',
        ],
        p: [
          'Tell us how the felt is cut and joined in your line. A felt that will be heat-laminated, for example, is built differently from one that is only stitched. Our [luggage and bag support felt](/products/industrial/luggage-bag-support-felt) page lists the material in more detail.',
        ],
      },
      {
        h: 'What we supply, and what we do not',
        p: [
          'We supply the felt in rolls, slit to the width you need, in polyester, PP or blends, from 100 to 1200 GSM, with thickness and colour set per order. We do not make bags, cut components, or the fabrics, foams and boards used alongside the felt.',
        ],
      },
      {
        h: 'What to send with your enquiry',
        list: [
          'The product: backpack, luggage, laptop bag, case, pouch or organiser',
          'Which part the felt goes in, and how stiff or soft it should feel',
          'A sample of the material you use today, if you have one',
          'GSM and thickness if you know them, and the colour',
          'How it is converted: cut, stitched, laminated, bonded or embossed',
          'Roll width, quantity, and the delivery location',
        ],
        p: [
          'Send it through the [enquiry form](/contact#enquiry); samples are available on request. The [quote checklist](/guides/how-to-request-a-nonwoven-felt-quote) covers the general details we ask for.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What material is used inside bags to give them shape?',
        a: 'Needle punched nonwoven felt is commonly used between the outer fabric and the lining to give panels body and structure. Bags often combine it with foam for padding and rigid board for the base.',
      },
      {
        q: 'What GSM felt is used for bags and luggage?',
        a: 'It depends on the product and the part. A pouch and a cabin case need very different panels. Send a sample of the material you use or describe the feel you want, and we will match it from our 100 to 1200 GSM range.',
      },
      {
        q: 'Is felt or foam better for a laptop bag?',
        a: 'Many laptop bags use both: foam where softness matters most, felt where the panel needs body and clean stitching. The design decides; we supply the felt.',
      },
      {
        q: 'Can bag support felt be laminated to fabric?',
        a: 'Yes. It can be laminated or bonded to fabric, PU, PVC or leather, as well as stitched. Tell us the method so the felt is built for it.',
      },
      {
        q: 'Do you supply cut components or finished bags?',
        a: 'No. We supply felt in rolls, slit to width. Cutting, stitching and assembly are done by the bag maker.',
      },
    ],
    relatedProducts: [
      'industrial/luggage-bag-support-felt',
      'industrial/packaging-protective-felt',
      'industrial/customised-nonwoven-solutions',
    ],
    relatedGuides: ['gsm-in-nonwoven-fabric', 'needle-punched-vs-thermal-bonded-nonwoven', 'how-to-request-a-nonwoven-felt-quote'],
  },
  {
    slug: 'packaging-protective-felt-india',
    title: 'Packaging and protective felt: keeping finished surfaces unmarked',
    seoTitle: 'Packaging & Protective Felt India',
    description:
      'Where protective felt is used in packing and transit, how it compares with bubble wrap and foam, and what to specify for the goods you ship.',
    readMins: 6,
    published: '2026-10-24',
    intro:
      'A painted panel, a polished casting or a sheet of glass can reach a customer intact but scratched, and a scratch is a reject. Protective felt is the soft layer that sits against a finished surface during storage, handling and transport. This guide is for manufacturers and packers choosing it.',
    sections: [
      {
        h: 'Where protective felt is used',
        list: [
          'Interleaving between stacked sheets, panels and glass',
          'Lining crates, trays, bins and returnable packaging',
          'Wrapping furniture, appliances and machined parts',
          'Pads on racks, fixtures and trolleys so parts do not rub on metal',
          'Separators between parts packed in the same box',
        ],
        p: [
          'In most of these the felt is not the whole pack. It is the layer that touches the product, inside a box, crate or stillage that takes the heavier loads.',
        ],
      },
      {
        h: 'Felt, bubble wrap or foam',
        table: {
          head: ['', 'Needle punched felt', 'Bubble wrap', 'Foam sheet (e.g. EPE)'],
          rows: [
            ['Contact surface', 'Soft fibres, no plastic film on the product', 'Plastic film', 'Smooth foam'],
            ['Use', 'Reusable over many trips if kept clean', 'Usually single use', 'Reusable to a point'],
            ['Converting', 'Cut, stitched, laminated or glued to a tray', 'Cut and taped', 'Cut, glued or moulded'],
            ['Suits best', 'Scratch and scuff protection, returnable packs', 'Light, one-way shipments', 'Cushioning against impact'],
          ],
        },
        p: [
          'Felt is mainly about protecting the surface. Where a part is heavy or fragile and needs real shock absorption, the pack usually adds foam or a moulded insert as well.',
        ],
      },
      {
        h: 'What to choose: weight, thickness, fibre and colour',
        p: [
          'A thin, light felt is enough to stop scuffs between flat sheets. A thicker, heavier felt gives more cushioning where parts are heavier or are moved around more. Polyester and PP are both used; the right one depends on the goods, the temperature in storage, and whether the felt is laminated or glued to something else. The [polyester vs polypropylene guide](/guides/polyester-vs-polypropylene-nonwoven) sets out the differences.',
          'Colour is worth deciding on purpose. Some packers want a light felt that shows dirt so it is changed in time; others want a dark one that looks clean for longer. Both can be made to order.',
        ],
      },
      {
        h: 'Test it against your own surface',
        p: [
          'Finishes differ. Before ordering in volume, put a sample against your actual product, stack and move it the way it travels, and check the surface afterwards. If the result is not right, the GSM, thickness or fibre can change before production; the felt is made to order.',
        ],
      },
      {
        h: 'What we supply, and what we do not',
        p: [
          'We supply protective felt in rolls, slit to width, from 100 to 1200 GSM, with thickness and colour set per order. We do not make boxes, crates, foam inserts or finished packaging; packers and converters build those with our felt. Details are on the [packaging and protective felt](/products/industrial/packaging-protective-felt) product page.',
        ],
      },
      {
        h: 'What to send with your enquiry',
        list: [
          'The goods and their surface finish: painted, polished, glass, wood, plastic',
          'How the felt is used: interleaving, lining, wrapping or padding',
          'Single-use or returnable packaging',
          'GSM and thickness if you know them, otherwise the weight and size of the parts',
          'Colour, roll width, quantity, and the delivery location',
        ],
        p: [
          'Send it through the [enquiry form](/contact#enquiry); samples are available on request. The [quote checklist](/guides/how-to-request-a-nonwoven-felt-quote) covers the general details.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is protective felt used for in packaging?',
        a: 'It is the soft layer that touches a finished surface, used for interleaving stacked sheets and panels, lining crates and trays, wrapping furniture and machined parts, and padding racks and trolleys so parts do not scratch.',
      },
      {
        q: 'Is felt better than bubble wrap?',
        a: 'For scratch and scuff protection, and for returnable packaging used over many trips, felt is often preferred because it is soft against the surface and reusable. For light one-way shipments, bubble wrap is common. Heavy or fragile parts often need foam as well.',
      },
      {
        q: 'Can packaging felt be reused?',
        a: 'Yes. Needle punched felt can be reused over many trips if it is kept clean and dry, which is why it is common in returnable crates and trays.',
      },
      {
        q: 'What GSM felt should I use for packaging?',
        a: 'A light felt is often enough to stop scuffs between flat sheets; heavier felt gives more cushioning for heavier parts. Test a sample against your own product. We produce from 100 to 1200 GSM.',
      },
      {
        q: 'Do you make finished packaging?',
        a: 'No. We supply felt in rolls, slit to width. Packers and converters make the crates, trays and inserts.',
      },
    ],
    relatedProducts: [
      'industrial/packaging-protective-felt',
      'industrial/luggage-bag-support-felt',
      'industrial/customised-nonwoven-solutions',
    ],
    relatedGuides: ['polyester-vs-polypropylene-nonwoven', 'gsm-in-nonwoven-fabric', 'how-to-request-a-nonwoven-felt-quote'],
  },
  {
    slug: 'non-woven-geotextile-hindi',
    lang: 'hi',
    title: 'नॉन वोवन जियोटेक्सटाइल: क्या है, कहाँ लगता है और कैसे चुनें',
    seoTitle: 'नॉन वोवन जियोटेक्सटाइल क्या है – हिंदी गाइड',
    description:
      'नॉन वोवन जियोटेक्सटाइल क्या है, सड़क, रेलवे, नाली और नहर में इसका काम क्या है, PP या पॉलिएस्टर कैसे चुनें और ऑर्डर के लिए क्या बताएं। आसान हिंदी में।',
    readMins: 6,
    published: '2026-10-25',
    intro:
      'सड़क, रेलवे, नाली या नहर के काम में "जियोटेक्सटाइल" शब्द अक्सर सुनने को मिलता है। यह गाइड आसान हिंदी में बताती है कि नॉन वोवन जियोटेक्सटाइल क्या होता है, ज़मीन के नीचे यह क्या काम करता है, और इसे खरीदते समय सप्लायर को क्या जानकारी देनी चाहिए।',
    sections: [
      {
        h: 'नॉन वोवन जियोटेक्सटाइल क्या है',
        p: [
          'यह सिंथेटिक रेशों (फाइबर) से बना एक मोटा, कपड़े जैसा रोल होता है। इसे धागों से बुना नहीं जाता। रेशों की परत को हज़ारों सुइयों से बार-बार पंच किया जाता है, जिससे रेशे आपस में उलझकर एक मज़बूत शीट बना लेते हैं। इसी प्रक्रिया को नीडल पंचिंग कहते हैं।',
          'बुने हुए (वोवन) कपड़े में धागों के बीच सीधे छेद होते हैं, जबकि नॉन वोवन में रेशे हर दिशा में फैले रहते हैं। इसलिए पानी इसमें से आसानी से निकल जाता है, पर मिट्टी के बारीक कण रुक जाते हैं। यही इसकी सबसे बड़ी खूबी है।',
        ],
      },
      {
        h: 'ज़मीन के नीचे यह क्या काम करता है',
        table: {
          head: ['काम', 'मतलब', 'कहाँ'],
          rows: [
            ['अलग रखना (Separation)', 'गिट्टी और नीचे की नरम मिट्टी को आपस में मिलने नहीं देता', 'सड़क, रेलवे ट्रैक, पार्किंग'],
            ['छानना (Filtration)', 'पानी को निकलने देता है, मिट्टी को रोकता है', 'नाली, ड्रेनेज पाइप, दीवार के पीछे'],
            ['पानी निकालना (Drainage)', 'अपनी मोटाई में से पानी को बहने देता है', 'ढलान, दीवार के पीछे'],
            ['सुरक्षा (Protection)', 'प्लास्टिक लाइनर (जियोमेम्ब्रेन) को पत्थरों से फटने से बचाता है', 'नहर, तालाब, लैंडफिल'],
          ],
        },
      },
      {
        h: 'कहाँ-कहाँ इस्तेमाल होता है',
        list: [
          'सड़क निर्माण: नरम मिट्टी के ऊपर गिट्टी डालने से पहले। देखें: [geotextile for road construction](/guides/geotextile-for-road-construction)',
          'रेलवे ट्रैक: बैलास्ट और नीचे की मिट्टी के बीच। देखें: [railway track guide](/guides/nonwoven-geotextile-for-railway-track-india)',
          'नाली और ड्रेनेज: पाइप और गिट्टी को मिट्टी से भरने से बचाने के लिए',
          'नहर और तालाब: लाइनिंग के नीचे और ऊपर सुरक्षा परत। देखें: [canal and pond lining guide](/guides/geotextile-canal-pond-lining-india)',
          'किनारों और ढलानों पर कटाव रोकने के लिए, और जियोबैग बनाने में',
        ],
      },
      {
        h: 'PP या पॉलिएस्टर: कौन सा लें',
        p: [
          'दोनों तरह के जियोटेक्सटाइल इस्तेमाल होते हैं। PP (पॉलीप्रोपाइलीन) हल्का होता है और आम तौर पर क्षारीय (alkaline) पानी, जैसे ताज़ा कंक्रीट या चूने के पास, बेहतर टिकता है। पॉलिएस्टर ज़्यादा गर्मी सह लेता है। कौन सा लेना है, यह प्रोजेक्ट का डिज़ाइन और साइट की मिट्टी-पानी तय करते हैं। हम दोनों बनाते हैं।',
        ],
      },
      {
        h: 'GSM कैसे तय होता है',
        p: [
          'GSM का मतलब है एक वर्ग मीटर कपड़े का वज़न ग्राम में। ज़्यादा GSM वाला कपड़ा आम तौर पर ज़्यादा मोटा और मज़बूत होता है। पर सही GSM मिट्टी, ऊपर पड़ने वाली गिट्टी के आकार, ट्रैफ़िक या लोड, और बिछाने के तरीके पर निर्भर करता है। इसलिए यह प्रोजेक्ट के डिज़ाइन से तय होता है, अंदाज़े से नहीं।',
          'अगर आपके टेंडर या स्पेसिफिकेशन में किसी स्टैंडर्ड या नियम का हवाला है, तो उसका मौजूदा संस्करण अपने इंजीनियर से कन्फ़र्म करें और कपड़े से जुड़ी शर्तें हमें भेजें। हम 100 से 1200 GSM तक, 5.0–5.2 मीटर चौड़े रोल में, आपके स्पेसिफिकेशन के अनुसार बनाते हैं। विस्तार से: [GSM guide for road geotextile](/guides/geotextile-gsm-for-road-construction-india)।',
        ],
      },
      {
        h: 'ऑर्डर या कोटेशन के लिए क्या बताएं',
        list: [
          'काम का प्रकार: सड़क, रेलवे, नाली, नहर, तालाब, ढलान या लैंडफिल',
          'जियोटेक्सटाइल किस काम के लिए है: अलग रखना, छानना या सुरक्षा',
          'डिज़ाइन की वैल्यू: GSM, मोटाई, पंक्चर ताकत, पानी निकलने की क्षमता',
          'PP या पॉलिएस्टर, अगर डिज़ाइन में तय है',
          'रोल की चौड़ाई, कुल मात्रा, और डिलीवरी की जगह',
        ],
        p: [
          'यह जानकारी [enquiry form](/contact#enquiry) से भेजें। सैंपल मांगने पर मिलता है। हमारे उत्पाद: [PP geotextile for civil works](/products/geotextile/pp-geotextile-fabric-for-civil-works) और [drainage and erosion control geotextile](/products/geotextile/drainage-soil-erosion-control-geotextile)। अंग्रेज़ी में पूरी गाइड: [nonwoven geotextile guide](/guides/nonwoven-geotextile-guide)।',
        ],
      },
    ],
    faqs: [
      {
        q: 'नॉन वोवन जियोटेक्सटाइल क्या होता है?',
        a: 'यह सिंथेटिक रेशों से नीडल पंचिंग करके बना मोटा कपड़ा है, जिसे बुना नहीं जाता। इसमें से पानी निकल जाता है पर मिट्टी के बारीक कण रुक जाते हैं, इसलिए इसे सड़क, रेलवे, नाली और नहर के काम में इस्तेमाल किया जाता है।',
      },
      {
        q: 'वोवन और नॉन वोवन जियोटेक्सटाइल में क्या फ़र्क है?',
        a: 'वोवन धागों से बुना होता है और ज़्यादातर मज़बूती (reinforcement) के लिए इस्तेमाल होता है। नॉन वोवन में रेशे हर दिशा में फैले होते हैं, इसलिए यह छानने, पानी निकालने, अलग रखने और सुरक्षा के लिए बेहतर माना जाता है। हम सिर्फ़ नॉन वोवन बनाते हैं।',
      },
      {
        q: 'सड़क के लिए कितने GSM का जियोटेक्सटाइल चाहिए?',
        a: 'यह मिट्टी, गिट्टी, ट्रैफ़िक और प्रोजेक्ट के डिज़ाइन पर निर्भर करता है, इसलिए इंजीनियर इसे तय करते हैं। हम 100 से 1200 GSM तक आपके स्पेसिफिकेशन के अनुसार बनाते हैं।',
      },
      {
        q: 'क्या आप जियोमेम्ब्रेन या जियोग्रिड भी देते हैं?',
        a: 'नहीं। हम नीडल पंच्ड और थर्मल बॉन्डेड नॉन वोवन जियोटेक्सटाइल बनाते हैं। जियोमेम्ब्रेन, जियोग्रिड और वोवन जियोटेक्सटाइल दूसरे सप्लायर से आते हैं।',
      },
      {
        q: 'सैंपल कैसे मिलेगा?',
        a: 'Enquiry form में अपना काम, GSM, चौड़ाई और मात्रा लिखकर भेजें। सैंपल मांगने पर मिलता है।',
      },
    ],
    relatedProducts: [
      'geotextile/pp-geotextile-fabric-for-civil-works',
      'geotextile/drainage-soil-erosion-control-geotextile',
      'geotextile/filter-geo-bag-felt',
    ],
    relatedGuides: ['nonwoven-geotextile-guide', 'geotextile-for-road-construction', 'geotextile-gsm-for-road-construction-india'],
  },
  {
    slug: 'geotextile-embankment-soft-soil-india',
    title: 'Geotextile for embankments on soft soil: what the nonwoven layer does',
    seoTitle: 'Geotextile for Embankments on Soft Soil India',
    description:
      'On soft clay, an embankment needs separation, drainage and sometimes reinforcement. Which of those a nonwoven geotextile does, and which it does not.',
    readMins: 6,
    published: '2026-10-26',
    intro:
      'Highways, rail lines and bunds often have to cross soft clay, marshy ground or black cotton soil. Building an embankment there raises three different problems: fill sinking into the ground, water that has to get out of the ground, and the risk of the bank sliding. Geosynthetics help with all three, but not the same geosynthetic. This guide sets out where a nonwoven fits.',
    sections: [
      {
        h: 'Three problems, three jobs',
        table: {
          head: ['Problem', 'What is needed', 'Typical material'],
          rows: [
            ['Fill mixing into soft ground', 'Separation between the ground and the first layer of fill', 'Nonwoven geotextile'],
            ['Water squeezed out of the clay as it settles', 'A drainage path, kept free of silt', 'Granular blanket wrapped in nonwoven, vertical drains'],
            ['The bank sliding or spreading', 'Tensile reinforcement at the base', 'High-strength woven geotextile or geogrid'],
          ],
        },
        p: [
          'We make the first and the filter part of the second. Basal reinforcement is a structural design using high-strength woven fabric or geogrid, which we do not make. A bill of quantities that keeps these apart avoids a separation fabric being asked to hold up a bank.',
        ],
      },
      {
        h: 'Separation at the base',
        p: [
          'The first layer of fill is pushed into soft ground by its own weight and by the plant working on it. Without a barrier, stone and soil mix, the fill loses thickness, and more fill is needed to reach level. A nonwoven laid on the prepared ground keeps the two apart, so the fill placed stays where it is put.',
          'This is the same separation job described in our [geotextile for road construction guide](/guides/geotextile-for-road-construction), only under a deeper fill and often on wetter ground.',
        ],
      },
      {
        h: 'Drainage while the ground settles',
        p: [
          'As fill goes on, soft clay slowly squeezes out water and settles. Designers often speed this up with a sand or gravel drainage blanket at the base, sometimes with vertical drains pushed into the clay below. That water has to escape without carrying fine soil into the blanket and clogging it.',
          'A nonwoven geotextile around or under the blanket does the filtering: water passes, silt stays back. The opening size and permeability are chosen against the soil, as in our [drainage and erosion control guide](/guides/geotextile-for-drainage-and-erosion-control).',
        ],
      },
      {
        h: 'Side slopes and toe',
        p: [
          'On the side slopes, the nonwoven is used under stone pitching or turfing to stop rain and floodwater washing the fill out. At the toe, it wraps drains that take water away from the bank. On river and coastal bunds, sand-filled bags made from the same fabric are used for toe protection; see our [geobag fabric guide](/guides/geobag-fabric-nonwoven-geotextile-india).',
        ],
      },
      {
        h: 'What decides the specification',
        list: [
          'The soil: how soft it is, its fines content, and the water table',
          'The fill and the size of the first stone placed on the fabric',
          'Construction plant working directly over the fabric',
          'Whether the fabric also filters, and against which soil',
        ],
        p: [
          'Mass per unit area, puncture strength, opening size and permeability follow from these, so the design sets them. Where your specification cites a standard or code of practice, confirm the current edition with your engineer and send us the clauses that apply to the fabric. We produce to the specification rather than setting design values ourselves.',
        ],
      },
      {
        h: 'What to send with your enquiry',
        list: [
          'The work: highway, rail, bund, approach embankment, platform',
          'The job of the fabric: separation, filtration around a blanket, slope protection',
          'Design values: GSM, puncture strength, opening size, permeability, polymer',
          'Roll width suited to the embankment width, total area, and delivery location',
        ],
        p: [
          'Send it through the [enquiry form](/contact#enquiry); samples are available on request. For roll quantities from an area, see [geotextile roll weight and coverage](/guides/geotextile-roll-weight-and-coverage).',
        ],
      },
    ],
    faqs: [
      {
        q: 'Why is geotextile used under an embankment on soft soil?',
        a: 'Mainly to separate the fill from the soft ground so the two do not mix, and to filter water leaving the ground through a drainage blanket. Where the bank also needs reinforcement against sliding, that is done with high-strength woven geotextile or geogrid.',
      },
      {
        q: 'Is nonwoven geotextile strong enough to reinforce an embankment?',
        a: 'Nonwoven geotextile is used for separation, filtration and drainage, not as the main reinforcement of a high embankment on soft clay. Basal reinforcement is designed separately and uses high-strength woven fabric or geogrid.',
      },
      {
        q: 'Can geotextile be used on black cotton soil?',
        a: 'Yes. It is commonly used as a separation and drainage layer over expansive soils such as black cotton soil, under roads and embankments. The project design sets the grade.',
      },
      {
        q: 'What GSM geotextile is used for embankments?',
        a: 'It depends on the soil, the fill, the stone size and the plant working on it, so the design decides. We produce from 100 to 1200 GSM to the specification you send.',
      },
      {
        q: 'Do you supply geogrid or high-strength woven geotextile?',
        a: 'No. We make needle punched and thermal bonded nonwoven geotextile. Reinforcement materials come from other suppliers, and we quote only our part.',
      },
    ],
    relatedProducts: [
      'geotextile/pp-geotextile-fabric-for-civil-works',
      'geotextile/drainage-soil-erosion-control-geotextile',
      'geotextile/filter-geo-bag-felt',
    ],
    relatedGuides: ['geotextile-for-road-construction', 'geotextile-for-drainage-and-erosion-control', 'geotextile-roll-weight-and-coverage'],
  },
  {
    slug: 'how-to-install-nonwoven-geotextile',
    title: 'How to install nonwoven geotextile on site: laying, overlaps and cover',
    seoTitle: 'How to Install Nonwoven Geotextile on Site',
    description:
      'Site steps for laying nonwoven geotextile: preparing the ground, rolling out, overlaps, pinning, placing fill and avoiding damage. General practice, not a spec.',
    readMins: 6,
    published: '2026-10-26',
    intro:
      'A geotextile that is right on paper can still fail on site: laid over sharp stones, left in the sun for weeks, or opened at the joints when fill is pushed over it. This guide covers the common site steps for nonwoven geotextile. It is general practice; where your project has its own installation specification, that one decides.',
    sections: [
      {
        h: 'Before the rolls arrive',
        list: [
          'Check the drawing: where the fabric goes, which way the rolls run, and the overlap or seam the specification asks for',
          'Plan roll layout against the area, so joints fall where they are easiest to make and waste is low',
          'Have a dry, flat place to store rolls off the ground, under cover',
        ],
        p: [
          'To work out how many rolls an area needs, see [geotextile roll weight and coverage](/guides/geotextile-roll-weight-and-coverage).',
        ],
      },
      {
        h: 'Prepare the ground',
        p: [
          'Clear roots, large stones and debris, fill holes and ruts, and trim the surface to the level shown on the drawing. Sharp objects left on the ground press into the fabric once fill goes on top. On very soft ground, the engineer may accept some unevenness rather than disturb the soil; follow their instruction.',
        ],
      },
      {
        h: 'Roll out and overlap',
        list: [
          'Unroll the fabric loose and flat, in full contact with the ground, without wrinkles or folds; do not stretch it tight unless the specification says so',
          'Overlap adjacent rolls by the width the specification sets; softer ground usually calls for wider overlaps, and some projects sew joints instead',
          'Lap the upstream or uphill roll over the downstream one, so water and fill run over the joint rather than into it',
          'Lap in the direction the fill will be pushed, so the leading edge is not lifted open',
        ],
      },
      {
        h: 'Hold it in place',
        p: [
          'Wind lifts loose fabric easily. Pins, U-shaped staples, sandbags or a little fill are used to hold edges and overlaps until cover is placed. On slopes, the top edge is usually buried in an anchor trench so the fabric cannot slide down; the trench size comes from the drawing.',
        ],
      },
      {
        h: 'Place fill without damaging the fabric',
        list: [
          'Tip fill onto fill already placed and push it forward over the fabric, rather than tipping directly onto the fabric',
          'Do not drive vehicles or tracked plant directly on uncovered fabric',
          'Place the first layer at the thickness the specification sets before compacting',
          'Do not drop large stone from height onto the fabric',
        ],
        p: [
          'If the fabric is torn or punctured during placing, cover the damaged area with a patch of the same fabric, overlapping it on all sides as for a normal joint, or as the specification sets out.',
        ],
      },
      {
        h: 'Sunlight and storage',
        p: [
          'Synthetic geotextiles weaken under long exposure to sunlight, and polypropylene in particular. Keep rolls wrapped until they are used, unroll only what can be covered soon, and cover laid fabric within the time the specification allows. The [nonwoven geotextile guide](/guides/nonwoven-geotextile-guide) covers how PP and polyester compare.',
        ],
      },
      {
        h: 'Ordering to suit the site',
        p: [
          'Tell us the roll width and length that suit your crew and your layout; we produce rolls up to 5.0–5.2 m wide and can slit narrower. Send the application, GSM and quantity through the [enquiry form](/contact#enquiry); samples are available on request.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much should geotextile rolls overlap?',
        a: 'Your project specification sets it. Overlaps are generally wider on soft ground and where the fabric is not otherwise fixed, and some projects sew joints instead of overlapping. Lap the uphill or upstream roll over the downstream one.',
      },
      {
        q: 'Should geotextile be pulled tight when laying?',
        a: 'For separation and filtration work it is normally laid flat and loose, in full contact with the ground, without wrinkles. Follow the specification where it says otherwise.',
      },
      {
        q: 'Can trucks drive on geotextile?',
        a: 'Not directly on uncovered fabric. Fill is usually pushed forward over the fabric from fill already placed, and vehicles run on the fill once it is at the specified thickness.',
      },
      {
        q: 'How long can geotextile be left in the sun?',
        a: 'As short a time as possible. Synthetic geotextile, especially polypropylene, weakens under long sun exposure, so the project specification normally limits how long it can stay uncovered. Keep rolls wrapped until use.',
      },
      {
        q: 'How is a torn geotextile repaired on site?',
        a: 'Usually by laying a patch of the same fabric over the damage, overlapping it on all sides as for a normal joint, unless the specification sets another method.',
      },
    ],
    relatedProducts: [
      'geotextile/pp-geotextile-fabric-for-civil-works',
      'geotextile/drainage-soil-erosion-control-geotextile',
      'geotextile/pipeline-cable-protection-geotextile',
    ],
    relatedGuides: ['geotextile-roll-weight-and-coverage', 'nonwoven-geotextile-guide', 'geotextile-for-road-construction'],
  },
  {
    slug: 'airlay-vs-needle-punch-nonwoven',
    title: 'Airlay vs needle punch: two different steps, not two rival fabrics',
    seoTitle: 'Airlay vs Needle Punch Nonwoven',
    description:
      'Airlay is how a fibre web is formed; needle punching is how it is bonded. What each step does, how airlay compares with carding, and what to ask a supplier.',
    readMins: 5,
    published: '2026-10-26',
    intro:
      'Buyers often see "airlay" and "needle punched" listed as if they were competing products. They are not. Making a nonwoven takes two main steps: forming fibres into a web, then bonding that web into fabric. Airlay is a way of doing the first step. Needle punching is a way of doing the second. This guide untangles the two.',
    sections: [
      {
        h: 'Step one forms the web, step two bonds it',
        table: {
          head: ['Step', 'What happens', 'Common methods'],
          rows: [
            ['Web forming', 'Loose fibres are laid into an even sheet, or batt', 'Carding with cross-lapping, airlay'],
            ['Bonding', 'The batt is locked into a fabric', 'Needle punching, thermal bonding'],
          ],
        },
        p: [
          'So an "airlay" fabric still has to be bonded, often by needle punching or thermal bonding, and a "needle punched" fabric still had to be formed, often by carding or airlay. The better comparison is airlay against carding, and needle punching against thermal bonding.',
        ],
      },
      {
        h: 'Airlay and carding compared',
        table: {
          head: ['', 'Carding and cross-lapping', 'Airlay'],
          rows: [
            ['How fibres are laid', 'Combed into thin webs, then layered back and forth', 'Blown by air onto a moving screen'],
            ['Fibre direction', 'Mostly along and across the line, set by the lapping', 'More random, so properties are more even in all directions'],
            ['Batt it suits', 'A wide range of weights and fine, uniform webs', 'Thick, high-loft batts'],
            ['Fibre it handles', 'Staple fibre of suitable length for the card', 'Often tolerant of shorter and mixed fibre'],
          ],
        },
        p: [
          'These are general tendencies of the two methods; actual results depend on the line and the fibre. Airlay should also not be confused with "airlaid", a different product, usually made from cellulose pulp with binders, used mainly in hygiene goods.',
        ],
      },
      {
        h: 'Needle punching and thermal bonding compared',
        p: [
          'Needle punching locks fibres together by driving barbed needles through the batt many times, so the fibres tangle mechanically. Thermal bonding uses low-melt fibre in the blend and heat, so fibres fuse where they cross. Needle punching tends to give a denser, tougher felt; thermal bonding is often used for lofty, resilient wadding and for felts that are moulded.',
          'Our [needle punched vs thermal bonded guide](/guides/needle-punched-vs-thermal-bonded-nonwoven) goes through the difference in detail.',
        ],
      },
      {
        h: 'Which matters for your product',
        list: [
          'Thick, high-loft insulation or padding: ask how the web is formed as well as how it is bonded',
          'Dense, tough felt for geotextile, filtration or industrial use: the bonding step and the needling density usually matter most',
          'Moulded parts: whether the felt carries low-melt fibre for thermal bonding',
          'Recycled or mixed fibre: whether the line can process it evenly',
        ],
        p: [
          'In every case, the properties you need (GSM, thickness, density, strength, loft) are what to specify. The process is how a supplier gets there; judge it on a sample.',
        ],
      },
      {
        h: 'What we make',
        p: [
          'We make needle punched and thermal bonded nonwovens, from carded webs, in polyester, PP and blends, from 100 to 1200 GSM and up to 5.0–5.2 m wide. We do not run airlay lines and do not make airlaid pulp products. If your product needs a property you associate with airlay, send the target values and a sample, and we will tell you plainly whether our route can match it.',
          'Send it through the [enquiry form](/contact#enquiry). For the different nonwoven processes made in India, see [nonwoven manufacturers in India](/guides/nonwoven-manufacturers-in-india).',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the difference between airlay and needle punch?',
        a: 'Airlay is a web-forming method: fibres are blown by air into a batt. Needle punching is a bonding method: barbed needles tangle the fibres of a batt into a fabric. A fabric can be airlaid and then needle punched, so they are steps, not alternatives.',
      },
      {
        q: 'Is airlay the same as airlaid?',
        a: 'No. Airlay usually refers to forming a batt of staple fibre by air, which is then needle punched or thermally bonded. Airlaid usually refers to a pulp-based product with binders, used mainly in hygiene goods.',
      },
      {
        q: 'Is airlay better than carding?',
        a: 'Neither is better in general. Airlay tends to suit thick, high-loft batts with more even properties in all directions; carding with cross-lapping suits a wide range of weights and fine, uniform webs. The product decides.',
      },
      {
        q: 'Do you make airlay nonwovens?',
        a: 'No. We make needle punched and thermal bonded nonwovens from carded webs. Send your target properties and a sample, and we will say plainly whether our route can match them.',
      },
    ],
    relatedProducts: [
      'industrial/customised-nonwoven-solutions',
      'automotive/acoustic-thermal-insulation-felt',
      'geotextile/pp-geotextile-fabric-for-civil-works',
    ],
    relatedGuides: ['needle-punched-vs-thermal-bonded-nonwoven', 'nonwoven-manufacturers-in-india', 'gsm-in-nonwoven-fabric'],
  },
  {
    slug: 'woven-vs-nonwoven-geotextile',
    title: 'Woven vs nonwoven geotextile: which one does your project need?',
    seoTitle: 'Woven vs Nonwoven Geotextile: Which to Use',
    description:
      'Woven and nonwoven geotextiles do different jobs. How each is made, a side-by-side table, which suits roads, drains, slopes and liners, and what to specify.',
    readMins: 6,
    published: '2026-10-28',
    intro:
      'Woven and nonwoven geotextiles are both permeable fabrics laid in the ground, and tenders sometimes treat them as interchangeable. They are not. A woven geotextile is built for tensile strength; a nonwoven is built for water flow, filtration and cushioning. This guide explains the difference and how to match each to the job. We make nonwoven geotextile only, and say plainly below where a woven fabric is the better choice.',
    sections: [
      {
        h: 'How each one is made',
        p: [
          'A woven geotextile is made on a loom. Flat polypropylene tapes (slit film) or round monofilament yarns are interlaced at right angles, like a coarse sack fabric. The result is a thin, stiff sheet with regular openings.',
          'A nonwoven geotextile is made without weaving. Staple fibres are formed into a thick web and bonded, most often by needle punching, which tangles the fibres with barbed needles. The result is a soft, felt-like fabric with many small, irregular pores through its thickness. Our [needle punched vs thermal bonded guide](/guides/needle-punched-vs-thermal-bonded-nonwoven) explains the bonding step.',
          'You can tell them apart by eye: a woven shows a criss-cross grid of tapes or yarns; a nonwoven looks and feels like felt.',
        ],
      },
      {
        h: 'Side by side',
        table: {
          head: ['', 'Woven geotextile', 'Nonwoven geotextile (needle punched)'],
          rows: [
            ['Structure', 'Interlaced tapes or yarns, thin', 'Entangled fibres, thick and felt-like'],
            ['Strength', 'High tensile strength at low stretch', 'Lower tensile strength, stretches more before breaking'],
            ['Water through the fabric', 'Usually lower for slit film; higher for monofilament', 'High, through many small pores'],
            ['Water along the fabric', 'Very little', 'Yes, a thick nonwoven can carry water in its own plane'],
            ['Filtration of fine soil', 'Depends on the opening size; slit film can blind', 'Good: the depth of the felt holds soil while water passes'],
            ['Cushioning and puncture protection', 'Limited, the sheet is thin', 'Good, from its thickness'],
            ['Fit to uneven ground', 'Stiffer', 'Drapes and conforms'],
            ['Typical first choice for', 'Reinforcement and stabilisation, where strength matters most', 'Drainage, filtration, separation and protection'],
          ],
        },
        p: [
          'These are general tendencies. Within each type, the grade, the polymer and the design values decide the actual performance.',
        ],
      },
      {
        h: 'Which one for which job',
        list: [
          'French drains, pipe wrapping, drainage layers behind walls: nonwoven, because water has to pass through and along the fabric while soil stays out',
          'Separation under roads, yards and railway ballast: both are used; nonwoven where the subgrade is wet or drainage matters, woven where the design needs more strength',
          'Reinforcement and stabilisation over very soft ground: woven (or geogrid), because it takes load at low stretch',
          'Protection of a geomembrane in canals, ponds and landfills: nonwoven, because the thick felt cushions the liner against stones',
          'Slope and bank protection under stone or riprap: nonwoven or a monofilament woven, as the designer specifies; slit-film woven is generally avoided where filtration matters',
          'Silt fences on construction sites: usually woven',
        ],
        p: [
          'The guides for each use go into more detail: [roads](/guides/geotextile-for-road-construction), [drainage and erosion control](/guides/geotextile-for-drainage-and-erosion-control), [railway track](/guides/nonwoven-geotextile-for-railway-track-india), [canal and pond lining](/guides/geotextile-canal-pond-lining-india) and [retaining walls](/guides/geotextile-retaining-wall-drainage-india).',
        ],
      },
      {
        h: 'Why "the same GSM" does not make them equal',
        p: [
          'A woven and a nonwoven of the same GSM behave very differently. A light woven can be stronger in tension than a much heavier nonwoven, while the nonwoven drains and filters far better. Comparing the two by weight or by price per kilogram misleads.',
          'Compare them on the properties the design asks for: tensile strength and elongation, puncture resistance, opening size, permeability, and for drainage layers the flow along the fabric. Our [GSM guide](/guides/gsm-in-nonwoven-fabric) explains what weight does and does not tell you.',
        ],
      },
      {
        h: 'What to put in your specification',
        list: [
          'The function: separation, filtration, drainage, reinforcement or protection',
          'Woven or nonwoven, if the design fixes it',
          'The test values the design requires (strength, puncture, opening size, permeability), with the test standard named',
          'Roll width and length, and the area to cover',
          'For public works, the clause of the tender or standard specification; confirm the current edition with your project engineer',
        ],
        p: [
          'If you are unsure which type the job needs, ask the designer before ordering. A wrong type is not fixed by a heavier grade.',
        ],
      },
      {
        h: 'What we supply',
        p: [
          'We make needle punched nonwoven geotextile in PP (virgin or recycled) and polyester, from 100 to 1200 GSM, in rolls 5.0–5.2 m wide, with a standard roll length of 50 m and other lengths on request. We do not make woven geotextile. If your design calls for a woven, we will say so rather than offer a nonwoven in its place.',
          'See [PP geotextile fabric for civil works](/products/geotextile/pp-geotextile-fabric-for-civil-works) and [drainage and erosion control geotextile](/products/geotextile/drainage-soil-erosion-control-geotextile), or send your specification through the [enquiry form](/contact#enquiry). Samples are free.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the difference between woven and nonwoven geotextile?',
        a: 'A woven geotextile is made by interlacing tapes or yarns on a loom; it is thin and strong in tension. A nonwoven is made by bonding a web of fibres, usually by needle punching; it is thick and felt-like, and lets water pass through and along it while holding soil back.',
      },
      {
        q: 'Which is better, woven or nonwoven geotextile?',
        a: 'Neither in general; they do different jobs. Woven suits reinforcement and stabilisation, where strength at low stretch matters. Nonwoven suits drainage, filtration, separation on wet ground and protection of liners.',
      },
      {
        q: 'Which geotextile is used for drainage?',
        a: 'Nonwoven, usually needle punched. Its thick, porous structure lets water flow through and along the fabric while it filters fine soil. See our [drainage and erosion control guide](/guides/geotextile-for-drainage-and-erosion-control).',
      },
      {
        q: 'Which geotextile is used under roads?',
        a: 'Both are used for separation under roads. Nonwoven is common where the subgrade is wet or soft and drainage matters; woven is chosen where the design needs more tensile strength. The project engineer sets the type and grade. See our [road construction guide](/guides/geotextile-for-road-construction).',
      },
      {
        q: 'Do you make woven geotextile?',
        a: 'No. We make needle punched nonwoven geotextile only. If your design needs a woven fabric, we will tell you so.',
      },
    ],
    relatedProducts: [
      'geotextile/pp-geotextile-fabric-for-civil-works',
      'geotextile/drainage-soil-erosion-control-geotextile',
      'geotextile/pipeline-cable-protection-geotextile',
    ],
    relatedGuides: ['nonwoven-geotextile-guide', 'geotextile-for-road-construction', 'geotextile-for-drainage-and-erosion-control', 'geotextile-gsm-for-road-construction-india'],
  },
  {
    slug: 'incoterms-nonwoven-felt-india',
    title: 'EXW, FOB or CIF: choosing the term when you import nonwoven from India',
    seoTitle: 'Incoterms for Nonwoven Felt from India',
    description:
      'What EXW, FOB, CFR, CIF and DAP decide when you buy nonwoven felt or geotextile from India: who books the ship, who pays, and where the risk passes.',
    readMins: 6,
    published: '2026-10-28',
    intro:
      'Two quotes for the same geotextile can differ by a quarter and both be correct, because they are quoted on different terms. The three letters at the end of a price decide who books the ship, who pays which cost, and — the part that matters most and is noticed least — the point at which the goods become your risk. This guide covers the terms a nonwoven buyer actually meets.',
    sections: [
      {
        h: 'The three letters are not a price, they are a dividing line',
        p: [
          'An Incoterm answers three questions at once: who arranges carriage, who pays for what, and where risk passes from seller to buyer. It does not say who owns the goods, it does not set payment terms, and it is not insurance cover by itself.',
          'So "is CIF cheaper than FOB?" is the wrong question. A CIF price includes freight and insurance that you would otherwise buy yourself; an FOB price does not. Compare landed cost, not the number on the quote.',
        ],
      },
      {
        h: 'The terms you will meet, in order of how much the seller does',
        table: {
          head: ['Term', 'Seller does', 'You do', 'Risk passes'],
          rows: [
            ['EXW', 'Makes the goods available at the works', 'Everything: loading, export clearance, carriage, insurance, import', 'At the seller’s premises'],
            ['FCA', 'Hands over, export cleared, at the named place', 'Main carriage onward, insurance, import', 'On handover to your carrier'],
            ['FOB', 'Delivers on board the vessel at the port of shipment', 'Sea freight, insurance, import', 'Once on board'],
            ['CFR', 'As FOB, plus pays sea freight to the destination port', 'Insurance, import', 'Still once on board, not on arrival'],
            ['CIF', 'As CFR, plus buys a minimum insurance cover', 'Import clearance, duty, inland carriage', 'Still once on board'],
            ['DAP', 'Delivers to the named place in your country, not unloaded', 'Import clearance and duty', 'At that named place'],
          ],
        },
        p: [
          'FOB, CFR and CIF are for sea freight. FCA and DAP suit container, road or air movements and are the ones to use when nothing is loaded onto a vessel in the usual way.',
        ],
      },
      {
        h: 'The trap in CFR and CIF',
        p: [
          'Under CFR and CIF the seller pays the freight all the way to your port — but risk still passes when the goods are on board at the Indian port, not when they arrive. If a container is lost or damaged in transit, it is your loss even though the seller booked and paid for the voyage.',
          'That is the whole reason insurance belongs in the conversation. Under CIF the seller buys cover, but the minimum level the rules require is a basic one. If your cargo warrants more than that, say so in the contract or arrange your own.',
        ],
      },
      {
        h: 'Which term suits a nonwoven order',
        list: [
          'You already have a freight forwarder in India — FOB or FCA, and keep control of the booking',
          'You want one landed number and little involvement — CIF or DAP',
          'The order is small or consolidated with other suppliers — FCA to your consolidator',
          'You are new to importing from India — CIF is the simplest first order; move to FOB once you have a forwarder you trust',
        ],
        p: [
          'There is no term that is generally better. The right one depends on who has the better freight rate and who is equipped to handle a problem at sea.',
        ],
      },
      {
        h: 'What we do, and what we do not',
        p: [
          'We make and supply the material, and we coordinate dispatch to your port. We are not a freight forwarder, a customs broker or an insurer, and we do not give customs or tax advice for your country. Duty, import clearance and any local compliance are yours, whatever the term says about carriage.',
          'Tell us the term you want with the enquiry. Quoting EXW against a competitor’s CIF and calling it cheaper would be a false comparison, so we will quote on the basis you name.',
        ],
      },
      {
        h: 'Write it down properly',
        p: [
          'An Incoterm is incomplete without a named place: "FOB Mundra", "CIF Jebel Ali", "DAP Nairobi". "FOB India" is not a term, it is an argument waiting to happen.',
          'Name the edition of the rules in the contract too, and confirm the current edition with your broker — they are revised periodically, and the obligations under the same three letters have changed between editions.',
        ],
      },
      {
        h: 'What to send with your enquiry',
        list: [
          'The term and the named place you want quoted — for example CIF Durban',
          'Destination port, and the forwarder you use if you have one',
          'The specification: application, fibre, GSM, width, roll length, quantity',
          'Whether you want the material consolidated with anything else',
        ],
        p: [
          'Send it through the [enquiry form](/contact#enquiry). The [quote checklist](/guides/how-to-request-a-nonwoven-felt-quote) covers the specification side, and [roll weight and coverage](/guides/geotextile-roll-weight-and-coverage) helps you work out quantity and how it loads.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is CIF cheaper than FOB?',
        a: 'Neither is cheaper; they include different things. A CIF price carries freight and a basic insurance cover that under FOB you buy yourself. Compare the landed cost at your door, not the two quoted numbers.',
      },
      {
        q: 'Under CIF, when do the goods become my risk?',
        a: 'When they are on board the vessel at the port of shipment, not when they arrive. The seller pays the freight to your port, but a loss in transit is yours. That is why the insurance arrangement matters.',
      },
      {
        q: 'Which Incoterm should a first-time importer use?',
        a: 'CIF is usually the simplest, because the seller arranges the voyage and you take over at your own port. Once you have a forwarder you trust in India, FOB or FCA often gives better control and a better freight rate.',
      },
      {
        q: 'Do you arrange shipping and insurance?',
        a: 'We coordinate dispatch to your port and quote on the term you name. We are not a freight forwarder, customs broker or insurer, and we do not advise on duty or clearance in your country.',
      },
      {
        q: 'What do I need to write in the contract?',
        a: 'The three letters, a named place, and the edition of the rules — for example "CIF Jebel Ali, Incoterms [edition]". Confirm the current edition with your broker, since the obligations under the same letters have changed between editions.',
      },
    ],
    relatedProducts: [
      'geotextile/pp-geotextile-fabric-for-civil-works',
      'industrial/customised-nonwoven-solutions',
      'automotive/automotive-needle-punched-felt',
    ],
    relatedGuides: ['how-to-request-a-nonwoven-felt-quote', 'hs-code-nonwoven-felt-geotextile', 'geotextile-roll-weight-and-coverage'],
  },
  {
    slug: 'export-documents-nonwoven-geotextile-india',
    title: 'Export documents for nonwoven felt and geotextile from India',
    seoTitle: 'Export Documents: Nonwoven Felt from India',
    description:
      'Which documents travel with a nonwoven felt or geotextile shipment from India, which your own country adds, and what to settle before the order is produced.',
    readMins: 6,
    published: '2026-10-28',
    intro:
      'A shipment that arrives without the right paperwork sits at the port while demurrage runs. The document set is not long, but which pieces you need depends on your country, your bank and your customs broker — not on the supplier. This guide separates what normally travels with the goods from what you have to arrange, and what to settle before production starts rather than after.',
    sections: [
      {
        h: 'The set that normally travels with the goods',
        list: [
          'Commercial invoice — what was sold, to whom, on what terms, in what currency',
          'Packing list — rolls, weights and dimensions, so the container can be checked without opening it',
          'Bill of lading or air waybill — the carrier’s document, and for sea freight the one that controls release of the cargo',
          'Certificate of origin — where the goods were made, which decides duty treatment in many markets',
        ],
        p: [
          'These four are the backbone of almost any shipment. Everything beyond them exists because a particular country, product or payment method asks for it.',
        ],
      },
      {
        h: 'What gets added, and why',
        table: {
          head: ['Added when', 'Document', 'Asked for by'],
          rows: [
            ['Your market gives preference to Indian origin', 'Preferential certificate of origin under the relevant agreement', 'Your customs authority'],
            ['You are paying by letter of credit', 'Exactly the documents the credit lists, worded exactly as it says', 'Your bank'],
            ['Your specification names a test', 'Test or inspection report for that property', 'You or your project engineer'],
            ['The buyer appoints an inspector', 'Third-party inspection certificate', 'You'],
            ['Your country requires it for the product', 'Conformity or registration document', 'Your customs authority'],
            ['The cargo is insured by the seller', 'Insurance certificate', 'The term you bought on'],
          ],
        },
        p: [
          'Your customs broker is the only reliable source for what your own country adds. We cannot tell you what your port will ask for, and a supplier who claims to know every market’s rules is guessing.',
        ],
      },
      {
        h: 'Settle the paperwork before production, not after',
        p: [
          'Most document problems are cheap to fix at the enquiry stage and expensive at the port. A letter of credit that calls the material something the invoice does not say, a certificate naming a test nobody agreed to run, a description that does not match the classification you declared — each one is a small wording decision made weeks earlier.',
          'So send the document list with the order, not with the shipping instructions. If a test report is wanted, it has to be agreed before the goods are made, because some tests are destructive and all of them take time.',
        ],
      },
      {
        h: 'Classification is yours to confirm',
        p: [
          'Felt and nonwovens fall under chapter 56 of the Harmonized System, and the exact code depends on the construction — our [HS code guide](/guides/hs-code-nonwoven-felt-geotextile) covers how that works. The code on your import entry is declared by you, through your broker, and it drives the duty you pay.',
          'We describe the material accurately on the invoice. We do not determine your import classification, and we do not advise on duty rates in your country.',
        ],
      },
      {
        h: 'Packing, and what the packing list has to match',
        p: [
          'Material ships as rolls. The standard roll is 50 m, with other lengths made to order, in widths of 5.0–5.2 m, which is what decides how a container is filled — see [roll weight and coverage](/guides/geotextile-roll-weight-and-coverage) for working out quantity and loading.',
          'The packing list must match what is physically in the container: roll count, net and gross weight, and dimensions. A mismatch between the list and the cargo is one of the commonest causes of a hold at the destination, and it is entirely avoidable.',
        ],
      },
      {
        h: 'What we do, and what we do not',
        p: [
          'Export packing and the documentation your destination and customs broker ask for are agreed with each order. Tell us early which documents your market requires, so they can be discussed before you commit.',
          'We are not a customs broker and we do not give customs, duty or tax advice for your country. Where a document has to come from an authority, a chamber or an independent inspector, it comes from them — we supply the material and the paperwork that is ours to issue.',
        ],
      },
      {
        h: 'What to send with your enquiry',
        list: [
          'Destination country and port, and your customs broker’s requirements if you have them',
          'Payment method — and if it is a letter of credit, the document clauses it will carry',
          'Any certificate of origin type your market needs for preference',
          'Any test or inspection report your specification requires, named before production',
          'The specification itself: application, fibre, GSM, width, roll length, quantity',
        ],
        p: [
          'Send it through the [enquiry form](/contact#enquiry). The [quote checklist](/guides/how-to-request-a-nonwoven-felt-quote) covers the material side, and [EXW, FOB or CIF](/guides/incoterms-nonwoven-felt-india) covers the term, which decides who holds which part of this list.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Which documents come with a shipment from India?',
        a: 'Commercial invoice, packing list, bill of lading or air waybill, and a certificate of origin are the usual set. Anything beyond that is added because your country, your bank or your specification asks for it, and it is agreed with each order.',
      },
      {
        q: 'Do you provide a certificate of origin?',
        a: 'A certificate of origin is issued by an authorised body rather than by a supplier. Tell us at the enquiry stage which type your market needs, including any preferential certificate, so it can be arranged with the order.',
      },
      {
        q: 'Can you tell me the duty I will pay?',
        a: 'No. Duty depends on the classification declared on your import entry and your country’s tariff, both of which are for you and your customs broker. We describe the material accurately on the invoice; the classification at import is yours to confirm.',
      },
      {
        q: 'We pay by letter of credit. What do you need?',
        a: 'The document clauses the credit will carry, before the order is produced. A credit that describes the material differently from the invoice is the commonest reason documents are rejected, and it is a wording problem that is simple to fix early and costly to fix late.',
      },
      {
        q: 'Can you supply a test report?',
        a: 'Tell us which test and whose standard before production, since some tests are destructive and all take time. Where an independent report is required, it comes from the testing body, not from us.',
      },
    ],
    relatedProducts: [
      'geotextile/pp-geotextile-fabric-for-civil-works',
      'geotextile/drainage-soil-erosion-control-geotextile',
      'industrial/customised-nonwoven-solutions',
    ],
    relatedGuides: ['hs-code-nonwoven-felt-geotextile', 'incoterms-nonwoven-felt-india', 'how-to-request-a-nonwoven-felt-quote'],
  },
];

export const guideBySlug = (slug) => guides.find((g) => g.slug === slug) || null;
