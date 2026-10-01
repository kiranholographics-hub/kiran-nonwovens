import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import { VIDEOS } from '../lib.js';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found"
        description="That page does not exist."
        noindex
      />
      <PageHero
        title="Page not found"
        lead="That page does not exist. The catalogue is a good place to pick the thread back up."
        video={VIDEOS.products}
      >
        <Link to="/" className="btn btn--light">
          Back to home
        </Link>
        <Link to="/products" className="btn btn--ghost-light">
          Browse products
        </Link>
      </PageHero>
    </>
  );
}
