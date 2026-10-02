import { useEffect, useState } from 'react';
import { api } from './api.js';

/** Loads `path` from the admin API; returns { data, error, reload, setError }. */
export default function useLoad(path) {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let stale = false;
    api(path)
      .then((d) => {
        if (stale) return;
        setData(d);
        setError('');
      })
      .catch((err) => {
        if (!stale) setError(err.message);
      });
    return () => {
      stale = true;
    };
  }, [path, tick]);

  return { data, error, reload: () => setTick((t) => t + 1), setError };
}

export const fmtDate = (d) =>
  d ? new Date(d).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }) : '';
