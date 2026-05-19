'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type PillarCardProps = {
  title: string
  description: string
  href: string
  accent?: string
  visual?: string
  proof?: string
}

export function PillarCard({ title, description, href, accent = 'from-primary/30 to-cyan/20', visual = '✦', proof }: PillarCardProps) {
  const pathname = usePathname() || '/'
  const isFrench = pathname.startsWith('/fr') || pathname.includes('/site-teragone-factory-V2/fr')

  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-card p-8 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.04]"
    >
      <div className={`absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${accent} blur-2xl transition group-hover:scale-125`} />
      <div className="relative">
        <div className="mb-8 flex items-center justify-between gap-6">
          <div className={`flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${accent} text-2xl shadow-2xl shadow-primary/10`}>
            {visual}
          </div>
          {proof && <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400">{proof}</span>}
        </div>

        <h3 className="mb-4 font-display text-3xl font-semibold text-white">
          {title}
        </h3>

        <p className="mb-8 text-base leading-8 text-zinc-400">
          {description}
        </p>

        <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:text-cyan">
          {isFrench ? 'Découvrir l’approche' : 'Explore the approach'} <span className="transition group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  )
}
