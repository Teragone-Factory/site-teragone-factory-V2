import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { UseCaseCard } from '@/components/ui/UseCaseCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Use Cases',
  description:
    'Découvrez des exemples de modernisation, AI Engineering, plateformes critiques et Web3 réalisés par Teragone Factory.',
}

const cases = [
  {
    sector: 'Transport & mobilité',
    pillar: 'Architecture & Delivery',
    problem: 'Modernisation d’une plateforme critique legacy.',
    intervention:
      'Audit architecture, cadrage, squads seniors, industrialisation CI/CD et amélioration performance.',
    results:
      'Plateforme stabilisée, accélération delivery et réduction de la dette technique.',
  },
  {
    sector: 'Enterprise AI',
    pillar: 'AI Engineering',
    problem: 'Industrialisation d’usages IA dans un SI complexe.',
    intervention:
      'Architecture AI-ready, RAG, orchestration LLM, gouvernance et mise en production.',
    results:
      'Intégration durable de capacités IA dans les workflows métiers.',
  },
  {
    sector: 'Blockchain',
    pillar: 'Web3 & Distributed Systems',
    problem: 'Optimisation de synchronisation réseau blockchain.',
    intervention:
      'Travaux sur validation légère, snapshots certifiés et architecture distribuée.',
    results:
      'Amélioration des performances réseau et réduction des coûts d’infrastructure.',
  },
  {
    sector: 'Software Platform',
    pillar: 'Audit & Expertise',
    problem: 'Dette technique et ralentissement delivery.',
    intervention:
      'Audit de code, gouvernance engineering, architecture cible et stratégie de modernisation.',
    results:
      'Roadmap claire, meilleure vélocité et meilleure maintenabilité.',
  },
]

export default function UseCasesPage() {
  return (
    <>
      <NavBar />

      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <div className="max-w-4xl">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">
            Use Cases
          </span>

          <h1 className="mt-4 font-display text-6xl font-bold tracking-tight">
            Des projets complexes. Des résultats concrets.
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Modernisation, plateformes IA, delivery senior, architecture et
            systèmes distribués sur des environnements critiques.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {cases.map((item) => (
            <UseCaseCard key={item.problem} {...item} />
          ))}
        </div>
      </main>

      <FinalCTA />

      <Footer />
    </>
  )
}
