// Usage:  npm run admin:hash -- "your-long-password"
// Prints the value for ADMIN_PASSWORD_HASH, and a fresh ADMIN_TOKEN_SECRET.
import crypto from 'node:crypto';
import { hashPassword } from '../auth.js';

const pw = process.argv[2];
if (!pw || pw.length < 10) {
  console.error('Give a password of at least 10 characters:  npm run admin:hash -- "your password"');
  process.exit(1);
}
console.log('\nAdd these to the server environment (Render / .env):\n');
console.log(`ADMIN_EMAIL=you@example.com`);
console.log(`ADMIN_PASSWORD_HASH=${hashPassword(pw)}`);
console.log(`ADMIN_TOKEN_SECRET=${crypto.randomBytes(48).toString('base64url')}\n`);
