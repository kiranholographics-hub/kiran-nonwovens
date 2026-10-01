import { Link } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import ProductCard, { ProductGrid } from '../components/ProductCard.jsx';
import { useCatalogue } from '../CatalogueContext.jsx';
import { PAGE_SEO } from '../data/seo.js';
import { VIDEOS, breadcrumbLd, collectionLd } from '../lib.js';
import './Products.css';

export default function Products() {
  const { businessAreas, productsIn } = useCatalogue();

  return (
    <>
      <Seo
        title={PAGE_SEO.products.title}
        description={PAGE_SEO.products.description}
        path="/products"
        jsonLd={[
          breadcrumbLd([{ to: '/', label: 'Home' }, { label: 'Products' }]),
          collectionLd({
            name: 'Kiran Nonwovens products',
            description: PAGE_SEO.products.description,
            path: '/products',
            items: businessAreas.flatMap((a) =>
              productsIn(a.slug).map((p) => ({
                name: p.name,
                path: `/products/${p.category}/${p.slug}`,
              }))
            ),
          }),
        ]}
      />

      <PageHero
        trail={[{ to: '/', label: 'Home' }, { label: 'Products' }]}
        title="Products"
        lead="Every material we make, grouped by the industry it was built for."
        video={VIDEOS.products}
      />

      {businessAreas.map((area, i) => {
        const inArea = productsIn(area.slug);
        if (!inArea.length) return null;
        return (
          <section
            key={area.slug}
            className={`products__group ${i % 2 ? 'block--sand' : ''}`}
          >
            <div className="wrap">
              <div className="section-head">
                <h2 id={area.slug}>{area.name}</h2>
                <Link to={`/products/${area.slug}`} className="section-link">
                  Category page →
                </Link>
              </div>
              <div className="products__grid">
                <ProductGrid>
                  {inArea.map((product, n) => (
                    <Reveal key={product.slug} delay={(n % 3) * 90}>
                      <ProductCard product={product} variant={(n % 2) + 1} />
                    </Reveal>
                  ))}
                </ProductGrid>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
