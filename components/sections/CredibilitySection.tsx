const items = [
  {
    title: 'Critical environments',
    text: 'Plateformes complexes, SI legacy, production critique et fortes contraintes de stabilité.',
    visual: '⚡',
    metric: 'Production-grade engineering',
  },
  {
    title: 'AI & distributed systems',
    text: 'Architecture AI-ready, systèmes agentiques, orchestration LLM et infrastructures distribuées.',
    visual: '✦',
    metric: 'AI engineering integrated',
  },
  {
    title: 'Senior-only delivery',
    text: 'Des équipes seniors autonomes capables de livrer rapidement sans sacrifier la qualité long terme.',
    visual: '◈',
    metric: 'Senior squads only',
  },
]

export function CredibilitySection() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_30%)]" />

      <div className="relative">
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <span className="text-sm uppercase tracking-[0.3em] text-primary">
              Pourquoi les entreprises travaillent avec nous
            </span>

            <h2 className="mt-4 font-display text-5xl font-bold tracking-tight md:text-6xl">
              Une culture engineering orientée impact réel.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              Nous aidons les équipes techniques à reprendre le contrôle sur des systèmes complexes avec une approche plus claire, plus senior et plus durable.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-card/70 px-6 py-5 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan">Notre approche</p>
            <p className="mt-2 text-zinc-300">Moins de complexité inutile. Plus de visibilité, de qualité et de vitesse utile.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-card p-8 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.04]"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition group-hover:scale-125" />

              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-primary/10 text-2xl">
                    {item.visual}
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400">
                    {item.metric}
                  </span>
                </div>

                <h3 className="mb-4 font-display text-3xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="leading-8 text-zinc-400">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
