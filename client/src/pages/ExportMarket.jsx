import { Link, useParams } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Faq from '../components/Faq.jsx';
import FeatureGrid from '../components/FeatureGrid.jsx';
import Reveal from '../components/Reveal.jsx';
import { useCatalogue } from '../CatalogueContext.jsx';
import {
  EXPORT_STEPS,
  marketBySlug,
  marketSeo,
  marketsIn,
} from '../data/markets.js';
import { PARTNER } from '../data/locations.js';
import { VIDEOS, breadcrumbLd, faqLd } from '../lib.js';
import NotFound from './NotFound.jsx';
import './Exports.css';

const list = (items) =>
  items.length <= 1
    ? items.join('')
    : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;

export default function ExportMarket() {
  const { slug } = useParams();
  const { businessAreas } = useCatalogue();
  const market = marketBySlug(slug);

  if (!market) return <NotFound />;

  const seo = marketSeo(market);
  const path = `/exports/${market.slug}`;
  const trail = [
    { to: '/', label: 'Home' },
    { to: '/exports', label: 'Exports' },
    { label: market.name },
  ];
  const areas = market.focus
    .map((s) => businessAreas.find((a) => a.slug === s))
    .filter(Boolean);
  const sameRegion = marketsIn(market.region).filter((m) => m.slug !== market.slug);
  // A region with a single market (Africa) would otherwise be a dead end.
  const others = sameRegion.length ? sameRegion : marketsIn('Middle East').slice(0, 3);

  const faqs = [
    {
      q: `Which ports do you ship to in ${market.name}?`,
      a: market.ports.length
        ? `We coordinate shipment to your port of choice. Buyers in ${market.name} commonly use ${list(market.ports)}. Tell us the destination port with your enquiry and we will confirm how the order ships.`
        : `We coordinate shipment to your port of choice in ${market.name}. Tell us the destination port with your enquiry and we will confirm how the order ships.`,
    },
    {
      q: `What do ${market.short} buyers usually need settled first?`,
      a: `Most ask about ${market.asks}. Send these with your enquiry and we will confirm what we can supply before you commit.`,
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
        jsonLd={[
          breadcrumbLd(trail),
          faqLd(faqs.map((f) => ({ q: f.q, a: f.a }))),
        ]}
      />
      <PageHero
        trail={trail}
        kicker={market.region}
        title={`Nonwoven felt supplier for ${market.buyers}.`}
        lead={`Needle punched and thermal bonded nonwoven felt and geotextile, 100–1200 GSM, made to your specification and shipped from India to ${market.name}.`}
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
          <p>{market.note}</p>
          <p>
            We supply from one place: our manufacturing partner,{' '}
            {PARTNER.name}, in Phagi, Jaipur. You agree the specification with
            us, approve a sample, and the order is produced and shipped against
            it, so a question about the material is answered by the people who
            make it.
          </p>
          {market.ports.length ? (
            <p>
              Typical discharge ports in {market.name}: {list(market.ports)}.
            </p>
          ) : null}
        </div>
      </section>

      <section className="block block--sand">
        <div className="wrap">
          <p className="eyebrow">What buyers in {market.name} use</p>
          <h2>Grades for {market.name}.</h2>
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

      <section className="block">
        <div className="wrap">
          <p className="eyebrow">How we supply</p>
          <h2>Made to your specification.</h2>
          <Reveal>
            <FeatureGrid items={EXPORT_STEPS} columns={3} />
          </Reveal>
        </div>
      </section>

      <section className="block block--sand">
        <div className="wrap">
          <Faq
            items={faqs}
            title={`${market.name}: what buyers ask us first`}
            id="market-faq"
          />
        </div>
      </section>

      <section className="block exports__cta">
        <div className="wrap">
          <p className="eyebrow">{market.name} enquiry</p>
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
              All export markets
            </Link>
          </div>
          {others.length ? (
            <p className="exports__more">
              {sameRegion.length ? `Also in ${market.region}:` : 'Also supplying:'}{' '}
              {others.map((m, i) => (
                <span key={m.slug}>
                  {i ? ', ' : ''}
                  <Link to={`/exports/${m.slug}`}>{m.name}</Link>
                </span>
              ))}
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
}
