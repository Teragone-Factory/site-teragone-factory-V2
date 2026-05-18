import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { Button } from '@/components/ui/Button'
import { ExpertiseDetailCard } from '@/components/ui/ExpertiseDetailCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI & Agentic Systems',
  description: 'Enterprise AI engineering, RAG systems, autonomous agents and AI-ready architectures.',
  alternates: { canonical: '/en/expertises/ia-agentique/', languages: { fr: '/expertises/ia-agentique/', en: '/en/expertises/ia-agentique/' } },
}

const sections = [
  {
    title: 'RAG & knowledge systems',
    expertise: 'We design robust, observable and production-oriented architectures capable of exploiting enterprise knowledge at scale.',
    actions: ['RAG architecture, indexing pipelines and vector databases', 'Document processing, retrieval strategies and knowledge governance', 'LLM evaluation, observability and hallucination reduction', 'Secure integration with enterprise data and business systems'],
  },
  {
    title: 'Agentic workflows',
    expertise: 'We build autonomous workflows able to reason, orchestrate tools, automate actions and interact with complex information systems.',
    actions: ['Multi-agent architectures and orchestration layers', 'Tool calling, APIs, MCP-oriented systems and workflow automation', 'Human-in-the-loop validation and operational governance', 'Production-grade observability, monitoring and execution control'],
  },
  {
    title: 'AI platform engineering',
    expertise: 'We help organizations structure sustainable AI platforms that can evolve, scale and remain maintainable over time.',
    actions: ['AI-ready architecture and enterprise integration', 'LLMOps, deployment, observability and cost optimization', 'Security, governance and AI engineering best practices', 'Scalable AI platform foundations for enterprise environments'],
  },
  {
    title: 'AI, agents & Web3',
    expertise: 'We explore the convergence between AI systems, autonomous agents and decentralized infrastructures to create verifiable and distributed execution models.',
    actions: ['AI agents interacting with smart contracts and blockchain systems', 'Trusted execution, identity, signatures and distributed verification', 'AI-ready decentralized coordination architectures', 'Distributed systems engineering for next-generation AI-native platforms'],
  },
]

export default function AIEN() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">AI Engineering</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">AI-ready & agent-ready systems.</h1>
        <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-400">We design architectures capable of sustainably integrating AI usages, autonomous agents, RAG systems, LLM orchestration and advanced automation into complex enterprise environments.</p>
        <div className="mt-16 grid gap-8 md:grid-cols-2">{sections.map((section) => <ExpertiseDetailCard key={section.title} {...section} />)}</div>
        <div className="mt-14"><Button href="/en/contact">Build an AI platform</Button></div>
      </main>
      <Footer />
    </>
  )
}
