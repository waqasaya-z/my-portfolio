import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
        ],
      },
      // Optional: Specific rules for search engines
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 2,
      }
    ],
    sitemap: 'https://www.waqasayaz.com/sitemap.xml',
    host: 'https://www.waqasayaz.com'
  }
}