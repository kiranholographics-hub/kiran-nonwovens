import { useState } from 'react';
import { api } from './api.js';
import useLoad from './useLoad.js';

const EMPTY = { name: '', code: '', slug: '', region: 'Europe', ports: '' };
const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export default function Markets({ regions = [] }) {
  const { data, error, reload, setError } = useLoad('/markets');
  const [form, setForm] = useState(EMPTY);
  const [busy, setBusy] = useState(false);

  const run = async (fn) => {
    setError('');
    try {
      await fn();
      await reload();
    } catch (err) {
      setError(err.message);
    }
  };

  const add = async (e) => {
    e.preventDefault();
    setBusy(true);
    await run(async () => {
      await api('/markets', { method: 'POST', body: form });
      setForm(EMPTY);
    });
    setBusy(false);
  };

  const count = (s) => (data || []).filter((m) => m.status === s).length;

  return (
    <>
      <h1>Global Markets</h1>
      <p className="hq__note">
        Each active market has its own page at <code>/exports/&lt;slug&gt;-nonwoven-felt-supplier</code>.
        Changes go live after the website is rebuilt and uploaded.
      </p>
      {error ? <p className="hq__error" role="alert">{error}</p> : null}

      <div className="hq__stats">
        <div><b>{data ? data.length : '–'}</b><span>Total markets</span></div>
        <div className="is-on"><b>{data ? count('active') : '–'}</b><span>Active</span></div>
        <div><b>{data ? count('draft') : '–'}</b><span>Draft</span></div>
        <div><b>{data ? count('paused') : '–'}</b><span>Paused</span></div>
      </div>

      <form className="hq__card hq__form" onSubmit={add}>
        <h2>Add a market</h2>
        <div className="hq__row">
          <label>
            Country name
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value, slug: slugify(e.target.value) })} />
          </label>
          <label>
            Country code
            <input required maxLength={3} value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value })} placeholder="AU" />
          </label>
          <label>
            URL slug
            <input required value={form.slug} onChange={(e) => setForm({ ...form, slug: slugify(e.target.value) })} />
          </label>
        </div>
        <div className="hq__row">
          <label>
            Region
            <select value={form.region} onChange={(e) => setForm({ ...form, region: e.target.value })}>
              {regions.map((r) => <option key={r}>{r}</option>)}
            </select>
          </label>
          <label className="hq__grow">
            Typical ports (comma separated, optional)
            <input value={form.ports} onChange={(e) => setForm({ ...form, ports: e.target.value })} />
          </label>
          <button className="hq__btn" disabled={busy}>Add market</button>
        </div>
      </form>

      <div className="hq__card">
        <h2>Markets</h2>
        <div className="hq__table">
          <table>
            <thead>
              <tr><th>Country</th><th>Page</th><th>Status</th><th>Created</th><th /></tr>
            </thead>
            <tbody>
              {(data || []).map((m) => (
                <MarketRow key={m.id || m._id} m={m} regions={regions} run={run} />
              ))}
            </tbody>
          </table>
          {data && !data.length ? (
            <p className="hq__empty">
              No markets yet. The site shows its 26 built-in markets until you add some here. Run{' '}
              <code>npm run seed:markets</code> in the server folder to load them all.
            </p>
          ) : null}
        </div>
      </div>
    </>
  );
}

function MarketRow({ m, regions, run }) {
  const id = m.id || m._id;
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState({ region: m.region, ports: (m.ports || []).join(', '), note: m.note || '' });
  return (
    <>
      <tr>
        <td>{m.name} <small>({m.code})</small></td>
        <td><code>/exports/{m.slug}-nonwoven-felt-supplier</code></td>
        <td>
          <select
            value={m.status}
            className={`hq__status hq__status--${m.status}`}
            onChange={(e) => run(() => api(`/markets/${id}`, { method: 'PATCH', body: { status: e.target.value } }))}
          >
            <option value="active">Active</option>
            <option value="draft">Draft</option>
            <option value="paused">Paused</option>
          </select>
        </td>
        <td>{new Date(m.createdAt).toLocaleDateString('en-IN')}</td>
        <td className="hq__actions">
          <button type="button" className="hq__link" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Edit'}</button>
          <button
            type="button"
            className="hq__link hq__link--danger"
            onClick={() => window.confirm(`Delete ${m.name}?`) && run(() => api(`/markets/${id}`, { method: 'DELETE' }))}
          >
            Delete
          </button>
        </td>
      </tr>
      {open ? (
        <tr className="hq__edit">
          <td colSpan={5}>
            <div className="hq__row">
              <label>
                Region
                <select value={edit.region} onChange={(e) => setEdit({ ...edit, region: e.target.value })}>
                  {regions.map((r) => <option key={r}>{r}</option>)}
                </select>
              </label>
              <label className="hq__grow">
                Ports (comma separated)
                <input value={edit.ports} onChange={(e) => setEdit({ ...edit, ports: e.target.value })} />
              </label>
            </div>
            <label>
              Note shown on the page (optional)
              <textarea rows={3} maxLength={600} value={edit.note} onChange={(e) => setEdit({ ...edit, note: e.target.value })} />
            </label>
            <button
              type="button"
              className="hq__btn"
              onClick={() => run(async () => { await api(`/markets/${id}`, { method: 'PATCH', body: edit }); setOpen(false); })}
            >
              Save
            </button>
          </td>
        </tr>
      ) : null}
    </>
  );
}
