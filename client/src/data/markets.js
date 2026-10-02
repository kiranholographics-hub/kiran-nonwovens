/**
 * Export markets: one landing page per destination, at
 * /exports/<slug> (e.g. /exports/usa-nonwoven-felt-supplier).
 *
 * Same rules as the guides: nothing here claims a certification, founding
 * year, capacity, lead time, minimum order or price. Port names and the
 * industries each market commonly buys for are general knowledge; the notes
 * are phrased as what buyers "usually ask" or "commonly use", not as figures.
 *
 * Pure data, no imports — the prerender step and the smoke test import it in
 * Node. To add a market, add one entry here and rebuild: the page, the hub
 * link, the sitemap entry and the related-market links all follow.
 *
 * Fields
 *   slug      URL slug, `<short>-nonwoven-felt-supplier`
 *   name      Full name, used in headings
 *   short     Short name for the <title> (kept brief: titles are ≤ 65 chars)
 *   buyers    "United States importers" — used in the heading and description
 *   region    One of REGIONS
 *   ports     Typical discharge ports
 *   focus     Business-area slugs this market most often buys for
 *   note      One or two sentences that are specific to the market
 *   asks      What buyers there usually ask first (standard / labelling point)
 */

export const REGIONS = [
  'North America',
  'South America',
  'Europe',
  'Middle East',
  'Asia-Pacific',
  'Africa',
];

export const markets = [
  {
    slug: 'usa-nonwoven-felt-supplier',
    name: 'United States',
    short: 'US',
    buyers: 'United States importers',
    region: 'North America',
    ports: ['Los Angeles / Long Beach', 'New York / New Jersey', 'Savannah', 'Houston'],
    focus: ['geotextile', 'automotive', 'apparel-footwear', 'industrial'],
    note: 'US buyers source nonwovens for road and drainage works, vehicle interiors, footwear and apparel components and industrial felt, usually through importers and distributors who stock to a fixed specification.',
    asks: 'country-of-origin marking, roll labelling and consistency from one shipment to the next',
  },
  {
    slug: 'canada-nonwoven-felt-supplier',
    name: 'Canada',
    short: 'Canada',
    buyers: 'Canadian importers',
    region: 'North America',
    ports: ['Vancouver', 'Prince Rupert', 'Montréal', 'Halifax'],
    focus: ['geotextile', 'automotive', 'industrial'],
    note: 'Canadian buyers commonly specify geotextile for civil, drainage and erosion-control work across long, cold-climate projects, and felt for automotive and industrial processing.',
    asks: 'the roll width and GSM their projects specify, and whether bilingual labelling is needed',
  },
  {
    slug: 'mexico-nonwoven-felt-supplier',
    name: 'Mexico',
    short: 'Mexico',
    buyers: 'Mexican importers',
    region: 'North America',
    ports: ['Manzanillo', 'Lázaro Cárdenas', 'Veracruz'],
    focus: ['automotive', 'apparel-footwear', 'industrial'],
    note: 'Mexico combines a large automotive supply chain with a footwear and apparel industry, so buyers often look for automotive and NVH felt, shoe-lining nonwovens and industrial felt.',
    asks: 'the fibre, GSM and width their production line is set up for, and Spanish-language documentation',
  },
  {
    slug: 'south-america-nonwoven-felt-supplier',
    name: 'South America',
    short: 'South America',
    buyers: 'South American importers',
    region: 'South America',
    ports: ['Santos', 'Buenos Aires', 'Callao', 'Valparaíso'],
    focus: ['geotextile', 'apparel-footwear', 'industrial'],
    note: 'Importers across South America buy nonwovens for civil and mining works, footwear and apparel, and industrial use, often consolidating several grades into one order.',
    asks: 'which discharge port, and how several grades can be shipped together',
  },
  {
    slug: 'brazil-nonwoven-felt-supplier',
    name: 'Brazil',
    short: 'Brazil',
    buyers: 'Brazilian importers',
    region: 'South America',
    ports: ['Santos', 'Paranaguá', 'Itajaí'],
    focus: ['automotive', 'geotextile', 'apparel-footwear'],
    note: 'Brazil has a large automotive industry and major infrastructure and footwear sectors, so buyers there ask about automotive felt, geotextile for civil works and nonwoven for shoe components.',
    asks: 'import documentation and Portuguese-language product information for their customs broker',
  },
  {
    slug: 'chile-nonwoven-felt-supplier',
    name: 'Chile',
    short: 'Chile',
    buyers: 'Chilean importers',
    region: 'South America',
    ports: ['San Antonio', 'Valparaíso'],
    focus: ['geotextile', 'industrial'],
    note: 'Mining, civil works and agriculture shape demand in Chile, where heavy geotextile for protection, separation and drainage is the grade buyers raise most often.',
    asks: 'the GSM and puncture resistance a mining or civil application needs',
  },
  {
    slug: 'colombia-nonwoven-felt-supplier',
    name: 'Colombia',
    short: 'Colombia',
    buyers: 'Colombian importers',
    region: 'South America',
    ports: ['Cartagena', 'Buenaventura'],
    focus: ['geotextile', 'apparel-footwear'],
    note: 'Road and infrastructure projects drive geotextile demand in Colombia, alongside a domestic footwear and apparel industry that uses nonwoven linings and interlinings.',
    asks: 'which port serves their project and how rolls should be packed for it',
  },
  {
    slug: 'peru-nonwoven-felt-supplier',
    name: 'Peru',
    short: 'Peru',
    buyers: 'Peruvian importers',
    region: 'South America',
    ports: ['Callao'],
    focus: ['geotextile', 'industrial'],
    note: 'Mining and large civil projects are the main users of nonwoven geotextile and protective felt in Peru, where roll width and weight set how the material is handled on site.',
    asks: 'roll weight and width for site handling, and the delivery schedule for a project',
  },
  {
    slug: 'uk-nonwoven-felt-supplier',
    name: 'United Kingdom',
    short: 'UK',
    buyers: 'United Kingdom importers',
    region: 'Europe',
    ports: ['Felixstowe', 'Southampton', 'London Gateway'],
    focus: ['automotive', 'geotextile', 'industrial'],
    note: 'UK buyers source nonwovens for civil and drainage works, automotive and acoustic felt, and industrial processing, generally against a written specification.',
    asks: 'any UK conformity or project standard the material has to meet, stated before the order',
  },
  {
    slug: 'germany-nonwoven-felt-supplier',
    name: 'Germany',
    short: 'Germany',
    buyers: 'German importers',
    region: 'Europe',
    ports: ['Hamburg', 'Bremerhaven'],
    focus: ['automotive', 'industrial', 'geotextile'],
    note: 'With a large automotive and industrial base, German buyers tend to specify exactly: fibre, GSM, thickness and tolerance written down before a sample is made.',
    asks: 'the exact tolerance on GSM and thickness, and the standard the application refers to',
  },
  {
    slug: 'netherlands-nonwoven-felt-supplier',
    name: 'Netherlands',
    short: 'Netherlands',
    buyers: 'Dutch importers',
    region: 'Europe',
    ports: ['Rotterdam'],
    focus: ['geotextile', 'industrial'],
    note: 'Water management, dykes, drainage and ground works make geotextile a core grade in the Netherlands, and Rotterdam also serves buyers who redistribute across Europe.',
    asks: 'the filtration and separation function the geotextile must perform, and the project standard',
  },
  {
    slug: 'france-nonwoven-felt-supplier',
    name: 'France',
    short: 'France',
    buyers: 'French importers',
    region: 'Europe',
    ports: ['Le Havre', 'Marseille-Fos'],
    focus: ['automotive', 'geotextile', 'apparel-footwear'],
    note: 'French buyers purchase nonwovens for automotive interiors, civil and drainage works, and apparel and footwear components, usually with French-language product information.',
    asks: 'French-language documentation and the standard their application refers to',
  },
  {
    slug: 'spain-nonwoven-felt-supplier',
    name: 'Spain',
    short: 'Spain',
    buyers: 'Spanish importers',
    region: 'Europe',
    ports: ['Valencia', 'Barcelona', 'Algeciras'],
    focus: ['apparel-footwear', 'geotextile', 'industrial'],
    note: 'Spain has an established footwear and apparel industry and large civil and landscaping works, so buyers ask for shoe-lining nonwoven as well as geotextile.',
    asks: 'the fibre and finish needed for footwear, and Spanish-language product information',
  },
  {
    slug: 'italy-nonwoven-felt-supplier',
    name: 'Italy',
    short: 'Italy',
    buyers: 'Italian importers',
    region: 'Europe',
    ports: ['Genoa', 'La Spezia', 'Gioia Tauro'],
    focus: ['apparel-footwear', 'automotive', 'industrial'],
    note: 'Footwear, leather goods, apparel and automotive trim all use nonwoven in Italy, so buyers focus on hand-feel, finish and consistency between lots.',
    asks: 'colour, hand-feel and finish, and how a repeat order will match the approved sample',
  },
  {
    slug: 'sweden-nonwoven-felt-supplier',
    name: 'Sweden',
    short: 'Sweden',
    buyers: 'Swedish importers',
    region: 'Europe',
    ports: ['Gothenburg'],
    focus: ['industrial', 'geotextile'],
    note: 'Swedish buyers use nonwoven for industrial processing, filtration and civil ground works in cold-climate conditions, and expect a written specification.',
    asks: 'the written specification, and the standard or test method the project refers to',
  },
  {
    slug: 'norway-nonwoven-felt-supplier',
    name: 'Norway',
    short: 'Norway',
    buyers: 'Norwegian importers',
    region: 'Europe',
    ports: ['Oslo', 'Bergen'],
    focus: ['geotextile', 'industrial'],
    note: 'Road, tunnel, rail and coastal works in demanding terrain make geotextile the grade Norwegian buyers ask about first, followed by industrial felt.',
    asks: 'the separation, filtration or protection function and the project standard',
  },
  {
    slug: 'denmark-nonwoven-felt-supplier',
    name: 'Denmark',
    short: 'Denmark',
    buyers: 'Danish importers',
    region: 'Europe',
    ports: ['Aarhus', 'Copenhagen'],
    focus: ['geotextile', 'industrial'],
    note: 'Danish buyers source geotextile for drainage, landscaping and civil works, and nonwoven felt for industrial and packaging uses, usually in mixed orders.',
    asks: 'how several grades can be combined into one consignment',
  },
  {
    slug: 'poland-nonwoven-felt-supplier',
    name: 'Poland',
    short: 'Poland',
    buyers: 'Polish importers',
    region: 'Europe',
    ports: ['Gdańsk', 'Gdynia'],
    focus: ['automotive', 'geotextile', 'apparel-footwear'],
    note: 'Poland has a large automotive supply base and active road and infrastructure building, so buyers look at automotive felt, geotextile and apparel nonwoven.',
    asks: 'the specification a Tier-1 or project customer has set, and sample approval before bulk',
  },
  {
    slug: 'uae-nonwoven-felt-supplier',
    name: 'United Arab Emirates',
    short: 'UAE',
    buyers: 'United Arab Emirates importers',
    region: 'Middle East',
    ports: ['Jebel Ali', 'Khalifa Port (Abu Dhabi)', 'Sharjah'],
    focus: ['geotextile', 'industrial'],
    note: 'Construction, landscaping and infrastructure make geotextile and protective felt the usual grades in the UAE, and Jebel Ali also supplies buyers who re-export across the region.',
    asks: 'whether the order is for local use or re-export, and the documentation each needs',
  },
  {
    slug: 'saudi-arabia-nonwoven-felt-supplier',
    name: 'Saudi Arabia',
    short: 'Saudi Arabia',
    buyers: 'Saudi Arabian importers',
    region: 'Middle East',
    ports: ['Jeddah', 'Dammam'],
    focus: ['geotextile', 'industrial'],
    note: 'Large infrastructure and construction programmes make geotextile for separation, protection and drainage the grade Saudi buyers raise most often.',
    asks: 'any national conformity requirement for the product, stated before the order',
  },
  {
    slug: 'qatar-nonwoven-felt-supplier',
    name: 'Qatar',
    short: 'Qatar',
    buyers: 'Qatar importers',
    region: 'Middle East',
    ports: ['Hamad Port (Doha)'],
    focus: ['geotextile', 'industrial'],
    note: 'Construction and civil contractors in Qatar use geotextile and protective felt for ground works, landscaping and drainage.',
    asks: 'the project specification and the delivery date a contractor is working to',
  },
  {
    slug: 'oman-nonwoven-felt-supplier',
    name: 'Oman',
    short: 'Oman',
    buyers: 'Oman importers',
    region: 'Middle East',
    ports: ['Sohar', 'Salalah'],
    focus: ['geotextile', 'industrial'],
    note: 'Road, port and industrial-zone construction in Oman drives demand for geotextile and industrial felt, shipped through Sohar or Salalah.',
    asks: 'which port serves the project, and how rolls are packed for it',
  },
  {
    slug: 'japan-nonwoven-felt-supplier',
    name: 'Japan',
    short: 'Japan',
    buyers: 'Japanese importers',
    region: 'Asia-Pacific',
    ports: ['Yokohama', 'Kobe', 'Tokyo'],
    focus: ['automotive', 'industrial'],
    note: 'Japanese buyers are exacting on specification and consistency, so the conversation usually starts with a written specification and a sample for approval.',
    asks: 'tight consistency on GSM, thickness and appearance, and approval of a physical sample first',
  },
  {
    slug: 'south-korea-nonwoven-felt-supplier',
    name: 'South Korea',
    short: 'South Korea',
    buyers: 'South Korean importers',
    region: 'Asia-Pacific',
    ports: ['Busan', 'Incheon'],
    focus: ['automotive', 'industrial'],
    note: 'Automotive and industrial manufacturing in South Korea use nonwoven felt for trim, acoustic and filtration work, against a specification set by the end customer.',
    asks: 'the end-customer specification, and approval of a sample before bulk',
  },
  {
    slug: 'australia-nonwoven-felt-supplier',
    name: 'Australia',
    short: 'Australia',
    buyers: 'Australian importers',
    region: 'Asia-Pacific',
    ports: ['Sydney (Port Botany)', 'Melbourne', 'Brisbane', 'Fremantle'],
    focus: ['geotextile', 'industrial'],
    note: 'Road, rail, mining and large-scale civil works make geotextile the main grade for Australian buyers, who also use industrial felt for processing.',
    asks: 'the project specification, roll size for site handling, and which port is nearest the site',
  },
  {
    slug: 'new-zealand-nonwoven-felt-supplier',
    name: 'New Zealand',
    short: 'New Zealand',
    buyers: 'New Zealand importers',
    region: 'Asia-Pacific',
    ports: ['Auckland', 'Tauranga'],
    focus: ['geotextile', 'industrial'],
    note: 'Civil, roading, drainage and landscape works use geotextile in New Zealand, often in smaller consignments that benefit from combining grades.',
    asks: 'how several grades can be combined into one smaller consignment',
  },
  {
    slug: 'south-africa-nonwoven-felt-supplier',
    name: 'South Africa',
    short: 'South Africa',
    buyers: 'South African importers',
    region: 'Africa',
    ports: ['Durban', 'Cape Town', 'Gqeberha'],
    focus: ['geotextile', 'industrial'],
    note: 'Mining, roads and civil works shape demand in South Africa, where geotextile and protective felt are the grades buyers ask about most.',
    asks: 'the GSM and puncture resistance the application needs, and which port serves the site',
  },
];

export const marketBySlug = (slug) => markets.find((m) => m.slug === slug);

export const marketsIn = (region) => markets.filter((m) => m.region === region);

/** Page title (before the brand is appended) and meta description. */
export const marketSeo = (m) => ({
  title: `Nonwoven Felt Supplier for ${m.short}`,
  description: `Nonwoven felt and geotextile supplier for ${m.buyers}. Needle punched and thermal bonded, 100–1200 GSM, made to specification, shipped from India.`,
});

export const EXPORT_SEO = {
  title: 'Exports: Nonwoven Felt from India',
  description:
    'Exports of needle punched and thermal bonded nonwoven felt and geotextile from India to 26 markets. Specification, sampling, production, packing and shipping.',
};

/** The export process, shown on the hub and on every market page. */
export const EXPORT_STEPS = [
  {
    title: 'Specification',
    text: 'We confirm the fibre, GSM, thickness, width, colour, quantity and destination requirements with you.',
  },
  {
    title: 'Sampling',
    text: 'Samples are available on request, so the material can be tried in your own process before bulk.',
  },
  {
    title: 'Production',
    text: 'Bulk production is made against the specification agreed with you, at our manufacturing partner’s factory in Jaipur.',
  },
  {
    title: 'Packing & documentation',
    text: 'Export packing and the documentation your destination and customs broker ask for, agreed with each order.',
  },
  {
    title: 'Shipping',
    text: 'Dispatch is coordinated to your port, with status communication through to delivery.',
  },
];
