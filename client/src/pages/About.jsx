import { Link } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import Media from '../components/Media.jsx';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import { HISTORY } from '../data/about.js';
import { useCatalogue } from '../CatalogueContext.jsx';
import { PLANT } from '../data/catalog.js';
import { PARTNER } from '../data/locations.js';
import { team, certifications } from '../data/content.js';
import { PAGE_SEO } from '../data/seo.js';
import { VIDEOS, breadcrumbLd, SITE } from '../lib.js';
import './About.css';

/**
 * Written only from what is on record: the plant capability, the company's
 * product-description document and the brand tagline. History, founding year
 * and certifications are facts only the company can supply, so those two
 * sections stay marked as pending rather than being written for them.
 */
export default function About() {
  const { businessAreas, products } = useCatalogue();

  return (
    <>
      <Seo
        title={PAGE_SEO.about.title}
        description={PAGE_SEO.about.description}
        path="/about"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Kiran Nonwovens',
            url: `${SITE.url}/about`,
            about: { '@type': 'Organization', name: SITE.name, url: SITE.url },
          },
          breadcrumbLd([{ to: '/', label: 'Home' }, { label: 'About Us' }]),
        ]}
      />

      <PageHero
        trail={[{ to: '/', label: 'Home' }, { label: 'About Us' }]}
        title="About Us"
        lead="Nonwoven solutions for a better tomorrow."
        video={VIDEOS.about}
        variant={2}
      />

      <section className="block about__block">
        <div className="wrap">
          <div className="about__grid">
            <div className="about__body">
              <h2 id="overview">Company overview</h2>
              <p>
                Kiran Nonwovens supplies needle punched and thermal bonded
                nonwoven fabrics and felts, manufactured with our partner{' '}
                {PARTNER.name}. Our materials go into roads and
                drainage systems, vehicle interiors, garments and footwear,
                medical padding, flooring, packaging and luggage —{' '}
                {products.length} standard products across{' '}
                {businessAreas.length} industries, plus fully customised
                development.
              </p>
              <p>
                We work to specification rather than from a fixed list. GSM,
                thickness, width, density, fibre blend, colour and roll length
                are set for each order, so the material matches the product it
                is going to become — whether that is a geotextile under a
                highway, an acoustic liner in a car door or the shoulder of a
                tailored blazer.
              </p>
              <ul className="about__areas">
                {businessAreas.map((area) => (
                  <li key={area.slug}>
                    <Link to={`/business-areas/${area.slug}`}>{area.name}</Link>
                    <span>{area.blurb}</span>
                  </li>
                ))}
              </ul>

              {HISTORY.trim() ? (
                <>
                  <h3 id="history">History</h3>
                  {HISTORY.split(/\n\s*\n/).map((para) => (
                    <p key={para.slice(0, 40)}>{para}</p>
                  ))}
                </>
              ) : null}

              <h3 id="technology">Technology</h3>
              <p>
                Production runs on two processes. In needle punching, carded
                fibre webs are mechanically entangled by barbed needles, giving
                a strong, dimensionally stable felt whose density and thickness
                are set by the needling. In thermal bonding, heat fuses
                low-melt fibres within the web, locking the structure without
                adhesives for a lighter, loftier material.
              </p>
              <p>
                Together they cover roll widths of {PLANT.widthLabel} and a{' '}
                {PLANT.gsmLabel} GSM range, in{' '}
                {PLANT.fibreLabel.toLowerCase()}.{' '}
                <Link to="/manufacturing">See full manufacturing capability →</Link>
              </p>

              <h3 id="partner">Our manufacturing partner</h3>
              <p>{PARTNER.description}</p>
              <p>
                <strong>Factory:</strong> {PARTNER.address}.{' '}
                <a href={PARTNER.mapUrl} target="_blank" rel="noopener noreferrer">
                  View on Google Maps →
                </a>
              </p>

              {certifications.length ? (
                <>
                  <h3 id="certifications">Certifications</h3>
                  <ul className="about__areas">
                    {certifications.map((c) => (
                      <li key={c.name}>
                        <strong>{c.name}</strong>
                        <span>
                          {[c.issuer, c.description].filter(Boolean).join(' — ')}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              {team.length ? (
                <>
                  <h3 id="team">Our team</h3>
                  <ul className="about__areas">
                    {team.map((m) => (
                      <li key={m.name}>
                        <strong>{m.name}</strong>
                        <span>{[m.role, m.bio].filter(Boolean).join(' — ')}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              <h3 id="quality">Quality &amp; samples</h3>
              <p>
                Every order is produced against the specification agreed with
                the buyer — GSM, thickness, width, colour and roll length — and
                exact figures are confirmed with each quote. Samples can be
                requested before bulk orders so the material can be tried in
                your own process.
              </p>
              <p>
                New to specifying nonwovens? Start with our{' '}
                <Link to="/guides/needle-punched-vs-thermal-bonded-nonwoven">
                  needle punched vs thermal bonded guide
                </Link>{' '}
                or the{' '}
                <Link to="/guides/how-to-request-a-nonwoven-felt-quote">
                  quote request checklist
                </Link>
                .
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

            <Reveal delay={120} className="about__aside">
              <Media
                className="about__image"
                src="/images/plant/overview.jpg"
                alt="Needle punched nonwoven production at our manufacturing partner’s factory"
                variant={2}
                label="Factory photography — pending"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
