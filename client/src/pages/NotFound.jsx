import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';

export default function NotFound() {
  return (
    <div className="wrap" style={{ padding: '80px 24px 100px' }}>
      <Seo title="Page not found" description="That page does not exist." />
      <h1>Page not found</h1>
      <p>
        That page does not exist. The catalogue is a good place to pick the
        thread back up.
      </p>
      <div className="cta-row">
        <Link to="/" className="btn btn--fill">
          Back to home
        </Link>
        <Link to="/products" className="btn">
          Browse products
        </Link>
      </div>
    </div>
  );
}
