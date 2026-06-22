import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { Button } from '@/components/ui/Button'
import { ExpertiseDetailCard } from '@/components/ui/ExpertiseDetailCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delivery & AI-ready Senior Squads',
  description: 'Senior squads combining AI engineering, software craftsmanship, architecture, DevOps and production-grade delivery.',
  alternates: { canonical: '/expertises/delivery/', languages: { fr: '/fr/expertises/delivery/', en: '/expertises/delivery/' } },
}

const sections = [
  {
    title: 'Scoping & AI-ready architecture',
    expertise: 'We structure technical, business and organizational challenges from the start by embedding AI engineering practices: AI-ready architecture, software debt, automation, AI governance and a realistic delivery trajectory.',
    actions: ['Target architecture combining cloud, data, AI, agents and business services', 'Delivery organization, product governance and staffing strategy with AI engineering profiles', 'Platform, API, service, domain and data-flow decomposition that can be leveraged by AI', 'Roadmap, backlog, production trajectory and actionable AI use-case preparation'],
  },
  {
    title: 'Production-grade build augmented by AI',
    expertise: 'Our senior squads build modern systems by combining software craftsmanship, AI engineering and augmented development practices: assisted coding, tests, documentation, refactoring, code analysis and automation of repetitive work.',
    actions: ['Critical platform development with controlled use of AI across the delivery lifecycle', 'AI-assisted coding, test generation, living documentation and accelerated refactoring', 'CI/CD, cloud, DevOps, observability and automated quality controls', 'Software craftsmanship, code review, clean architecture and long-term maintainability'],
  },
  {
    title: 'Senior squads & AI engineering practices',
    expertise: 'We assemble squads able to deliver fast without sacrificing quality: tech leads, software engineers, AI engineers, DevOps, architects and product profiles work with shared practices around AI, agents and industrialization.',
    actions: ['Squad composition combining software engineering, architecture, AI, DevOps and product skills', 'Shared AI engineering practices: prompting, review, validation, security and traceability', 'AI used to accelerate analysis, design, testing, documentation and delivery support', 'Governance to avoid black-box effects and preserve technical mastery'],
  },
  {
    title: 'Recovery, stabilization & accelerated modernization',
    expertise: 'We know how to take over existing projects and use AI as a leverage point for analysis and acceleration: codebase understanding, documentation, debt detection, test generation and modernization prioritization.',
    actions: ['AI-assisted codebase, dependency, technical history and risk-area analysis', 'Resolution of performance, debt, production stability and test coverage issues', 'Reduced time-to-delivery through AI tooling without degrading software quality', 'Architecture control, engineering governance and modernization trajectory recovery'],
  },
  {
    title: 'Knowledge transfer, governance & AI adoption',
    expertise: 'We do not only deliver code: we help internal teams adopt durable, secure AI engineering practices compatible with production constraints.',
    actions: ['Team mentoring, pair programming, technical reviews and AI practice transfer', 'AI engineering, software craftsmanship and delivery workflow standards', 'Architecture documentation, AI usage rules, governance, security and operations', 'Support for CTOs, CIOs and engineering leaders adopting AI in delivery'],
  },
]

export default function DeliveryEN() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Delivery Engineering · AI Engineering</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">AI-augmented senior squads for critical systems.</h1>
        <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-400">We mobilize senior squads combining software craftsmanship, architecture, DevOps and AI engineering to recover, design, industrialize and operate critical systems with more speed, quality and control.</p>
        <div className="mt-16 grid gap-8 md:grid-cols-2">{sections.map((section) => <ExpertiseDetailCard key={section.title} {...section} />)}</div>
        <div className="mt-14"><Button href="/contact">Discuss your AI-ready squad</Button></div>
      </main>
      <Footer />
    </>
  )
}
