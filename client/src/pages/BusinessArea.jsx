import { Link, useParams } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import Media from '../components/Media.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import TabPanel, { RuledList } from '../components/TabPanel.jsx';
import { ProductList } from '../components/ProductCard.jsx';
import PlaceholderNote from '../components/PlaceholderNote.jsx';
import { useCatalogue } from '../CatalogueContext.jsx';
import { isPlaceholder } from '../lib.js';
import NotFound from './NotFound.jsx';
import './BusinessArea.css';

export default function BusinessArea() {
  const { slug } = useParams();
  const { areaBySlug, productsIn } = useCatalogue();
  const area = areaBySlug(slug);

  if (!area) return <NotFound />;

  const products = productsIn(area.slug);

  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="narrow">
          <p>{area.overview}</p>
          {isPlaceholder(area.overview) ? (
            <PlaceholderNote>
              This overview is a placeholder — the final copy for {area.name} is
              still to come from the company.
            </PlaceholderNote>
          ) : null}
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
            Brochures, datasheets and test reports for {area.name} will be
            published here.
          </p>
          <PlaceholderNote>
            Downloads are pending — certifications and test reports have not
            been supplied yet.
          </PlaceholderNote>
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
      />

      <div className="wrap">
        <Breadcrumbs
          trail={[
            { to: '/', label: 'Home' },
            { to: '/business-areas', label: 'Business Areas' },
            { label: area.name },
          ]}
        />
        <div className="split">
          <div className="split__text">
            <p className="kicker">Business Area</p>
            <h1 className="page-title">{area.name}</h1>
            <p className="lead">{area.blurb}</p>
            <div className="cta-row">
              <Link to={`/products/${area.slug}`} className="btn btn--fill">
                View products in {area.name}
              </Link>
              <Link to="/contact#enquiry" className="btn">
                Get quote
              </Link>
            </div>
          </div>
          <Media
            className="ba-page__hero"
            src={area.images?.[0]}
            variant={1}
            label={`${area.name} photography — pending`}
          />
        </div>
      </div>

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
