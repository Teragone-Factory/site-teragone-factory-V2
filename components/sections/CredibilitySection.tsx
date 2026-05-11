import { Card } from '@/components/ui/Card'

const items = [
  {
    title: 'Critical environments',
    text: 'Interventions sur des plateformes complexes, legacy critiques et environnements à forte exigence.',
  },
  {
    title: 'AI & distributed systems',
    text: 'Architecture AI-ready, systèmes agentiques, plateformes distribuées et Web3.',
  },
  {
    title: 'Senior-only delivery',
    text: 'Des équipes seniors capables de délivrer rapidement sans sacrifier la qualité long terme.',
  },
]

export function CredibilitySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-14 max-w-4xl">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">
          Why companies work with us
        </span>

        <h2 className="mt-4 font-display text-5xl font-bold tracking-tight">
          Une culture engineering orientée impact réel.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title}>
            <h3 className="mb-4 font-display text-2xl font-semibold text-white">
              {item.title}
            </h3>

            <p className="leading-7 text-zinc-400">{item.text}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
