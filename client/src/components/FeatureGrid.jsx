import './FeatureGrid.css';

/**
 * Numbered editorial points — "01 / title / text" — used for the
 * "Why Kiran Nonwovens" band on the home page and the process and finishing
 * sections on /manufacturing.
 */
export default function FeatureGrid({ items, columns = 4, numbered = true }) {
  return (
    <ol className={`feature-grid feature-grid--${columns}`}>
      {items.map((item, i) => (
        <li key={item.title} className="feature-grid__item">
          {numbered ? (
            <span className="feature-grid__num" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
          ) : null}
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
