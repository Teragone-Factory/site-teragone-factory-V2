import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTAFr } from '@/components/sections/fr/FinalCTAFr'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expertises',
  description: 'Expertises senior pour plateformes AI-ready, Web3, audits architecture et delivery.',
  alternates: { canonical: '/expertises/', languages: { fr: '/expertises/', en: '/en/expertises/' } },
}

const expertises = [
  { title: 'Audit & Architecture', href: '/expertises/audit', text: 'Evaluation technique, revue architecture, dette technique, performance, securite, gouvernance, roadmap de modernisation et architecture cible pour plateformes critiques.' },
  { title: 'Delivery & Squads seniors', href: '/expertises/delivery', text: 'Squads seniors et AI-ready pour concevoir, construire, industrialiser et livrer des systemes critiques avec une forte culture craft, IA engineering et production.' },
  { title: 'IA & Systemes agentiques', href: '/expertises/ia-agentique', text: 'Architectures AI-ready, RAG, orchestration LLM, agents autonomes, automatisation et integration enterprise-grade dans les systemes information existants.' },
  { title: 'Web3 & Blockchain', href: '/expertises/web3', text: 'Systemes distribues, infrastructure blockchain, ingenierie protocolaire, validation legere, synchronisation reseau, gaming, agents IA et plateformes Web3.' },
]

export default function ExpertiseFR() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Expertises</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Ingenierie senior pour systemes critiques.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">Nous accompagnons les DSI, CTO et equipes produit sur les sujets ou la qualite architecture, la vitesse de delivery, l IA engineering et la robustesse long terme sont critiques.</p>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {expertises.map((item) => <Card key={item.title}><h2 className="mb-4 font-display text-3xl font-semibold">{item.title}</h2><p className="mb-8 leading-7 text-zinc-400">{item.text}</p><Button href={item.href} variant="outline">Decouvrir</Button></Card>)}
        </div>
      </main>
      <FinalCTAFr />
      <Footer />
    </>
  )
}
