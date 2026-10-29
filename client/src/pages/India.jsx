import { Link } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Faq from '../components/Faq.jsx';
import FeatureGrid from '../components/FeatureGrid.jsx';
import Note from '../components/Note.jsx';
import Reveal from '../components/Reveal.jsx';
import RichText from '../components/RichText.jsx';
import { RuledList } from '../components/TabPanel.jsx';
import { PLANT } from '../data/catalog.js';
import { PARTNER } from '../data/locations.js';
import { INDIA_FAQ, PAGE_SEO, plain } from '../data/seo.js';
import { CONTACT, VIDEOS, breadcrumbLd, faqLd, localBusinessLd } from '../lib.js';

/** What the four business areas mean to a buyer searching from within India. */
const SECTORS = [
  {
    title: 'Civil works and infrastructure',
    text: 'Needle punched geotextile for separation, filtration and drainage under roads, embankments, drains and buried services.',
  },
  {
    title: 'Automotive components',
    text: 'Felt for vehicle interiors, insulation and NVH work, supplied as roll stock to component makers.',
  },
  {
    title: 'Filtration',
    text: 'Filter felt for dust collector bags and baghouse systems, made to the gas temperature and dust it has to handle.',
  },
  {
    title: 'Footwear, garments and interiors',
    text: 'Lighter nonwovens for shoe lining, insoles, shoulder pads, carpet backing and flooring underlay.',
  },
];

const MADE_HERE = [
  `Processes — ${PLANT.processLabel.toLowerCase()}`,
  `Weight range — ${PLANT.gsmMin}–${PLANT.gsmMax} GSM`,
  `Roll width — ${PLANT.widthLabel}`,
  'Fibre — polyester, PP (virgin or recycled), viscose and blends',
  'Thickness, roll length and colour — set per order to your requirement',
];

/** Guides that answer the questions an enquiry usually starts with. */
const READING = [
  '[Nonwoven manufacturers in India](/guides/nonwoven-manufacturers-in-india) — which process suits which product',
  '[Needle punched vs thermal bonded](/guides/needle-punched-vs-thermal-bonded-nonwoven) — how the two differ',
  '[GSM in nonwoven fabric](/guides/gsm-in-nonwoven-fabric) — choosing a weight',
  '[Polyester vs polypropylene](/guides/polyester-vs-polypropylene-nonwoven) — choosing a fibre',
  '[The quote checklist](/guides/how-to-request-a-nonwoven-felt-quote) — what to send with an enquiry',
];

export default function India() {
  const trail = [{ to: '/', label: 'Home' }, { label: 'India' }];

  const localLd = localBusinessLd();

  return (
    <>
      <Seo
        title={PAGE_SEO.india.title}
        description={PAGE_SEO.india.description}
        path="/india"
        jsonLd={[
          localLd,
          breadcrumbLd(trail),
          faqLd(INDIA_FAQ.map((f) => ({ q: f.q, a: plain(f.a) }))),
        ]}
      />

      <PageHero
        trail={trail}
        kicker="Jaipur, Rajasthan"
        title="Nonwoven felt and geotextile from Jaipur, India"
        lead="Kiran Nonwovens is based in Jaipur, Rajasthan. Our material is needle punched and thermal bonded at our manufacturing partner's factory in Phagi, Jaipur, and produced to the specification agreed with each buyer."
        video={VIDEOS.manufacturing}
        variant={2}
      />

      <section className="block">
        <div className="wrap">
          <p className="eyebrow">Where we are</p>
          <h2>Based in Jaipur, made in Phagi</h2>
          <p style={{ marginTop: 8 }}>{PARTNER.description}</p>
          <p style={{ marginTop: 8 }}>
            <strong>Office:</strong> {CONTACT.address}
          </p>
          <p style={{ marginTop: 8 }}>
            <strong>Factory:</strong> {PARTNER.address}.{' '}
            <a href={PARTNER.mapUrl} target="_blank" rel="noopener noreferrer">
              View on Google Maps →
            </a>
          </p>
          <Note>
            We are an exporter working with a manufacturing partner rather than
            a trading house buying on the open market. The{' '}
            <Link to="/manufacturing">manufacturing page</Link> sets out the
            processes and what is made where.
          </Note>
        </div>
      </section>

      <section className="block block--sand">
        <div className="wrap">
          <p className="eyebrow">What is made here</p>
          <h2>The capability, in plain figures</h2>
          <div style={{ marginTop: 14 }}>
            <RuledList items={MADE_HERE} />
          </div>
          <p style={{ marginTop: 14 }}>
            Thickness, roll length and colour are not fixed figures — they are
            set for each order, which is why they are quoted against a
            specification rather than listed. See{' '}
            <Link to="/guides/gsm-in-nonwoven-fabric">how GSM works</Link> if
            you are not sure what weight your job needs.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <p className="eyebrow">Who it is for</p>
          <h2>Sectors we make material for</h2>
          <Reveal>
            <FeatureGrid items={SECTORS} columns={2} />
          </Reveal>
          <div className="cta-row">
            <Link to="/products" className="btn btn--fill">
              See the product range
            </Link>
            <Link to="/business-areas" className="btn">
              Browse by industry
            </Link>
          </div>
        </div>
      </section>

      <section className="block block--sand">
        <div className="wrap">
          <p className="eyebrow">Before you enquire</p>
          <h2>Reading that saves a round of questions</h2>
          <p style={{ marginTop: 8 }}>
            Every material here is made to order, so a price cannot be given
            without a specification. These guides cover the decisions that come
            up first:
          </p>
          <div style={{ marginTop: 14 }}>
            <RuledList
              items={READING.map((t) => (
                <RichText key={t} text={t} />
              ))}
            />
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <p className="eyebrow">Get in touch</p>
          <h2>Tell us what the material has to do</h2>
          <p style={{ marginTop: 8 }}>
            Describe the application, the fibre, GSM and width if you know them,
            and the quantity. If you do not have a specification, send a sample
            of what you use today and we will work from that. Samples are
            available on request.
          </p>
          <p style={{ marginTop: 8 }}>
            <strong>Phone and WhatsApp:</strong>{' '}
            <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> ·{' '}
            <strong>Email:</strong>{' '}
            <a href={CONTACT.emailHref}>{CONTACT.email}</a>
          </p>
          <div className="cta-row">
            <Link to="/contact#enquiry" className="btn btn--fill">
              Send an enquiry
            </Link>
            <Link to="/exports" className="btn">
              Export markets
            </Link>
          </div>
        </div>
      </section>

      <section className="block block--sand">
        <div className="wrap">
          <Faq items={INDIA_FAQ} title="Common questions" id="india-faq" />
        </div>
      </section>
    </>
  );
}
