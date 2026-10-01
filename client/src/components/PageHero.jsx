import { Link } from 'react-router-dom';
import VideoBackdrop from './VideoBackdrop.jsx';
import './PageHero.css';

/**
 * The dark banner every inner page opens with: video (or poster / texture)
 * backdrop, breadcrumb trail, title, lead and optional buttons.
 *
 * `trail` is the same [{ to?, label }] shape <Breadcrumbs> takes.
 *
 * `full` makes it a full-screen, film-first banner like the home hero: the
 * visible breadcrumb is dropped (the page still sends BreadcrumbList data to
 * Google) and the title + lead sit low and near the left edge.
 */
export default function PageHero({
  trail = [],
  kicker,
  title,
  lead,
  video,
  variant = 1,
  children,
  full = false,
}) {
  return (
    <section className={`page-hero${full ? ' page-hero--full' : ''}`}>
      <VideoBackdrop video={video} variant={variant} eager />
      <div className="page-hero__shade" aria-hidden="true" />
      <div className="wrap page-hero__inner">
        {trail.length && !full ? (
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
