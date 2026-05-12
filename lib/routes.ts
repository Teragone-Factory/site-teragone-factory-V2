export const basePath = '/site-teragone-factory-V2'

export function route(path: string) {
  if (path.startsWith('http')) return path
  if (path.startsWith(basePath)) return path
  if (path === '/') return `${basePath}/`
  return `${basePath}${path}`
}

export function localizedPath(pathname: string, locale: 'fr' | 'en') {
  const cleanPath = pathname.replace(basePath, '') || '/'
  const withoutLocale = cleanPath.replace(/^\/en(?=\/|$)/, '') || '/'

  if (locale === 'fr') return route(withoutLocale)
  if (withoutLocale === '/') return route('/en/')
  return route(`/en${withoutLocale}`)
}
