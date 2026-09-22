import Link from 'next/link';
import Media from '@/components/Media/Media';
import styles from './ProductCard.module.css';

export function ProductGrid({ children }) {
  return <div className={styles.grid}>{children}</div>;
}

export default function ProductCard({ product, areaName, variant = 1 }) {
  return (
    <Link
      href={`/products/${product.category}/${product.slug}`}
      className={styles.card}
    >
      <Media
        src={product.images?.[0]}
        tone="light"
        variant={variant}
        ratio="5 / 4"
        label={`${product.name} photo`}
        alt=""
        sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
      />
      <div className={styles.body}>
        <h3>{product.name}</h3>
        {areaName ? <small className={styles.meta}>{areaName}</small> : null}
      </div>
    </Link>
  );
}

export function ProductList({ products }) {
  return (
    <div className={styles.list}>
      {products.map((product) => (
        <Link
          key={product.slug}
          href={`/products/${product.category}/${product.slug}`}
          className={styles.row}
        >
          <div>
            <h3>{product.name}</h3>
            {product.shortDescription ? (
              <small>{product.shortDescription}</small>
            ) : null}
          </div>
          <span className={styles.cta}>View specs →</span>
        </Link>
      ))}
    </div>
  );
}
