import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { Button } from '@/components/ui/Button'
import { ExpertiseDetailCard } from '@/components/ui/ExpertiseDetailCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web3 & Blockchain Engineering',
  description: 'Distributed systems, blockchain infrastructure, protocol engineering and Web3 platform delivery.',
  alternates: { canonical: '/en/expertises/web3/', languages: { fr: '/expertises/web3/', en: '/en/expertises/web3/' } },
}

const sections = [
  {
    title: 'Protocol engineering',
    expertise: 'We work on complex blockchain protocols, distributed validation systems, synchronization layers and scalable decentralized architectures.',
    actions: ['Protocol architecture and distributed systems engineering', 'Lightweight validation, distributed certification and synchronization systems', 'Network optimization, node communication and observability', 'Support for protocol teams, ecosystem contributors and governance initiatives'],
  },
  {
    title: 'Distributed infrastructure',
    expertise: 'We build and operate resilient distributed infrastructures designed for performance, scalability, observability and production reliability.',
    actions: ['Cloud and hybrid infrastructure for blockchain ecosystems', 'Node operations, monitoring, deployment automation and DevOps', 'Production reliability, scaling and distributed architecture governance', 'Security, resilience and operational best practices'],
  },
  {
    title: 'Web3 platforms',
    expertise: 'We design production-grade Web3 platforms integrating wallets, APIs, smart contracts, backend services and enterprise systems.',
    actions: ['Web3 application architecture and backend engineering', 'Smart contract integration and distributed workflows', 'API, identity, authentication and trusted execution flows', 'Business-oriented Web3 platforms with maintainable architecture'],
  },
  {
    title: 'Gaming & decentralized experiences',
    expertise: 'We help design gaming and interactive decentralized systems where scalability, real-time execution and digital ownership are critical.',
    actions: ['Gaming backends and distributed architectures', 'On-chain assets, ownership systems and player interactions', 'Scalable infrastructure for interactive decentralized applications', 'Bridging traditional gaming systems with Web3 ecosystems'],
  },
  {
    title: 'AI, agentic systems & Web3',
    expertise: 'We explore how AI systems, autonomous agents and blockchain infrastructures converge into verifiable, decentralized and AI-native execution layers.',
    actions: ['AI agents connected to decentralized systems and smart contracts', 'Trusted execution, signatures, identity and distributed state verification', 'AI-ready decentralized coordination architectures', 'Distributed systems engineering for AI-native infrastructures'],
  },
]

export default function Web3EN() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Web3 & Blockchain</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Distributed systems & blockchain engineering.</h1>
        <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-400">Distributed protocols, blockchain infrastructure, network synchronization, lightweight validation, decentralized architectures and production-grade Web3 platforms.</p>
        <div className="mt-16 grid gap-8 md:grid-cols-2">{sections.map((section) => <ExpertiseDetailCard key={section.title} {...section} />)}</div>
        <div className="mt-14"><Button href="/en/contact">Discuss Web3 & infrastructure</Button></div>
      </main>
      <Footer />
    </>
  )
}
