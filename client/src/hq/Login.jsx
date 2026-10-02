import { useState } from 'react';
import { api, setToken } from './api.js';

export default function Login({ onSignedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      const { token } = await api('/login', { method: 'POST', body: { email, password } });
      setToken(token);
      await onSignedIn();
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="hq hq--login">
      <form className="hq__card hq__login" onSubmit={submit}>
        <h1>Kiran Nonwovens HQ</h1>
        <p>Sign in to manage the site.</p>
        <label>
          Email
          <input type="email" autoComplete="username" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {error ? <p className="hq__error" role="alert">{error}</p> : null}
        <button className="hq__btn" disabled={busy}>
          {busy ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}
