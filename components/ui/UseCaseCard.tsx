type UseCaseCardProps = {
  sector: string
  pillar: string
  problem: string
  story: string
  intervention: string
  benefits: string
  thumbnail?: string
}

function MithrilVisual() {
  return (
    <div className="mb-7 rounded-[1.75rem] border border-blue-400/20 bg-white/[0.03] p-8">
      <div className="rounded-[1.5rem] border border-blue-400/20 bg-white/[0.03] px-6 py-9 text-center">
        <div className="mx-auto mb-5 h-14 w-14 rounded-2xl border border-blue-400/35 bg-blue-400/10" />
        <p className="font-mono text-sm uppercase tracking-[0.55em] text-blue-200">Mithril Protocol</p>
      </div>
    </div>
  )
}

export function UseCaseCard({ sector, pillar, problem, story, intervention, benefits, thumbnail }: UseCaseCardProps) {
  const isMithril = pillar.toLowerCase().includes('mithril')

  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-card p-8 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.04]">
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition group-hover:scale-125" />
      <div className="relative">
        {isMithril ? <MithrilVisual /> : thumbnail ? (
          <div className="mb-7 flex min-h-[170px] items-center justify-center rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
            <img src={thumbnail} alt={`${pillar} logo`} className="max-h-28 max-w-[260px] object-contain" />
          </div>
        ) : null}

        <div className="mb-6 flex flex-wrap gap-3">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">{pillar}</span>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-400">{sector}</span>
        </div>

        <h3 className="font-display text-2xl font-semibold leading-tight text-white">{problem}</h3>

        <div className="mt-6 space-y-5 text-sm leading-7 text-zinc-400">
          <p>{story}</p>

          <p>
            <strong className="text-zinc-200">What we delivered — </strong>
            {intervention}
          </p>

          <p>
            <strong className="text-zinc-200">Business impact — </strong>
            {benefits}
          </p>
        </div>
      </div>
    </article>
  )
}
