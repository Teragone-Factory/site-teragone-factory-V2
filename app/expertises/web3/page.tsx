import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { Button } from '@/components/ui/Button'
import { ExpertiseDetailCard } from '@/components/ui/ExpertiseDetailCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web3 & Blockchain Engineering',
  description: 'Systemes distribues, infrastructure blockchain, ingenierie protocolaire, plateformes Web3, gaming et integrations agents IA.',
  alternates: { canonical: '/expertises/web3/', languages: { fr: '/expertises/web3/', en: '/en/expertises/web3/' } },
}

const sections = [
  { title: 'Protocol Engineering', expertise: 'Nous concevons des protocoles distribues, systemes de validation legere, couches de synchronisation reseau, architectures orientees consensus, gouvernance technique et engineering blockchain production-grade pour environnements critiques.', actions: ['Conception et modernisation de protocoles blockchain et middlewares distribues', 'Architecture de systemes de certification, snapshots et validation legere', 'Optimisation performance, synchronisation reseau et resilience infrastructure', 'Audits architecture et support engineering long terme'] },
  { title: 'Infrastructure distribuee', expertise: 'Nous apportons une experience forte en infrastructure distribuee, blockchain DevOps, observabilite, deploiement multi-region, operations de noeuds critiques et plateformes hautement resilientes.', actions: ['Industrialisation et exploitation infrastructures blockchain critiques', 'Monitoring, automatisation, securite et gouvernance operationnelle', 'Deploiement cloud, Kubernetes et architectures distribuees haute disponibilite', 'RUN, amelioration fiabilite et optimisation couts operationnels'] },
  { title: 'Plateformes Web3', expertise: 'Nous concevons des plateformes Web3 orientees produit, wallets, APIs blockchain, plateformes de gouvernance, applications decentralisees et services connectes a l infrastructure on-chain.', actions: ['Developpement plateformes Web3 et applications decentralisees', 'Integration wallets, smart contracts, identite et services on-chain', 'Architecture backend, APIs et workflows metier connectes blockchain', 'Support produit, alignement UX et industrialisation delivery'] },
  { title: 'Gaming & economies interactives', expertise: 'Nous concevons des plateformes gaming Web3, economies numeriques, modeles de propriete assets, logiques multi-agents et infrastructures temps reel pour experiences interactives decentralisees.', actions: ['Plateformes gaming connectees infrastructures blockchain', 'Assets numeriques, identite, economies virtuelles et systemes de recompense', 'Architecture backend scalable pour interactions temps reel et multijoueur', 'Integration IA et agents autonomes dans experiences interactives'] },
  { title: 'IA, systemes agentiques & Web3', expertise: 'Nous concevons des architectures ou IA, agents autonomes et infrastructures blockchain travaillent ensemble pour creer des systemes actionnables, verifiables et distribues.', actions: ['Orchestration agents IA connectee services et protocoles Web3', 'Systemes AI-ready et agent-ready securises et observables', 'Workflows autonomes avec validation et execution on-chain', 'Plateformes hybrides combinant IA, APIs metier et infrastructure blockchain'] },
]

export default function Web3FR() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Web3 & Blockchain</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Systemes distribues & blockchain engineering.</h1>
        <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-400">Protocoles distribues, infrastructure blockchain, synchronisation reseau, validation legere, plateformes Web3, architectures decentralisees et systemes hybrides combinant IA, agents autonomes et execution on-chain.</p>
        <div className="mt-16 grid gap-8 md:grid-cols-2">{sections.map((section) => <ExpertiseDetailCard key={section.title} {...section} />)}</div>
        <div className="mt-14"><Button href="/contact">Discuter Web3 & infrastructure</Button></div>
      </main>
      <Footer />
    </>
  )
}
