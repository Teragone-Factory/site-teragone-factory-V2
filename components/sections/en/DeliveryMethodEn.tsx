import { Card } from '@/components/ui/Card'

const steps = [
  ['Audit & Discovery', 'Architecture, technical debt, governance and operational constraints analysis.'],
  ['Architecture & Design', 'Scalable, modular and AI-ready platform design.'],
  ['Delivery & Production', 'Senior implementation, industrialization and production rollout.'],
  ['Transmission & Governance', 'Documentation, enablement and long-term engineering sustainability.'],
]

export function DeliveryMethodEn() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-14 max-w-4xl">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Methodology</span>
        <h2 className="mt-4 font-display text-5xl font-bold tracking-tight">From architecture audits to production-grade delivery.</h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-4">
        {steps.map(([title, text], index) => (
          <Card key={title}>
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 font-display text-xl font-bold text-primary">{index + 1}</div>
            <h3 className="mb-4 font-display text-2xl font-semibold text-white">{title}</h3>
            <p className="leading-7 text-zinc-400">{text}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
