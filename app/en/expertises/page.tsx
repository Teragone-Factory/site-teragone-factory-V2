import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Card } from '@/components/ui/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expertise',
  description: 'Senior engineering expertise for AI-ready platforms, Web3 systems, architecture audits and production-grade delivery.',
  alternates: { canonical: '/en/expertises/', languages: { fr: '/expertises/', en: '/en/expertises/' } },
}

const items = [
  ['Architecture Audits', 'Technical due diligence, legacy modernization, performance, cloud readiness and governance for critical platforms.'],
  ['Senior Delivery Squads', 'Distributed senior engineering teams able to design, build and ship production-grade systems with strong ownership.'],
  ['AI & Agentic Systems', 'Enterprise AI platforms, RAG, agent workflows, MCP-oriented architectures and AI-ready information systems.'],
  ['Web3 & Blockchain', 'Distributed systems, blockchain infrastructure, lightweight validation, protocol engineering and Web3 platform architecture.'],
]

export default function ExpertiseEN() {
  return <><NavBar /><main className="mx-auto max-w-7xl px-6 py-24 text-white"><span className="text-sm uppercase tracking-[0.3em] text-primary">Expertise</span><h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Senior engineering for global critical systems.</h1><p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">We help technology leaders turn complex software, AI and distributed systems challenges into robust, maintainable and scalable production platforms.</p><div className="mt-16 grid gap-6 md:grid-cols-2">{items.map(([title,text])=><Card key={title}><h2 className="font-display text-3xl font-semibold">{title}</h2><p className="mt-5 leading-7 text-zinc-400">{text}</p></Card>)}</div></main><FinalCTA /><Footer /></>
}
