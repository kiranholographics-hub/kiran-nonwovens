import { Link } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import ProductCard, { ProductGrid } from '../components/ProductCard.jsx';
import { useCatalogue } from '../CatalogueContext.jsx';
import './Products.css';

export default function Products() {
  const { businessAreas, productsIn } = useCatalogue();

  return (
    <>
      <Seo
        title="Products"
        description="The full Kiran Nonwovens range — geotextiles, automotive felt, apparel and footwear nonwovens, and industrial felt. Needle punched and thermal bonded, 100–1200 GSM."
        path="/products"
      />

      <div className="wrap">
        <Breadcrumbs trail={[{ to: '/', label: 'Home' }, { label: 'Products' }]} />
        <h1 className="page-title">Products</h1>
        <p className="lead">
          Every material we make, grouped by the industry it was built for.
        </p>
      </div>

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
                    <ProductCard
                      key={product.slug}
                      product={product}
                      variant={(n % 2) + 1}
                    />
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
