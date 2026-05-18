import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { Button } from '@/components/ui/Button'
import { ExpertiseDetailCard } from '@/components/ui/ExpertiseDetailCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-ready & Agent-ready Systems',
  description: 'Architecture IA, workflows agentiques, RAG, orchestration LLM et plateformes AI-ready.',
  alternates: { canonical: '/expertises/ia-agentique/', languages: { fr: '/expertises/ia-agentique/', en: '/en/expertises/ia-agentique/' } },
}

const sections = [
  {
    title: 'RAG & Knowledge Systems',
    expertise: 'Nous concevons des architectures capables de transformer la donnée et la documentation métier en systèmes exploitables par des modèles IA et des workflows intelligents.',
    actions: ['Architecture RAG, ingestion documentaire et pipelines knowledge', 'Structuration données, embeddings, recherche hybride et contextualisation', 'Connexion aux outils métier, APIs et systèmes existants', 'Observabilité, qualité des réponses et gouvernance des connaissances'],
  },
  {
    title: 'Agentic Workflows',
    expertise: 'Nous développons des systèmes capables d’orchestrer des agents autonomes exécutant des tâches complexes, pilotant des workflows et interagissant avec des plateformes métiers.',
    actions: ['Conception workflows multi-agents et orchestration LLM', 'Intégration outils, APIs, mémoire et raisonnement contextualisé', 'Automatisation de processus complexes et chaînes d’actions', 'Architecture sécurisée, observable et exploitable en production'],
  },
  {
    title: 'AI Platform Engineering',
    expertise: 'Nous aidons les entreprises à construire des plateformes AI-ready capables de supporter durablement les usages IA à grande échelle.',
    actions: ['Architecture plateformes IA, gouvernance et industrialisation', 'Déploiement cloud, MLOps, monitoring et optimisation coûts', 'Intégration IA dans des plateformes existantes et systèmes critiques', 'Mise en production robuste et scalable des usages IA'],
  },
  {
    title: 'AI Engineering & Software Craftsmanship',
    expertise: 'Nous croyons que les systèmes IA doivent être construits avec les mêmes exigences de qualité, maintenabilité et gouvernance que les plateformes critiques traditionnelles.',
    actions: ['Structuration architecture AI-ready maintenable et testable', 'Software craftsmanship appliqué aux systèmes IA et agents', 'Stratégies tests, validation, observabilité et gouvernance IA', 'Réduction de la dette technique liée aux usages IA rapides'],
  },
  {
    title: 'AI, Agents & Web3 Systems',
    expertise: 'Nous explorons et construisons des architectures hybrides mêlant IA, agents autonomes et systèmes distribués pour créer des plateformes vérifiables, actionnables et décentralisées.',
    actions: ['Orchestration d’agents autonomes connectés à des infrastructures Web3', 'Systèmes hybrides IA + blockchain + APIs métier', 'Validation, identité, exécution et gouvernance distribuée', 'Architecture future-proof pour plateformes AI-native et agent-native'],
  },
]

export default function AIPage() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">AI Engineering</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">AI-ready & Agent-ready systems.</h1>
        <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-400">Nous concevons des architectures capables d’intégrer durablement IA, agents autonomes, RAG, orchestration LLM et automatisation avancée dans des systèmes critiques et plateformes complexes.</p>
        <div className="mt-16 grid gap-8 md:grid-cols-2">{sections.map((section) => <ExpertiseDetailCard key={section.title} {...section} />)}</div>
        <div className="mt-14"><Button href="/contact">Construire une plateforme IA</Button></div>
      </main>
      <Footer />
    </>
  )
}
