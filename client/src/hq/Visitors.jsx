import useLoad from './useLoad.js';

const Stat = ({ label, v }) => (
  <div>
    <b>{v ? v.views : '–'}</b>
    <span>{label} · {v ? `${v.visitors} visitors` : ''}</span>
  </div>
);

export default function Visitors() {
  const { data, error } = useLoad('/visits');
  const max = Math.max(1, ...(data?.series || []).map((d) => d.views));
  return (
    <>
      <h1>Visitors</h1>
      <p className="hq__note">
        Page views counted without cookies or IP addresses. Your own visits while signed in to this panel are not counted.
      </p>
      {error ? <p className="hq__error" role="alert">{error}</p> : null}
      <div className="hq__stats">
        <Stat label="Today" v={data?.today} />
        <Stat label="Last 7 days" v={data?.week} />
        <Stat label="Last 30 days" v={data?.month} />
        <div>
          <b>{data ? (data.devices.find((d) => d._id === 'mobile')?.views || 0) : '–'}</b>
          <span>Mobile views (30 days)</span>
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
