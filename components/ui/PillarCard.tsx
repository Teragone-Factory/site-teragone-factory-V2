import Link from 'next/link'

type PillarCardProps = {
  title: string
  description: string
  href: string
}

export function PillarCard({ title, description, href }: PillarCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-white/10 bg-card p-8 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.03]"
    >
      <div className="mb-6 h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/30 to-cyan/20" />

      <h3 className="mb-4 font-display text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="mb-6 text-sm leading-7 text-zinc-400">
        {description}
      </p>

      <span className="text-sm font-medium text-primary transition group-hover:text-cyan">
        En savoir plus →
      </span>
    </Link>
  )
}
