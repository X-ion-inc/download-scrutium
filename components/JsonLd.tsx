import { SITE_CONFIG, PLATFORMS } from '@/lib/download-config';

export default function JsonLd() {
  const androidPlatform = PLATFORMS.find((p) => p.id === 'android');
  const windowsPlatform = PLATFORMS.find((p) => p.id === 'windows');

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_CONFIG.domain}/#organization`,
        name: 'Scrutium AI',
        url: SITE_CONFIG.webAppUrl,
        logo: `${SITE_CONFIG.domain}/icon.svg`,
        sameAs: [
          SITE_CONFIG.webAppUrl,
          SITE_CONFIG.docsUrl,
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_CONFIG.domain}/#website`,
        url: SITE_CONFIG.domain,
        name: 'Scrutium AI App Download Portal',
        description: 'Official download center for Scrutium AI standalone applications on Android and Windows.',
        publisher: {
          '@id': `${SITE_CONFIG.domain}/#organization`,
        },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Scrutium AI for Android',
        operatingSystem: 'Android 9.0 and higher',
        applicationCategory: 'ProductivityApplication',
        softwareVersion: androidPlatform?.version || '1.2.0',
        fileSize: androidPlatform?.fileSize || '42.8 MB',
        datePublished: '2026-10-01',
        downloadUrl: `${SITE_CONFIG.domain}${androidPlatform?.downloadUrl}`,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description:
          'Official Scrutium AI universal APK for Android smartphones and tablets.',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Scrutium AI for Windows',
        operatingSystem: 'Windows 10, Windows 11 (64-bit)',
        applicationCategory: 'ProductivityApplication',
        softwareVersion: windowsPlatform?.version || '1.2.0',
        fileSize: windowsPlatform?.fileSize || '78.4 MB',
        datePublished: '2026-10-01',
        downloadUrl: `${SITE_CONFIG.domain}${windowsPlatform?.downloadUrl}`,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description:
          'Official Scrutium AI desktop 64-bit installer for Windows 10 and 11.',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
