import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { Button } from '@/components/ui/Button'
import { ExpertiseDetailCard } from '@/components/ui/ExpertiseDetailCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delivery & Senior Squads',
  description: 'Production-grade delivery with senior AI-ready engineering squads.',
  alternates: { canonical: '/en/expertises/delivery/', languages: { fr: '/expertises/delivery/', en: '/en/expertises/delivery/' } },
}

const sections = [
  {
    title: 'Scoping & architecture',
    expertise: 'We intervene from the earliest phases to structure technical, business and organizational challenges in order to build a realistic and durable delivery trajectory.',
    actions: ['Target architecture and technical arbitrations', 'Delivery organization, product governance and staffing strategy', 'Platform, API, services and domain-driven decomposition', 'Roadmap, backlog and production trajectory preparation'],
  },
  {
    title: 'Production-grade build',
    expertise: 'Our senior squads design and build modern systems with strong engineering standards, software quality, AI engineering practices and long-term maintainability.',
    actions: ['Critical platform and complex system development', 'AI-assisted engineering, industrialized CI/CD, cloud, DevOps and observability', 'Software craftsmanship, testing, maintainability and code quality', 'Incremental delivery with strong business and product alignment'],
  },
  {
    title: 'Recovery & stabilization',
    expertise: 'We know how to take over existing projects, reduce risks, restore confidence and bring platforms back into a state where they can deliver quickly again.',
    actions: ['Codebase analysis and technical history recovery', 'Performance, debt and production stability issue resolution', 'Time-to-delivery reduction and release stabilization', 'Architecture governance and engineering control recovery'],
  },
  {
    title: 'Knowledge transfer & governance',
    expertise: 'We favor delivery models where client teams progressively gain autonomy and keep long-term control over their platforms.',
    actions: ['Team mentoring, pair programming and engineering practice transfer', 'Engineering standards, AI engineering workflows and delivery governance', 'Architecture, governance and operational documentation', 'Support for CTOs, CIOs and engineering leaders'],
  },
]

export default function DeliveryEN() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Delivery & Senior Squads</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Senior engineering squads for critical systems.</h1>
        <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-400">We mobilize senior squads able to recover, design, industrialize and deliver critical platforms with strong engineering culture, AI engineering practices and production standards.</p>
        <div className="mt-16 grid gap-8 md:grid-cols-2">{sections.map((section) => <ExpertiseDetailCard key={section.title} {...section} />)}</div>
        <div className="mt-14"><Button href="/en/contact">Discuss your project</Button></div>
      </main>
      <Footer />
    </>
  )
}
