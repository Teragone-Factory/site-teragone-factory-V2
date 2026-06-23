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
    '/use-cases/mithril',
    '/notre-adn',
    '/nous-rejoindre',
    '/contact',
    '/legal',
    '/terms',
    '/cookies',
    '/privacy',
    '/fr',
    '/fr/expertises',
    '/fr/expertises/audit',
    '/fr/expertises/delivery',
    '/fr/expertises/ia-agentique',
    '/fr/expertises/web3',
    '/fr/use-cases',
    '/fr/use-cases/mithril',
    '/fr/notre-adn',
    '/fr/nous-rejoindre',
    '/fr/contact',
    '/fr/legal',
    '/fr/terms',
    '/fr/cookies',
    '/fr/privacy',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' || route === '/fr' ? 1 : 0.8,
  }))
}
