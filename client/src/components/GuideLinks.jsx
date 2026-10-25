import { Link } from 'react-router-dom';

import { guideBySlug } from '../data/guides.js';

/** A short list of guide links (title + one-line description) for hub pages. */
export default function GuideLinks({ slugs }) {
  const guides = slugs.map(guideBySlug).filter(Boolean);
  if (!guides.length) return null;
  return (
    <ul className="guide-links">
      {guides.map((g) => (
        <li key={g.slug}>
          <Link to={`/guides/${g.slug}`}>
            <strong>{g.title}</strong>
            <span>{g.description}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
