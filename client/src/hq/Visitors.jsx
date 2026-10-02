import useLoad from './useLoad.js';

const num = (n) => (n === undefined || n === null ? '–' : n.toLocaleString('en-IN'));

export default function Visitors() {
  const { data, error } = useLoad('/visits');
  const max = Math.max(1, ...(data?.series || []).map((d) => d.views));
  const total = data?.total || 0;

  return (
    <>
      <h1>Visitors</h1>
      <p className="hq__note">
        Page views counted without cookies. The country comes from the visitor’s IP address on our
        server, and the address itself is never stored. Your own visits while signed in to this
        panel are not counted.
      </p>
      {error ? <p className="hq__error" role="alert">{error}</p> : null}

      <div className="hq__stats hq__stats--3">
        <div><b>{num(data?.total)}</b><span>Total visits</span></div>
        <div><b>{num(data?.week.views)}</b><span>Last 7 days</span></div>
        <div><b>{num(data?.month.views)}</b><span>Last 30 days</span></div>
      </div>

      <div className="hq__card hq__top">
        <h2>{data?.topCountry || (data ? 'No country yet' : '…')}</h2>
        <span>Top country</span>
      </div>

      <div className="hq__card">
        <h2>Visitors by country</h2>
        <div className="hq__table">
          <table>
            <thead>
              <tr><th>Country</th><th>Visits</th><th>Share</th></tr>
            </thead>
            <tbody>
              {(data?.countries || []).map((c) => {
                const pct = total ? Math.round((c.views / total) * 100) : 0;
                return (
                  <tr key={c.country}>
                    <td>{c.country}</td>
                    <td>{num(c.views)}</td>
                    <td className="hq__share">
                      <span className="hq__bar"><i style={{ width: `${Math.max(pct, 1)}%` }} /></span>
                      <b>{pct}%</b>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {data && !data.countries.length ? (
            <p className="hq__empty">Nothing yet. Visits are counted once the new website build is live.</p>
          ) : null}
        </div>
      </div>

      <div className="hq__card">
        <h2>Last 14 days</h2>
        <div className="hq__bars" role="img" aria-label="Page views per day">
          {(data?.series || []).map((d) => (
            <div key={d.day} title={`${d.day}: ${d.views} views, ${d.visitors} visitors`}>
              <i style={{ height: `${(d.views / max) * 100}%` }} />
              <small>{d.day.slice(8)}</small>
            </div>
          ))}
        </div>
      </div>

      <div className="hq__two">
        <div className="hq__card">
          <h2>Top pages (30 days)</h2>
          <ol className="hq__rank">
            {(data?.pages || []).map((p) => (<li key={p.path}><span>{p.path}</span><b>{p.views}</b></li>))}
          </ol>
        </div>
        <div className="hq__card">
          <h2>Where visitors came from</h2>
          <ol className="hq__rank">
            {(data?.referrers || []).map((r) => (<li key={r.referrer}><span>{r.referrer}</span><b>{r.views}</b></li>))}
          </ol>
          {data && !data.referrers.length ? <p className="hq__empty">Nothing yet.</p> : null}
        </div>
      </div>
    </>
  );
}
