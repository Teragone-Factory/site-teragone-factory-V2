type UseCaseCardProps = {
  sector: string
  pillar: string
  problem: string
  intervention: string
  results: string
}

export function UseCaseCard({ sector, pillar, problem, intervention, results }: UseCaseCardProps) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-card p-8 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.04]">
      <div className="mb-6 flex flex-wrap gap-3">
        <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">{pillar}</span>
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-400">{sector}</span>
      </div>
      <h3 className="font-display text-2xl font-semibold text-white">{problem}</h3>
      <p className="mt-5 text-sm leading-7 text-zinc-400"><strong className="text-zinc-200">Intervention — </strong>{intervention}</p>
      <p className="mt-4 text-sm leading-7 text-zinc-400"><strong className="text-zinc-200">Résultats — </strong>{results}</p>
    </article>
  )
}
