'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { localizedPath } from '@/lib/routes'

export function LanguageSwitcher() {
  const pathname = usePathname()
  const isEnglish = pathname?.includes('/en')

  return (
    <div className="flex items-center rounded-full border border-white/10 bg-white/[0.03] p-1 text-xs font-medium text-zinc-300">
      <Link
        href={localizedPath(pathname || '/', 'fr')}
        className={`rounded-full px-3 py-1.5 transition ${!isEnglish ? 'bg-white/10 text-white' : 'hover:bg-white/10 hover:text-white'}`}
      >
        FR
      </Link>

      <Link
        href={localizedPath(pathname || '/', 'en')}
        className={`rounded-full px-3 py-1.5 transition ${isEnglish ? 'bg-white/10 text-white' : 'hover:bg-white/10 hover:text-white'}`}
      >
        EN
      </Link>
    </div>
  )
}
