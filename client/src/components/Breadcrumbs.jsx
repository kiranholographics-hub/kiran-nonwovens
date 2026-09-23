import { Link } from 'react-router-dom';
import './Breadcrumbs.css';

/** Trail items: [{ to?, label }]. The last item is the current page. */
export default function Breadcrumbs({ trail }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <ol>
        {trail.map((item, i) => (
          <li key={item.label}>
            {item.to && i < trail.length - 1 ? (
              <Link to={item.to}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
