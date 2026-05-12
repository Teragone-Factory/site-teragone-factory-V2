import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTA } from '@/components/sections/FinalCTA'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI & Agentic Systems',
  description: 'Enterprise AI engineering, agentic workflows and AI-ready architectures.',
  alternates: { canonical: '/en/expertises/ia-agentique/', languages: { fr: '/expertises/ia-agentique/', en: '/en/expertises/ia-agentique/' } },
}

export default function AIEN() {
  return <><NavBar /><main className="mx-auto max-w-6xl px-6 py-24 text-white"><span className="text-sm uppercase tracking-[0.3em] text-primary">AI Engineering</span><h1 className="mt-4 font-display text-6xl font-bold tracking-tight">AI-ready and agent-ready enterprise systems.</h1><p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">We design scalable AI architectures integrating RAG systems, orchestration layers, agentic workflows and production-grade observability.</p></main><FinalCTA /><Footer /></>
}
