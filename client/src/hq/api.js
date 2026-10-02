/** Talks to the admin API. The sign-in token lives in sessionStorage, so it
 *  is gone when the tab closes. */
const BASE = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');
const KEY = 'hq_token';

export const getToken = () => {
  try {
    return sessionStorage.getItem(KEY) || '';
  } catch {
    return '';
  }
};
export const setToken = (t) => {
  try {
    if (t) sessionStorage.setItem(KEY, t);
    else sessionStorage.removeItem(KEY);
  } catch {
    /* storage blocked — the session just will not persist */
  }
};

export class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

export async function api(path, { method = 'GET', body } = {}) {
  if (!BASE) throw new ApiError('The site has no API address (VITE_API_URL) set.', 0);
  let res;
  try {
    res = await fetch(`${BASE}/api/admin${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(getToken() ? { Authorization: `Bearer ${getToken()}` } : {}),
      },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
  } catch {
    throw new ApiError('Could not reach the server. Check your connection.', 0);
  }
  let data = null;
  try {
    data = await res.json();
  } catch {
    /* empty body */
  }
  if (!res.ok) throw new ApiError(data?.error || `Request failed (${res.status}).`, res.status);
  return data;
}

/** Uploads a JPEG/PNG/WebP and returns its public address. */
export async function uploadImage(file) {
  if (!BASE) throw new ApiError('The site has no API address (VITE_API_URL) set.', 0);
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
    throw new ApiError('Choose a JPEG, PNG or WebP image.', 0);
  }
  if (file.size > 3 * 1024 * 1024) throw new ApiError('That image is over 3 MB. Please shrink it first.', 0);
  let res;
  try {
    res = await fetch(`${BASE}/api/admin/media`, {
      method: 'POST',
      headers: {
        'Content-Type': file.type,
        'X-Filename': encodeURIComponent(file.name),
        Authorization: `Bearer ${getToken()}`,
      },
      body: file,
    });
  } catch {
    throw new ApiError('Could not reach the server. Check your connection.', 0);
  }
  let data = null;
  try {
    data = await res.json();
  } catch {
    /* empty body */
  }
  if (!res.ok) throw new ApiError(data?.error || `Upload failed (${res.status}).`, res.status);
  return { id: data.id, url: `${BASE}/api/public/media/${data.id}` };
}
