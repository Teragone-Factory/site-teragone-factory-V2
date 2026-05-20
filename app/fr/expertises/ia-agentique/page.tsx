import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTAFr } from '@/components/sections/fr/FinalCTAFr'
import { Card } from '@/components/ui/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IA & Systèmes agentiques',
  description: 'Architectures AI-ready, RAG, orchestration LLM, agents autonomes et intégration enterprise-grade.',
  alternates: { canonical: '/fr/expertises/ia-agentique/', languages: { fr: '/fr/expertises/ia-agentique/', en: '/expertises/ia-agentique/' } },
}

const items = [
  ['Architectures AI-ready', 'Structurer les applications, données, APIs et workflows pour intégrer durablement l’IA dans le système d’information.'],
  ['RAG & orchestration LLM', 'Connecter les modèles aux connaissances internes, aux outils métiers et aux chaînes de décision avec des mécanismes contrôlés.'],
  ['Agents & automatisation', 'Concevoir des systèmes agentiques capables d’agir, de tracer, de vérifier et de s’intégrer aux processus existants.'],
]

export default function AgenticAIExpertiseFR() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Expertise</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">IA & Systèmes agentiques.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">Nous aidons les entreprises à passer de la démonstration IA à des plateformes fiables, gouvernées et intégrées aux workflows réels.</p>
        <div className="mt-16 grid gap-6 md:grid-cols-3">{items.map(([title, text]) => <Card key={title}><h2 className="mb-4 font-display text-2xl font-semibold">{title}</h2><p className="leading-7 text-zinc-400">{text}</p></Card>)}</div>
      </main>
      <FinalCTAFr />
      <Footer />
    </>
  )
}
