import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Script from 'next/script';
import First100FoundersModalWrapper from '@/components/First100FoundersModalWrapper';
import { getData, getDomain } from '@/lib/data';
import { Inter } from 'next/font/google';

export const dynamic = 'force-dynamic';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Async function to generate SEO metadata
export async function generateMetadata() {
  const c = await getData();

  const domain = c.data.domainName;
  const title =
    !c.data.title || c.data.title.trim() === ''
      ? 'Welcome to ' + domain
      : c.data.title;
  const description =
    !c.data.description || c.data.description.trim() === ''
      ? `Join a vibrant community of developers, influencers, and entrepreneurs on ${domain}, all using the versatile CONTRIB token to power their token economies!`
      : c.data.description;
  const keywords =
    !c.data.keywords || c.data.keywords.trim() === ''
      ? ['website']
      : c.data.keywords.split(',');
  const author =
    !c.data.author || c.data.author.trim() === '' ? 'contrib' : c.data.author;

  return {
    title,
    description,
    keywords,
    authors: [{ name: author }],
    openGraph: {
      title,
      description,
      siteName: domain,
      type: 'website',
      locale: 'en_US',
      url: `https://${domain}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function RootLayout({ children }) {
  const domain = getDomain();

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          src="https://analytics.vnoc.com/tracker.js"
          data-endpoint="https://analytics.vnoc.com/"
          data-domain={domain}
          strategy="afterInteractive"
        />
      </head>
      <First100FoundersModalWrapper />
      <body>{children}</body>
    </html>
  );
}
