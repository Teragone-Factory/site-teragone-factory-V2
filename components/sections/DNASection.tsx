import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'

const values = [
  {
    title: 'Craftsmanship',
    text: 'Construire des systèmes maintenables, lisibles et durables.',
  },
  {
    title: 'Ownership',
    text: 'Prendre les sujets avec exigence, responsabilité et vision long terme.',
  },
  {
    title: 'Transmission',
    text: 'Partager la connaissance et faire progresser les équipes.',
  },
]

export function DNASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <SectionHeading
        eyebrow="Notre ADN"
        title="Engineering culture, pragmatisme et excellence technique."
        description="Nous croyons à une ingénierie logicielle durable, exigeante et profondément orientée impact métier."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <Card key={value.title}>
            <h3 className="mb-4 font-display text-2xl font-semibold text-white">
              {value.title}
            </h3>

            <p className="leading-7 text-zinc-400">{value.text}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
