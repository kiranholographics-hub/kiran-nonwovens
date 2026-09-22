import { Fraunces, IBM_Plex_Sans } from 'next/font/google';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TextureDefs from '@/components/Media/TextureDefs';
import { getCatalogue } from '@/lib/api';
import { SITE } from '@/lib/site';

import '@/styles/globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
});

const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    siteName: SITE.name,
    type: 'website',
    locale: 'en_IN',
  },
};

export const viewport = {
  themeColor: '#132a20',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default async function RootLayout({ children }) {
  // The nav needs the full catalogue on every page — both menu tracks list it.
  const { businessAreas, products } = await getCatalogue();

  return (
    <html lang="en" className={`${fraunces.variable} ${plex.variable}`}>
      <body>
        <a href="#main" className="skipLink">
          Skip to content
        </a>
        <TextureDefs />
        <Header businessAreas={businessAreas} products={products} />
        <main id="main">{children}</main>
        <Footer businessAreas={businessAreas} />
      </body>
    </html>
  );
}
