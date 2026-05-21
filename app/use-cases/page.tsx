import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTAEn } from '@/components/sections/en/FinalCTAEn'
import { Card } from '@/components/ui/Card'
import { UseCaseCard } from '@/components/ui/UseCaseCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Use Cases',
  description: 'Teragone Factory use cases: legacy modernization, AI platforms, Web3, distributed systems and senior delivery.',
  alternates: { canonical: '/use-cases/', languages: { fr: '/fr/use-cases/', en: '/use-cases/' } },
}

const cases = [
  { sector: 'Mobility & Transportation', pillar: 'Architecture & Delivery', visual: 'legacy', problem: 'Modernizing a critical legacy platform without stopping the business.', story: 'A large mobility platform had reached a point where every evolution was becoming slower, riskier and harder to operate. The system was still delivering business value, but technical debt, limited observability and fragile delivery flows were creating growing pressure on both IT and business teams.', intervention: 'We started with an architecture and codebase audit, clarified the main risks, mapped critical flows and identified the modernization path that would create the highest impact without triggering a risky big-bang rewrite. We then supported the setup of a senior squad, CI/CD industrialization, observability improvements, performance work and progressive production hardening.', benefits: 'The platform became easier to understand, safer to operate and more predictable to evolve. Teams gained visibility, delivery risk was reduced, modernization became actionable and the organization recovered the ability to move forward without destabilizing a critical system.' },
  { sector: 'Enterprise AI', pillar: 'AI Engineering', visual: 'ai', problem: 'Turning promising AI ideas into reliable enterprise workflows.', story: 'The organization had identified valuable AI use cases, but the challenge was not the demo. The real issue was how to connect AI to existing data, business processes, governance rules and operational constraints without creating a fragile side project.', intervention: 'We designed an AI-ready architecture, structured enterprise knowledge sources, introduced RAG and LLM orchestration, defined evaluation mechanisms, addressed security and observability, and progressively integrated AI capabilities into real business workflows.', benefits: 'AI moved from experimentation to controlled adoption. Teams gained reusable technical foundations, more reliable answers, clearer governance and the ability to scale new AI initiatives without rebuilding everything from scratch each time.' },
  { sector: 'Blockchain Infrastructure', pillar: 'Mithril Protocol', visual: 'mithril', problem: 'Making blockchain synchronization lighter, faster and more reliable.', story: 'In large distributed networks, bootstrapping infrastructure can become slow, costly and operationally heavy. Nodes and services need trusted access to network state, but relying only on heavy synchronization processes limits scalability and resilience.', intervention: 'We contributed to the design and development of a distributed certification protocol producing verifiable snapshots. The goal was to reduce synchronization time, enable lightweight validation and improve access to certified network state without relying on heavy infrastructure assumptions.', benefits: 'Operators and developers benefit from faster bootstrap, lighter validation, stronger resilience and a better infrastructure experience. The network gains a more scalable way to distribute certified snapshots and support large-scale blockchain operations.' },
  { sector: 'Software Platform', pillar: 'Audit & Expertise', visual: 'audit', problem: 'Regaining control over technical debt and delivery slowdown.', story: 'A software platform had become difficult to evolve. Teams were facing unclear dependencies, limited visibility on critical flows and a growing gap between business priorities and technical execution capacity.', intervention: 'We conducted a code and architecture audit, reviewed dependencies, analyzed critical flows, identified quick wins, clarified governance issues and built a target roadmap to help teams prioritize what mattered most.', benefits: 'The organization gained a clear, prioritized and actionable view of its platform. Decisions became more objective, technical debt was no longer abstract, governance improved and delivery capacity was restored on the initiatives with the highest business impact.' },
]

const themes = ['Legacy modernization', 'AI-ready platforms', 'Web3 infrastructure', 'Software craftsmanship', 'Observability & performance', 'Senior delivery']

export default function UseCasesEN() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <div className="max-w-4xl"><span className="text-sm uppercase tracking-[0.3em] text-primary">Use Cases</span><h1 className="mt-4 font-display text-6xl font-bold tracking-tight">Complex projects. Concrete outcomes.</h1><p className="mt-6 text-lg leading-8 text-zinc-400">We work where technical stakes are critical: modernization, AI platforms, distributed architecture, senior delivery and high-business-value systems.</p></div>
        <div className="mt-10 flex flex-wrap gap-3">{themes.map((theme) => <span key={theme} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-400">{theme}</span>)}</div>
        <div className="mt-16 grid gap-6 lg:grid-cols-2">{cases.map((item) => <UseCaseCard key={item.problem} {...item} />)}</div>
        <section className="mt-24 grid gap-6 md:grid-cols-3">{[['Understand', 'Clarify constraints, risks and technical leverage points before engaging delivery.'], ['Prioritize', 'Turn findings into a pragmatic roadmap aligned with business stakes.'], ['Deliver', 'Mobilize a senior team able to design, build and transfer knowledge.']].map(([title, text]) => <Card key={title}><h2 className="font-display text-2xl font-semibold">{title}</h2><p className="mt-4 leading-7 text-zinc-400">{text}</p></Card>)}</section>
      </main>
      <FinalCTAEn />
      <Footer />
    </>
  )
}
