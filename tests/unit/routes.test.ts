import { describe, expect, it } from 'vitest'
import { localizedPath } from '@/lib/routes'

describe('localizedPath', () => {
  it('returns english routes by default', () => {
    expect(localizedPath('/expertises', 'en')).toBe('/expertises')
  })

  it('returns french prefixed routes', () => {
    expect(localizedPath('/expertises', 'fr')).toBe('/fr/expertises')
  })

  it('keeps root english route', () => {
    expect(localizedPath('/', 'en')).toBe('/')
  })

  it('maps french root route', () => {
    expect(localizedPath('/', 'fr')).toBe('/fr/')
  })
})
