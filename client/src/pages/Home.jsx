import { Link } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import Media from '../components/Media.jsx';
import StatsBand from '../components/StatsBand.jsx';
import SpecFinder from '../components/SpecFinder.jsx';
import BusinessAreaCard, {
  BusinessAreaGrid,
} from '../components/BusinessAreaCard.jsx';
import ProductCard, { ProductGrid } from '../components/ProductCard.jsx';
import PlaceholderNote from '../components/PlaceholderNote.jsx';
import { useCatalogue } from '../CatalogueContext.jsx';
import { PLANT } from '../data/catalog.js';
import { PRESENCE, SITE } from '../lib.js';
import './Home.css';

const STATS = [
  { value: PLANT.widthLabel, label: 'Roll width' },
  { value: PLANT.gsmLabel, label: 'GSM range' },
  { value: 'Needle punch', label: '+ thermal bonded' },
  { value: 'PP · PET · Viscose', label: 'Virgin, recycled, blends' },
];

export default function Home() {
  const { businessAreas, products, areaName } = useCatalogue();
  const featured = products.slice(0, 3);

  return (
    <>
      <Seo title={null} description={SITE.description} path="/" />

      <section className="home__hero">
        <div className="split">
          <div className="split__text home__hero-text">
            <p className="home__num">01 — Introduction</p>
            <h1>Felt, formed with intent.</h1>
            <p className="lead">
              Needle punched and thermal bonded nonwovens — from geotextiles for
              civil works to acoustic felt for vehicle interiors. Made to your
              GSM, width and fibre, and built for export.
            </p>
            <div className="cta-row">
              <a href="#spec-finder" className="btn btn--fill">
                Find by specification
              </a>
              <Link to="/contact#enquiry" className="btn">
                Request a sample
              </Link>
            </div>
          </div>
          <Media
            className="home__hero-image"
            src="/images/hero/plant.jpg"
            variant={1}
            label="Plant / roll photography — pending"
          />
        </div>
      </section>

      <StatsBand stats={STATS} />

      <section className="block">
        <div className="wrap">
          <p className="eyebrow">Where we work</p>
          <h2>Business Areas</h2>
          <BusinessAreaGrid>
            {businessAreas.map((area) => (
              <BusinessAreaCard key={area.slug} area={area} />
            ))}
          </BusinessAreaGrid>
        </div>
      </section>

      <section className="block block--sand" id="spec-finder">
        <div className="wrap">
          <p className="eyebrow">Find your material</p>
          <h2>Spec Finder</h2>
          <SpecFinder />
        </div>
      </section>

      <section className="home__other">
        <div className="wrap home__other-inner">
          <div>
            <h2>Looking for something else?</h2>
            <p>
              If nothing here matches your exact requirement, tell us what you
              need. We develop custom material to your GSM, width, fibre and
              colour.
            </p>
          </div>
          <Link
            to="/products/industrial/customised-nonwoven-solutions"
            className="btn btn--light"
          >
            Customised solutions
          </Link>
        </div>
      </section>

      <section className="home__presence">
        <div className="wrap home__presence-row">
          {PRESENCE.map((item) => (
            <div key={item.label}>
              <b>{item.value}</b>
              <small>{item.label}</small>
            </div>
          ))}
        </div>
        <div className="wrap">
          <PlaceholderNote>
            Global presence figures are pending confirmation from the company.
          </PlaceholderNote>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">A closer look</p>
              <h2>Featured materials</h2>
            </div>
            <Link to="/products" className="section-link">
              All products →
            </Link>
          </div>
          <div className="home__featured">
            <ProductGrid>
              {featured.map((product, i) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  areaName={areaName(product.category)}
                  variant={(i % 2) + 1}
                />
              ))}
            </ProductGrid>
          </div>
        </div>
      </section>
    </>
  );
}
