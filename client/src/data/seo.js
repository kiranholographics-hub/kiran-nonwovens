/**
 * SEO copy that isn't a product or a guide: page titles and descriptions for
 * the static pages, the buyer-guide intro for each category, and the FAQs.
 *
 * Same rules as the guides — only what the catalogue and the plant capability
 * already state, plus general nonwoven knowledge. No certification, founding
 * year, capacity or price is claimed anywhere in here. Lead time, MOQ, roll
 * length, packing and samples come only from ORDERING (owner-confirmed).
 *
 * Pure data, no imports beyond the catalogue's own constants.
 *
 * Markup inside strings: [text](/path) becomes an internal link.
 */
import { ORDERING } from './catalog.js';

const lowerFirst = (s) => s.charAt(0).toLowerCase() + s.slice(1);

/* ── Static-page titles + descriptions (title is ≤ ~60 chars with the brand) ── */
export const PAGE_SEO = {
  businessAreas: {
    title: 'Nonwoven Felt Applications by Industry',
    description:
      'Nonwoven felt and geotextile for four industries: civil works, automotive, apparel and footwear, and industrial use. Needle punched, made to specification.',
  },
  products: {
    title: 'Nonwoven Felt & Geotextile Products',
    description:
      'The Kiran Nonwovens range: geotextiles, automotive felt, apparel and footwear nonwovens and industrial felt. Needle punched or thermal bonded, 100–1200 GSM.',
  },
  about: {
    title: 'About Us: Nonwoven Felt Manufacturer',
    description:
      'Kiran Nonwovens makes needle punched and thermal bonded nonwoven felt and geotextiles to specification for civil, automotive, apparel and industrial use.',
  },
  manufacturing: {
    title: 'Needle Punch & Thermal Bond Manufacturing',
    description:
      'Needle punching and thermal bonding capability: roll widths 5.0–5.2 m, 100–1200 GSM, in polyester, PP (virgin and recycled), viscose and custom blends.',
  },
  contact: {
    title: 'Contact & Quote Request for Nonwoven Felt',
    description:
      'Send a specification-based enquiry for nonwoven felt or geotextile — fibre, GSM, width and quantity — and our export team will reply with a quote.',
  },
  needleFelt: {
    title: 'Needle Punched Felt Manufacturer, India',
    description:
      'Needle punched felt from Jaipur, India: polyester, PP and viscose, 100–1200 GSM, 5.0–5.2 m rolls, made to order. Free samples, export packing.',
  },
  india: {
    title: 'Nonwoven Felt & Geotextile in Jaipur, India',
    description:
      'Kiran Nonwovens is based in Jaipur, Rajasthan. Needle punched and thermal bonded felt and geotextile, 100–1200 GSM, made to each buyer\u2019s specification.',
  },
  guides: {
    title: 'Nonwoven Felt & Geotextile Buyer’s Guides',
    description:
      'Plain-language guides for buyers: needle punched vs thermal bonded, GSM, geotextile functions, PP vs polyester, NVH felt and how to request a quote.',
  },
};

/* ── Category pages: a buyer's introduction that is not the business-area
 *    overview (the two pages must not carry the same text). ───────────────── */
export const CATEGORY_COPY = {
  geotextile: {
    heading: 'Choosing a geotextile',
    paragraphs: [
      'Start from the job: separating a soft subgrade from the aggregate above it, filtering water around a drain, protecting a buried pipe or cable, or filtering air in a dust collector. Each material below is needle punched and made to order across a 100–1200 GSM range in roll widths of 5.0–5.2 m, so the practical choices are fibre, weight and roll size.',
      'Read [how a nonwoven geotextile works and how to specify it](/guides/nonwoven-geotextile-guide), or compare [PP and polyester fibre](/guides/polyester-vs-polypropylene-nonwoven) before you decide.',
    ],
    faqs: [
      {
        q: 'What GSM geotextile do I need?',
        a: 'It is set by your project design — the soil, the load and the flow. Send the requirement with your enquiry and we will confirm the grade. Our geotextiles are made across a 100–1200 GSM range.',
      },
      {
        q: 'What roll widths are available?',
        a: 'Roll widths of 5.0–5.2 m, with roll length, GSM and thickness set to your project’s requirement.',
      },
      {
        q: 'Do you offer PP and polyester geotextile?',
        a: 'Yes. Fibre options are PP (virgin and recycled) and polyester. The right choice depends on soil chemistry, temperature and exposure on your site.',
      },
      {
        q: 'Can I get a sample before ordering?',
        a: 'Yes, samples are available on request. Send the application and the GSM and width you have in mind.',
      },
    ],
  },
  automotive: {
    heading: 'Choosing automotive felt',
    paragraphs: [
      'Automotive felt is specified per component: a floor needs backing and cushioning, a door panel or headliner needs a formable, lightweight layer, and an engine bay needs insulation that tolerates heat. The three materials below cover general interior felt, combined acoustic and thermal insulation, and NVH control.',
      'GSM, thickness, density, width, colour and fibre blend are set to each component’s requirement, and the felts cut, mould, laminate, stitch and die-cut cleanly. See [how nonwoven felt reduces noise and heat](/guides/automotive-nvh-felt-guide).',
    ],
    faqs: [
      {
        q: 'What is NVH felt?',
        a: 'NVH stands for noise, vibration and harshness. NVH felt is a needle punched nonwoven tuned to absorb sound and damp vibration in vehicle interiors and other assemblies.',
      },
      {
        q: 'Can the felt be moulded to a component shape?',
        a: 'Yes. Our felts can be cut, moulded, laminated, stitched and die-cut, so they move straight into component production.',
      },
      {
        q: 'Which fibre suits areas near heat?',
        a: 'Polyester generally tolerates higher temperatures than polypropylene. Tell us the operating temperature and we will recommend a fibre.',
      },
      {
        q: 'Can you match a colour?',
        a: 'Colour is set per order — single colour, multi-colour or a customised shade. Send your reference with the enquiry.',
      },
    ],
  },
  'apparel-footwear': {
    heading: 'Choosing nonwovens for garments and footwear',
    paragraphs: [
      'Garment and footwear makers use nonwovens for structure and comfort: shoulder pads that hold a tailored shoulder, and linings, insoles, heel counters and toe puffs that give a shoe its shape. Both materials below are needle punched polyester and are made to your GSM, thickness, width and colour.',
      'They cut, stitch, laminate and bond easily with other materials. Send your target weight and thickness, or a sample of what you use today, and we will match it. See [how to specify GSM](/guides/gsm-in-nonwoven-fabric).',
    ],
    faqs: [
      {
        q: 'What is shoulder pad nonwoven fabric?',
        a: 'A soft, lightweight needle punched polyester fabric used to shape and support the shoulder line of blazers, suits, coats, jackets and uniforms.',
      },
      {
        q: 'Can the fabric be laminated or bonded to other materials?',
        a: 'Yes. Both fabrics cut, stitch, laminate and bond easily with other materials.',
      },
      {
        q: 'Can I choose GSM, thickness and colour?',
        a: 'Yes. GSM, thickness, width and colour are customised to each design and production line.',
      },
      {
        q: 'Can you match the fabric we use today?',
        a: 'Yes. Send your target weight and thickness, or a sample of your current fabric, and we will match it.',
      },
    ],
  },
  industrial: {
    heading: 'Choosing industrial felt',
    paragraphs: [
      'Industrial felt covers a wide range of jobs — medical padding, flooring underlay, carpet backing, packaging protection, luggage and bag support — and, where none of those fit, custom development. The right choice comes down to fibre, weight and finish, so the materials below are all made to order.',
      'If nothing here matches your requirement, our [customised nonwoven solutions](/products/industrial/customised-nonwoven-solutions) are developed to your GSM, thickness, density, fibre blend, colour and finish.',
    ],
    faqs: [
      {
        q: 'Can you develop a nonwoven to my specification?',
        a: 'Yes. Where no standard material fits, fibre blend, density, surface finish, strength and softness are developed for the application.',
      },
      {
        q: 'What further processing are the felts suited to?',
        a: 'Cutting, stitching, laminating, moulding, embossing, printing, die-cutting and bonding.',
      },
      {
        q: 'Is recycled fibre available?',
        a: 'Yes. Our fibre range includes PP (virgin and recycled), alongside polyester, viscose and custom blends.',
      },
      {
        q: 'Can I get a sample before ordering?',
        a: 'Yes, samples are available on request. Send the application and the GSM and width you have in mind.',
      },
    ],
  },
};

/* ── Home, manufacturing, contact FAQs ────────────────────────────────────── */
export const HOME_FAQ = [
  {
    q: 'What does Kiran Nonwovens manufacture?',
    a: 'Needle punched and thermal bonded nonwoven felt and geotextiles for civil works, automotive, apparel and footwear, and industrial use — [16 standard products](/products) across four business areas, plus fully customised development.',
  },
  {
    q: 'What GSM and roll widths can you supply?',
    a: 'A 100–1200 GSM range in roll widths of 5.0–5.2 m. Thickness, density, roll length and colour are set to each order.',
  },
  {
    q: 'Which fibres do you use?',
    a: 'Polyester, PP (virgin and recycled), viscose and custom blends. See [polyester vs polypropylene nonwoven](/guides/polyester-vs-polypropylene-nonwoven) for how to choose.',
  },
  {
    q: 'Can you make nonwoven felt to my specification?',
    a: 'Yes. GSM, thickness, width, density, fibre blend, colour and roll length are set for each order, so the material fits the product it will become.',
  },
  {
    q: 'Do you export?',
    a: 'Yes. Kiran Nonwovens supplies export buyers from India. Include your destination country in your [enquiry](/contact#enquiry).',
  },
  {
    q: 'How do I get a quote or a sample?',
    a: 'Send an [enquiry](/contact#enquiry) with the application, fibre, GSM, width and quantity. Samples are available on request. See [what to include in a quote request](/guides/how-to-request-a-nonwoven-felt-quote).',
  },
];

export const MANUFACTURING_FAQ = [
  {
    q: 'What is the difference between needle punching and thermal bonding?',
    a: 'Needle punching entangles a fibre web mechanically with barbed needles, giving a dense, dimensionally stable felt. Thermal bonding fuses low-melt fibre with heat, giving a lighter, loftier material. See the [full comparison](/guides/needle-punched-vs-thermal-bonded-nonwoven).',
  },
  {
    q: 'What roll widths and GSM can you produce?',
    a: 'Roll widths of 5.0–5.2 m and a 100–1200 GSM range.',
  },
  {
    q: 'What can be customised?',
    a: 'GSM, thickness, density and width; polyester, polypropylene, viscose, recycled or blended fibres; colour; fabric feel; roll length and packaging; surface finishing, lamination, embossing and bonding compatibility; and application-specific strength, permeability and cushioning.',
  },
  {
    q: 'What further processing are the fabrics suited to?',
    a: 'Cutting, stitching, laminating, moulding, embossing, printing, die-cutting and bonding.',
  },
];

export const CONTACT_FAQ = [
  {
    q: 'What should I include in an enquiry?',
    a: 'The application, fibre preference, GSM, thickness and width, colour and roll length, quantity, and destination country. See the [quote request checklist](/guides/how-to-request-a-nonwoven-felt-quote).',
  },
  {
    q: 'Can I get a sample?',
    a: 'Yes, samples are available on request, so you can try the material in your own process before a bulk order.',
  },
  {
    q: 'What if I don’t know the exact specification?',
    a: 'Describe the application and we will recommend a material. Exact figures are confirmed with each quote.',
  },
  {
    q: 'Do you supply buyers outside India?',
    a: 'Yes. We supply export buyers from India — include your destination country with your enquiry.',
  },
];

/* ── Per-product FAQ, built from each product's own catalogue fields so no two
 *    pages carry the same answers. ──────────────────────────────────────── */
const list = (items, n) => {
  const xs = (items || []).slice(0, n).map((s) => s.replace(/\.$/, ''));
  if (xs.length <= 1) return xs.join('');
  return `${xs.slice(0, -1).join(', ')} and ${xs[xs.length - 1]}`.replace(/^(.)/, (c) => c);
};

const lower = (s) => s.charAt(0).toLowerCase() + s.slice(1);

/** "a, b and c" — so adding a guide to a list cannot drop a comma. */
const sentenceList = (items) =>
  items.length <= 1
    ? items.join('')
    : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;

/** Extra questions for one product, keyed by slug: the buyer questions the
 *  generated FAQ cannot answer from the product record alone. Facts only from
 *  the guides, the plant capability and ORDERING. */
const PRODUCT_FAQ = {
  'pp-geotextile-fabric-for-civil-works': [
    {
      q: 'Which GSM of PP geotextile should I order for a road?',
      a: 'It depends on the subgrade, the aggregate and the traffic, and on public works the tender specification sets the grade. As a rough guide, about 100–200 GSM is common for separation over a firm subgrade, 200–400 GSM on softer or wetter ground, and 400 GSM and above under angular stone or heavy traffic. Our [road geotextile GSM guide](/guides/geotextile-gsm-for-road-construction-india) explains how to choose.',
    },
    {
      q: 'How many square metres are in one roll?',
      a: 'A standard 50 m roll covers 250 m² at 5.0 m wide or 260 m² at 5.2 m wide, before overlaps. At 200 GSM that is about 50–52 kg of fabric. The [roll weight and coverage guide](/guides/geotextile-roll-weight-and-coverage) shows the calculation for other weights.',
    },
    {
      q: 'Can the rolls be cut narrower than 5 m?',
      a: 'Yes. Rolls are produced 5.0–5.2 m wide and can be cut narrower to suit your crew, your layout or your container plan. Other roll lengths than the standard 50 m are also available on request.',
    },
    {
      q: 'Virgin or recycled PP: which should I choose?',
      a: 'We supply this geotextile in both. Tell us the application and any test values your specification requires, and we will advise. The [polyester vs polypropylene guide](/guides/polyester-vs-polypropylene-nonwoven) covers where recycled fibre suits and where it does not.',
    },
  ],
};

export function productFaq(product) {
  const specs = product.specs || {};
  const faqs = [];

  if (product.applications?.length) {
    faqs.push({
      q: `What is ${product.name} used for?`,
      a: `Typical uses include ${list(product.applications.map(lower), 5)}.`,
    });
  }

  const gsm =
    specs.gsmMin != null && specs.gsmMax != null
      ? `${specs.gsmMin}–${specs.gsmMax} GSM`
      : null;
  faqs.push({
    q: `What GSM and roll width is ${product.name} available in?`,
    a:
      `${product.name} is made to order${gsm ? ` across a ${gsm} range` : ''}` +
      `${specs.width ? ` in roll widths of ${specs.width}` : ''}. ` +
      `The standard roll is 50 m long, with other lengths on request. Thickness and colour are set to your requirement, and exact figures are confirmed with your quote.`,
  });

  const fibre = Array.isArray(specs.fibre) ? specs.fibre.join(', ') : specs.fibre;
  if (specs.process || fibre) {
    faqs.push({
      q: `How is ${product.name} made, and from which fibres?`,
      a:
        `${specs.process ? `Process: ${lower(specs.process)}. ` : ''}` +
        `${fibre ? `Fibre options: ${fibre}. ` : ''}` +
        `Read [how needle punching and thermal bonding differ](/guides/needle-punched-vs-thermal-bonded-nonwoven).`,
    });
  }

  if (product.features?.length) {
    faqs.push({
      q: `What are the main features of ${product.name}?`,
      a: `${product.features.slice(0, 4).map((f) => lower(f.replace(/\.$/, ''))).join('; ')}.`.replace(/^(.)/, (c) => c.toUpperCase()),
    });
  }

  const guideLink = {
    geotextile: `Read our ${sentenceList([
      '[geotextile for road construction guide](/guides/geotextile-for-road-construction)',
      '[GSM guide for road geotextile](/guides/geotextile-gsm-for-road-construction-india)',
      '[railway track guide](/guides/nonwoven-geotextile-for-railway-track-india)',
      '[nonwoven geotextile guide](/guides/nonwoven-geotextile-guide)',
      '[woven vs nonwoven geotextile guide](/guides/woven-vs-nonwoven-geotextile)',
      '[geobag fabric guide](/guides/geobag-fabric-nonwoven-geotextile-india)',
      '[canal and pond lining guide](/guides/geotextile-canal-pond-lining-india)',
      '[landfill and mining guide](/guides/geotextile-landfill-mining-india)',
      '[retaining wall drainage guide](/guides/geotextile-retaining-wall-drainage-india)',
      '[roll weight and coverage guide](/guides/geotextile-roll-weight-and-coverage)',
      '[embankments on soft soil guide](/guides/geotextile-embankment-soft-soil-india)',
      '[installation guide](/guides/how-to-install-nonwoven-geotextile)',
      '[Hindi guide to nonwoven geotextile](/guides/non-woven-geotextile-hindi)',
      '[gabion and stone pitching guide](/guides/geotextile-gabion-stone-pitching-india)',
    ])}.`,
    automotive: `Read our ${sentenceList([
      '[automotive NVH felt guide](/guides/automotive-nvh-felt-guide)',
      '[guide to felt for OEM interior parts](/guides/automotive-felt-oem-interiors-india)',
    ])}.`,
    castPadding: 'Read our [guide to nonwoven cast padding from India](/guides/orthopaedic-cast-padding-nonwoven-india).',
    filterFelt:
      'Read our [dust collector filter felt guide](/guides/dust-collector-filter-bag-felt) and the [cement, steel and power plant guide](/guides/bag-filter-felt-cement-steel-power-india).',
    feltColour:
      'Read our guides to [felt grow bag fabric](/guides/felt-grow-bag-fabric-nonwoven-india) and [needle punched exhibition carpet rolls](/guides/exhibition-carpet-needle-punched-nonwoven-india).',
    carpet:
      'Read our guide to [needle punched exhibition carpet rolls](/guides/exhibition-carpet-needle-punched-nonwoven-india) and the [carpet backing and flooring underlay felt guide](/guides/carpet-backing-and-underlay-felt).',
    luggage: 'Read our [luggage and bag support felt guide](/guides/luggage-bag-support-felt-india).',
    packaging: 'Read our [packaging and protective felt guide](/guides/packaging-protective-felt-india).',
    shoulderPad:
      'Read our [shoulder pad nonwoven fabric guide](/guides/shoulder-pad-nonwoven-fabric-india) and the [footwear and apparel nonwoven guide](/guides/nonwoven-fabric-for-footwear-and-apparel).',
    'apparel-footwear':
      'Read our [footwear and apparel nonwoven guide](/guides/nonwoven-fabric-for-footwear-and-apparel).',
  }[
    product.slug === 'orthopaedic-cast-padding'
      ? 'castPadding'
      : product.slug === 'filter-geo-bag-felt'
        ? 'filterFelt'
      : product.slug === 'shoulder-pad-nonwoven-fabric'
        ? 'shoulderPad'
        : product.slug === 'multi-colour-needle-punched-felt'
          ? 'feltColour'
          : product.slug === 'carpet-backing-felt'
            ? 'carpet'
          : product.slug === 'luggage-bag-support-felt'
            ? 'luggage'
          : product.slug === 'packaging-protective-felt'
            ? 'packaging'
            : product.category
  ];
  if (guideLink) {
    faqs.push({
      q: `Where can I learn more about choosing ${product.name}?`,
      a: guideLink,
    });
  }

  faqs.push(...(PRODUCT_FAQ[product.slug] || []));

  faqs.push({
    q: `What is the minimum order and lead time for ${product.name}?`,
    a: `There is no fixed minimum: the order quantity is agreed with each order. Lead time: ${lowerFirst(ORDERING.leadTime)}. Rolls are packed in a poly bag on a paper core, or in HDPE wrap.`,
  });

  faqs.push({
    q: `Can I get a sample or a custom specification of ${product.name}?`,
    a: 'Yes. Samples are free, and we send them to any location; how long delivery takes depends on where you are. GSM, thickness, width, colour and roll length can be customised. Use the enquiry form on this page, or see [how to request a quote](/guides/how-to-request-a-nonwoven-felt-quote).',
  });

  return faqs;
}

/** Plain-text version of an answer, with the [text](/path) markup removed —
 *  for schema.org FAQPage, which takes text only. */
export const plain = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');


/** Questions a buyer searching from within India asks first. Location and
 *  capability only — nothing here states a commercial term. */
export const INDIA_FAQ = [
  {
    q: 'Where is Kiran Nonwovens based?',
    a: 'Our office is in Adarsh Nagar, Jaipur, Rajasthan. The material is produced at our manufacturing partner\u2019s factory in Phagi, Jaipur. Both addresses are on the [contact page](/contact).',
  },
  {
    q: 'Are you a manufacturer or a trader?',
    a: 'Neither exactly. Kiran Nonwovens exports material made at the plant of its manufacturing partner, Miracle Nonwoven Industries, to the specification agreed with each buyer — not bought ready-made on the open market. The [manufacturing page](/manufacturing) explains the arrangement.',
  },
  {
    q: 'Which nonwoven processes do you make?',
    a: 'Needle punched and thermal bonded only. We do not make spunbond, spunlace or meltblown. [Nonwoven manufacturers in India](/guides/nonwoven-manufacturers-in-india) explains which process suits which product.',
  },
  {
    q: 'What weights and widths can you produce?',
    a: '100 to 1200 GSM, in roll widths of 5.0–5.2 m, which can be cut narrower. The standard roll is 50 m long, with other lengths on request. Thickness and colour are set per order rather than fixed.',
  },
  {
    q: 'Can I get a sample before ordering?',
    a: 'Yes, samples are free. Describe the application through the [enquiry form](/contact#enquiry), or send a swatch of the material you use today.',
  },
  {
    q: 'How quickly can you dispatch an order?',
    a: 'Usually 4–5 days after the order is confirmed. The minimum quantity is agreed with each order rather than fixed.',
  },
];


/** Needle punched felt landing page: the questions a buyer ready to order asks. */
export const NEEDLE_FELT_FAQ = [
  {
    q: 'What is needle punched felt?',
    a: 'A nonwoven fabric made by punching barbed needles through a web of fibre, which tangles the fibres together without weaving, knitting or adhesive. Density and thickness are set by how heavily the web is needled. See [needle punched vs thermal bonded](/guides/needle-punched-vs-thermal-bonded-nonwoven) for how it differs from the other main process.',
  },
  {
    q: 'What GSM and width can you make?',
    a: '100 to 1200 GSM, in roll widths of 5.0–5.2 m. Thickness and colour are set per order. [GSM in nonwoven fabric](/guides/gsm-in-nonwoven-fabric) explains how weight relates to thickness and feel.',
  },
  {
    q: 'Which fibres do you offer?',
    a: 'Polyester, PP (virgin or recycled), viscose and custom blends. The right one depends on the job; [polyester vs polypropylene](/guides/polyester-vs-polypropylene-nonwoven) sets out the trade-off.',
  },
  {
    q: 'Where is the felt made?',
    a: 'At the plant of our manufacturing partner, Miracle Nonwoven Industries, in Phagi, Jaipur. Kiran Nonwovens agrees the specification with you and exports against it. We are not a trading house buying ready-made stock.',
  },
  {
    q: 'What is the minimum order and how long does dispatch take?',
    a: 'The minimum is agreed per order, and dispatch is usually 4–5 days from order confirmation. A sample is free, to any location, and how long it takes to reach you depends on where you are.',
  },
  {
    q: 'Do you supply finished parts or only rolls?',
    a: 'Rolls. The standard roll is 50 m, with other lengths on request, packed in a poly bag on a paper core or in HDPE wrap. The felt is made to be cut, stitched, laminated and moulded on your own line.',
  },
];
