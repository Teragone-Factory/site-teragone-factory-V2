const nodes = [
  { title: 'AI context', detail: 'Understand user intent, business context and technical constraints.' },
  { title: 'Agent orchestration', detail: 'Coordinate LLM workflows, tools, APIs and delivery processes.' },
  { title: 'Trusted execution', detail: 'Connect actions to secure systems, audit trails and Web3 trust layers.' },
]

export function AnimatedHeroVisual() {
  return (
    <div className="relative h-[400px] overflow-hidden rounded-[2rem] border border-white/10 bg-card p-7 shadow-2xl shadow-primary/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(59,130,246,0.12),transparent_34%),radial-gradient(circle_at_88%_85%,rgba(6,182,212,0.10),transparent_36%)]" />

      <div className="relative flex h-full flex-col justify-center gap-7">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cyan">Architecture pattern</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-white">AI agents + trusted Web3 execution.</h3>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {nodes.map((node, index) => (
            <div key={node.title} className="relative rounded-2xl border border-primary/20 bg-primary/10 p-5 backdrop-blur-xl">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-white/[0.04] font-mono text-xs text-primary">
                0{index + 1}
              </div>
              <h4 className="font-display text-xl font-semibold text-white">{node.title}</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{node.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-4 text-center">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white">Understand</p>
            <p className="mt-1 text-[11px] text-zinc-500">AI</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white">Orchestrate</p>
            <p className="mt-1 text-[11px] text-zinc-500">Agents</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white">Verify</p>
            <p className="mt-1 text-[11px] text-zinc-500">Web3</p>
          </div>
        </div>
      </div>
    </div>
  )
}
