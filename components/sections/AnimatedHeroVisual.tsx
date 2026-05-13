const layers = [
  {
    title: 'AI Agents',
    subtitle: 'reason · plan · automate',
  },
  {
    title: 'AI Orchestration',
    subtitle: 'LLM · memory · tools · governance',
  },
  {
    title: 'Web Platforms',
    subtitle: 'apps · workflows · product UX',
  },
  {
    title: 'Web3 Infrastructure',
    subtitle: 'wallets · smart contracts · networks',
  },
]

const chainNodes = ['Identity', 'Assets', 'Trust', 'State']

export function AnimatedHeroVisual() {
  return (
    <div className="relative h-[440px] overflow-hidden rounded-[2rem] border border-white/10 bg-card p-6 shadow-2xl shadow-primary/10">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(59,130,246,0.10),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(139,92,246,0.14),transparent_30%)]" />
      <div className="relative grid h-full grid-cols-[1fr_auto_1fr] items-center gap-5">
        <div className="space-y-4">
          {layers.slice(0, 2).map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-background/75 p-5 backdrop-blur-xl">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">{item.title}</p>
              <p className="mt-2 text-sm text-zinc-400">{item.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0" />
          <div className="rounded-[2rem] border border-primary/30 bg-primary/10 p-5 text-center backdrop-blur-xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan">Teragone Factory</p>
            <p className="mt-3 font-display text-xl font-semibold text-white">AI + Agentic + Web3 Systems</p>
            <p className="mt-3 max-w-[190px] text-xs leading-5 text-zinc-400">Architecture and delivery layer for intelligent, decentralized and production-grade platforms.</p>
          </div>
          <div className="h-px w-16 bg-gradient-to-r from-secondary/0 via-secondary/70 to-secondary/0" />
        </div>

        <div className="space-y-4">
          {layers.slice(2).map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-background/75 p-5 backdrop-blur-xl">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">{item.title}</p>
              <p className="mt-2 text-sm text-zinc-400">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-5 left-6 right-6 rounded-2xl border border-white/10 bg-background/80 p-4 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3">
          {chainNodes.map((node, index) => (
            <div key={node} className="flex flex-1 items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan/30 bg-cyan/10 font-mono text-[10px] text-cyan">
                {index + 1}
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white">{node}</p>
                <p className="text-[11px] text-zinc-500">verified layer</p>
              </div>
              {index < chainNodes.length - 1 && <div className="hidden h-px flex-1 bg-gradient-to-r from-cyan/50 to-primary/30 md:block" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
