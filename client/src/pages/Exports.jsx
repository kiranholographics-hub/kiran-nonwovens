import { Link } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import FeatureGrid from '../components/FeatureGrid.jsx';
import Reveal from '../components/Reveal.jsx';
import {
  EXPORT_SEO,
  EXPORT_STEPS,
  REGIONS,
  markets,
  marketsIn,
} from '../data/markets.js';
import { PARTNER } from '../data/locations.js';
import { VIDEOS, breadcrumbLd, collectionLd } from '../lib.js';
import './Exports.css';

export default function Exports() {
  const trail = [{ to: '/', label: 'Home' }, { label: 'Exports' }];

  return (
    <>
      <Seo
        title={EXPORT_SEO.title}
        description={EXPORT_SEO.description}
        path="/exports"
        jsonLd={[
          breadcrumbLd(trail),
          collectionLd({
            name: 'Nonwoven felt and geotextile export markets',
            description: EXPORT_SEO.description,
            path: '/exports',
            items: markets.map((m) => ({
              name: `Nonwoven felt supplier for ${m.buyers}`,
              path: `/exports/${m.slug}`,
            })),
          }),
        ]}
      />
      <PageHero
        trail={trail}
        kicker="Exports"
        title="From India to global markets."
        lead="Needle punched and thermal bonded nonwoven felt and geotextile, made to your specification and exported from Jaipur."
        video={VIDEOS.about}
        variant={2}
      >
        <Link to="/contact#enquiry" className="btn btn--light">
          Send an enquiry
        </Link>
      </PageHero>

      <section className="block">
        <div className="wrap">
          <p className="eyebrow">How it works</p>
          <h2>A coordinated export process.</h2>
          <p className="exports__lead">
            From enquiry to delivery, each step is agreed with you directly.
            Production is at our manufacturing partner, {PARTNER.name}, in
            Phagi, Jaipur.
          </p>
          <Reveal>
            <FeatureGrid items={EXPORT_STEPS} columns={3} />
          </Reveal>
        </div>
      </section>

      <section className="block block--sand">
        <div className="wrap">
          <p className="eyebrow">Markets we supply</p>
          <h2>Where our nonwovens travel.</h2>
          <p className="exports__lead">
            What buyers in each market ask us about first: ports, labelling and
            the grades they use most.
          </p>
          <div className="exports__regions">
            {REGIONS.map((region) => (
              <div key={region} className="exports__region">
                <h3>{region}</h3>
                <ul>
                  {marketsIn(region).map((m) => (
                    <li key={m.slug}>
                      <Link to={`/exports/${m.slug}`}>
                        <strong>{m.name}</strong>
                        <span>Nonwoven felt supplier for {m.buyers}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block exports__cta">
        <div className="wrap">
          <p className="eyebrow">Export enquiry</p>
          <h2>Discuss your destination market.</h2>
          <p>
            Send the application, fibre, GSM, width, quantity and destination
            and our export team will reply with a quote.
          </p>
          <div className="cta-row">
            <Link to="/contact#enquiry" className="btn btn--fill">
              Send an enquiry
            </Link>
            <Link to="/products" className="btn">
              Browse products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
