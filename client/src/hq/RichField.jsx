import { useRef, useState } from 'react';
import Body from '../components/Body.jsx';
import { uploadImage } from './api.js';

/** A text box with a small toolbar for the page markup, image upload and a preview. */
function Tool({ text, title, onClick, disabled }) {
  return (
    <button type="button" className="hq__tool" title={title} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

export default function RichField({ label, value, onChange, required, rows = 12 }) {
  const ref = useRef(null);
  const file = useRef(null);
  const [preview, setPreview] = useState(false);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState('');

  /** Replace the selection with `make(selected)`, then put the cursor after it. */
  const edit = (make, lineStart = false) => {
    const el = ref.current;
    const a = el.selectionStart;
    const b = el.selectionEnd;
    let from = a;
    if (lineStart) from = value.lastIndexOf('\n', a - 1) + 1;
    const picked = value.slice(from, b);
    const next = make(picked);
    onChange(value.slice(0, from) + next + value.slice(b));
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(from + next.length, from + next.length);
    });
  };

  const upload = async (e) => {
    const f = e.target.files?.[0];
    e.target.value = '';
    if (!f) return;
    setBusy(true);
    setMsg('');
    try {
      const { url } = await uploadImage(f);
      const alt = f.name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ');
      edit(() => `\n\n![${alt}](${url})\n\n`);
      setMsg('Image added. Change the words inside [ ] to describe the picture.');
    } catch (err) {
      setMsg(err.message);
    }
    setBusy(false);
  };

  return (
    <div className="hq__rich">
      <span className="hq__rich-label">{label}</span>
      <div className="hq__toolbar">
        <Tool text="H2" title="Heading" disabled={preview} onClick={() => edit((s) => `## ${s || 'Heading'}`, true)} />
        <Tool text="H3" title="Sub-heading" disabled={preview} onClick={() => edit((s) => `### ${s || 'Sub-heading'}`, true)} />
        <Tool text="B" title="Bold" disabled={preview} onClick={() => edit((s) => `**${s || 'bold text'}**`)} />
        <Tool text="• List" title="Bullet list" disabled={preview} onClick={() => edit((s) => (s || 'Item').split('\n').map((l) => `- ${l}`).join('\n'), true)} />
        <Tool text="Link" title="Link to a page or website" disabled={preview} onClick={() => edit((s) => `[${s || 'link text'}](/contact)`)} />
        <button type="button" className="hq__tool" onClick={() => file.current.click()} disabled={busy || preview}>
          {busy ? 'Uploading…' : 'Image'}
        </button>
        <input ref={file} type="file" accept="image/jpeg,image/png,image/webp" hidden onChange={upload} />
        <button type="button" className={`hq__tool hq__tool--preview${preview ? ' is-on' : ''}`} onClick={() => setPreview(!preview)}>
          {preview ? 'Edit' : 'Preview'}
        </button>
      </div>
      {preview ? (
        <div className="hq__preview"><Body text={value} /></div>
      ) : (
        <textarea ref={ref} rows={rows} required={required} value={value} onChange={(e) => onChange(e.target.value)} />
      )}
      {msg ? <small className="hq__rich-msg">{msg}</small> : null}
      <small className="hq__rich-help">
        <code>## Heading</code> · <code>### Sub-heading</code> · <code>- bullet</code> ·{' '}
        <code>**bold**</code> · <code>[text](/page)</code> · <code>![description](image address)</code> · a blank line starts a new paragraph.
      </small>
    </div>
  );
}
