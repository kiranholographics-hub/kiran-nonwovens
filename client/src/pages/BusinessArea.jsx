import { Link, useParams } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import TabPanel, { RuledList } from '../components/TabPanel.jsx';
import { ProductList } from '../components/ProductCard.jsx';
import PlaceholderNote from '../components/PlaceholderNote.jsx';
import { useCatalogue } from '../CatalogueContext.jsx';
import { isPlaceholder, areaVideo, breadcrumbLd } from '../lib.js';
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
        <div className="narrow ba-page__overview">
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

  // The Downloads tab only exists once there is something to download.
  if (area.hasDownloads && area.downloads?.length) {
    tabs.push({
      id: 'downloads',
      label: 'Downloads',
      content: (
        <RuledList
          items={area.downloads.map((d) => (
            <a key={d.url} href={d.url}>
              {d.label}
            </a>
          ))}
        />
      ),
    });
  }

  return (
    <>
      <Seo
        title={area.seo?.title || `${area.name} — Business Area`}
        description={area.seo?.metaDescription || area.blurb}
        path={`/business-areas/${area.slug}`}
        jsonLd={breadcrumbLd([
          { to: '/', label: 'Home' },
          { to: '/business-areas', label: 'Business Areas' },
          { label: area.name },
        ])}
      />

      <PageHero
        trail={[
          { to: '/', label: 'Home' },
          { to: '/business-areas', label: 'Business Areas' },
          { label: area.name },
        ]}
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
