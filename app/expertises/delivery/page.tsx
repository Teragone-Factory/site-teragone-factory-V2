import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { Button } from '@/components/ui/Button'
import { ExpertiseDetailCard } from '@/components/ui/ExpertiseDetailCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delivery & Squads Seniors',
  description: 'Squads seniors pour reprendre, concevoir, moderniser et industrialiser des plateformes critiques.',
  alternates: { canonical: '/expertises/delivery/', languages: { fr: '/expertises/delivery/', en: '/en/expertises/delivery/' } },
}

const sections = [
  {
    title: 'Cadrage & architecture',
    expertise: 'Nous intervenons dès les premières phases pour cadrer les enjeux techniques, métier et organisationnels afin de construire une trajectoire de delivery réaliste et durable.',
    actions: ['Architecture cible et arbitrages techniques structurants', 'Organisation delivery, gouvernance produit et stratégie de staffing', 'Découpage plateformes, APIs, services et domaines fonctionnels', 'Préparation roadmap, backlog et trajectoire de mise en production'],
  },
  {
    title: 'Build production-grade',
    expertise: 'Nos squads seniors conçoivent et développent des systèmes modernes avec une forte exigence engineering, qualité logicielle et capacité à tenir dans le temps.',
    actions: ['Développement plateformes critiques et systèmes complexes', 'Industrialisation CI/CD, cloud, DevOps et observabilité', 'Software craftsmanship, qualité, tests et maintenabilité', 'Livraison incrémentale avec forte proximité métier et produit'],
  },
  {
    title: 'Reprise & stabilisation',
    expertise: 'Nous savons reprendre des projets existants, réduire les risques, restaurer la confiance et remettre des plateformes en capacité de livrer rapidement.',
    actions: ['Analyse de codebase et reprise d’historique technique', 'Correction problèmes performance, dette et stabilité production', 'Réduction du time-to-delivery et sécurisation des releases', 'Remise sous contrôle architecture et gouvernance engineering'],
  },
  {
    title: 'Transmission & gouvernance',
    expertise: 'Nous privilégions des modèles où les équipes clientes montent en compétence et gardent la maîtrise de leurs plateformes sur le long terme.',
    actions: ['Mentoring équipes, pair programming et transmission de pratiques', 'Mise en place standards engineering et workflows delivery', 'Documentation architecture, gouvernance et exploitation', 'Accompagnement CTO, DSI et responsables engineering'],
  },
]

export default function DeliveryPage() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Delivery Engineering</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Delivery & Squads seniors.</h1>
        <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-400">Nous mobilisons des équipes seniors capables de reprendre, concevoir, industrialiser et mettre en production des systèmes critiques avec une forte exigence de qualité, de gouvernance et de robustesse long terme.</p>
        <div className="mt-16 grid gap-8 md:grid-cols-2">{sections.map((section) => <ExpertiseDetailCard key={section.title} {...section} />)}</div>
        <div className="mt-14"><Button href="/contact">Parlons de votre projet</Button></div>
      </main>
      <Footer />
    </>
  )
}
