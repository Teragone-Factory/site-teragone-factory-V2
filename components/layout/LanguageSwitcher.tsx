'use client'

import { usePathname } from 'next/navigation'

const baseUrl = 'https://teragone-factory.github.io/site-teragone-factory-V2'

function normalizePath(pathname: string) {
  const clean = pathname.replace(/^\/site-teragone-factory-V2/, '') || '/'
  const withoutLegacyEnglish = clean.replace(/^\/en(?=\/|$)/, '') || '/'
  return withoutLegacyEnglish === '' ? '/' : withoutLegacyEnglish
}

function switchPath(pathname: string, target: 'fr' | 'en') {
  const normalized = normalizePath(pathname)
  const withoutFrench = normalized.replace(/^\/fr(?=\/|$)/, '') || '/'

  if (target === 'en') return `${baseUrl}${withoutFrench === '/' ? '/' : withoutFrench}`
  return `${baseUrl}${withoutFrench === '/' ? '/fr/' : `/fr${withoutFrench}`}`
}

export function LanguageSwitcher() {
  const pathname = usePathname() || '/'
  const normalized = normalizePath(pathname)
  const isFrench = normalized === '/fr' || normalized.startsWith('/fr/')

  return (
    <div className="flex items-center rounded-full border border-white/10 bg-white/[0.03] p-1 text-xs font-medium text-zinc-300">
      <a href={switchPath(pathname, 'en')} className={`rounded-full px-3 py-1.5 transition ${!isFrench ? 'bg-white/10 text-white' : 'hover:bg-white/10 hover:text-white'}`}>EN</a>
      <a href={switchPath(pathname, 'fr')} className={`rounded-full px-3 py-1.5 transition ${isFrench ? 'bg-white/10 text-white' : 'hover:bg-white/10 hover:text-white'}`}>FR</a>
    </div>
  )
}
