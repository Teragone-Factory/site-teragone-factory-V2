import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { Button } from '@/components/ui/Button'
import { ExpertiseDetailCard } from '@/components/ui/ExpertiseDetailCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web3 & Blockchain Engineering',
  description: 'Distributed systems, blockchain infrastructure, protocol engineering, Web3 platforms, gaming and AI agent integrations.',
  alternates: { canonical: '/en/expertises/web3/', languages: { fr: '/expertises/web3/', en: '/en/expertises/web3/' } },
}

const sections = [
  {
    title: 'Protocol Engineering',
    expertise: 'We design distributed protocols, lightweight validation systems, network synchronization layers, consensus-oriented architectures, technical governance and production-grade blockchain engineering for critical international environments.',
    actions: ['Design and modernization of blockchain protocols and distributed middleware', 'Architecture for certification systems, snapshots and lightweight validation', 'Performance optimization, network synchronization and infrastructure resilience', 'Architecture audits and long-term engineering support'],
  },
  {
    title: 'Distributed Infrastructure',
    expertise: 'We bring deep experience in distributed infrastructure, blockchain DevOps, observability, multi-region deployment, critical node operations and highly resilient platforms.',
    actions: ['Industrialization and operation of critical blockchain infrastructures', 'Monitoring, automation, security and operational governance', 'Cloud deployment, Kubernetes and high-availability distributed architectures', 'RUN, reliability improvement and operating-cost optimization'],
  },
  {
    title: 'Web3 Platforms',
    expertise: 'We design product-oriented Web3 platforms, wallets, blockchain APIs, governance platforms, decentralized applications and services connected to on-chain infrastructure.',
    actions: ['Development of Web3 platforms and decentralized applications', 'Wallet, smart contract, identity and on-chain service integration', 'Backend architecture, APIs and business workflows connected to blockchain systems', 'Product support, UX alignment and delivery industrialization'],
  },
  {
    title: 'Gaming & Interactive Economies',
    expertise: 'We design Web3 gaming platforms, digital economies, asset ownership models, multi-agent logic and real-time infrastructure for decentralized interactive experiences.',
    actions: ['Gaming platforms connected to blockchain infrastructures', 'Digital assets, identity, virtual economies and reward systems', 'Scalable backend architecture for real-time and multiplayer interactions', 'AI and autonomous agent integration into interactive experiences'],
  },
  {
    title: 'AI, Agentic Systems & Web3',
    expertise: 'We design architectures where AI, autonomous agents and blockchain infrastructures work together to create actionable, verifiable and distributed systems.',
    actions: ['AI agent orchestration connected to Web3 services and protocols', 'Secure and observable AI-ready and agent-ready systems', 'Autonomous workflows with on-chain validation and execution', 'Hybrid platforms combining AI, business APIs and blockchain infrastructure'],
  },
]

export default function Web3EN() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Web3 & Blockchain</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Distributed systems & blockchain engineering.</h1>
        <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-400">Distributed protocols, blockchain infrastructure, network synchronization, lightweight validation, Web3 platforms, decentralized architectures and hybrid systems combining AI, autonomous agents and on-chain execution.</p>
        <div className="mt-16 grid gap-8 md:grid-cols-2">{sections.map((section) => <ExpertiseDetailCard key={section.title} {...section} />)}</div>
        <div className="mt-14"><Button href="/en/contact">Discuss Web3 & infrastructure</Button></div>
      </main>
      <Footer />
    </>
  )
}
