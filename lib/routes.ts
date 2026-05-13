export function route(path: string) {
  if (path.startsWith('http')) return path
  return path
}

export function localizedPath(pathname: string, locale: 'fr' | 'en') {
  const cleanPath = pathname.replace(/^\/site-teragone-factory-V2/, '') || '/'
  const withoutLocale = cleanPath.replace(/^\/en(?=\/|$)/, '') || '/'

  if (locale === 'fr') return withoutLocale
  if (withoutLocale === '/') return '/en/'
  return `/en${withoutLocale}`
}
