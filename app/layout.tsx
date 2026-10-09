import type { Metadata, Viewport } from 'next';
import './globals.css';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://download.scrutium.com'),
  title: 'Scrutium AI App Download | Official Desktop & Mobile Releases',
  description:
    'Download official Scrutium AI apps for Android and Windows. Experience fast, intelligent AI assistance for writing, coding, and problem-solving on your device.',
  keywords: [
    'Scrutium AI download',
    'Download Scrutium AI app',
    'Scrutium Android app',
    'Scrutium for Windows',
    'Scrutium app installation',
    'Scrutium AI features',
    'Scrutium APK',
  ],
  alternates: {
    canonical: 'https://download.scrutium.com',
  },
  openGraph: {
    title: 'Scrutium AI App Download | Official Desktop & Mobile Releases',
    description:
      'Meet Scrutium, your AI assistant for exploring ideas, solving problems, writing, learning, coding, and getting more done. Download the official app.',
    url: 'https://download.scrutium.com',
    siteName: 'Scrutium AI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scrutium AI App Download | Official Desktop & Mobile Releases',
    description:
      'Official Scrutium AI apps for Android and Windows. Take your AI experience wherever you go.',
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
  themeColor: '#090a10',
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
      <body className="min-h-screen bg-[#07090e] text-neutral-100 antialiased selection:bg-blue-600/30 selection:text-blue-200">
        {children}
      </body>
    </html>
  );
}
