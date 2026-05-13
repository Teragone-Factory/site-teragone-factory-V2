const rows = [
  {
    left: 'AI',
    leftDetail: 'understand context',
    middle: 'Agent layer',
    middleDetail: 'plan & orchestrate',
    right: 'Business action',
    rightDetail: 'execute in apps & APIs',
  },
  {
    left: 'Web3',
    leftDetail: 'identity · assets · state',
    middle: 'Trust layer',
    middleDetail: 'verify & sign',
    right: 'Decentralized system',
    rightDetail: 'settle on-chain',
  },
]

export function AnimatedHeroVisual() {
  return (
    <div className="relative h-[440px] overflow-hidden rounded-[2rem] border border-white/10 bg-card p-8 shadow-2xl shadow-primary/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_90%_80%,rgba(139,92,246,0.12),transparent_30%)]" />

      <div className="relative flex h-full flex-col justify-center gap-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan">Architecture pattern</p>
          <h3 className="mt-3 font-display text-3xl font-semibold text-white">AI agents connected to trusted Web3 execution.</h3>
        </div>

        <div className="space-y-5">
          {rows.map((row, index) => (
            <div key={row.left} className="grid grid-cols-[1fr_56px_1fr_56px_1fr] items-center gap-3">
              <div className="border-l-2 border-primary/70 bg-background/70 p-4 backdrop-blur-xl">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">{row.left}</p>
                <p className="mt-2 text-sm text-zinc-400">{row.leftDetail}</p>
              </div>

              <div className="h-px bg-gradient-to-r from-primary/80 to-cyan/70" />

              <div className="border-l-2 border-cyan/70 bg-background/70 p-4 backdrop-blur-xl">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan">{row.middle}</p>
                <p className="mt-2 text-sm text-zinc-400">{row.middleDetail}</p>
              </div>

              <div className="h-px bg-gradient-to-r from-cyan/70 to-secondary/80" />

              <div className="border-l-2 border-secondary/70 bg-background/70 p-4 backdrop-blur-xl">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-secondary">{row.right}</p>
                <p className="mt-2 text-sm text-zinc-400">{row.rightDetail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-5 text-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white">Understand</p>
            <p className="mt-1 text-xs text-zinc-500">AI reasoning</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white">Orchestrate</p>
            <p className="mt-1 text-xs text-zinc-500">agent workflows</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white">Verify & execute</p>
            <p className="mt-1 text-xs text-zinc-500">Web3 trust layer</p>
          </div>
        </div>
      </div>
    </div>
  )
}
