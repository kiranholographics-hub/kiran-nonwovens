import styles from './StickyQuote.module.css';

/**
 * The always-reachable "Get quote" affordance on product pages. Most buyers
 * land here from search on a phone, so the path to an enquiry never scrolls
 * out of reach.
 */
export default function StickyQuote({ productName }) {
  return (
    <>
      <div className={styles.spacer} aria-hidden="true" />
      <div className={styles.bar}>
        <span className={styles.name}>{productName}</span>
        <a href="#enquiry" className={`btn btnLight ${styles.cta}`}>
          Get quote
        </a>
      </div>
    </>
  );
}
