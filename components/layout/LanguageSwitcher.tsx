'use client'

import { usePathname } from 'next/navigation'

const baseUrl = 'https://teragone-factory.github.io/site-teragone-factory-V2'

export function LanguageSwitcher() {
  const pathname = usePathname() || '/'
  const isEnglish = pathname.includes('/en')

  return (
    <div className="flex items-center rounded-full border border-white/10 bg-white/[0.03] p-1 text-xs font-medium text-zinc-300">
      <a
        href={`${baseUrl}/`}
        className={`rounded-full px-3 py-1.5 transition ${!isEnglish ? 'bg-white/10 text-white' : 'hover:bg-white/10 hover:text-white'}`}
      >
        FR
      </a>

      <a
        href={`${baseUrl}/en/`}
        className={`rounded-full px-3 py-1.5 transition ${isEnglish ? 'bg-white/10 text-white' : 'hover:bg-white/10 hover:text-white'}`}
      >
        EN
      </a>
    </div>
  )
}
