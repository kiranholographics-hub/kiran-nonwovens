import { useEffect, useState } from 'react';
import { Navigate, NavLink, Outlet, Route, Routes, useNavigate } from 'react-router-dom';

import { api, getToken, setToken } from './api.js';
import Login from './Login.jsx';
import Markets from './Markets.jsx';
import Enquiries from './Enquiries.jsx';
import Visitors from './Visitors.jsx';
import Content, { SECTIONS } from './Content.jsx';
import './hq.css';

const NAV = [
  ['/hq', 'Global Markets', true],
  ['/hq/enquiries', 'Enquiries'],
  ['/hq/visitors', 'Visitors'],
  ['/hq/updates', 'Updates'],
  ['/hq/pages', 'Pages'],
  ['/hq/testimonials', 'Testimonials'],
  ['/hq/team', 'Team'],
  ['/hq/certifications', 'Certifications'],
];

function Shell({ me, onSignOut }) {
  return (
    <div className="hq">
      <aside className="hq__side">
        <div className="hq__brand">
          <span className="hq__mark">KN</span>
          <strong>Kiran Nonwovens HQ</strong>
        </div>
        <nav aria-label="Panel">
          {NAV.map(([to, label, end]) => (
            <NavLink key={to} to={to} end={end}>
              {label}
            </NavLink>
          ))}
        </nav>
        <a className="hq__live" href="/" target="_blank" rel="noopener noreferrer">
          ↗ View live site
        </a>
      </aside>
      <div className="hq__main">
        <header className="hq__top">
          <span />
          <div className="hq__who">
            <span>
              {me.email}
              <small>ADMIN</small>
            </span>
            <button type="button" onClick={onSignOut}>
              Sign out
            </button>
          </div>
        </header>
        <div className="hq__body">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

/** The whole admin panel, mounted at /hq. Client-only: it is never prerendered
 *  and keeps itself out of search results. */
export default function HqApp() {
  const navigate = useNavigate();
  const [me, setMe] = useState(null);
  const [checking, setChecking] = useState(Boolean(getToken()));

  useEffect(() => {
    document.title = 'HQ · Kiran Nonwovens';
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.name = 'robots';
      document.head.appendChild(robots);
    }
    robots.content = 'noindex, nofollow';
  }, []);

  useEffect(() => {
    if (!getToken()) return;
    api('/me')
      .then(setMe)
      .catch(() => setToken(''))
      .finally(() => setChecking(false));
  }, []);

  const signOut = () => {
    setToken('');
    setMe(null);
    navigate('/hq/login');
  };

  if (checking) return <p className="hq__boot">Loading…</p>;

  return (
    <Routes>
      <Route
        path="/hq/login"
        element={
          me ? (
            <Navigate to="/hq" replace />
          ) : (
            <Login
              onSignedIn={async () => {
                setMe(await api('/me'));
                navigate('/hq');
              }}
            />
          )
        }
      />
      <Route
        element={me ? <Shell me={me} onSignOut={signOut} /> : <Navigate to="/hq/login" replace />}
      >
        <Route path="/hq" element={<Markets regions={me?.regions} />} />
        <Route path="/hq/enquiries" element={<Enquiries />} />
        <Route path="/hq/visitors" element={<Visitors />} />
        {Object.keys(SECTIONS).map((key) => (
          <Route key={key} path={`/hq/${key}`} element={<Content kind={key} />} />
        ))}
        <Route path="*" element={<Navigate to="/hq" replace />} />
      </Route>
    </Routes>
  );
}
