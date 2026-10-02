import { Link, useParams } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import RichText from '../components/RichText.jsx';
import { customPageBySlug, paragraphs } from '../data/content.js';
import { VIDEOS, breadcrumbLd } from '../lib.js';
import NotFound from './NotFound.jsx';
import './Exports.css';

const clip = (s, n) => (s.length <= n ? s : `${s.slice(0, n - 1).trimEnd()}…`);

/** A page written in the /hq panel, at /pages/<slug>. */
export default function CustomPage() {
  const { slug } = useParams();
  const page = customPageBySlug(slug);
  if (!page) return <NotFound />;

  const trail = [{ to: '/', label: 'Home' }, { label: page.title }];
  const text = paragraphs(page.body);

  return (
    <>
      <Seo
        title={clip(page.title, 46)}
        description={clip(page.metaDescription || text[0] || page.title, 160)}
        path={`/pages/${page.slug}`}
        jsonLd={[breadcrumbLd(trail)]}
      />
      <PageHero trail={trail} title={page.title} video={VIDEOS.about} variant={1} />
      <section className="block">
        <div className="wrap exports__intro">
          {text.map((p) => (
            <p key={p.slice(0, 40)}>
              <RichText text={p} />
            </p>
          ))}
          <p>
            <Link to="/contact#enquiry">Send an enquiry</Link>
          </p>
        </div>
      </section>
    </>
  );
}
