import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTAEn } from '@/components/sections/en/FinalCTAEn'
import { Card } from '@/components/ui/Card'
import { UseCaseCard } from '@/components/ui/UseCaseCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Use Cases',
  description: 'Teragone Factory use cases: legacy modernization, AI platforms, Web3, distributed systems and senior delivery.',
  alternates: { canonical: '/en/use-cases/', languages: { fr: '/use-cases/', en: '/en/use-cases/' } },
}

const cases = [
  {
    sector: 'Mobility & Transportation',
    pillar: 'Architecture & Delivery',
    problem: 'Critical legacy platform modernization.',
    intervention: 'Architecture and codebase audit, software debt assessment, target trajectory definition, senior squad setup, CI/CD industrialization, observability, performance improvement and progressive production hardening.',
    results: 'A more stable platform, stronger technical visibility, a clear modernization path, reduced production risk, faster delivery and the ability to evolve the system without major disruption.',
  },
  {
    sector: 'Enterprise AI',
    pillar: 'AI Engineering',
    problem: 'Industrializing AI use cases in a complex information system.',
    intervention: 'AI-ready architecture, enterprise data and knowledge structuring, RAG, LLM orchestration, agentic workflows, AI governance, security, observability, answer evaluation and progressive integration into existing processes.',
    results: 'AI capabilities durably embedded into business workflows, more controlled adoption, more reliable use cases, reduced repetitive work and a technical foundation able to support new AI initiatives at scale.',
  },
  {
    sector: 'Blockchain Infrastructure',
    pillar: 'Mithril Protocol',
    thumbnail: '/mithril-logo.png',
    problem: 'Mithril: lightweight certification and fast blockchain synchronization.',
    intervention: 'Design and development of a distributed certification protocol producing verifiable snapshots, reducing synchronization times and improving reliable access to network state without relying on heavy infrastructure.',
    results: 'Drastically reduced node bootstrap time, stronger network resilience, lightweight validation, reliable distribution of certified snapshots and a better developer and operator experience for large-scale blockchain infrastructure.',
  },
  {
    sector: 'Software Platform',
    pillar: 'Audit & Expertise',
    problem: 'Technical debt, lack of visibility and slowing delivery.',
    intervention: 'Code and architecture audit, dependency review, critical-flow analysis, engineering governance, quick-win identification, target architecture definition, roadmap prioritization and support for teams regaining control.',
    results: 'A clear and prioritized roadmap, improved maintainability, more objective technical decisions, prioritized debt, stronger governance, lower uncertainty and restored delivery capacity on the most important initiatives.',
  },
]

const themes = [
  'Legacy modernization',
  'AI-ready platforms',
  'Web3 infrastructure',
  'Software craftsmanship',
  'Observability & performance',
  'Senior delivery',
]

export default function UseCasesEN() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <div className="max-w-4xl">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">Use Cases</span>
          <h1 className="mt-4 font-display text-6xl font-bold tracking-tight">Complex projects. Concrete outcomes.</h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">We work where technical stakes are critical: modernization, AI platforms, distributed architecture, senior delivery and high-business-value systems.</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {themes.map((theme) => <span key={theme} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-400">{theme}</span>)}
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {cases.map((item) => <UseCaseCard key={item.problem} {...item} />)}
        </div>
        <section className="mt-24 grid gap-6 md:grid-cols-3">
          {[
            ['Understand', 'Clarify constraints, risks and technical leverage points before engaging delivery.'],
            ['Prioritize', 'Turn findings into a pragmatic roadmap aligned with business stakes.'],
            ['Deliver', 'Mobilize a senior team able to design, build and transfer knowledge.'],
          ].map(([title, text]) => <Card key={title}><h2 className="font-display text-2xl font-semibold">{title}</h2><p className="mt-4 leading-7 text-zinc-400">{text}</p></Card>)}
        </section>
      </main>
      <FinalCTAEn />
      <Footer />
    </>
  )
}
