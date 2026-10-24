import { Link, Navigate, useParams } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Faq from '../components/Faq.jsx';
import { useCatalogue } from '../CatalogueContext.jsx';
import {
  REGION_PAGES,
  marketsIn,
  regionBySlug,
  regionFocus,
  regionForMarketSlug,
  regionSeo,
} from '../data/markets.js';
import { PARTNER } from '../data/locations.js';
import { guideBySlug } from '../data/guides.js';
import { VIDEOS, breadcrumbLd, faqLd } from '../lib.js';
import NotFound from './NotFound.jsx';
import './Exports.css';

// Guides worth reading for each business area a region buys for.
const GUIDES_FOR_AREA = {
  geotextile: [
    'geotextile-for-road-construction',
    'geotextile-gsm-for-road-construction-india',
    'nonwoven-geotextile-for-railway-track-india',
    'geotextile-for-drainage-and-erosion-control',
    'geobag-fabric-nonwoven-geotextile-india',
    'geotextile-canal-pond-lining-india',
    'geotextile-landfill-mining-india',
  ],
  automotive: ['automotive-nvh-felt-guide', 'automotive-felt-oem-interiors-india'],
  'apparel-footwear': [
    'nonwoven-fabric-for-footwear-and-apparel',
    'shoulder-pad-nonwoven-fabric-india',
  ],
  industrial: [
    'dust-collector-filter-bag-felt',
    'carpet-backing-and-underlay-felt',
    'orthopaedic-cast-padding-nonwoven-india',
    'bag-filter-felt-cement-steel-power-india',
    'luggage-bag-support-felt-india',
    'packaging-protective-felt-india',
  ],
};
const ALWAYS_GUIDES = [
  'nonwoven-manufacturers-in-india',
  'hs-code-nonwoven-felt-geotextile',
  'how-to-request-a-nonwoven-felt-quote',
];

const list = (items) =>
  items.length <= 1
    ? items.join('')
    : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;

export default function ExportRegion() {
  const { slug } = useParams();
  const { businessAreas } = useCatalogue();
  const region = regionBySlug(slug);

  // An old per-country URL. The server 301s these, but a client-side visit
  // (a stale in-app link) should land on the region page rather than a 404.
  const moved = region ? null : regionForMarketSlug(slug);
  if (moved) return <Navigate to={`/exports/${moved.slug}`} replace />;
  if (!region) return <NotFound />;

  const seo = regionSeo(region);
  const path = `/exports/${region.slug}`;
  const trail = [
    { to: '/', label: 'Home' },
    { to: '/exports', label: 'Exports' },
    { label: region.region },
  ];

  // A catch-all entry is a destination, but not a country: it sits last in
  // the table and stays out of the country list.
  const destinations = [...marketsIn(region.region)].sort(
    (a, b) => Number(a.catchAll ?? false) - Number(b.catchAll ?? false)
  );
  const countries = destinations.filter((m) => !m.catchAll);
  const areas = regionFocus(region.region)
    .map((s) => businessAreas.find((a) => a.slug === s))
    .filter(Boolean);

  const guideSlugs = [
    ...new Set([
      ...regionFocus(region.region).flatMap((f) => GUIDES_FOR_AREA[f] || []),
      ...ALWAYS_GUIDES,
    ]),
  ];
  // The hub carries the full guide index and the how-we-supply steps; a region
  // page links a handful so the same block is not repeated six times over.
  const guides = guideSlugs.map(guideBySlug).filter(Boolean).slice(0, 5);

  const otherRegions = REGION_PAGES.filter((r) => r.slug !== region.slug);

  const faqs = [
    {
      q: `Which ports in ${region.name} do you ship to?`,
      a: `We coordinate shipment to your port of choice. The ports buyers in ${region.name} most often use are listed above, destination by destination. Tell us yours with the enquiry and we will confirm how the order ships.`,
    },
    {
      q: `Which countries in ${region.name} do you supply?`,
      a: `${list(countries.map((m) => m.name))}. If your country is not listed, send the enquiry anyway — the material and the process are the same, and the destination mainly affects packing and paperwork.`,
    },
    {
      q: `What do buyers in ${region.name} settle first?`,
      a: `It varies by destination — the table above sets out what each one usually asks about. Across the region it comes down to the specification, the paperwork your customs broker needs, and consistency from one shipment to the next.`,
    },
    {
      q: 'What is the minimum order quantity?',
      a: 'It depends on the material, GSM and how much is customised. Tell us the product and quantity you need and our export team will confirm the figure with your quote.',
    },
    {
      q: 'Can you match a nonwoven we already buy?',
      a: 'Yes. Send the specification, or a sample if you have one, and we will quote against it. Fibre, GSM, thickness, width and colour can all be set to match.',
    },
    {
      q: 'Can we see a sample before ordering?',
      a: 'Samples are available on request, so you can test the material in your own process before a bulk order.',
    },
  ];

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        path={path}
        jsonLd={[breadcrumbLd(trail), faqLd(faqs.map((f) => ({ q: f.q, a: f.a })))]}
      />
      <PageHero
        trail={trail}
        kicker={region.region}
        title={`Nonwoven felt supplier from India for ${region.buyers}.`}
        lead={`Needle punched and thermal bonded nonwoven felt and geotextile, 100–1200 GSM, made to your specification and shipped from India to ${destinations.length} markets across ${region.name}.`}
        video={VIDEOS.about}
        variant={2}
      >
        <Link to="/contact#enquiry" className="btn btn--light">
          Send an enquiry
        </Link>
        <Link to="/products" className="btn btn--ghost-light">
          Browse products
        </Link>
      </PageHero>

      <section className="block">
        <div className="wrap exports__intro">
          <p>
            We supply from one place: our manufacturing partner, {PARTNER.name},
            in Phagi, Jaipur. You agree the specification with us, approve a
            sample, and the order is produced and shipped against it, so a
            question about the material is answered by the people who make it.
          </p>
        </div>
      </section>

      <section className="block block--sand">
        <div className="wrap">
          <p className="eyebrow">Destinations</p>
          <h2>Where we ship in {region.name}.</h2>
          <div className="guide__table">
            <table>
              <thead>
                <tr>
                  <th scope="col">Destination</th>
                  <th scope="col">Ports buyers commonly use</th>
                  <th scope="col">What they usually ask first</th>
                </tr>
              </thead>
              <tbody>
                {destinations.map((m) => (
                  <tr key={m.slug}>
                    <th scope="row">{m.name}</th>
                    <td>{m.ports.length ? list(m.ports) : 'Your port of choice'}</td>
                    <td>{m.asks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap exports__intro">
          <p className="eyebrow">What the material is used for</p>
          <h2>Across {region.name}.</h2>
          {destinations.map((m) => (
            <p key={m.slug}>
              <strong>{m.name}.</strong> {m.note}
            </p>
          ))}
        </div>
      </section>

      <section className="block block--sand">
        <div className="wrap">
          <p className="eyebrow">Grades</p>
          <h2>What buyers in {region.name} order.</h2>
          <ul className="exports__areas">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link to={`/products/${a.slug}`}>
                  <strong>{a.name}</strong>
                  <span>{a.blurb}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {guides.length ? (
        <section className="block">
          <div className="wrap">
            <p className="eyebrow">Before you enquire</p>
            <h2>Buyer guides.</h2>
            <ul className="exports__areas">
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link to={`/guides/${g.slug}`}>
                    <strong>{g.title}</strong>
                    <span>{g.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="block block--sand">
        <div className="wrap">
          <Faq
            items={faqs}
            title={`${region.region}: what buyers ask us first`}
            id="market-faq"
          />
        </div>
      </section>

      <section className="block exports__cta">
        <div className="wrap">
          <p className="eyebrow">{region.region} enquiry</p>
          <h2>Send us your specification.</h2>
          <p>
            Tell us the application, fibre, GSM, width and quantity and our
            export team will reply with a quote.
          </p>
          <div className="cta-row">
            <Link to="/contact#enquiry" className="btn btn--fill">
              Send an enquiry
            </Link>
            <Link to="/exports" className="btn">
              How we supply
            </Link>
          </div>
          <p className="exports__more">
            Also supplying:{' '}
            {otherRegions.map((r, i) => (
              <span key={r.slug}>
                {i ? ', ' : ''}
                <Link to={`/exports/${r.slug}`}>{r.region}</Link>
              </span>
            ))}
          </p>
        </div>
      </section>
    </>
  );
}
