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
    '/legal',
    '/terms',
    '/cookies',
    '/privacy',
    '/fr',
    '/fr/expertises',
    '/fr/use-cases',
    '/fr/notre-adn',
    '/fr/contact',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' || route === '/fr' ? 1 : 0.8,
  }))
}
