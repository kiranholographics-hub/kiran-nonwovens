import { Link } from 'react-router-dom';
import Media from './Media.jsx';
import './BusinessAreaCard.css';

export function BusinessAreaGrid({ children }) {
  return <div className="ba-grid">{children}</div>;
}

export default function BusinessAreaCard({ area }) {
  return (
    <Link to={`/business-areas/${area.slug}`} className="ba-card">
      <Media
        className="ba-card__thumb"
        src={area.images?.[0]}
        variant={2}
        ratio="16 / 10"
        label={`${area.name} photo`}
      />
      <h3>{area.name}</h3>
      <p>{area.blurb}</p>
      <span className="ba-card__more">Read more →</span>
    </Link>
  );
}
