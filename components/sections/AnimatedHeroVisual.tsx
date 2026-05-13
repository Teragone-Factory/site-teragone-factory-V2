const rows = [
  {
    left: 'AI',
    leftDetail: 'context',
    middle: 'Agent layer',
    middleDetail: 'orchestrate',
    right: 'Business action',
    rightDetail: 'apps & APIs',
  },
  {
    left: 'Web3',
    leftDetail: 'identity · assets',
    middle: 'Trust layer',
    middleDetail: 'verify · sign',
    right: 'Decentralized system',
    rightDetail: 'on-chain',
  },
]

export function AnimatedHeroVisual() {
  return (
    <div className="relative h-[400px] overflow-hidden rounded-[2rem] border border-white/10 bg-card p-7 shadow-2xl shadow-primary/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_90%_80%,rgba(139,92,246,0.12),transparent_30%)]" />

      <div className="relative flex h-full flex-col justify-center gap-6">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cyan">Architecture pattern</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-white">AI agents + trusted Web3 execution.</h3>
        </div>

        <div className="space-y-4">
          {rows.map((row) => (
            <div key={row.left} className="grid grid-cols-[1fr_42px_1fr_42px_1fr] items-center gap-2">
              <div className="border-l-2 border-primary/70 bg-background/70 p-3 backdrop-blur-xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{row.left}</p>
                <p className="mt-1 text-xs text-zinc-400">{row.leftDetail}</p>
              </div>

              <div className="h-px bg-gradient-to-r from-primary/80 to-cyan/70" />

              <div className="border-l-2 border-cyan/70 bg-background/70 p-3 backdrop-blur-xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan">{row.middle}</p>
                <p className="mt-1 text-xs text-zinc-400">{row.middleDetail}</p>
              </div>

              <div className="h-px bg-gradient-to-r from-cyan/70 to-secondary/80" />

              <div className="border-l-2 border-secondary/70 bg-background/70 p-3 backdrop-blur-xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">{row.right}</p>
                <p className="mt-1 text-xs text-zinc-400">{row.rightDetail}</p>
              </div>
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
