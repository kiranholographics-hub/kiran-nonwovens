/**
 * SEO copy that isn't a product or a guide: page titles and descriptions for
 * the static pages, the buyer-guide intro for each category, and the FAQs.
 *
 * Same rules as the guides — only what the catalogue and the plant capability
 * already state, plus general nonwoven knowledge. No certification, founding
 * year, capacity, lead time, MOQ or price is claimed anywhere in here.
 *
 * Pure data, no imports beyond the catalogue's own constants.
 *
 * Markup inside strings: [text](/path) becomes an internal link.
 */

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
      'The full Kiran Nonwovens range: geotextiles, automotive felt, apparel and footwear nonwovens and industrial felt. Needle punched or thermal bonded, 100–1200 GSM.',
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
    q: 'What roll widths and GSM can the plant produce?',
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
      `Thickness, roll length and colour are set to your requirement, and exact figures are confirmed with your quote.`,
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

  faqs.push({
    q: `Can I get a sample or a custom specification of ${product.name}?`,
    a: 'Yes. Samples are available on request, and GSM, thickness, width, colour and roll length can be customised. Use the enquiry form on this page, or see [how to request a quote](/guides/how-to-request-a-nonwoven-felt-quote).',
  });

  return faqs;
}

/** Plain-text version of an answer, with the [text](/path) markup removed —
 *  for schema.org FAQPage, which takes text only. */
export const plain = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
