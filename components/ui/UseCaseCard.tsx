type UseCaseCardProps = {
  sector: string
  pillar: string
  problem: string
  intervention: string
  results: string
  thumbnail?: string
}

export function UseCaseCard({ sector, pillar, problem, intervention, results, thumbnail }: UseCaseCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-card p-8 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.04]">
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition group-hover:scale-125" />
      <div className="relative">
        {thumbnail && (
          <div className="mb-7 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
            <img src={thumbnail} alt="Mithril" className="h-8 w-auto" />
          </div>
        )}

        <div className="mb-6 flex flex-wrap gap-3">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">{pillar}</span>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-400">{sector}</span>
        </div>
        <h3 className="font-display text-2xl font-semibold text-white">{problem}</h3>
        <p className="mt-5 text-sm leading-7 text-zinc-400"><strong className="text-zinc-200">Intervention — </strong>{intervention}</p>
        <p className="mt-4 text-sm leading-7 text-zinc-400"><strong className="text-zinc-200">Résultats — </strong>{results}</p>
      </div>
    </article>
  )
}
