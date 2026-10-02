import { Link } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import { updates } from '../data/content.js';
import { VIDEOS, breadcrumbLd, collectionLd } from '../lib.js';
import './Guides.css';

const DESCRIPTION =
  'News and updates from Kiran Nonwovens: new products, capability and export news for buyers of nonwoven felt and geotextile.';

export default function Updates() {
  const trail = [{ to: '/', label: 'Home' }, { label: 'Updates' }];
  return (
    <>
      <Seo
        title="Updates & News"
        description={DESCRIPTION}
        path="/updates"
        jsonLd={[
          breadcrumbLd(trail),
          collectionLd({
            name: 'Kiran Nonwovens updates',
            description: DESCRIPTION,
            path: '/updates',
            items: updates.map((u) => ({ name: u.title, path: `/updates/${u.slug}` })),
          }),
        ]}
      />
      <PageHero
        trail={trail}
        kicker="Updates"
        title="Updates & news"
        lead="What is new at Kiran Nonwovens."
        video={VIDEOS.about}
        variant={2}
      />
      <section className="block">
        <div className="wrap">
          <ol className="guides__list">
            {updates.map((u) => (
              <li key={u.slug}>
                <Link to={`/updates/${u.slug}`} className="guides__item">
                  <span className="guides__meta">{u.publishedAt}</span>
                  <h2>{u.title}</h2>
                  {u.excerpt ? <p>{u.excerpt}</p> : null}
                  <span className="guides__more">Read more</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
