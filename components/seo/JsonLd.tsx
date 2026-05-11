import { site } from '@/lib/site'

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.baseUrl,
    description: site.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nantes',
      addressCountry: 'FR',
    },
    sameAs: [site.linkedIn],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function WebPageJsonLd({ title, path }: { title: string; path: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    url: `${site.baseUrl}${path}`,
    isPartOf: {
      '@type': 'WebSite',
      name: site.name,
      url: site.baseUrl,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
