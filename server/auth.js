import crypto from 'node:crypto';

/**
 * Admin login for the /hq panel. One owner account, kept in environment
 * variables rather than the database, so there is nothing to seed and no
 * password ever sits in MongoDB:
 *
 *   ADMIN_EMAIL           the login email
 *   ADMIN_PASSWORD_HASH   made with `npm run admin:hash` (scrypt)
 *   ADMIN_TOKEN_SECRET    a long random string (32+ chars) used to sign logins
 *
 * If any of the three is missing the admin API is switched off (503), so a
 * half-configured server can never be logged into.
 *
 * Nothing here needs an extra package: Node's built-in crypto does the hashing
 * (scrypt), the signing (HMAC-SHA256) and the constant-time comparisons.
 */

const TOKEN_TTL_MS = 12 * 60 * 60 * 1000;

export const adminConfigured = () =>
  Boolean(
    process.env.ADMIN_EMAIL &&
      process.env.ADMIN_PASSWORD_HASH &&
      (process.env.ADMIN_TOKEN_SECRET || '').length >= 32
  );

const b64 = (buf) => Buffer.from(buf).toString('base64url');

const safeEqual = (a, b) => {
  const x = Buffer.from(String(a));
  const y = Buffer.from(String(b));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
};

/** scrypt$<saltHex>$<hashHex> */
export function hashPassword(plain) {
  const salt = crypto.randomBytes(16);
  const hash = crypto.scryptSync(String(plain), salt, 64);
  return `scrypt$${salt.toString('hex')}$${hash.toString('hex')}`;
}

export function verifyPassword(plain, stored) {
  const [scheme, saltHex, hashHex] = String(stored || '').split('$');
  if (scheme !== 'scrypt' || !saltHex || !hashHex) return false;
  const expected = Buffer.from(hashHex, 'hex');
  const actual = crypto.scryptSync(String(plain), Buffer.from(saltHex, 'hex'), expected.length);
  return crypto.timingSafeEqual(actual, expected);
}

const sign = (payload) =>
  crypto
    .createHmac('sha256', process.env.ADMIN_TOKEN_SECRET)
    .update(payload)
    .digest('base64url');

export function signToken(email) {
  const payload = b64(JSON.stringify({ sub: email, exp: Date.now() + TOKEN_TTL_MS }));
  return `${payload}.${sign(payload)}`;
}

function readToken(token) {
  const [payload, sig] = String(token || '').split('.');
  if (!payload || !sig || !safeEqual(sig, sign(payload))) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString());
    return data.exp > Date.now() ? data : null;
  } catch {
    return null;
  }
}

/** Checks the submitted email + password against the environment. */
export function checkLogin(email, password) {
  const emailOk = safeEqual(
    String(email || '').trim().toLowerCase(),
    String(process.env.ADMIN_EMAIL).trim().toLowerCase()
  );
  // Always run the hash so a wrong email takes as long as a wrong password.
  const passOk = verifyPassword(password, process.env.ADMIN_PASSWORD_HASH);
  return emailOk && passOk;
}

/** Guards every /api/admin route except login. */
export function requireAdmin(req, res, next) {
  if (!adminConfigured()) {
    return res.status(503).json({ error: 'The admin panel is not set up on this server.' });
  }
  const [scheme, token] = (req.get('authorization') || '').split(' ');
  const data = scheme === 'Bearer' ? readToken(token) : null;
  if (!data) return res.status(401).json({ error: 'Not signed in' });
  req.admin = { email: data.sub };
  next();
}
