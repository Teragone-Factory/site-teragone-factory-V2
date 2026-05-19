import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expertises',
  description: 'Audit, architecture, delivery senior, AI Engineering, Web3 et systèmes distribués pour environnements critiques.',
}

const expertises = [
  {
    title: 'Audit & Architecture',
    href: '/expertises/audit',
    text: 'Diagnostic technique, dette logicielle, performance, sécurité, gouvernance, trajectoire de modernisation et architecture cible pour plateformes critiques.',
  },
  {
    title: 'Delivery & Squads Seniors',
    href: '/expertises/delivery',
    text: 'Squads seniors AI-ready pour concevoir, développer, industrialiser et mettre en production des systèmes critiques avec une forte exigence engineering.',
  },
  {
    title: 'IA & Systèmes Agentiques',
    href: '/expertises/ia-agentique',
    text: 'Architectures AI-ready, RAG, orchestration LLM, agents autonomes, automatisation maîtrisée et intégration IA dans les systèmes existants.',
  },
  {
    title: 'Web3 & Blockchain',
    href: '/expertises/web3',
    text: 'Systèmes distribués, infrastructures blockchain, protocol engineering, validation légère, synchronisation réseau, plateformes Web3 et convergence IA + agents.',
  },
]

export default function ExpertisesPage() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Expertises</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Engineering senior pour systèmes critiques.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">Nous accompagnons les DSI, CTO et équipes produit sur les sujets où la qualité d’architecture, la vitesse de delivery, l’AI Engineering et la robustesse long terme sont déterminants.</p>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {expertises.map((item) => (
            <Card key={item.title}>
              <h2 className="mb-4 font-display text-3xl font-semibold">{item.title}</h2>
              <p className="mb-8 leading-7 text-zinc-400">{item.text}</p>
              <Button href={item.href} variant="outline">Découvrir</Button>
            </Card>
          ))}
        </div>
      </main>
      <FinalCTA />
      <Footer />
    </>
  )
}
