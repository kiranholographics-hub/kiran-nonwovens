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

export const GUIDES_PUBLISHED = '2026-09-30';

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
          'Kiran Nonwovens produces both needle punched and thermal bonded nonwovens, from 100 to 1200 GSM in roll widths of 5.0–5.2 m. Needle punching is the process behind our [geotextiles](/products/geotextile), automotive felt and most of the range; see [how it is made](/manufacturing) for the plant capability.',
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
    relatedGuides: ['polyester-vs-polypropylene-nonwoven', 'gsm-in-nonwoven-fabric'],
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
          'Kiran Nonwovens makes nonwovens across a 100–1200 GSM range, so the same plant covers light linings and padding as well as heavy felt and geotextile.',
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
    relatedGuides: ['how-to-request-a-nonwoven-felt-quote', 'needle-punched-vs-thermal-bonded-nonwoven'],
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
    relatedGuides: ['polyester-vs-polypropylene-nonwoven', 'gsm-in-nonwoven-fabric'],
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
    relatedGuides: ['nonwoven-geotextile-guide', 'automotive-nvh-felt-guide'],
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
    relatedGuides: ['needle-punched-vs-thermal-bonded-nonwoven', 'polyester-vs-polypropylene-nonwoven'],
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
    relatedGuides: ['gsm-in-nonwoven-fabric', 'polyester-vs-polypropylene-nonwoven'],
  },
];

export const guideBySlug = (slug) => guides.find((g) => g.slug === slug) || null;
