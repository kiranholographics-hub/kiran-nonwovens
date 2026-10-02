import { useState } from 'react';
import { api } from './api.js';
import useLoad, { fmtDate } from './useLoad.js';

const STATUSES = ['new', 'contacted', 'quoted', 'closed'];

export default function Enquiries() {
  const { data, error, reload, setError } = useLoad('/enquiries');
  const [filter, setFilter] = useState('all');
  const [open, setOpen] = useState('');

  const run = async (fn) => {
    setError('');
    try {
      await fn();
      await reload();
    } catch (err) {
      setError(err.message);
    }
  };
  const status = (e) => e.status || 'new';
  const rows = (data || []).filter((e) => filter === 'all' || status(e) === filter);

  return (
    <>
      <h1>Enquiries</h1>
      <p className="hq__note">Enquiries from the website form appear here at once.</p>
      {error ? <p className="hq__error" role="alert">{error}</p> : null}
      <div className="hq__tabs">
        {['all', ...STATUSES].map((s) => (
          <button key={s} type="button" className={filter === s ? 'is-on' : ''} onClick={() => setFilter(s)}>
            {s[0].toUpperCase() + s.slice(1)}
            {data ? ` (${s === 'all' ? data.length : data.filter((e) => status(e) === s).length})` : ''}
          </button>
        ))}
      </div>
      <div className="hq__card">
        {rows.map((e) => {
          const id = e.id || e._id;
          const isOpen = open === id;
          return (
            <article key={id} className="hq__enq">
              <button type="button" className="hq__enq-head" onClick={() => setOpen(isOpen ? '' : id)} aria-expanded={isOpen}>
                <span>
                  <b>{e.name}</b>
                  {e.company ? ` · ${e.company}` : ''}
                  {e.country ? ` · ${e.country}` : ''}
                  <small>{e.product || e.source || 'General enquiry'}</small>
                </span>
                <span className={`hq__pill hq__pill--${status(e)}`}>{status(e)}</span>
                <time>{fmtDate(e.createdAt)}</time>
              </button>
              {isOpen ? (
                <div className="hq__enq-body">
                  <dl>
                    <dt>Email</dt><dd><a href={`mailto:${e.email}`}>{e.email}</a></dd>
                    {e.phone ? (<><dt>Phone</dt><dd><a href={`tel:${e.phone}`}>{e.phone}</a></dd></>) : null}
                    {[['Fibre', e.fibre], ['GSM', e.gsm], ['Width', e.width], ['Thickness', e.thickness], ['Colour', e.colour], ['Quantity', e.quantity], ['Page', e.source]]
                      .filter(([, v]) => v)
                      .map(([k, v]) => (<span key={k} className="hq__kv"><dt>{k}</dt><dd>{v}</dd></span>))}
                  </dl>
                  {e.message ? <p className="hq__msg">{e.message}</p> : null}
                  <div className="hq__row">
                    <label>
                      Status
                      <select value={status(e)} onChange={(ev) => run(() => api(`/enquiries/${id}`, { method: 'PATCH', body: { status: ev.target.value } }))}>
                        {STATUSES.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </label>
                    <NoteBox id={id} initial={e.note || ''} run={run} />
                    <button type="button" className="hq__link hq__link--danger" onClick={() => window.confirm('Delete this enquiry?') && run(() => api(`/enquiries/${id}`, { method: 'DELETE' }))}>
                      Delete
                    </button>
                  </div>
                </div>
              ) : null}
            </article>
          );
        })}
        {data && !rows.length ? <p className="hq__empty">No enquiries here.</p> : null}
      </div>
    </>
  );
}

function NoteBox({ id, initial, run }) {
  const [note, setNote] = useState(initial);
  return (
    <label className="hq__grow">
      Private note
      <span className="hq__inline">
        <input value={note} maxLength={2000} onChange={(e) => setNote(e.target.value)} />
        <button type="button" className="hq__btn hq__btn--small" onClick={() => run(() => api(`/enquiries/${id}`, { method: 'PATCH', body: { note } }))}>Save</button>
      </span>
    </label>
  );
}
