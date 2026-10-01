import { Link } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import Media from '../components/Media.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import PlaceholderNote from '../components/PlaceholderNote.jsx';
import { useCatalogue } from '../CatalogueContext.jsx';
import { PLANT } from '../data/catalog.js';
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
        title="About Us"
        description="Kiran Nonwovens manufactures needle punched and thermal bonded nonwoven felt and geotextiles, made to specification for civil works, automotive, apparel, footwear, medical and industrial use."
        path="/about"
      />

      <div className="wrap">
        <Breadcrumbs trail={[{ to: '/', label: 'Home' }, { label: 'About Us' }]} />
        <h1 className="page-title">About Us</h1>
        <p className="lead">Nonwoven solutions for a better tomorrow.</p>
      </div>

      <section className="block about__block">
        <div className="wrap">
          <div className="about__grid">
            <div className="about__body">
              <h2 id="overview">Company overview</h2>
              <p>
                Kiran Nonwovens manufactures needle punched and thermal bonded
                nonwoven fabrics and felts. Our materials go into roads and
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

              <h3 id="history">History</h3>
              <p>
                [Founding story and timeline — pending from Sir. Year founded,
                how the plant grew, when export supply began.]
              </p>

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

              <h3 id="quality">Quality &amp; certifications</h3>
              <p>
                Every order is produced against the specification agreed with
                the buyer — GSM, thickness, width, colour and roll length — and
                exact figures are confirmed with each quote. Samples can be
                requested before bulk orders so the material can be tried in
                your own process.
              </p>
              <PlaceholderNote>
                Certifications and test reports are pending from the company
                and will be listed here once supplied.
              </PlaceholderNote>

              <div className="cta-row">
                <Link to="/contact#enquiry" className="btn btn--fill">
                  Send an enquiry
                </Link>
                <Link to="/products" className="btn">
                  Browse products
                </Link>
              </div>
            </div>

            <Media
              className="about__image"
              src="/images/plant/overview.jpg"
              variant={2}
              label="Plant photography — pending"
            />
          </div>
        </div>
      </section>
    </>
  );
}
