import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { Button } from '@/components/ui/Button'
import { ExpertiseDetailCard } from '@/components/ui/ExpertiseDetailCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delivery & Squads Seniors AI-ready',
  description: 'Squads seniors intégrant AI engineering, software craftsmanship, architecture, DevOps et delivery production-grade.',
  alternates: { canonical: '/expertises/delivery/', languages: { fr: '/expertises/delivery/', en: '/en/expertises/delivery/' } },
}

const sections = [
  {
    title: 'Cadrage & architecture AI-ready',
    expertise: 'Nous cadrons les enjeux techniques, métier et organisationnels en intégrant dès le départ les pratiques d’AI engineering : architecture AI-ready, dette technique, automatisation, gouvernance des usages IA et trajectoire de delivery réaliste.',
    actions: ['Architecture cible intégrant cloud, data, IA, agents et services métier', 'Organisation delivery, gouvernance produit et stratégie de staffing avec profils AI engineering', 'Découpage plateformes, APIs, services, domaines fonctionnels et flux exploitables par l’IA', 'Préparation roadmap, backlog, trajectoire de production et cas d’usage IA activables'],
  },
  {
    title: 'Build production-grade augmenté par l’IA',
    expertise: 'Nos squads seniors construisent des systèmes modernes en combinant software craftsmanship, AI engineering et pratiques de développement augmentées : génération assistée, tests, documentation, refactoring, analyse de code et automatisation de tâches répétitives.',
    actions: ['Développement de plateformes critiques avec usage maîtrisé de l’IA dans le cycle de delivery', 'AI-assisted coding, génération de tests, documentation vivante et accélération du refactoring', 'Industrialisation CI/CD, cloud, DevOps, observabilité et contrôles qualité automatisés', 'Software craftsmanship, revue de code, architecture propre et maintenabilité long terme'],
  },
  {
    title: 'Squads seniors & AI engineering practices',
    expertise: 'Nous constituons des squads capables de livrer vite sans sacrifier la qualité : tech leads, software engineers, AI engineers, DevOps, architectes et profils produit travaillent avec des pratiques communes autour de l’IA, des agents et de l’industrialisation.',
    actions: ['Composition de squads avec compétences software engineering, architecture, IA, DevOps et produit', 'Mise en place de pratiques AI engineering communes : prompts, revues, validation, sécurité et traçabilité', 'Utilisation de l’IA pour accélérer analyse, conception, tests, documentation et support delivery', 'Gouvernance pour éviter les effets boîte noire et conserver la maîtrise technique'],
  },
  {
    title: 'Reprise, stabilisation & modernisation accélérée',
    expertise: 'Nous savons reprendre des projets existants et utiliser l’IA comme levier d’analyse et d’accélération : compréhension de codebase, documentation, détection de dette, génération de tests et priorisation des chantiers de modernisation.',
    actions: ['Analyse assistée de codebase, dépendances, historique technique et zones de risque', 'Correction problèmes performance, dette, stabilité production et manque de couverture de tests', 'Réduction du time-to-delivery grâce à l’outillage IA, sans dégrader la qualité', 'Remise sous contrôle architecture, gouvernance engineering et trajectoire de modernisation'],
  },
  {
    title: 'Transmission, gouvernance & adoption IA',
    expertise: 'Nous ne livrons pas seulement du code : nous aidons les équipes internes à adopter des pratiques AI engineering durables, sécurisées et compatibles avec leurs exigences de production.',
    actions: ['Mentoring équipes, pair programming, revues techniques et transmission de pratiques IA', 'Mise en place de standards AI engineering, software craftsmanship et workflows delivery', 'Documentation architecture, règles d’usage IA, gouvernance, sécurité et exploitation', 'Accompagnement CTO, DSI et responsables engineering sur l’adoption IA dans le delivery'],
  },
]

export default function DeliveryPage() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Delivery Engineering · AI Engineering</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Delivery & Squads seniors augmentés par l’IA.</h1>
        <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-400">Nous mobilisons des squads seniors qui combinent software craftsmanship, architecture, DevOps et AI engineering pour reprendre, concevoir, industrialiser et mettre en production des systèmes critiques avec plus de vitesse, de qualité et de maîtrise.</p>
        <div className="mt-16 grid gap-8 md:grid-cols-2">{sections.map((section) => <ExpertiseDetailCard key={section.title} {...section} />)}</div>
        <div className="mt-14"><Button href="/contact">Parlons de votre squad AI-ready</Button></div>
      </main>
      <Footer />
    </>
  )
}
