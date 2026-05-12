export const locales = ['fr', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'fr'

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function stripLocale(pathname: string) {
  return pathname.replace(/^\/en(?=\/|$)/, '') || '/'
}

export function toLocalizedPath(pathname: string, locale: Locale) {
  const clean = stripLocale(pathname)
  if (locale === 'fr') return clean
  if (clean === '/') return '/en'
  return `/en${clean}`
}
