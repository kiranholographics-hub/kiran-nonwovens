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
    ],
    relatedProducts: [
      'geotextile/pp-geotextile-fabric-for-civil-works',
      'automotive/automotive-needle-punched-felt',
      'industrial/customised-nonwoven-solutions',
    ],
    relatedGuides: [
      'needle-punched-nonwoven-manufacturer-india',
      'gsm-in-nonwoven-fabric',
      'nonwoven-fabric-for-footwear-and-apparel',
    ],
  },

  {
    slug: 'gsm-in-nonwoven-fabric',
    title: 'GSM in nonwoven fabric: what it means and how to choose',
    seoTitle: 'GSM in Nonwoven Fabric: How to Choose Weight',
    description:
      'What GSM means for nonwoven felt and geotextile, how it relates to thickness and density, and how to specify the right weight for your job.',
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
    relatedGuides: [
      'hs-code-nonwoven-felt-geotextile',
      'needle-punched-vs-thermal-bonded-nonwoven',
      'carpet-backing-and-underlay-felt',
    ],
  },

  {
    slug: 'nonwoven-geotextile-guide',
    title: 'Nonwoven geotextile: functions, uses and how to specify',
    seoTitle: 'Nonwoven Geotextile: Functions and Uses',
    description:
      'What a needle punched nonwoven geotextile does — separation, filtration, drainage, protection — where it is used, and what to specify when you order.',
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
        h: 'Where it is used',
        p: [
          'Under roads, railways, embankments and pavement subgrades, our [PP geotextile for civil works](/products/geotextile/pp-geotextile-fabric-for-civil-works) provides separation and filtration. Around perforated pipes, behind retaining walls and on slopes, [drainage and erosion control geotextile](/products/geotextile/drainage-soil-erosion-control-geotextile) lets water flow while retaining soil.',
          'Buried services need a different job done: [pipeline and cable protection geotextile](/products/geotextile/pipeline-cable-protection-geotextile) cushions them against puncture and abrasion. And the same needle punched felt, made for air rather than soil, becomes [filter geo bag felt](/products/geotextile/filter-geo-bag-felt) for dust-collection systems.',
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
        a: 'Roll widths of 5.0–5.2 m, with roll length, GSM and thickness set to the project’s requirement.',
      },
      {
        q: 'Should a geotextile be covered after installation?',
        a: 'Normally yes, soon after it is laid. Polypropylene is sensitive to prolonged UV exposure, so follow your project’s installation details and confirm exposure limits with the supplier.',
      },
      {
        q: 'Can I get a geotextile sample before ordering?',
        a: 'Yes, samples are available on request. Send the application and the GSM and width you have in mind through the enquiry form.',
      },
    ],
    relatedProducts: [
      'geotextile/pp-geotextile-fabric-for-civil-works',
      'geotextile/drainage-soil-erosion-control-geotextile',
      'geotextile/pipeline-cable-protection-geotextile',
    ],
    relatedGuides: [
      'geotextile-for-road-construction',
      'geotextile-for-drainage-and-erosion-control',
      'polyester-vs-polypropylene-nonwoven',
      'gsm-in-nonwoven-fabric',
    ],
  },

  {
    slug: 'polyester-vs-polypropylene-nonwoven',
    title: 'Polyester vs polypropylene nonwoven felt: which fibre to use',
    seoTitle: 'Polyester vs Polypropylene Nonwoven Felt',
    description:
      'Compare polyester (PET) and polypropylene (PP) nonwoven felt on weight, heat, chemical resistance and recycled options — and pick the right fibre.',
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
          'Samples are available on request, so you can test the material in your own process — cutting, stitching, laminating, moulding, embossing, die-cutting or bonding — before you commit to a volume.',
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
          'Felt and nonwovens fall under chapter 56 of the Harmonized System, and the exact code depends on the construction. Confirm the code you need with your customs broker. Tell us early which documents and test reports your market requires, so they can be discussed before you order.',
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
        a: 'Yes, samples are available on request so you can try the material in your own process before a bulk order.',
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
          'To start, send your specification through the [enquiry form](/contact#enquiry) and our export team will reply with specifications and pricing.',
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
    relatedGuides: ['how-to-request-a-nonwoven-felt-quote', 'gsm-in-nonwoven-fabric'],
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
          'Geotextiles do not have a heading of their own. A nonwoven geotextile is normally classified by its construction, in the same chapter. The final code for your shipment is decided by your customs authority, so confirm it with your customs broker before you order.',
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
        a: 'Geotextile has no heading of its own. A nonwoven geotextile is classified by its construction, in chapter 56. Confirm the code for your country with your customs broker.',
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
    relatedGuides: ['how-to-request-a-nonwoven-felt-quote', 'needle-punched-nonwoven-manufacturer-india'],
  },

  {
    slug: 'geotextile-for-road-construction',
    title: 'Geotextile for road construction: where it goes and what it does',
    seoTitle: 'Geotextile for Road Construction: Uses',
    description:
      'How nonwoven geotextile is used under roads and pavements: separation, filtration and drainage over soft subgrade, and what to specify when you order.',
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
          'These jobs are described in more detail in our [nonwoven geotextile guide](/guides/nonwoven-geotextile-guide).',
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
      'geotextile-for-drainage-and-erosion-control',
      'nonwoven-geotextile-guide',
      'how-to-request-a-nonwoven-felt-quote',
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
    relatedGuides: ['gsm-in-nonwoven-fabric', 'polyester-vs-polypropylene-nonwoven'],
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
        a: 'Nonwoven, for drainage and filtration. A thick needle punched fabric lets water move through and along it, which is what a drain needs. Woven geotextiles are generally chosen where tensile strength and reinforcement matter more than flow.',
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
    relatedGuides: ['geotextile-for-road-construction', 'nonwoven-geotextile-guide'],
  },
];

export const guideBySlug = (slug) => guides.find((g) => g.slug === slug) || null;
