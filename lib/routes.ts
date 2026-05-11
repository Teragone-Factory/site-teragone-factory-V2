export const basePath = process.env.NODE_ENV === 'production' ? '/site-teragone-factory-V2' : ''

export function route(path: string) {
  if (path === '/') return `${basePath}/`
  return `${basePath}${path}`
}
