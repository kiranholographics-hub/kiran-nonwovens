import { useState } from 'react';
import { api } from './api.js';
import useLoad from './useLoad.js';

const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 80);

/** Each kind of content: its fields, and how a row is summarised. */
export const SECTIONS = {
  updates: {
    title: 'Updates',
    one: 'update',
    help: 'News posts, shown at /updates and linked in the footer once one is published. Separate paragraphs with a blank line. Link to a page with [text](/products).',
    url: (r) => `/updates/${r.slug}`,
    summary: (r) => r.title,
    sub: (r) => (r.publishedAt ? String(r.publishedAt).slice(0, 10) : ''),
    fields: [
      { k: 'title', label: 'Title', required: true, slugFrom: true },
      { k: 'slug', label: 'URL slug', required: true },
      { k: 'excerpt', label: 'Short summary (shown in the list and search results)', type: 'textarea', rows: 2, max: 300 },
      { k: 'body', label: 'Text', type: 'textarea', rows: 10, required: true },
      { k: 'publishedAt', label: 'Publish date', type: 'date' },
    ],
  },
  pages: {
    title: 'Pages',
    one: 'page',
    help: 'Extra pages of your own, shown at /pages/<slug> and linked in the footer. Separate paragraphs with a blank line.',
    url: (r) => `/pages/${r.slug}`,
    summary: (r) => r.title,
    sub: (r) => `/pages/${r.slug}`,
    fields: [
      { k: 'title', label: 'Title', required: true, slugFrom: true },
      { k: 'slug', label: 'URL slug', required: true },
      { k: 'metaDescription', label: 'Search description (up to 165 characters)', type: 'textarea', rows: 2, max: 165 },
      { k: 'body', label: 'Text', type: 'textarea', rows: 12, required: true },
    ],
  },
  testimonials: {
    title: 'Testimonials',
    one: 'testimonial',
    help: 'Buyer quotes, shown on the home page once one is published. Only add a quote with the buyer’s permission.',
    summary: (r) => r.name,
    sub: (r) => [r.company, r.country].filter(Boolean).join(' · '),
    fields: [
      { k: 'name', label: 'Name', required: true },
      { k: 'role', label: 'Role' },
      { k: 'company', label: 'Company' },
      { k: 'country', label: 'Country' },
      { k: 'quote', label: 'Quote', type: 'textarea', rows: 4, required: true, max: 1200 },
    ],
  },
  team: {
    title: 'Team',
    one: 'team member',
    help: 'People shown on the About page once one is published. Lower order numbers come first.',
    summary: (r) => r.name,
    sub: (r) => r.role,
    fields: [
      { k: 'name', label: 'Name', required: true },
      { k: 'role', label: 'Role' },
      { k: 'bio', label: 'Short bio', type: 'textarea', rows: 3, max: 1200 },
      { k: 'order', label: 'Order', type: 'number' },
    ],
  },
  certifications: {
    title: 'Certifications',
    one: 'certification',
    help: 'Certifications shown on the About page once one is published. Add only certificates the company really holds.',
    summary: (r) => r.name,
    sub: (r) => r.issuer,
    fields: [
      { k: 'name', label: 'Certification', required: true },
      { k: 'issuer', label: 'Issued by' },
      { k: 'description', label: 'Description', type: 'textarea', rows: 3, max: 600 },
      { k: 'order', label: 'Order', type: 'number' },
    ],
  },
};

const blank = (cfg) => {
  const o = { published: true };
  for (const f of cfg.fields) o[f.k] = f.type === 'number' ? 0 : f.k === 'publishedAt' ? new Date().toISOString().slice(0, 10) : '';
  return o;
};

export default function Content({ kind }) {
  const cfg = SECTIONS[kind];
  return <Manager key={kind} kind={kind} cfg={cfg} />;
}

function Manager({ kind, cfg }) {
  const { data, error, reload, setError } = useLoad(`/${kind}`);
  const [editing, setEditing] = useState(null); // null | 'new' | row
  const [form, setForm] = useState(blank(cfg));
  const [busy, setBusy] = useState(false);

  const open = (row) => {
    setError('');
    if (row === 'new') setForm(blank(cfg));
    else {
      const f = { published: row.published };
      for (const fd of cfg.fields) f[fd.k] = fd.k === 'publishedAt' ? String(row[fd.k] || '').slice(0, 10) : row[fd.k] ?? '';
      setForm(f);
    }
    setEditing(row);
  };

  const save = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      if (editing === 'new') await api(`/${kind}`, { method: 'POST', body: form });
      else await api(`/${kind}/${editing.id || editing._id}`, { method: 'PATCH', body: form });
      setEditing(null);
      await reload();
    } catch (err) {
      setError(err.message);
    }
    setBusy(false);
  };

  const remove = async (row) => {
    if (!window.confirm(`Delete this ${cfg.one}?`)) return;
    try {
      await api(`/${kind}/${row.id || row._id}`, { method: 'DELETE' });
      await reload();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <h1>{cfg.title}</h1>
      <p className="hq__note">
        {cfg.help} Changes go live after the website is rebuilt and uploaded.
      </p>
      {error ? <p className="hq__error" role="alert">{error}</p> : null}

      {editing ? (
        <form className="hq__card hq__form" onSubmit={save}>
          <h2>{editing === 'new' ? `New ${cfg.one}` : `Edit ${cfg.one}`}</h2>
          {cfg.fields.map((f) => (
            <label key={f.k}>
              {f.label}
              {f.type === 'textarea' ? (
                <textarea rows={f.rows || 4} maxLength={f.max} required={f.required} value={form[f.k]} onChange={(e) => setForm({ ...form, [f.k]: e.target.value })} />
              ) : (
                <input
                  type={f.type || 'text'}
                  required={f.required}
                  value={form[f.k]}
                  onChange={(e) => {
                    const v = e.target.value;
                    const next = { ...form, [f.k]: v };
                    if (f.slugFrom && editing === 'new') next.slug = slugify(v);
                    if (f.k === 'slug') next.slug = slugify(v);
                    setForm(next);
                  }}
                />
              )}
            </label>
          ))}
          <label className="hq__check">
            <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} />
            Published (shown on the website)
          </label>
          <div className="hq__row">
            <button className="hq__btn" disabled={busy}>{busy ? 'Saving…' : 'Save'}</button>
            <button type="button" className="hq__link" onClick={() => setEditing(null)}>Cancel</button>
          </div>
        </form>
      ) : (
        <p><button type="button" className="hq__btn" onClick={() => open('new')}>New {cfg.one}</button></p>
      )}

      <div className="hq__card">
        <h2>{cfg.title}</h2>
        <ul className="hq__list">
          {(data || []).map((r) => (
            <li key={r.id || r._id}>
              <span>
                <b>{cfg.summary(r)}</b>
                <small>{cfg.sub(r)}</small>
              </span>
              <span className={`hq__pill hq__pill--${r.published ? 'live' : 'draft'}`}>{r.published ? 'published' : 'draft'}</span>
              <button type="button" className="hq__link" onClick={() => open(r)}>Edit</button>
              <button type="button" className="hq__link hq__link--danger" onClick={() => remove(r)}>Delete</button>
            </li>
          ))}
        </ul>
        {data && !data.length ? <p className="hq__empty">Nothing here yet.</p> : null}
      </div>
    </>
  );
}
