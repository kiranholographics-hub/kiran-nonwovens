import { Link, useParams } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import Media from '../components/Media.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import ProductCard, { ProductGrid } from '../components/ProductCard.jsx';
import { useCatalogue } from '../CatalogueContext.jsx';
import NotFound from './NotFound.jsx';
import './Category.css';

export default function Category() {
  const { category } = useParams();
  const { areaBySlug, productsIn } = useCatalogue();
  const area = areaBySlug(category);

  if (!area) return <NotFound />;

  const products = productsIn(area.slug);

  return (
    <>
      {/* Its own copy, not the business area's — the two pages must not
          compete for the same query with the same description. */}
      <Seo
        title={area.productsSeo?.title || `${area.name} Products`}
        description={area.productsSeo?.metaDescription || area.blurb}
        path={`/products/${area.slug}`}
      />

      <div className="wrap">
        <Breadcrumbs
          trail={[
            { to: '/', label: 'Home' },
            { to: '/products', label: 'Products' },
            { label: area.name },
          ]}
        />
        <div className="split">
          <div className="split__text">
            <p className="kicker">Products</p>
            <h1 className="page-title">{area.name}</h1>
            <p className="lead">{area.blurb}</p>
            <div className="cta-row">
              <Link to={`/business-areas/${area.slug}`} className="btn">
                See the {area.name} business area
              </Link>
            </div>
          </div>
          <Media
            className="category__hero"
            src={area.images?.[0]}
            variant={2}
            label={`${area.name} photography — pending`}
          />
        </div>
      </div>

      <section className="block">
        <div className="wrap">
          <ProductGrid>
            {products.map((product, i) => (
              <ProductCard
                key={product.slug}
                product={product}
                variant={(i % 2) + 1}
              />
            ))}
          </ProductGrid>
        </div>
      </section>
    </>
  );
}
