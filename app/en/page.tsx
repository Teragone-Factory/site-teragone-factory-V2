import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { AnimatedHeroVisual } from '@/components/sections/AnimatedHeroVisual'
import { CredibilitySection } from '@/components/sections/CredibilitySection'
import { DeliveryMethod } from '@/components/sections/DeliveryMethod'
import { DnaBlock } from '@/components/sections/DnaBlock'
import { FinalCTAEn } from '@/components/sections/en/FinalCTAEn'
import { ProofBar } from '@/components/sections/ProofBar'
import { RecruitmentTeaser } from '@/components/sections/RecruitmentTeaser'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { PillarCard } from '@/components/ui/PillarCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Senior Engineering, AI & Web3',
  description: 'Teragone Factory designs and delivers AI-ready, agent-ready and Web3 platforms for critical enterprise systems.',
  alternates: { canonical: '/en/', languages: { fr: '/', en: '/en/' } },
}

const pillars = [
  { title: 'Audit & Architecture', description: 'Technical audits, architecture reviews, software debt analysis and pragmatic modernization roadmaps for critical systems.', href: '/en/expertises/audit', visual: '🧭', proof: 'Architecture & governance', accent: 'from-blue-500/30 to-cyan-400/20' },
  { title: 'Delivery & Senior Squads', description: 'AI-enabled senior squads able to design, take over and industrialize complex platforms with a strong engineering culture.', href: '/en/expertises/delivery', visual: '⚙️', proof: 'Software craftsmanship', accent: 'from-violet-500/30 to-blue-400/20' },
  { title: 'AI & Agentic Systems', description: 'RAG, LLM orchestration, autonomous agents and AI engineering practices to build intelligent systems that can run in production.', href: '/en/expertises/ia-agentique', visual: '✦', proof: 'AI-ready systems', accent: 'from-cyan-500/30 to-emerald-400/20' },
  { title: 'Web3 & Blockchain', description: 'Protocol engineering, distributed infrastructure, Web3 platforms and the convergence of AI, agents and decentralized systems.', href: '/en/expertises/web3', visual: '◈', proof: 'Distributed systems', accent: 'from-fuchsia-500/30 to-violet-400/20' },
]

const differentiators = [
  ['01', 'Senior expertise', 'Experienced engineers and architects for critical technical challenges and fast, sound decision-making.'],
  ['02', 'AI inside', 'AI engineering is embedded into development practices, architecture work and delivery workflows.'],
  ['03', 'Long-term thinking', 'Architecture choices designed for maintainability, governance, operability and platform evolution.'],
  ['04', 'Production focus', 'A simple obsession: deliver reliable, observable and production-ready systems.'],
  ['05', 'Craft quality', 'High software quality standards across tests, documentation, maintainability and knowledge transfer.'],
]

const landingUseCases = [
  { tag: 'Mobility & Transportation', title: 'High-criticality modernization and delivery.', text: 'Architecture audits, senior squads and production rollout on complex environments.', visual: 'legacy' },
  { tag: 'Enterprise AI Platform', title: 'Industrializing AI use cases in a complex information system.', text: 'RAG, LLM orchestration, governance and durable integration into business workflows.', visual: 'ai' },
  { tag: 'Mithril protocol', title: 'Lightweight blockchain certification and synchronization.', text: 'Certified snapshots, lightweight validation and fast bootstrap for distributed infrastructure.', visual: 'mithril' },
]

function UseCaseThumbnail({ type }: { type: string }) {
  if (type === 'mithril') return <div className="mb-6 flex h-28 items-center justify-center rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#101827] to-[#0B1020] p-5"><div className="text-center"><div className="mx-auto mb-3 h-10 w-10 rounded-xl border border-blue-400/25 bg-blue-400/10" /><p className="font-mono text-xs uppercase tracking-[0.32em] text-blue-300">Mithril Protocol</p></div></div>
  if (type === 'ai') return <div className="mb-6 flex h-28 items-center justify-center rounded-2xl border border-cyan-400/15 bg-gradient-to-br from-[#0D1725] to-[#111827] p-5"><div className="grid w-full max-w-[240px] grid-cols-[1fr_auto_1fr] items-center gap-3"><div className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 px-4 py-3 text-center"><div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-200">Data</div><div className="mt-1 text-xs text-zinc-300">knowledge</div></div><div className="h-px w-8 bg-cyan-300/40" /><div className="rounded-2xl border border-blue-400/25 bg-blue-400/10 px-4 py-3 text-center"><div className="font-mono text-[10px] uppercase tracking-[0.22em] text-blue-200">AI</div><div className="mt-1 text-xs text-zinc-300">workflow</div></div><div className="col-span-3 mx-auto mt-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400">governed integration</div></div></div>
  return <div className="mb-6 flex h-28 items-center justify-center rounded-2xl border border-blue-400/15 bg-gradient-to-br from-[#0E1726] to-[#111827] p-5"><div className="grid w-full max-w-[250px] grid-cols-[1fr_auto_1fr] items-center gap-3"><div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3"><div className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400">Before</div><div className="space-y-2"><div className="h-2 w-16 rounded-full bg-zinc-500/35" /><div className="h-2 w-20 rounded-full bg-zinc-500/25" /><div className="h-2 w-12 rounded-full bg-zinc-500/25" /></div></div><div className="font-mono text-lg text-blue-300">→</div><div className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-3"><div className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-blue-300">After</div><div className="space-y-2"><div className="h-2 w-20 rounded-full bg-blue-300/50" /><div className="h-2 w-16 rounded-full bg-cyan-300/40" /><div className="h-2 w-14 rounded-full bg-white/30" /></div></div></div></div>
}

export default function EnglishHomePage() {
  return (
    <><NavBar /><main className="overflow-hidden bg-background text-white">
      <section className="relative border-b border-white/5"><div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_36%)]" /><div className="relative mx-auto grid max-w-7xl gap-20 px-6 py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div><div className="mb-8 flex flex-wrap gap-3"><Badge label="AI Engineering" /><Badge label="Web3" /><Badge label="Software Craftsmanship" /><Badge label="Distributed Systems" /></div><h1 className="max-w-5xl font-display text-6xl font-bold leading-[1.02] tracking-tight md:text-8xl">AI-ready & agent-ready engineering.</h1><p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">Teragone Factory designs and delivers critical, modern and durable software systems with senior teams specialized in AI, software craftsmanship, distributed platforms and complex architectures.</p><div className="mt-10 flex flex-wrap gap-4"><Button href="/en/contact">Discuss your project</Button><Button href="/en/expertises" variant="outline">Explore our expertise</Button></div></div><AnimatedHeroVisual /></div></section>
      <DnaBlock />
      <CredibilitySection />
      <section className="mx-auto max-w-7xl px-6 py-28"><div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><SectionHeading eyebrow="Use Cases" title="Real projects. Critical systems." /><Button href="/en/use-cases" variant="ghost">View use cases →</Button></div><div className="mt-16 grid gap-6 md:grid-cols-3">{landingUseCases.map((item) => <Card key={item.title}><UseCaseThumbnail type={item.visual} /><span className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">{item.tag}</span><h3 className="mb-4 font-display text-2xl font-semibold">{item.title}</h3><p className="text-sm leading-7 text-zinc-400">{item.text}</p></Card>)}</div></section>
      <section className="relative mx-auto max-w-7xl px-6 py-28"><div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_55%)]" /><div className="relative"><SectionHeading eyebrow="Expertise" title="Engineering expertise designed for critical systems." description="We help organizations modernize, industrialize and evolve complex platforms with a pragmatic, senior and production-first approach." /><div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-500"><span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">Architecture & modernization</span><span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">AI engineering & agents</span><span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">Production-grade delivery</span><span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">Distributed systems & Web3</span></div><div className="mt-16 grid gap-8 md:grid-cols-2">{pillars.map((pillar) => <PillarCard key={pillar.title} {...pillar} />)}</div></div></section>
      <DeliveryMethod />
      <section className="relative border-y border-white/5 bg-surface"><div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_85%_70%,rgba(139,92,246,0.10),transparent_35%)]" /><div className="relative mx-auto max-w-7xl px-6 py-28"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><span className="text-sm uppercase tracking-[0.3em] text-primary">Why Teragone Factory</span><h2 className="mt-4 font-display text-5xl font-bold tracking-tight md:text-6xl">Senior engineering. Long-term vision.</h2><p className="mt-6 text-lg leading-8 text-zinc-400">We combine craft excellence, AI engineering and production culture to help teams build better, faster and more sustainably.</p></div><div className="grid gap-4 md:grid-cols-2">{differentiators.map(([number, title, text]) => <div key={title} className="group rounded-[1.7rem] border border-white/10 bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.04]"><div className="mb-6 flex items-center justify-between"><span className="font-mono text-xs uppercase tracking-[0.24em] text-primary">{number}</span><div className="h-10 w-10 rounded-2xl bg-primary/15" /></div><h3 className="font-display text-2xl font-semibold text-white">{title}</h3><p className="mt-3 leading-7 text-zinc-400">{text}</p></div>)}</div></div></div></section>
      <ProofBar />
      <RecruitmentTeaser /><FinalCTAEn />
    </main><Footer /></>
  )
}
