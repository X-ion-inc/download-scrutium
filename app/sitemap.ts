import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/download-config';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.domain;

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-10-01'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}#downloads`,
      lastModified: new Date('2026-10-01'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}#capabilities`,
      lastModified: new Date('2026-10-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}#installation`,
      lastModified: new Date('2026-10-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}#faq`,
      lastModified: new Date('2026-10-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
