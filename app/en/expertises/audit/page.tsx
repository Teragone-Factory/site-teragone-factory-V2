import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { Button } from '@/components/ui/Button'
import { ExpertiseDetailCard } from '@/components/ui/ExpertiseDetailCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Audit & Architecture',
  description: 'Architecture audits, technical debt, performance, security, governance and legacy modernization.',
  alternates: { canonical: '/expertises/audit/', languages: { fr: '/fr/expertises/audit/', en: '/expertises/audit/' } },
}

const sections = [
  {
    title: 'Architecture audit & technical debt',
    expertise: 'We analyze existing architectures, code, flows, dependencies, technical debt and risks that slow down maintainability, performance or delivery capacity.',
    actions: ['Application, technical and functional mapping', 'Codebase, dependencies, quality, complexity and debt analysis', 'Identification of architecture, security, performance and scalability risks', 'Remediation roadmap prioritized by business impact and effort'],
  },
  {
    title: 'Legacy modernization',
    expertise: 'We help organizations modernize critical systems without rebuilding everything from scratch when it is not necessary, with a progressive, controlled and value-driven trajectory.',
    actions: ['Monolith decomposition, modularization and migration strategy', 'Target architecture definition: cloud-ready, AI-ready and maintainable', 'Arbitration between rebuild, takeover, service extraction and incremental improvement', 'Support for internal teams throughout the technical transition'],
  },
  {
    title: 'Performance, security & production readiness',
    expertise: 'We assess the real ability of a system to handle load, be observed, secured, operated and released into production under the right conditions.',
    actions: ['Performance analysis, monitoring, logs, alerting and observability', 'Application security, dependencies, secrets, CI/CD and DevSecOps practice review', 'Infrastructure, cloud, cost and resilience recommendations', 'Industrialization plan to secure production releases'],
  },
  {
    title: 'Engineering governance',
    expertise: 'A useful audit does not only produce a report. It helps teams decide, prioritize and regain control over delivery and architecture.',
    actions: ['Clear restitution for CIOs, CTOs, business stakeholders and technical teams', 'Risk / impact / quick wins / structural initiatives matrix', 'Definition of engineering standards and governance practices', 'Operational action plan executable by your teams or our senior squads'],
  },
]

export default function AuditEN() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Audit & Architecture</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Understand, prioritize and secure your critical systems.</h1>
        <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-400">We deliver action-oriented technical audits covering architecture, technical debt, performance, security, governance, legacy modernization and delivery trajectory.</p>
        <div className="mt-16 grid gap-8 md:grid-cols-2">{sections.map((section) => <ExpertiseDetailCard key={section.title} {...section} />)}</div>
        <div className="mt-14"><Button href="/en/contact">Start an audit</Button></div>
      </main>
      <Footer />
    </>
  )
}
