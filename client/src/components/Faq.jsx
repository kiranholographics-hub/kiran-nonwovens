import RichText from './RichText.jsx';
import './Faq.css';

/**
 * Frequently asked questions as native <details>: keyboard and screen-reader
 * friendly with no JavaScript, and every answer is in the page's HTML whether
 * or not it is open, so search engines read all of it.
 */
export default function Faq({ items, title = 'Frequently asked questions', id }) {
  if (!items?.length) return null;
  return (
    <section className="faq" aria-labelledby={`${id || 'faq'}-title`}>
      <h2 id={`${id || 'faq'}-title`}>{title}</h2>
      <div className="faq__list">
        {items.map((item) => (
          <details className="faq__item" key={item.q}>
            <summary>
              <span>{item.q}</span>
              <i aria-hidden="true" />
            </summary>
            <p>
              <RichText text={item.a} />
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
