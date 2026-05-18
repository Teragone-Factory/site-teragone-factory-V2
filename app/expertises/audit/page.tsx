import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { Button } from '@/components/ui/Button'
import { ExpertiseDetailCard } from '@/components/ui/ExpertiseDetailCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Audit & Architecture',
  description: 'Audit architecture, dette technique, performance, sécurité, gouvernance et modernisation legacy.',
  alternates: { canonical: '/expertises/audit/', languages: { fr: '/expertises/audit/', en: '/en/expertises/audit/' } },
}

const sections = [
  {
    title: 'Audit architecture & dette technique',
    expertise: 'Nous analysons les architectures existantes, le code, les flux, les dépendances, la dette technique et les risques qui freinent la maintenabilité, la performance ou la capacité à livrer.',
    actions: ['Cartographie applicative, technique et fonctionnelle', 'Analyse codebase, dépendances, qualité, complexité et dette', 'Identification des risques architecture, sécurité, performance et scalabilité', 'Roadmap de remédiation priorisée par impact métier et effort'],
  },
  {
    title: 'Modernisation legacy',
    expertise: 'Nous aidons les organisations à moderniser des systèmes critiques sans repartir de zéro quand ce n’est pas nécessaire, avec une trajectoire progressive, maîtrisée et orientée valeur.',
    actions: ['Découpage monolithe, modularisation et stratégie de migration', 'Définition d’architecture cible cloud-ready, AI-ready et maintenable', 'Arbitrage entre refonte, reprise, extraction de services et amélioration incrémentale', 'Accompagnement des équipes internes dans la transition technique'],
  },
  {
    title: 'Performance, sécurité & production readiness',
    expertise: 'Nous évaluons la capacité réelle d’un système à tenir la charge, être observé, sécurisé, exploité et mis en production dans de bonnes conditions.',
    actions: ['Analyse performance, monitoring, logs, alerting et observabilité', 'Revue sécurité applicative, dépendances, secrets, CI/CD et pratiques DevSecOps', 'Préconisations infrastructure, cloud, coûts et résilience', 'Plan d’industrialisation pour fiabiliser les mises en production'],
  },
  {
    title: 'Gouvernance engineering',
    expertise: 'Un audit utile ne produit pas seulement un rapport. Il aide les équipes à décider, prioriser et reprendre le contrôle de leur delivery et de leur architecture.',
    actions: ['Restitution claire pour DSI, CTO, métiers et équipes techniques', 'Matrice risques / impacts / quick wins / chantiers structurants', 'Définition de standards engineering et pratiques de gouvernance', 'Plan d’action opérationnel activable par vos équipes ou nos squads seniors'],
  },
]

export default function AuditPage() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Audit & Architecture</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Comprendre, prioriser et sécuriser vos systèmes critiques.</h1>
        <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-400">Nous réalisons des audits techniques orientés action : architecture, dette technique, performance, sécurité, gouvernance, modernisation legacy et trajectoire de delivery.</p>
        <div className="mt-16 grid gap-8 md:grid-cols-2">{sections.map((section) => <ExpertiseDetailCard key={section.title} {...section} />)}</div>
        <div className="mt-14"><Button href="/contact">Lancer un audit</Button></div>
      </main>
      <Footer />
    </>
  )
}
