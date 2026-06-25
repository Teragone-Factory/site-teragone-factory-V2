import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTAFr } from '@/components/sections/fr/FinalCTAFr'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expertises',
  description: 'Expertises senior pour plateformes AI-ready, Web3, audits d’architecture et delivery.',
  alternates: { canonical: '/fr/expertises/', languages: { fr: '/fr/expertises/', en: '/expertises/' } },
}

const expertises = [
  { title: 'Audit & Architecture', href: '/fr/expertises/audit', text: 'Évaluation technique, revue d’architecture, dette logicielle, performance, sécurité, gouvernance et trajectoire de modernisation.' },
  { title: 'Delivery & Squads seniors', href: '/fr/expertises/delivery', text: 'Équipes seniors pour concevoir, construire, industrialiser et livrer des systèmes critiques avec une forte exigence d’ingénierie.' },
  { title: 'IA & Systèmes agentiques', href: '/fr/expertises/ia-agentique', text: 'Architectures AI-ready, RAG, orchestration LLM, agents autonomes et intégration durable dans les systèmes d’information existants.' },
  { title: 'Web3 & Blockchain', href: '/fr/expertises/web3', text: 'Systèmes distribués, infrastructure blockchain, ingénierie protocolaire, validation légère, synchronisation réseau et plateformes Web3.' },
]

export default function ExpertiseFR() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Expertises</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Ingénierie senior pour systèmes critiques.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">Nous accompagnons les DSI, CTO et équipes produit sur les sujets où l’architecture, la qualité d’exécution, l’AI engineering et la robustesse des plateformes sont déterminants.</p>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {expertises.map((item) => <Card key={item.title}><h2 className="mb-4 font-display text-3xl font-semibold">{item.title}</h2><p className="mb-8 leading-7 text-zinc-400">{item.text}</p><Button href={item.href} variant="outline">Découvrir</Button></Card>)}
        </div>
      </main>
      <FinalCTAFr />
      <Footer />
    </>
  )
}
