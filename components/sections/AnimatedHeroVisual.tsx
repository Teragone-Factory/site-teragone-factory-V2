const pillars = [
  {
    title: 'AI',
    subtitle: 'intelligence layer',
    className: 'left-[8%] top-[18%] border-primary/30 bg-primary/10 text-primary',
  },
  {
    title: 'Agents',
    subtitle: 'autonomous workflows',
    className: 'right-[8%] top-[18%] border-cyan/30 bg-cyan/10 text-cyan',
  },
  {
    title: 'Web3',
    subtitle: 'trusted execution',
    className: 'left-1/2 bottom-[16%] -translate-x-1/2 border-secondary/30 bg-secondary/10 text-secondary',
  },
]

export function AnimatedHeroVisual() {
  return (
    <div className="relative h-[440px] overflow-hidden rounded-[2rem] border border-white/10 bg-card p-8 shadow-2xl shadow-primary/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_80%_22%,rgba(6,182,212,0.14),transparent_26%),radial-gradient(circle_at_50%_78%,rgba(139,92,246,0.16),transparent_30%)]" />
      <div className="relative h-full">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 420" fill="none" aria-hidden="true">
          <path d="M150 116 C230 120 255 180 300 205" stroke="url(#blue)" strokeWidth="2" />
          <path d="M450 116 C370 120 345 180 300 205" stroke="url(#cyan)" strokeWidth="2" />
          <path d="M300 320 C300 272 300 238 300 205" stroke="url(#purple)" strokeWidth="2" />
          <path d="M180 320 C245 350 355 350 420 320" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="6 8" />
          <defs>
            <linearGradient id="blue" x1="150" y1="116" x2="300" y2="205"><stop stopColor="#3B82F6" stopOpacity="0.1"/><stop offset="1" stopColor="#3B82F6" stopOpacity="0.8"/></linearGradient>
            <linearGradient id="cyan" x1="450" y1="116" x2="300" y2="205"><stop stopColor="#06B6D4" stopOpacity="0.1"/><stop offset="1" stopColor="#06B6D4" stopOpacity="0.8"/></linearGradient>
            <linearGradient id="purple" x1="300" y1="320" x2="300" y2="205"><stop stopColor="#8B5CF6" stopOpacity="0.1"/><stop offset="1" stopColor="#8B5CF6" stopOpacity="0.8"/></linearGradient>
          </defs>
        </svg>

        <div className="absolute left-1/2 top-[49%] flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-background/85 shadow-[0_0_70px_rgba(59,130,246,0.16)] backdrop-blur-xl">
          <div className="text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan">Value</p>
            <p className="mt-2 font-display text-2xl font-semibold text-white">Actionable</p>
            <p className="font-display text-2xl font-semibold text-white">Systems</p>
          </div>
        </div>

        {pillars.map((pillar) => (
          <div key={pillar.title} className={`absolute min-w-[145px] rounded-3xl border px-5 py-4 backdrop-blur-xl ${pillar.className}`}>
            <p className="font-display text-3xl font-semibold">{pillar.title}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-400">{pillar.subtitle}</p>
          </div>
        ))}

        <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-background/75 p-4 backdrop-blur-xl">
          <div className="grid grid-cols-3 gap-3 text-center text-xs uppercase tracking-[0.18em] text-zinc-400">
            <span>Verify</span>
            <span>Automate</span>
            <span>Execute</span>
          </div>
        </div>
      </div>
    </div>
  )
}
