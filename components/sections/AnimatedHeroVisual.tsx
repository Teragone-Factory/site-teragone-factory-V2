export function AnimatedHeroVisual() {
  return (
    <div className="pointer-events-none relative h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-card shadow-2xl shadow-primary/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.28),transparent_28%),radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.22),transparent_28%),radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.14),transparent_35%)]" />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 animate-pulse" />
      <div className="absolute left-[18%] top-[26%] h-4 w-4 rounded-full bg-primary shadow-[0_0_35px_rgba(59,130,246,0.9)]" />
      <div className="absolute right-[22%] top-[34%] h-4 w-4 rounded-full bg-cyan shadow-[0_0_35px_rgba(6,182,212,0.9)]" />
      <div className="absolute bottom-[24%] left-[42%] h-4 w-4 rounded-full bg-secondary shadow-[0_0_35px_rgba(139,92,246,0.9)]" />
      <div className="absolute left-[20%] top-[30%] h-px w-[58%] rotate-6 bg-gradient-to-r from-primary/0 via-primary/70 to-cyan/0" />
      <div className="absolute left-[30%] top-[52%] h-px w-[48%] -rotate-12 bg-gradient-to-r from-secondary/0 via-secondary/70 to-primary/0" />
      <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-background/70 p-5 backdrop-blur">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">AI-ready architecture graph</p>
        <p className="mt-2 text-sm text-zinc-400">Audit · Delivery · Agents · Web3 · Production</p>
      </div>
    </div>
  )
}
