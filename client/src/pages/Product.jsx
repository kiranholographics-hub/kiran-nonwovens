import { Link, Navigate, useParams } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import Media from '../components/Media.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import SpecTable from '../components/SpecTable.jsx';
import TabPanel, { RuledList } from '../components/TabPanel.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';
import StickyQuote from '../components/StickyQuote.jsx';
import ProductCard, { ProductGrid } from '../components/ProductCard.jsx';
import PlaceholderNote from '../components/PlaceholderNote.jsx';
import { useCatalogue } from '../CatalogueContext.jsx';
import { PLANT } from '../data/catalog.js';
import { SITE } from '../lib.js';
import NotFound from './NotFound.jsx';
import './Product.css';

export default function Product() {
  const { category, slug } = useParams();
  const { productBySlug, productsIn, areaName } = useCatalogue();
  const product = productBySlug(slug);

  if (!product) return <NotFound />;

  // A product reached under the wrong business area redirects to its real one,
  // so there is only ever one canonical URL per product.
  if (product.category !== category) {
    return (
      <Navigate to={`/products/${product.category}/${product.slug}`} replace />
    );
  }

  const area = areaName(product.category);
  const related = productsIn(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  const chips = [
    product.specs?.process,
    product.specs?.width
      ? `Up to ${product.specs.width.split('–').pop().trim()}`
      : null,
    product.specs?.gsmMin != null
      ? `${product.specs.gsmMin}–${product.specs.gsmMax} GSM`
      : null,
  ].filter(Boolean);

  const tabs = [
    {
      id: 'specifications',
      label: 'Specifications',
      content: (
        <>
          <SpecTable
            specs={product.specs}
            gsmConfirmed={product.gsmConfirmed}
            caption={`Specifications for ${product.name}`}
          />
          {product.specNote ? (
            <PlaceholderNote>{product.specNote}</PlaceholderNote>
          ) : null}
          {!product.gsmConfirmed ? (
            <PlaceholderNote>
              This material is made to order across the plant&apos;s full{' '}
              {PLANT.gsmLabel} GSM range. Tell us the GSM, thickness, width and
              colour your application needs and we will confirm exact figures
              with your quote.
            </PlaceholderNote>
          ) : null}
        </>
      ),
    },
    {
      id: 'applications',
      label: 'Applications',
      content: <RuledList items={product.applications} />,
    },
    {
      id: 'downloads',
      label: 'Downloads',
      content: product.downloads?.length ? (
        <RuledList
          items={product.downloads.map((d) => (
            <a key={d.url} href={d.url}>
              {d.label}
            </a>
          ))}
        />
      ) : (
        <div className="narrow">
          <p>Datasheet, test report and certificates for {product.name}.</p>
          <PlaceholderNote>
            Downloads are pending — no datasheets or test reports have been
            supplied yet. Ask us and we will send what you need directly.
          </PlaceholderNote>
        </div>
      ),
    },
  ];

  // Structured data, built only from what we actually know.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    category: area,
    url: `${SITE.url}/products/${product.category}/${product.slug}`,
    brand: { '@type': 'Brand', name: SITE.name },
  };

  return (
    <>
      <Seo
        title={product.seo?.title || product.name}
        description={product.seo?.metaDescription || product.shortDescription}
        path={`/products/${product.category}/${product.slug}`}
        jsonLd={jsonLd}
      />

      <div className="wrap">
        <Breadcrumbs
          trail={[
            { to: '/', label: 'Home' },
            { to: '/products', label: 'Products' },
            { to: `/products/${product.category}`, label: area },
            { label: product.name },
          ]}
        />

        <div className="product__grid">
          <Media
            className="product__image"
            src={product.images?.[0]}
            variant={2}
            label={`${product.name} photography — pending`}
          />

          <div>
            <p className="kicker">{area}</p>
            <h1 className="page-title">{product.name}</h1>
            <p className="lead">{product.shortDescription}</p>

            <ul className="product__chips">
              {chips.map((chip) => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>

            <div className="cta-row">
              <a href="#enquiry" className="btn btn--fill">
                Get quote
              </a>
              <Link to="/contact#enquiry" className="btn">
                Request a sample
              </Link>
            </div>

            <h2 className="sr-only">Product details</h2>
            <TabPanel tabs={tabs} deepLink />
          </div>
        </div>
      </div>

      <section className="block">
        <div className="wrap">
          <h2>Features</h2>
          <RuledList items={product.features} />
        </div>
      </section>

      <section className="block block--sand" id="enquiry">
        <div className="wrap">
          <div className="narrow">
            <p className="eyebrow">Enquiry</p>
            <h2>Request a quote for {product.name}</h2>
            <EnquiryForm
              product={product.name}
              source={`/products/${product.category}/${product.slug}`}
            />
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="block">
          <div className="wrap">
            <div className="section-head">
              <h2>More in {area}</h2>
              <Link to={`/products/${product.category}`} className="section-link">
                All {area} products →
              </Link>
            </div>
            <div className="product__related">
              <ProductGrid>
                {related.map((p, i) => (
                  <ProductCard key={p.slug} product={p} variant={(i % 2) + 1} />
                ))}
              </ProductGrid>
            </div>
          </div>
        </section>
      ) : null}

      <StickyQuote productName={product.name} />
    </>
  );
}
