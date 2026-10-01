/**
 * A small fixed-window rate limiter, per client IP, with no dependencies.
 *
 * It exists mainly for POST /api/enquiries: that route saves to MongoDB *and*
 * sends an email, so without a limit one script could fill the database and
 * bury the export team's inbox. The window lives in this process's memory —
 * fine for a single Node instance behind one proxy (`trust proxy` is set in
 * app.js so `req.ip` is the visitor, not the proxy). If the API is ever run as
 * several instances, swap this for a shared store such as Redis.
 */
export function rateLimit({ windowMs, max, message = 'Too many requests. Please try again later.' }) {
  const hits = new Map(); // ip -> { count, resetAt }

  // Drop expired entries now and then so the map cannot grow without bound.
  const sweep = setInterval(() => {
    const now = Date.now();
    for (const [ip, entry] of hits) if (entry.resetAt <= now) hits.delete(ip);
  }, Math.max(windowMs, 60_000));
  sweep.unref?.();

  return (req, res, next) => {
    const now = Date.now();
    const ip = req.ip || 'unknown';
    let entry = hits.get(ip);
    if (!entry || entry.resetAt <= now) {
      entry = { count: 0, resetAt: now + windowMs };
      hits.set(ip, entry);
    }
    entry.count += 1;

    res.setHeader('RateLimit-Limit', String(max));
    res.setHeader('RateLimit-Remaining', String(Math.max(0, max - entry.count)));

    if (entry.count > max) {
      res.setHeader('Retry-After', String(Math.ceil((entry.resetAt - now) / 1000)));
      return res.status(429).json({ error: message });
    }
    next();
  };
}
