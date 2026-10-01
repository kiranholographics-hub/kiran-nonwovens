import { Link } from 'react-router-dom';
import VideoBackdrop from './VideoBackdrop.jsx';
import './PageHero.css';

/**
 * The banner every inner page opens with: video / photo / texture backdrop,
 * breadcrumb trail, title, lead and optional buttons.
 *
 * `plain` drops the backdrop for a quiet header on the cream page background —
 * used where a photo would add nothing (Contact, Privacy).
 *
 * `trail` is the same [{ to?, label }] shape <Breadcrumbs> takes.
 */
export default function PageHero({
  trail = [],
  kicker,
  title,
  lead,
  video,
  variant = 1,
  plain = false,
  children,
}) {
  return (
    <section className={`page-hero${plain ? ' page-hero--plain' : ''}`}>
      {plain ? null : (
        <>
          <VideoBackdrop video={video} variant={variant} eager />
          <div className="page-hero__shade" aria-hidden="true" />
        </>
      )}
      <div className="wrap page-hero__inner">
        {trail.length ? (
          <nav className="page-hero__crumbs" aria-label="Breadcrumb">
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
        ) : null}
        {kicker ? <p className="page-hero__kicker">{kicker}</p> : null}
        <h1>{title}</h1>
        {lead ? <p className="page-hero__lead">{lead}</p> : null}
        {children ? <div className="cta-row">{children}</div> : null}
      </div>
    </section>
  );
}
