import { Link } from 'react-router-dom';
import Media from './Media.jsx';
import './ProductCard.css';

export function ProductGrid({ children }) {
  return <div className="product-grid">{children}</div>;
}

export default function ProductCard({ product, areaName, variant = 1 }) {
  return (
    <Link
      to={`/products/${product.category}/${product.slug}`}
      className="product-card"
    >
      <Media
        src={product.images?.[0]}
        tone="light"
        variant={variant}
        ratio="5 / 4"
        label={`${product.name} photo`}
      />
      <div className="product-card__body">
        <h3>{product.name}</h3>
        {areaName ? <small>{areaName}</small> : null}
      </div>
    </Link>
  );
}

export function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Link
          key={product.slug}
          to={`/products/${product.category}/${product.slug}`}
          className="product-list__row"
        >
          <div>
            <h3>{product.name}</h3>
            {product.shortDescription ? (
              <small>{product.shortDescription}</small>
            ) : null}
          </div>
          <span className="product-list__cta">View specs →</span>
        </Link>
      ))}
    </div>
  );
}
