import { SITE_CONFIG, PLATFORMS } from '@/lib/download-config';

export default function JsonLd() {
  const mobilePlatform = PLATFORMS.find((p) => p.id === 'mobile');

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_CONFIG.domain}/#organization`,
        name: 'X-ion, Inc.',
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
        description: 'Official download center for Scrutium standalone applications.',
        publisher: {
          '@id': `${SITE_CONFIG.domain}/#organization`,
        },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Scrutium AI Mobile App',
        operatingSystem: 'Mobile OS',
        applicationCategory: 'ProductivityApplication',
        softwareVersion: mobilePlatform?.version || '3.4.2',
        downloadUrl:
          mobilePlatform?.downloadUrl?.startsWith('http')
            ? mobilePlatform.downloadUrl
            : `${SITE_CONFIG.domain}${mobilePlatform?.downloadUrl}`,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description:
          'Official Scrutium AI standalone APK for Mobile devices.',
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
