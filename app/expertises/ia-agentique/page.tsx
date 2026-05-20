import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { Button } from '@/components/ui/Button'
import { ExpertiseDetailCard } from '@/components/ui/ExpertiseDetailCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IA & Systemes agentiques',
  description: 'AI engineering entreprise, RAG, agents autonomes et architectures AI-ready.',
  alternates: { canonical: '/expertises/ia-agentique/', languages: { fr: '/expertises/ia-agentique/', en: '/en/expertises/ia-agentique/' } },
}

const sections = [
  { title: 'RAG & systemes de connaissance', expertise: 'Nous concevons des architectures robustes, observables et orientees production pour exploiter la connaissance entreprise a grande echelle.', actions: ['Architecture RAG, pipelines indexation et bases vectorielles', 'Traitement documentaire, strategies de retrieval et gouvernance de la connaissance', 'Evaluation LLM, observabilite et reduction des hallucinations', 'Integration securisee aux donnees et systemes metier'] },
  { title: 'Workflows agentiques', expertise: 'Nous construisons des workflows autonomes capables de raisonner, orchestrer des outils, automatiser des actions et interagir avec des systemes information complexes.', actions: ['Architectures multi-agents et couches orchestration', 'Tool calling, APIs, systemes orientes MCP et automatisation de workflows', 'Validation human-in-the-loop et gouvernance operationnelle', 'Observabilite, monitoring et controle execution production-grade'] },
  { title: 'AI platform engineering', expertise: 'Nous aidons les organisations a structurer des plateformes IA durables, capables evoluer, passer a echelle et rester maintenables.', actions: ['Architecture AI-ready et integration entreprise', 'LLMOps, deploiement, observabilite et optimisation des couts', 'Securite, gouvernance et bonnes pratiques AI engineering', 'Fondations plateforme IA scalables pour environnements entreprise'] },
  { title: 'IA, agents & Web3', expertise: 'Nous explorons la convergence entre systemes IA, agents autonomes et infrastructures decentralisees pour creer des modeles execution verifiables et distribues.', actions: ['Agents IA interagissant avec smart contracts et systemes blockchain', 'Execution de confiance, identite, signatures et verification distribuee', 'Architectures de coordination decentralisee AI-ready', 'Ingenierie systemes distribues pour plateformes AI-native nouvelle generation'] },
]

export default function AIFR() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">AI Engineering</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Systemes AI-ready & agent-ready.</h1>
        <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-400">Nous concevons des architectures capables integrer durablement les usages IA, agents autonomes, systemes RAG, orchestration LLM et automatisation avancee dans des environnements entreprise complexes.</p>
        <div className="mt-16 grid gap-8 md:grid-cols-2">{sections.map((section) => <ExpertiseDetailCard key={section.title} {...section} />)}</div>
        <div className="mt-14"><Button href="/contact">Construire une plateforme IA</Button></div>
      </main>
      <Footer />
    </>
  )
}
