import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://teragone-factory.github.io/site-teragone-factory-V2/sitemap.xml',
  }
}
