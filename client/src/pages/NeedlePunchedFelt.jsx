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
import { PARTNER } from '../data/locations.js';
import { NEEDLE_FELT_FAQ, PAGE_SEO, plain } from '../data/seo.js';
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

/** Which fibre suits which job. General nonwoven knowledge, not a claim of grade. */
const FIBRES = [
  {
    title: 'Polyester',
    text: 'Recovers its loft after compression and does not absorb moisture, so it holds shape in padding, lining, automotive and flooring work.',
  },
  {
    title: 'PP, virgin or recycled',
    text: 'The economical choice for geotextile, carpet backing and packaging felt. Recycled PP is available where the job allows it.',
  },
  {
    title: 'Viscose',
    text: 'Soft and absorbent. Chosen where feel and moisture handling matter more than resilience, as in cast padding.',
  },
  {
    title: 'Custom blend',
    text: 'Fibres combined to balance softness, loft, strength and cost for an application no standard grade fits.',
  },
];

/** Guides that answer the questions an enquiry usually starts with. */
const READING = [
  '[Needle punched vs thermal bonded](/guides/needle-punched-vs-thermal-bonded-nonwoven) — how the two processes differ',
  '[GSM in nonwoven fabric](/guides/gsm-in-nonwoven-fabric) — choosing a weight',
  '[Polyester vs polypropylene](/guides/polyester-vs-polypropylene-nonwoven) — choosing a fibre',
  '[What to check in a needle punched felt manufacturer](/guides/needle-punched-nonwoven-manufacturer-india) — a checklist for importers',
  '[The quote checklist](/guides/how-to-request-a-nonwoven-felt-quote) — what to send with an enquiry',
];

export default function NeedlePunchedFelt() {
  const { businessAreas, products } = useCatalogue();
  const trail = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { label: 'Needle punched felt' },
  ];

  const byArea = businessAreas
    .map((a) => ({ area: a, items: products.filter((p) => p.category === a.slug) }))
    .filter((g) => g.items.length);

  return (
    <>
      <Seo
        title={PAGE_SEO.needleFelt.title}
        description={PAGE_SEO.needleFelt.description}
        path="/needle-punched-felt-india"
        jsonLd={[
          breadcrumbLd(trail),
          collectionLd({
            name: 'Needle punched felt and geotextile range',
            description: PAGE_SEO.needleFelt.description,
            path: '/needle-punched-felt-india',
            items: products.map((p) => ({
              name: p.name,
              path: `/products/${p.category}/${p.slug}`,
            })),
          }),
          faqLd(NEEDLE_FELT_FAQ.map((f) => ({ q: f.q, a: plain(f.a) }))),
        ]}
      />

      <PageHero
        trail={trail}
        kicker="Needle punched felt · Jaipur, India"
        title="Needle punched felt manufacturer in India"
        lead={`Polyester, PP, viscose and blended needle punched felt, ${PLANT.gsmLabel} GSM, made to your specification at our manufacturing partner’s plant in Phagi, Jaipur, and exported to buyers worldwide.`}
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
          <p>
            If you are looking for a needle punched felt manufacturer in India,
            this is what we supply and how an order works. The felt is made to
            order: you give us the application, fibre, weight and width, we
            confirm a specification and a sample, and the roll is produced
            against it.
          </p>
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
          <h2>What we make, in figures</h2>
          <div style={{ marginTop: 14 }}>
            <SpecTable
              specs={CAPABILITY}
              gsmConfirmed
              caption="Needle punched felt: what we supply"
            />
          </div>
          <Note>
            Thickness and colour are set for each order, so they are quoted with
            the specification rather than listed as one fixed figure.
          </Note>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <p className="eyebrow">Ordering</p>
          <h2>How an order works</h2>
          <div style={{ marginTop: 14 }}>
            <OrderingTable caption="Ordering terms for needle punched felt" />
          </div>
        </div>
      </section>

      <section className="block block--sand">
        <div className="wrap">
          <p className="eyebrow">Fibre</p>
          <h2>Choosing the fibre</h2>
          <Reveal>
            <FeatureGrid items={FIBRES} columns={2} />
          </Reveal>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <p className="eyebrow">Applications</p>
          <h2>Where needle punched felt is used</h2>
          <p style={{ marginTop: 8 }}>
            One process, four kinds of job. Each product page lists its
            applications, specification and an enquiry form.
          </p>
          <div className="exports__regions" style={{ marginTop: 14 }}>
            {byArea.map(({ area, items }) => (
              <div key={area.slug} className="exports__region">
                <h3>
                  <Link to={`/products/${area.slug}`}>{area.name}</Link>
                </h3>
                <ul>
                  {items.map((p) => (
                    <li key={p.slug}>
                      <Link to={`/products/${p.category}/${p.slug}`}>
                        <strong>{p.name}</strong>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block block--sand">
        <div className="wrap">
          <p className="eyebrow">Before you enquire</p>
          <h2>Reading that saves a round of questions</h2>
          <div style={{ marginTop: 14 }}>
            <RuledList
              items={READING.map((t) => (
                <RichText key={t} text={t} />
              ))}
            />
          </div>
          <p style={{ marginTop: 14 }}>
            If you do not have a specification, send a sample of what you use
            today. We will work from that.
          </p>
          <div className="cta-row">
            <Link to="/contact#enquiry" className="btn btn--fill">
              Send an enquiry
            </Link>
            <Link to="/india" className="btn">
              Our Jaipur office
            </Link>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <Faq items={NEEDLE_FELT_FAQ} title="Needle punched felt: common questions" id="felt-faq" />
        </div>
      </section>
    </>
  );
}
