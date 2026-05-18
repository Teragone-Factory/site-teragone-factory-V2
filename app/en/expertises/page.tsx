import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTAEn } from '@/components/sections/en/FinalCTAEn'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expertise',
  description: 'Senior engineering expertise for AI-ready platforms, Web3 systems, architecture audits and production-grade delivery.',
  alternates: { canonical: '/en/expertises/', languages: { fr: '/expertises/', en: '/en/expertises/' } },
}

const expertises = [
  {
    title: 'Audit & Architecture',
    href: '/en/expertises/audit',
    text: 'Technical assessment, architecture review, technical debt, performance, security, governance, modernization roadmap and target architecture for critical platforms.',
  },
  {
    title: 'Delivery & Senior Squads',
    href: '/en/expertises/delivery',
    text: 'Senior AI-ready engineering squads to design, build, industrialize and ship critical systems with strong software craftsmanship, AI engineering and production standards.',
  },
  {
    title: 'AI & Agentic Systems',
    href: '/en/expertises/ia-agentique',
    text: 'AI-ready architectures, RAG, LLM orchestration, autonomous agents, automation and enterprise-grade integration into existing information systems.',
  },
  {
    title: 'Web3 & Blockchain',
    href: '/en/expertises/web3',
    text: 'Distributed systems, blockchain infrastructure, protocol engineering, lightweight validation, network synchronization, gaming, AI agents and Web3 platforms.',
  },
]

export default function ExpertiseEN() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Expertise</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Senior engineering for critical systems.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">We support CIOs, CTOs and product teams on topics where architecture quality, delivery speed, AI engineering and long-term robustness are critical.</p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {expertises.map((item) => (
            <Card key={item.title}>
              <h2 className="mb-4 font-display text-3xl font-semibold">{item.title}</h2>
              <p className="mb-8 leading-7 text-zinc-400">{item.text}</p>
              <Button href={item.href} variant="outline">Discover</Button>
            </Card>
          ))}
        </div>
      </main>
      <FinalCTAEn />
      <Footer />
    </>
  )
}
