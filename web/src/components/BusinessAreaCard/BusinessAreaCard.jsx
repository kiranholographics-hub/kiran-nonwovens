import Link from 'next/link';
import Media from '@/components/Media/Media';
import styles from './BusinessAreaCard.module.css';

export function BusinessAreaGrid({ children }) {
  return <div className={styles.grid}>{children}</div>;
}

export default function BusinessAreaCard({ area }) {
  return (
    <Link href={`/business-areas/${area.slug}`} className={styles.card}>
      <Media
        className={styles.thumb}
        src={area.images?.[0]}
        variant={2}
        ratio="16 / 10"
        label={`${area.name} photo`}
        alt=""
        sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 25vw"
      />
      <h3>{area.name}</h3>
      <p>{area.blurb}</p>
      <span className={styles.more}>Read more →</span>
    </Link>
  );
}
