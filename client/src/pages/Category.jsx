import { Link, useParams } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import ProductCard, { ProductGrid } from '../components/ProductCard.jsx';
import { useCatalogue } from '../CatalogueContext.jsx';
import Faq from '../components/Faq.jsx';
import RichText from '../components/RichText.jsx';
import { CATEGORY_COPY, plain } from '../data/seo.js';
import { areaVideo, breadcrumbLd, collectionLd, faqLd } from '../lib.js';
import NotFound from './NotFound.jsx';
import './Category.css';

export default function Category() {
  const { category } = useParams();
  const { areaBySlug, productsIn } = useCatalogue();
  const area = areaBySlug(category);

  if (!area) return <NotFound />;

  const products = productsIn(area.slug);
  const copy = CATEGORY_COPY[area.slug];
  const trail = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { label: area.name },
  ];

  return (
    <>
      {/* Its own copy, not the business area's — the two pages must not
          compete for the same query with the same description. */}
      <Seo
        title={area.productsSeo?.title || `${area.name} Products`}
        description={area.productsSeo?.metaDescription || area.blurb}
        path={`/products/${area.slug}`}
        jsonLd={[
          breadcrumbLd(trail),
          collectionLd({
            name: `${area.name} products`,
            description: area.productsSeo?.metaDescription || area.blurb,
            path: `/products/${area.slug}`,
            items: products.map((p) => ({
              name: p.name,
              path: `/products/${p.category}/${p.slug}`,
            })),
          }),
          ...(copy
            ? [faqLd(copy.faqs.map((f) => ({ q: f.q, a: plain(f.a) })))]
            : []),
        ]}
      />

      <PageHero
        trail={trail}
        kicker="Products"
        title={area.name}
        lead={area.blurb}
        video={areaVideo(area.slug, area.name)}
        variant={2}
      >
        <Link to={`/business-areas/${area.slug}`} className="btn btn--ghost-light">
          See the {area.name} business area
        </Link>
      </PageHero>

      <section className="block">
        <div className="wrap">
          <h2 className="sr-only">{area.name} products</h2>
          <ProductGrid>
            {products.map((product, i) => (
              <Reveal key={product.slug} delay={(i % 3) * 90}>
                <ProductCard product={product} variant={(i % 2) + 1} />
              </Reveal>
            ))}
          </ProductGrid>
        </div>
      </section>

      {copy ? (
        <>
          <section className="block block--sand">
            <div className="wrap category__guide">
              <h2>{copy.heading}</h2>
              <div>
                {copy.paragraphs.map((t) => (
                  <p key={t.slice(0, 40)}>
                    <RichText text={t} />
                  </p>
                ))}
              </div>
            </div>
          </section>
          <section className="block">
            <div className="wrap">
              <Faq
                items={copy.faqs}
                title={`${area.name} nonwovens: common questions`}
                id="category-faq"
              />
            </div>
          </section>
        </>
      ) : null}
    </>
  );
}
