import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { Button } from '@/components/ui/Button'
import { ExpertiseDetailCard } from '@/components/ui/ExpertiseDetailCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Audit & Architecture',
  description: 'Audits architecture, dette technique, performance, securite, gouvernance et modernisation legacy.',
  alternates: { canonical: '/expertises/audit/', languages: { fr: '/expertises/audit/', en: '/en/expertises/audit/' } },
}

const sections = [
  { title: 'Audit architecture & dette technique', expertise: 'Nous analysons les architectures existantes, le code, les flux, les dependances, la dette technique et les risques qui ralentissent la maintenabilite, la performance ou la capacite de delivery.', actions: ['Cartographie applicative, technique et fonctionnelle', 'Analyse codebase, dependances, qualite, complexite et dette', 'Identification des risques architecture, securite, performance et scalabilite', 'Roadmap de remediation priorisee par impact metier et effort'] },
  { title: 'Modernisation legacy', expertise: 'Nous aidons les organisations a moderniser leurs systemes critiques sans tout reconstruire lorsque ce n est pas necessaire, avec une trajectoire progressive, controlee et orientee valeur.', actions: ['Decomposition de monolithe, modularisation et strategie de migration', 'Definition architecture cible cloud-ready, AI-ready et maintenable', 'Arbitrage entre rebuild, reprise, extraction de services et amelioration incrementale', 'Accompagnement des equipes internes pendant la transition technique'] },
  { title: 'Performance, securite & production readiness', expertise: 'Nous evaluons la capacite reelle d un systeme a tenir la charge, etre observe, securise, opere et livre en production dans de bonnes conditions.', actions: ['Analyse performance, monitoring, logs, alerting et observabilite', 'Revue securite applicative, dependances, secrets, CI/CD et pratiques DevSecOps', 'Recommandations infrastructure, cloud, couts et resilience', 'Plan industrialisation pour securiser les releases production'] },
  { title: 'Gouvernance engineering', expertise: 'Un audit utile ne produit pas seulement un rapport. Il aide les equipes a decider, prioriser et reprendre le controle du delivery et de l architecture.', actions: ['Restitution claire pour DSI, CTO, metiers et equipes techniques', 'Matrice risques, impacts, quick wins et chantiers structurants', 'Definition de standards engineering et pratiques de gouvernance', 'Plan action operationnel executable par vos equipes ou nos squads seniors'] },
]

export default function AuditFR() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Audit & Architecture</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Comprendre, prioriser et securiser vos systemes critiques.</h1>
        <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-400">Nous realisons des audits techniques actionnables couvrant architecture, dette technique, performance, securite, gouvernance, modernisation legacy et trajectoire de delivery.</p>
        <div className="mt-16 grid gap-8 md:grid-cols-2">{sections.map((section) => <ExpertiseDetailCard key={section.title} {...section} />)}</div>
        <div className="mt-14"><Button href="/contact">Lancer un audit</Button></div>
      </main>
      <Footer />
    </>
  )
}
