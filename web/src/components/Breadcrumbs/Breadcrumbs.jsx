import Link from 'next/link';
import styles from './Breadcrumbs.module.css';

/** Trail items: [{ href?, label }]. The last item is the current page. */
export default function Breadcrumbs({ trail }) {
  return (
    <nav className={styles.crumbs} aria-label="Breadcrumb">
      <ol>
        {trail.map((item, i) => (
          <li key={item.label}>
            {item.href && i < trail.length - 1 ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
