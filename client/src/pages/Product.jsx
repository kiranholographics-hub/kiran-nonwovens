import { Link, Navigate, useParams } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import Media from '../components/Media.jsx';
import PageHero from '../components/PageHero.jsx';
import SpecTable from '../components/SpecTable.jsx';
import TabPanel, { RuledList } from '../components/TabPanel.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';
import StickyQuote from '../components/StickyQuote.jsx';
import ProductCard, { ProductGrid } from '../components/ProductCard.jsx';
import PlaceholderNote from '../components/PlaceholderNote.jsx';
import Reveal from '../components/Reveal.jsx';
import Faq from '../components/Faq.jsx';
import { useCatalogue } from '../CatalogueContext.jsx';
import { PLANT } from '../data/catalog.js';
import { productFaq, plain } from '../data/seo.js';
import { SITE, VIDEOS, breadcrumbLd, faqLd } from '../lib.js';
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

  // Full copy from the company's product-description document. The first
  // paragraph leads the page; the rest reads as the overview below it.
  const paragraphs = product.description?.length
    ? product.description
    : [product.shortDescription];
  const [leadParagraph, ...moreParagraphs] = paragraphs;
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
          <p>
            Technical datasheets and test reports for {product.name} are
            shared on request. Tell us what you need and we will send it with
            your quote.
          </p>
          <div className="cta-row">
            <a href="#enquiry" className="btn">
              Request documents
            </a>
          </div>
        </div>
      ),
    },
  ];

  const trail = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: `/products/${product.category}`, label: area },
    { label: product.name },
  ];
  const faqs = productFaq(product);

  // Structured data, built only from what we actually know.
  const productLd = {
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
        jsonLd={[
          productLd,
          breadcrumbLd(trail),
          ...(faqs.length
            ? [faqLd(faqs.map((f) => ({ q: f.q, a: plain(f.a) })))]
            : []),
        ]}
      />

      <PageHero
        trail={trail}
        kicker={area}
        title={product.name}
        video={VIDEOS.product}
        variant={2}
      >
        <a href="#enquiry" className="btn btn--light">
          Get quote
        </a>
        <Link to="/contact#enquiry" className="btn btn--ghost-light">
          Request a sample
        </Link>
      </PageHero>

      <section className="block product__main">
        <div className="wrap product__grid">
          <Media
            className="product__image"
            src={product.images?.[0]}
            alt={product.name}
            variant={2}
            label={`${product.name} photography — pending`}
          />

          <div>
            <p className="lead">{leadParagraph}</p>

            <ul className="product__chips" style={{ marginTop: 18 }}>
              {chips.map((chip) => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>

            <h2 className="sr-only">Product details</h2>
            <TabPanel tabs={tabs} deepLink />
          </div>
        </div>
      </section>

      {moreParagraphs.length ? (
        <section className="block product__overview">
          <div className="wrap">
            <div className="narrow">
              <p className="eyebrow">Overview</p>
              <h2>About {product.name}</h2>
              {moreParagraphs.map((text) => (
                <p key={text.slice(0, 32)}>{text}</p>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className={`block${moreParagraphs.length ? ' block--sand' : ''}`}>
        <div className="wrap">
          <h2>{product.featuresLabel || 'Features'}</h2>
          <RuledList items={product.features} />
        </div>
      </section>

      <section
        className={`block${moreParagraphs.length ? '' : ' block--sand'}`}
        id="enquiry"
      >
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
        <section className={`block${moreParagraphs.length ? ' block--sand' : ''}`}>
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
                  <Reveal key={p.slug} delay={i * 90}>
                    <ProductCard product={p} variant={(i % 2) + 1} />
                  </Reveal>
                ))}
              </ProductGrid>
            </div>
          </div>
        </section>
      ) : null}

      {faqs.length ? (
        <section className="block">
          <div className="wrap">
            <Faq
              items={faqs}
              title={`${product.name}: common questions`}
              id="product-faq"
            />
          </div>
        </section>
      ) : null}

      <StickyQuote productName={product.name} />
    </>
  );
}
