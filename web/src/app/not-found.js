import Link from 'next/link';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <div className="wrap" style={{ padding: '80px 24px 100px' }}>
      <h1>Page not found</h1>
      <p>
        That page does not exist. The catalogue is a good place to pick the
        thread back up.
      </p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 18 }}>
        <Link href="/" className="btn btnFill">
          Back to home
        </Link>
        <Link href="/products" className="btn">
          Browse products
        </Link>
      </div>
    </div>
  );
}
