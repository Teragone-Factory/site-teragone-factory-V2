import { MetadataRoute } from 'next'

const baseUrl = 'https://teragone-factory.github.io/site-teragone-factory-V2'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/expertises',
    '/expertises/audit',
    '/expertises/delivery',
    '/expertises/ia-agentique',
    '/expertises/web3',
    '/use-cases',
    '/notre-adn',
    '/nous-rejoindre',
    '/contact',
    '/mentions-legales',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))
}
