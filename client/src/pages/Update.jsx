import { Link, useParams } from 'react-router-dom';

import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Body from '../components/Body.jsx';
import { plainText, updateBySlug } from '../data/content.js';
import { SITE, VIDEOS, breadcrumbLd } from '../lib.js';
import NotFound from './NotFound.jsx';

const clip = (s, n) => (s.length <= n ? s : `${s.slice(0, n - 1).trimEnd()}…`);

export default function Update() {
  const { slug } = useParams();
  const update = updateBySlug(slug);
  if (!update) return <NotFound />;

  const path = `/updates/${update.slug}`;
  const trail = [
    { to: '/', label: 'Home' },
    { to: '/updates', label: 'Updates' },
    { label: update.title },
  ];
  const description = clip(update.excerpt || plainText(update.body) || update.title, 160);

  return (
    <>
      <Seo
        title={clip(update.title, 46)}
        description={description}
        path={path}
        type="article"
        article={{ published: update.publishedAt, modified: update.publishedAt }}
        jsonLd={[
          breadcrumbLd(trail),
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: update.title,
            description,
            datePublished: update.publishedAt,
            mainEntityOfPage: `${SITE.url}${path}`,
            author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
            publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
          },
        ]}
      />
      <PageHero
        trail={trail}
        kicker={`Update · ${update.publishedAt}`}
        title={update.title}
        video={VIDEOS.about}
        variant={1}
      />
      <article className="block">
        <div className="wrap exports__intro" style={{ maxWidth: "none" }}>
          {/^(\/(?!\/)|https:\/\/)/.test(update.coverImage || '') ? (
            <img
              src={update.coverImage}
              alt={update.title}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          ) : null}
          <Body text={update.body} />
          <p>
            <Link to="/updates">All updates</Link> ·{' '}
            <Link to="/contact#enquiry">Send an enquiry</Link>
          </p>
        </div>
      </article>
    </>
  );
}
