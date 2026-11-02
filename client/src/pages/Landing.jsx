import { Link } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Faq from '../components/Faq.jsx';
import FeatureGrid from '../components/FeatureGrid.jsx';
import Note from '../components/Note.jsx';
import Reveal from '../components/Reveal.jsx';
import RichText from '../components/RichText.jsx';
import SpecTable, { OrderingTable } from '../components/SpecTable.jsx';
import { RuledList } from '../components/TabPanel.jsx';
import { useCatalogue } from '../CatalogueContext.jsx';
import { PLANT } from '../data/catalog.js';
import { LANDING_LIST } from '../data/landing.js';
import { PARTNER } from '../data/locations.js';
import { plain } from '../data/seo.js';
import { VIDEOS, breadcrumbLd, collectionLd, faqLd } from '../lib.js';

const CAPABILITY = {
  process: 'Needle punched (thermal bonded where the job needs it)',
  fibre: PLANT.fibres,
  gsmMin: PLANT.gsmMin,
  gsmMax: PLANT.gsmMax,
  width: PLANT.widthLabel,
  thickness: 'Made to requirement',
  colour: 'Single colour, multi-colour or a matched shade',
};

/**
 * A "<product> manufacturer in India" page, built from one entry in
 * data/landing.js so the three pages share a layout but not their words.
 */
export default function Landing({ page }) {
  const { products } = useCatalogue();
  const trail = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { label: page.trailLabel },
  ];

  const listed = page.category
    ? products.filter((p) => p.category === page.category)
    : page.productPaths
        .map(([slug, category]) => products.find((p) => p.slug === slug && p.category === category))
        .filter(Boolean);

  const others = LANDING_LIST.filter((l) => l.path !== page.path);

  return (
    <>
      <Seo
        title={page.seo.title}
        description={page.seo.description}
        path={page.path}
        jsonLd={[
          breadcrumbLd(trail),
          collectionLd({
            name: page.h1,
            description: page.seo.description,
            path: page.path,
            items: listed.map((p) => ({
              name: p.name,
              path: `/products/${p.category}/${p.slug}`,
            })),
          }),
          faqLd(page.faqs.map((f) => ({ q: f.q, a: plain(f.a) }))),
        ]}
      />

      <PageHero
        trail={trail}
        kicker={page.kicker}
        title={page.h1}
        lead={page.lead}
        video={VIDEOS.manufacturing}
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
          {page.intro.map((t) => (
            <p key={t}>{t}</p>
          ))}
          <p>
            We are an exporter working with a manufacturing partner.{' '}
            {PARTNER.description} The{' '}
            <Link to="/manufacturing">manufacturing page</Link> sets out the
            processes.
          </p>
        </div>
      </section>

      <section className="block block--sand">
        <div className="wrap">
          <p className="eyebrow">The range</p>
          <h2>{page.supplyTitle}</h2>
          <div style={{ marginTop: 14 }}>
            <SpecTable specs={CAPABILITY} gsmConfirmed caption={page.specCaption} />
          </div>
          <Note>{page.specNote}</Note>
          <div style={{ marginTop: 14 }}>
            <RuledList items={page.supply.map((t) => <RichText key={t} text={t} />)} />
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <p className="eyebrow">Applications</p>
          <h2>{page.usesTitle}</h2>
          <div style={{ marginTop: 14 }}>
            <RuledList items={page.uses.map((t) => <RichText key={t} text={t} />)} />
          </div>
        </div>
      </section>

      <section className="block block--sand">
        <div className="wrap">
          <p className="eyebrow">Plainly</p>
          <h2>{page.notTitle}</h2>
          {page.notText.map((t) => (
            <p key={t} style={{ marginTop: 10 }}>
              <RichText text={t} />
            </p>
          ))}
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <p className="eyebrow">Ordering</p>
          <h2>How an order works</h2>
          <div style={{ marginTop: 14 }}>
            <OrderingTable caption={`Ordering terms: ${page.trailLabel.toLowerCase()}`} />
          </div>
        </div>
      </section>

      <section className="block block--sand">
        <div className="wrap">
          <p className="eyebrow">Specification</p>
          <h2>{page.fibreTitle}</h2>
          <Reveal>
            <FeatureGrid items={page.fibres} columns={2} />
          </Reveal>
        </div>
      </section>

      {listed.length > 0 && (
        <section className="block">
          <div className="wrap">
            <p className="eyebrow">Products</p>
            <h2>{page.productsTitle}</h2>
            <p style={{ marginTop: 8 }}>{page.productsLead}</p>
            <div className="exports__regions" style={{ marginTop: 14 }}>
              <div className="exports__region">
                <ul>
                  {listed.map((p) => (
                    <li key={p.slug}>
                      <Link to={`/products/${p.category}/${p.slug}`}>
                        <strong>{p.name}</strong>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="block block--sand">
        <div className="wrap">
          <p className="eyebrow">Before you enquire</p>
          <h2>Reading that saves a round of questions</h2>
          <div style={{ marginTop: 14 }}>
            <RuledList items={page.reading.map((t) => <RichText key={t} text={t} />)} />
          </div>
          <p style={{ marginTop: 14 }}>
            If you do not have a specification, send a sample of what you use
            today. We will work from that.
          </p>
          <div className="cta-row">
            <Link to="/contact#enquiry" className="btn btn--fill">
              Send an enquiry
            </Link>
            <Link to="/needle-punched-felt-india" className="btn">
              Needle punched felt
            </Link>
            {others.map((o) => (
              <Link key={o.path} to={o.path} className="btn">
                {o.trailLabel}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <Faq items={page.faqs} title={page.faqTitle} id="landing-faq" />
        </div>
      </section>
    </>
  );
}
