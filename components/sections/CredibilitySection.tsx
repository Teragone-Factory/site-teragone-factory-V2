'use client'

import { usePathname } from 'next/navigation'

const frItems = [
  { title: 'Environnements critiques', text: 'Plateformes complexes, SI legacy, production critique et fortes contraintes de stabilité.', visual: '⚡', metric: 'Production-grade engineering' },
  { title: 'IA & systèmes distribués', text: 'Architecture AI-ready, systèmes agentiques, orchestration LLM et infrastructures distribuées.', visual: '✦', metric: 'AI engineering intégré' },
  { title: 'Delivery senior', text: 'Des équipes seniors autonomes capables de livrer rapidement sans sacrifier la qualité long terme.', visual: '◈', metric: 'Squads seniors' },
]

const enItems = [
  { title: 'Critical environments', text: 'Complex platforms, legacy systems, critical production constraints and high stability requirements.', visual: '⚡', metric: 'Production-grade engineering' },
  { title: 'AI & distributed systems', text: 'AI-ready architecture, agentic systems, LLM orchestration and distributed infrastructure.', visual: '✦', metric: 'Integrated AI engineering' },
  { title: 'Senior delivery', text: 'Autonomous senior teams able to deliver fast without compromising long-term software quality.', visual: '◈', metric: 'Senior squads' },
]

export function CredibilitySection() {
  const pathname = usePathname() || '/'
  const isFrench = pathname.startsWith('/fr') || pathname.includes('/site-teragone-factory-V2/fr')
  const items = isFrench ? frItems : enItems

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_30%)]" />

      <div className="relative">
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <span className="text-sm uppercase tracking-[0.3em] text-primary">
              {isFrench ? 'Pourquoi les entreprises travaillent avec nous' : 'Why companies work with us'}
            </span>

            <h2 className="mt-4 font-display text-5xl font-bold tracking-tight md:text-6xl">
              {isFrench ? 'Une culture engineering orientée impact réel.' : 'An engineering culture focused on real-world impact.'}
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              {isFrench ? 'Nous aidons les équipes techniques à reprendre le contrôle sur des systèmes complexes avec une approche plus claire, plus senior et plus durable.' : 'We help technical teams regain control over complex systems with a clearer, more senior and more sustainable approach.'}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-card/70 px-6 py-5 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan">{isFrench ? 'Notre approche' : 'Our approach'}</p>
            <p className="mt-2 text-zinc-300">{isFrench ? 'Moins de complexité inutile. Plus de visibilité, de qualité et de vitesse utile.' : 'Less unnecessary complexity. More visibility, quality and useful velocity.'}</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-card p-8 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.04]">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition group-hover:scale-125" />
              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-primary/10 text-2xl">{item.visual}</div>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400">{item.metric}</span>
                </div>
                <h3 className="mb-4 font-display text-3xl font-semibold text-white">{item.title}</h3>
                <p className="leading-8 text-zinc-400">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
