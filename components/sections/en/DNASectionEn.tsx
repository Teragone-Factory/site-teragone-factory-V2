import { Card } from '@/components/ui/Card'

const values = [
  ['Software craftsmanship', 'Maintainable systems, clear architecture and strong engineering discipline.'],
  ['Pragmatism', 'Technology choices aligned with operational realities and business impact.'],
  ['Transmission', 'Knowledge sharing, mentoring and long-term engineering enablement.'],
]

export function DNASectionEn() {
  return (
    <section className="border-y border-white/5 bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-14 max-w-4xl">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">Our DNA</span>
          <h2 className="mt-4 font-display text-5xl font-bold tracking-tight">Senior engineering culture built for long-term systems.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map(([title, text]) => (
            <Card key={title}>
              <h3 className="mb-4 font-display text-2xl font-semibold text-white">{title}</h3>
              <p className="leading-7 text-zinc-400">{text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
