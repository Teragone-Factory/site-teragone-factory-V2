export function route(path: string) {
  if (path.startsWith('http')) return path
  return path
}

export function asset(path: string) {
  if (path.startsWith('http')) return path
  if (!path.startsWith('/')) return path

  const basePath = '/site-teragone-factory-V2'

  if (path.startsWith(basePath)) return path

  return `${basePath}${path}`
}

export function localizedPath(pathname: string, locale: 'fr' | 'en') {
  const cleanPath = pathname.replace(/^\/site-teragone-factory-V2/, '') || '/'
  const withoutLocale = cleanPath.replace(/^\/(en|fr)(?=\/|$)/, '') || '/'

  if (locale === 'en') return withoutLocale === '/' ? '/' : withoutLocale
  if (withoutLocale === '/') return '/fr/'
  return `/fr${withoutLocale}`
}
