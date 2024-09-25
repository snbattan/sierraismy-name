import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sierraismy.name',
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: 'https://sierraismy.name/resume',
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
  ];
}
