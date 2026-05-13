export function AnimatedHeroVisual() {
  return (
    <div className="relative h-[440px] overflow-hidden rounded-[2rem] border border-white/10 bg-card p-8 shadow-2xl shadow-primary/10">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(59,130,246,0.10),transparent_34%),linear-gradient(315deg,rgba(139,92,246,0.10),transparent_36%)]" />

      <div className="relative h-full">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 680 420" fill="none" aria-hidden="true">
          <path d="M90 82 H560" stroke="rgba(255,255,255,0.13)" strokeWidth="1" />
          <path d="M90 196 H560" stroke="rgba(255,255,255,0.13)" strokeWidth="1" />
          <path d="M90 310 H560" stroke="rgba(255,255,255,0.13)" strokeWidth="1" />

          <path d="M175 82 C240 82 250 196 315 196" stroke="url(#aiFlow)" strokeWidth="2.2" />
          <path d="M315 196 C385 196 400 82 470 82" stroke="url(#agentFlow)" strokeWidth="2.2" />
          <path d="M315 196 C390 196 408 310 485 310" stroke="url(#web3Flow)" strokeWidth="2.2" />
          <path d="M175 310 C240 310 250 196 315 196" stroke="url(#dataFlow)" strokeWidth="2.2" />

          <circle cx="175" cy="82" r="4" fill="#3B82F6" />
          <circle cx="470" cy="82" r="4" fill="#06B6D4" />
          <circle cx="175" cy="310" r="4" fill="#64748B" />
          <circle cx="485" cy="310" r="4" fill="#8B5CF6" />
          <circle cx="315" cy="196" r="5" fill="#FFFFFF" />

          <defs>
            <linearGradient id="aiFlow" x1="175" y1="82" x2="315" y2="196"><stop stopColor="#3B82F6"/><stop offset="1" stopColor="#FFFFFF"/></linearGradient>
            <linearGradient id="agentFlow" x1="315" y1="196" x2="470" y2="82"><stop stopColor="#FFFFFF"/><stop offset="1" stopColor="#06B6D4"/></linearGradient>
            <linearGradient id="web3Flow" x1="315" y1="196" x2="485" y2="310"><stop stopColor="#FFFFFF"/><stop offset="1" stopColor="#8B5CF6"/></linearGradient>
            <linearGradient id="dataFlow" x1="175" y1="310" x2="315" y2="196"><stop stopColor="#64748B"/><stop offset="1" stopColor="#FFFFFF"/></linearGradient>
          </defs>
        </svg>

        <div className="absolute left-[7%] top-[10%]">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">AI</p>
          <p className="mt-2 max-w-[150px] text-sm leading-6 text-zinc-400">models, reasoning, knowledge</p>
        </div>

        <div className="absolute right-[8%] top-[10%] text-right">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan">Agents</p>
          <p className="mt-2 max-w-[170px] text-sm leading-6 text-zinc-400">autonomous workflows, tools, actions</p>
        </div>

        <div className="absolute left-[7%] bottom-[19%]">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-300">Enterprise systems</p>
          <p className="mt-2 max-w-[170px] text-sm leading-6 text-zinc-400">data, APIs, business processes</p>
        </div>

        <div className="absolute right-[8%] bottom-[19%] text-right">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-secondary">Web3 / Blockchain</p>
          <p className="mt-2 max-w-[180px] text-sm leading-6 text-zinc-400">identity, assets, trust, state</p>
        </div>

        <div className="absolute left-1/2 top-[47%] -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-white">Value layer</p>
          <p className="mt-3 font-display text-4xl font-semibold text-white">Actionable systems</p>
          <p className="mx-auto mt-3 max-w-[280px] text-sm leading-6 text-zinc-400">AI decisions become governed actions across web platforms and decentralized infrastructure.</p>
        </div>

        <div className="absolute bottom-6 left-8 right-8 border-t border-white/10 pt-5">
          <div className="grid grid-cols-3 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-400">
            <span>Understand</span>
            <span>Orchestrate</span>
            <span>Verify & Execute</span>
          </div>
        </div>
      </div>
    </div>
  )
}
