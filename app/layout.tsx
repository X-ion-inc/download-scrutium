import type { Metadata, Viewport } from 'next';
import './globals.css';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://downloads.scrutium.com'),
  title: 'Scrutium — Official App Downloads',
  description:
    'Download the official Scrutium mobile app. Bring Scrutium AI to your device, explore its capabilities, and continue on the web.',
  keywords: [
    'Scrutium AI download',
    'Download Scrutium app',
    'Scrutium mobile app',
    'Scrutium desktop app',
    'Scrutium APK',
  ],
  alternates: {
    canonical: 'https://downloads.scrutium.com',
  },
  openGraph: {
    title: 'Scrutium — Official App Downloads',
    description:
      'Bring Scrutium AI to your device. Get the app, explore its capabilities, and continue on the web whenever you need to.',
    url: 'https://downloads.scrutium.com',
    siteName: 'Scrutium',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scrutium — Official App Downloads',
    description:
      'Official Scrutium AI standalone mobile application.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#07080b',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-[#07080b] text-neutral-100 antialiased selection:bg-neutral-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
