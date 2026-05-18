'use client'

import { usePathname } from 'next/navigation'

const baseUrl = 'https://teragone-factory.github.io/site-teragone-factory-V2'

function switchPath(pathname: string, target: 'fr' | 'en') {
  const clean = pathname.replace(/^\/site-teragone-factory-V2/, '') || '/'
  const withoutEn = clean.replace(/^\/en(?=\/|$)/, '') || '/'

  if (target === 'fr') return `${baseUrl}${withoutEn === '/' ? '/' : `${withoutEn}/`.replace(/\/+/g, '/')}`
  return `${baseUrl}${withoutEn === '/' ? '/en/' : `/en${withoutEn}/`.replace(/\/+/g, '/')}`
}

export function LanguageSwitcher() {
  const pathname = usePathname() || '/'
  const isEnglish = pathname.includes('/en')

  return (
    <div className="flex items-center rounded-full border border-white/10 bg-white/[0.03] p-1 text-xs font-medium text-zinc-300">
      <a href={switchPath(pathname, 'fr')} className={`rounded-full px-3 py-1.5 transition ${!isEnglish ? 'bg-white/10 text-white' : 'hover:bg-white/10 hover:text-white'}`}>FR</a>
      <a href={switchPath(pathname, 'en')} className={`rounded-full px-3 py-1.5 transition ${isEnglish ? 'bg-white/10 text-white' : 'hover:bg-white/10 hover:text-white'}`}>EN</a>
    </div>
  )
}
