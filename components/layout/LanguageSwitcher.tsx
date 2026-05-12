import Link from 'next/link'
import { route } from '@/lib/routes'

export function LanguageSwitcher() {
  return (
    <div className="flex items-center rounded-full border border-white/10 p-1 text-xs font-medium text-zinc-300">
      <Link href={route('/')} className="rounded-full px-3 py-1.5 transition hover:bg-white/10 hover:text-white">
        FR
      </Link>
      <Link href={route('/en')} className="rounded-full px-3 py-1.5 transition hover:bg-white/10 hover:text-white">
        EN
      </Link>
    </div>
  )
}
