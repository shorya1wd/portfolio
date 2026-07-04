import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO: Replace this with your actual live domain URL
  const baseUrl = 'https://shoryabhushan.com'

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Add more objects here if you create other pages like /about or /projects:
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ]
}
