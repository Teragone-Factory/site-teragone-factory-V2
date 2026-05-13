const nodes = [
  { label: 'AI Agent', detail: 'Reason · Act', position: 'left-[8%] top-[16%]' },
  { label: 'Web App', detail: 'UX · Workflow', position: 'right-[8%] top-[18%]' },
  { label: 'Business API', detail: 'Data · Tools', position: 'left-[8%] bottom-[18%]' },
  { label: 'Web3 Layer', detail: 'Trust · Assets', position: 'right-[8%] bottom-[18%]' },
]

export function AnimatedHeroVisual() {
  return (
    <div className="pointer-events-none relative h-[440px] overflow-hidden rounded-[2rem] border border-white/10 bg-card shadow-2xl shadow-primary/10">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(59,130,246,0.28),transparent_30%),radial-gradient(circle_at_75%_70%,rgba(139,92,246,0.24),transparent_32%),radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.18),transparent_38%)]" />

      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-primary/30 bg-background/70 p-6 backdrop-blur-xl shadow-[0_0_60px_rgba(59,130,246,0.22)] animate-glow-pulse">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary">
          AI
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">Agentic Core</p>
        <p className="mt-3 text-sm leading-6 text-zinc-400">Orchestration · Memory · Tools · Governance</p>
      </div>

      <div className="absolute left-[20%] top-[28%] h-px w-[60%] bg-gradient-to-r from-primary/0 via-primary/70 to-cyan/0" />
      <div className="absolute left-[20%] bottom-[30%] h-px w-[60%] bg-gradient-to-r from-secondary/0 via-secondary/70 to-primary/0" />
      <div className="absolute left-1/2 top-[22%] h-[58%] w-px bg-gradient-to-b from-cyan/0 via-cyan/50 to-primary/0" />
      <div className="absolute left-[25%] top-[22%] h-[56%] w-[50%] rounded-full border border-primary/20" />

      {nodes.map((node) => (
        <div key={node.label} className={`animate-float-slow absolute ${node.position} rounded-2xl border border-white/10 bg-background/75 px-4 py-3 backdrop-blur-xl shadow-xl`}>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-white">{node.label}</p>
          <p className="mt-1 text-xs text-zinc-400">{node.detail}</p>
        </div>
      ))}

      <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-background/75 p-5 backdrop-blur-xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">AI × Agents × Web3 systems</p>
        <p className="mt-2 text-sm text-zinc-400">We connect intelligent agents, business platforms and trusted Web3 infrastructure into production-ready systems.</p>
      </div>
    </div>
  )
}
