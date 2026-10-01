import { Link } from 'react-router-dom';
import Media from './Media.jsx';
import Reveal from './Reveal.jsx';
import './BusinessAreaCard.css';

export function BusinessAreaGrid({ children }) {
  return <div className="ba-grid">{children}</div>;
}

/**
 * A tall photographic tile — the photo carries the card, the name and blurb
 * sit over a shade at its foot. Alternate tiles drop lower on wide screens so
 * the row reads as a collection rather than a table.
 */
export default function BusinessAreaCard({ area, index = 0 }) {
  return (
    <Reveal className="ba-card-wrap" delay={(index % 4) * 90}>
      <Link to={`/business-areas/${area.slug}`} className="ba-card">
        <Media
          className="ba-card__thumb"
          src={area.images?.[0]}
        alt={`${area.name} nonwoven felt applications`}
          variant={(index % 2) + 1}
          label={`${area.name} photo`}
        />
        <div className="ba-card__body">
          <h3>{area.name}</h3>
          <p>{area.blurb}</p>
          <span className="ba-card__more">Explore</span>
        </div>
      </Link>
    </Reveal>
  );
}
