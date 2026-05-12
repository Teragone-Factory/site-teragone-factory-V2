import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { UseCaseCard } from '@/components/ui/UseCaseCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Use Cases',
  description: 'Enterprise modernization, AI platform engineering and Web3 infrastructure delivery use cases.',
  alternates: { canonical: '/en/use-cases/', languages: { fr: '/use-cases/', en: '/en/use-cases/' } },
}

const cases = [
  {
    sector: 'Mobility & Transportation',
    pillar: 'Architecture & Delivery',
    problem: 'Critical legacy platform modernization.',
    intervention: 'Architecture redesign, senior squads, CI/CD industrialization and production hardening.',
    results: 'Improved scalability, faster delivery cycles and reduced technical debt.',
  },
  {
    sector: 'Enterprise AI',
    pillar: 'AI Engineering',
    problem: 'Production-grade AI integration within complex information systems.',
    intervention: 'RAG pipelines, LLM orchestration, governance and AI-ready architecture design.',
    results: 'Sustainable AI capabilities embedded into enterprise workflows.',
  },
  {
    sector: 'Blockchain Infrastructure',
    pillar: 'Web3 & Distributed Systems',
    problem: 'Blockchain synchronization and distributed validation optimization.',
    intervention: 'Lightweight validation, certified snapshots and network optimization engineering.',
    results: 'Reduced infrastructure overhead and improved synchronization performance.',
  },
]

export default function UseCasesEN() {
  return <><NavBar /><main className="mx-auto max-w-7xl px-6 py-24 text-white"><div className="max-w-4xl"><span className="text-sm uppercase tracking-[0.3em] text-primary">Use Cases</span><h1 className="mt-4 font-display text-6xl font-bold tracking-tight">Complex systems. Real-world outcomes.</h1><p className="mt-6 text-lg leading-8 text-zinc-400">Production-grade delivery across AI, distributed systems, modernization and enterprise software platforms.</p></div><div className="mt-16 grid gap-6 lg:grid-cols-2">{cases.map((item)=><UseCaseCard key={item.problem} {...item} />)}</div></main><FinalCTA /><Footer /></>
}
