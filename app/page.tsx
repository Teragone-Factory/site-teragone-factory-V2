import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { AnimatedHeroVisual } from '@/components/sections/AnimatedHeroVisual'
import { CredibilitySection } from '@/components/sections/CredibilitySection'
import { DeliveryMethod } from '@/components/sections/DeliveryMethod'
import { DNASection } from '@/components/sections/DNASection'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { ProofBar } from '@/components/sections/ProofBar'
import { RecruitmentTeaser } from '@/components/sections/RecruitmentTeaser'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { PillarCard } from '@/components/ui/PillarCard'
import { SectionHeading } from '@/components/ui/SectionHeading'

const pillars = [
  { title: 'Audit & Expertise', description: 'Audits techniques, architecture, dette logicielle et modernisation pragmatique pour reprendre le contrôle sur des systèmes critiques.', href: '/expertises/audit', visual: '🧭', proof: 'Architecture & gouvernance', accent: 'from-blue-500/30 to-cyan-400/20' },
  { title: 'Delivery & Squads Seniors', description: 'Des squads seniors AI-ready capables de concevoir, reprendre et industrialiser des plateformes complexes avec une forte culture engineering.', href: '/expertises/delivery', visual: '⚙️', proof: 'Software craftsmanship', accent: 'from-violet-500/30 to-blue-400/20' },
  { title: 'IA & Systèmes Agentiques', description: 'RAG, orchestration LLM, agents autonomes et AI engineering pour construire des systèmes intelligents réellement exploitables.', href: '/expertises/ia-agentique', visual: '✦', proof: 'AI-ready systems', accent: 'from-cyan-500/30 to-emerald-400/20' },
  { title: 'Web3 & Blockchain', description: 'Protocol engineering, infrastructures distribuées, plateformes Web3 et convergence IA + agents + systèmes décentralisés.', href: '/expertises/web3', visual: '◈', proof: 'Distributed systems', accent: 'from-fuchsia-500/30 to-violet-400/20' },
]

const differentiators = [
  ['01', 'Senior expertise', 'Des profils expérimentés sur des enjeux critiques, capables de décider vite et juste.'],
  ['02', 'AI inside', 'L’IA est intégrée dans les pratiques, les architectures et les workflows de delivery.'],
  ['03', 'Long-term thinking', 'Des choix pensés pour la maintenabilité, la gouvernance et l’évolution des plateformes.'],
  ['04', 'Production focus', 'Une obsession simple : livrer des systèmes fiables, observables et exploitables en production.'],
  ['05', 'Craft quality', 'Des standards élevés de qualité logicielle, tests, documentation et transmission.'],
]

const landingUseCases = [
  { tag: 'Transport & mobilité', title: 'Modernisation et delivery à forte criticité.', text: 'Audit, architecture, squads seniors et mise en production sur des environnements complexes.', visual: 'legacy' },
  { tag: 'Plateforme IA enterprise', title: 'Industrialisation d’usages IA dans un SI complexe.', text: 'RAG, orchestration LLM, gouvernance et intégration durable dans les workflows métiers.', visual: 'ai' },
  { tag: 'Mithril protocol', title: 'Certification légère et synchronisation blockchain.', text: 'Snapshots certifiés, validation légère et bootstrap rapide pour infrastructures distribuées.', visual: 'mithril' },
]

function UseCaseThumbnail({ type }: { type: string }) {
  if (type === 'mithril') return <div className="mb-6 flex h-28 items-center justify-center rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#101827] to-[#0B1020] p-5"><div className="text-center"><div className="mx-auto mb-3 h-10 w-10 rounded-xl border border-blue-400/25 bg-blue-400/10" /><p className="font-mono text-xs uppercase tracking-[0.32em] text-blue-300">Mithril Protocol</p></div></div>
  if (type === 'ai') return <div className="mb-6 flex h-28 items-center justify-center rounded-2xl border border-cyan-400/15 bg-gradient-to-br from-[#0D1725] to-[#111827] p-5"><div className="grid w-full max-w-[240px] grid-cols-[1fr_auto_1fr] items-center gap-3"><div className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 px-4 py-3 text-center"><div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-200">Data</div><div className="mt-1 text-xs text-zinc-300">knowledge</div></div><div className="h-px w-8 bg-cyan-300/40" /><div className="rounded-2xl border border-blue-400/25 bg-blue-400/10 px-4 py-3 text-center"><div className="font-mono text-[10px] uppercase tracking-[0.22em] text-blue-200">AI</div><div className="mt-1 text-xs text-zinc-300">workflow</div></div><div className="col-span-3 mx-auto mt-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400">governed integration</div></div></div>
  return <div className="mb-6 flex h-28 items-center justify-center rounded-2xl border border-blue-400/15 bg-gradient-to-br from-[#0E1726] to-[#111827] p-5"><div className="grid w-full max-w-[250px] grid-cols-[1fr_auto_1fr] items-center gap-3"><div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3"><div className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400">Before</div><div className="space-y-2"><div className="h-2 w-16 rounded-full bg-zinc-500/35" /><div className="h-2 w-20 rounded-full bg-zinc-500/25" /><div className="h-2 w-12 rounded-full bg-zinc-500/25" /></div></div><div className="font-mono text-lg text-blue-300">→</div><div className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-3"><div className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-blue-300">After</div><div className="space-y-2"><div className="h-2 w-20 rounded-full bg-blue-300/50" /><div className="h-2 w-16 rounded-full bg-cyan-300/40" /><div className="h-2 w-14 rounded-full bg-white/30" /></div></div></div></div>
}

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="overflow-hidden bg-background text-white">
        <section className="relative border-b border-white/5"><div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_36%)]" /><div className="relative mx-auto grid max-w-7xl gap-20 px-6 py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div><div className="mb-8 flex flex-wrap gap-3"><Badge label="AI Engineering" /><Badge label="Web3" /><Badge label="Software Craftsmanship" /><Badge label="Distributed Systems" /></div><h1 className="max-w-5xl font-display text-6xl font-bold leading-[1.02] tracking-tight md:text-8xl">AI-ready & agent-ready engineering.</h1><p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">Teragone Factory conçoit et délivre des systèmes logiciels critiques, modernes et durables avec des équipes seniors spécialisées en IA, software craftsmanship, plateformes distribuées et architectures complexes.</p><div className="mt-10 flex flex-wrap gap-4"><Button href="/contact">Discutons de votre projet</Button><Button href="/expertises" variant="outline">Découvrir nos expertises</Button></div></div><AnimatedHeroVisual /></div></section>
        <DNASection />
        <CredibilitySection />
        <section className="mx-auto max-w-7xl px-6 py-28"><div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><SectionHeading eyebrow="Use Cases" title="Des projets réels. Des systèmes critiques." /><Button href="/use-cases" variant="ghost">Voir tous les cas clients →</Button></div><div className="mt-16 grid gap-6 md:grid-cols-3">{landingUseCases.map((item) => <Card key={item.title}><UseCaseThumbnail type={item.visual} /><span className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">{item.tag}</span><h3 className="mb-4 font-display text-2xl font-semibold">{item.title}</h3><p className="text-sm leading-7 text-zinc-400">{item.text}</p></Card>)}</div></section>
        <section className="relative mx-auto max-w-7xl px-6 py-28"><div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_55%)]" /><div className="relative"><SectionHeading eyebrow="Expertises" title="Une expertise engineering pensée pour les systèmes critiques." description="Nous accompagnons les organisations qui doivent moderniser, industrialiser et faire évoluer des plateformes complexes avec une approche pragmatique, senior et orientée production réelle." /><div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-500"><span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">Architecture & modernisation</span><span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">AI engineering & agents</span><span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">Delivery production-grade</span><span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">Distributed systems & Web3</span></div><div className="mt-16 grid gap-8 md:grid-cols-2">{pillars.map((pillar) => <PillarCard key={pillar.title} {...pillar} />)}</div></div></section>
        <DeliveryMethod />
        <section className="relative border-y border-white/5 bg-surface"><div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_85%_70%,rgba(139,92,246,0.10),transparent_35%)]" /><div className="relative mx-auto max-w-7xl px-6 py-28"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><span className="text-sm uppercase tracking-[0.3em] text-primary">Pourquoi Teragone Factory</span><h2 className="mt-4 font-display text-5xl font-bold tracking-tight md:text-6xl">Engineering senior. Vision long terme.</h2><p className="mt-6 text-lg leading-8 text-zinc-400">Nous combinons exigence craft, AI engineering et culture production pour aider les équipes à construire mieux, plus vite et plus durablement.</p></div><div className="grid gap-4 md:grid-cols-2">{differentiators.map(([number, title, text]) => <div key={title} className="group rounded-[1.7rem] border border-white/10 bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.04]"><div className="mb-6 flex items-center justify-between"><span className="font-mono text-xs uppercase tracking-[0.24em] text-primary">{number}</span><div className="h-10 w-10 rounded-2xl bg-primary/15" /></div><h3 className="font-display text-2xl font-semibold text-white">{title}</h3><p className="mt-3 leading-7 text-zinc-400">{text}</p></div>)}</div></div></div></section>
        <ProofBar />
        <RecruitmentTeaser />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
