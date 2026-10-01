import { Link, useParams } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import TabPanel, { RuledList } from '../components/TabPanel.jsx';
import { ProductList } from '../components/ProductCard.jsx';
import PlaceholderNote from '../components/PlaceholderNote.jsx';
import { useCatalogue } from '../CatalogueContext.jsx';
import { areaVideo, breadcrumbLd, isPlaceholder } from '../lib.js';
import { PLANT } from '../data/catalog.js';
import NotFound from './NotFound.jsx';
import './BusinessArea.css';

export default function BusinessArea() {
  const { slug } = useParams();
  const { areaBySlug, productsIn } = useCatalogue();
  const area = areaBySlug(slug);

  if (!area) return <NotFound />;

  const products = productsIn(area.slug);
  const trail = [
    { to: '/', label: 'Home' },
    { to: '/business-areas', label: 'Business Areas' },
    { label: area.name },
  ];

  // Fibres actually offered across this area's products, in plant order.
  const areaFibres = PLANT.fibres.filter((f) =>
    products.some((p) => p.specs?.fibre?.includes(f)),
  );

  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="ba-page__overview-grid">
          <div className="ba-page__overview">
            {/* Stored as one string (paragraphs split by a blank line) so the
              Mongo schema can stay a plain String. */}
            {String(area.overview || '')
              .split(/\n\s*\n/)
              .filter(Boolean)
              .map((para) => (
                <p key={para.slice(0, 32)}>{para}</p>
              ))}
            {isPlaceholder(area.overview) ? (
              <PlaceholderNote>
                This overview is a placeholder — the final copy for {area.name}{' '}
                is still to come from the company.
              </PlaceholderNote>
            ) : null}
          </div>
          <aside
            className="ba-page__facts"
            aria-label={`${area.name} at a glance`}
          >
            <p className="eyebrow">At a glance</p>
            <dl>
              <div>
                <dt>Products</dt>
                <dd>{products.length}</dd>
              </div>
              <div>
                <dt>GSM range</dt>
                <dd>{PLANT.gsmLabel}</dd>
              </div>
              <div>
                <dt>Roll width</dt>
                <dd>{PLANT.widthLabel}</dd>
              </div>
              <div>
                <dt>Process</dt>
                <dd>{PLANT.processLabel}</dd>
              </div>
              {areaFibres.length ? (
                <div>
                  <dt>Fibres</dt>
                  <dd>{areaFibres.join(', ')}</dd>
                </div>
              ) : null}
            </dl>
            <Link to="/contact#enquiry" className="btn btn--fill">
              Request a quote
            </Link>
          </aside>
        </div>
      ),
    },
    {
      id: 'applications',
      label: 'Applications',
      content: <RuledList items={area.applications} />,
    },
  ];

  if (area.hasDownloads) {
    tabs.push({
      id: 'downloads',
      label: 'Downloads',
      content: area.downloads?.length ? (
        <RuledList
          items={area.downloads.map((d) => (
            <a key={d.url} href={d.url}>
              {d.label}
            </a>
          ))}
        />
      ) : (
        <div className="narrow">
          <p>
            Brochures, datasheets and test reports for our {area.name} range are
            shared on request.
          </p>
          <div className="cta-row">
            <Link to="/contact#enquiry" className="btn">
              Request documents
            </Link>
          </div>
        </div>
      ),
    });
  }

  return (
    <>
      <Seo
        title={area.seo?.title || `${area.name} — Business Area`}
        description={area.seo?.metaDescription || area.blurb}
        path={`/business-areas/${area.slug}`}
        jsonLd={breadcrumbLd(trail)}
      />

      <PageHero
        trail={trail}
        kicker="Business Area"
        title={area.name}
        lead={area.blurb}
        video={areaVideo(area.slug, area.name)}
      >
        <Link to={`/products/${area.slug}`} className="btn btn--light">
          View products in {area.name}
        </Link>
        <Link to="/contact#enquiry" className="btn btn--ghost-light">
          Get quote
        </Link>
      </PageHero>

      <section className="block">
        <div className="wrap">
          <TabPanel tabs={tabs} deepLink />
        </div>
      </section>

      <section className="block block--sand">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Products in {area.name}</p>
              <h2>Related products</h2>
            </div>
            <Link to={`/products/${area.slug}`} className="section-link">
              Category page →
            </Link>
          </div>
          <ProductList products={products} />
        </div>
      </section>
    </>
  );
}
