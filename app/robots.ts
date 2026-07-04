import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // TODO: Replace this with your actual live domain URL
  const baseUrl = 'https://shoryabhushan.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
