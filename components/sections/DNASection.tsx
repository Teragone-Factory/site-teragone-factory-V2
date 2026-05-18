const values = [
  {
    title: 'Craftsmanship',
    text: 'Des systèmes lisibles, testables et maintenables, conçus pour durer au-delà du premier delivery.',
    highlight: 'Qualité durable',
  },
  {
    title: 'AI Engineering',
    text: 'L’IA intégrée aux pratiques de développement : analyse, tests, documentation, refactoring et automatisation maîtrisée.',
    highlight: 'Delivery augmenté',
  },
  {
    title: 'Ownership',
    text: 'Des équipes seniors qui prennent la responsabilité de la qualité, des choix techniques et de la mise en production.',
    highlight: 'Responsabilité',
  },
  {
    title: 'Transmission',
    text: 'Des décisions documentées, des pratiques partagées et des équipes internes qui montent en compétence.',
    highlight: 'Impact long terme',
  },
]

export function DNASection() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.10),transparent_32%),radial-gradient(circle_at_90%_80%,rgba(6,182,212,0.08),transparent_30%)]" />

      <div className="relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <span className="text-sm uppercase tracking-[0.3em] text-primary">Notre ADN</span>
          <h2 className="mt-4 font-display text-5xl font-bold tracking-tight md:text-6xl">
            Engineering culture, pragmatisme et excellence technique.
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Nous combinons culture craft, AI engineering et transmission pour construire des systèmes utiles, robustes et réellement exploitables par les équipes.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {values.map((value) => (
            <article
              key={value.title}
              className="group rounded-[1.7rem] border border-white/10 bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.04]"
            >
              <span className="mb-6 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-primary">
                {value.highlight}
              </span>
              <h3 className="font-display text-2xl font-semibold text-white">{value.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
