export function AnimatedHeroVisual() {
  return (
    <div className="pointer-events-none relative h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-card shadow-2xl shadow-primary/10">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(59,130,246,0.16),transparent_34%),radial-gradient(circle_at_80%_75%,rgba(139,92,246,0.14),transparent_30%),radial-gradient(circle_at_20%_75%,rgba(6,182,212,0.12),transparent_28%)]" />

      <div className="absolute left-1/2 top-[44%] flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/40 bg-primary/10 backdrop-blur-xl shadow-[0_0_70px_rgba(59,130,246,0.22)]">
        <div className="text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan">AI Core</p>
          <p className="mt-1 text-xs text-zinc-400">LLM · Agents</p>
        </div>
      </div>

      <div className="absolute left-[10%] top-[18%] rounded-2xl border border-white/10 bg-background/80 px-5 py-4 backdrop-blur-xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-white">AI Agents</p>
        <p className="mt-1 text-xs text-zinc-400">reason · automate · execute</p>
      </div>

      <div className="absolute right-[10%] top-[18%] rounded-2xl border border-white/10 bg-background/80 px-5 py-4 backdrop-blur-xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-white">Web Apps</p>
        <p className="mt-1 text-xs text-zinc-400">products · workflows · UX</p>
      </div>

      <div className="absolute left-[10%] bottom-[25%] rounded-2xl border border-white/10 bg-background/80 px-5 py-4 backdrop-blur-xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-white">Business APIs</p>
        <p className="mt-1 text-xs text-zinc-400">data · tools · systems</p>
      </div>

      <div className="absolute right-[10%] bottom-[25%] rounded-2xl border border-white/10 bg-background/80 px-5 py-4 backdrop-blur-xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-white">Web3 Network</p>
        <p className="mt-1 text-xs text-zinc-400">wallet · chain · trust</p>
      </div>

      <div className="absolute left-[30%] top-[28%] h-px w-[18%] bg-gradient-to-r from-cyan/0 via-cyan/70 to-primary/0" />
      <div className="absolute right-[30%] top-[28%] h-px w-[18%] bg-gradient-to-r from-primary/0 via-primary/70 to-cyan/0" />
      <div className="absolute left-[30%] bottom-[33%] h-px w-[18%] bg-gradient-to-r from-secondary/0 via-secondary/70 to-primary/0" />
      <div className="absolute right-[30%] bottom-[33%] h-px w-[18%] bg-gradient-to-r from-primary/0 via-secondary/70 to-secondary/0" />

      <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-background/75 p-5 backdrop-blur-xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">AI × Agents × Web3</p>
        <p className="mt-2 text-sm leading-6 text-zinc-400">
          Intelligent agents connected to enterprise systems, modern web platforms and trusted blockchain infrastructure.
        </p>
      </div>
    </div>
  )
}
