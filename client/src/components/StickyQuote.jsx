import './StickyQuote.css';

/**
 * The always-reachable "Get quote" affordance on product pages. Most buyers
 * land here from search on a phone, so the path to an enquiry never scrolls
 * out of reach.
 */
export default function StickyQuote({ productName }) {
  return (
    <>
      <div className="sticky-quote__spacer" aria-hidden="true" />
      <div className="sticky-quote">
        <span className="sticky-quote__name">{productName}</span>
        <a href="#enquiry" className="btn btn--light sticky-quote__cta">
          Get quote
        </a>
      </div>
    </>
  );
}
