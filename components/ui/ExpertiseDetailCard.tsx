type ExpertiseDetailCardProps = {
  title: string
  expertise: string
  actions: string[]
}

export function ExpertiseDetailCard({ title, expertise, actions }: ExpertiseDetailCardProps) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-card p-8">
      <h2 className="font-display text-3xl font-semibold text-white">{title}</h2>
      <p className="mt-5 leading-7 text-zinc-400">{expertise}</p>
      <div className="mt-8 border-t border-white/10 pt-6">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Ce que nous faisons</p>
        <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-300">
          {actions.map((action) => (
            <li key={action}>— {action}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
