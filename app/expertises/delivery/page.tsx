import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { Button } from '@/components/ui/Button'
import { ExpertiseDetailCard } from '@/components/ui/ExpertiseDetailCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delivery & Squads seniors AI-ready',
  description: 'Squads seniors combinant AI engineering, architecture, DevOps et delivery.',
  alternates: { canonical: '/expertises/delivery/', languages: { fr: '/expertises/delivery/', en: '/en/expertises/delivery/' } },
}

const sections = [
  { title: 'Scoping & architecture AI-ready', expertise: 'Nous structurons les enjeux techniques, metier et organisationnels en integrant des pratiques AI engineering et une trajectoire delivery realiste.', actions: ['Architecture cible cloud, data, IA et services metier', 'Organisation delivery et staffing AI engineering', 'Decoupage plateformes et flux exploitables par IA', 'Roadmap et backlog actionnables'] },
  { title: 'Build production-grade augmente par IA', expertise: 'Nos squads combinent software craftsmanship, AI engineering et developpement augmente.', actions: ['Developpement plateformes critiques avec usage controle IA', 'Generation tests, documentation et refactoring accelere', 'CI/CD, cloud, DevOps et observabilite', 'Code review et maintenabilite long terme'] },
  { title: 'Squads seniors & AI engineering', expertise: 'Nous assemblons des squads capables livrer vite sans sacrifier la qualite.', actions: ['Software engineering, architecture, IA, DevOps et produit', 'Pratiques AI engineering partagees', 'Acceleration analyse, conception et delivery', 'Gouvernance pour eviter les effets black-box'] },
  { title: 'Reprise & modernisation acceleree', expertise: 'Nous reprenons des projets existants avec IA comme levier analyse et acceleration.', actions: ['Analyse assistee IA des codebases et dependances', 'Resolution performance, dette et stabilite production', 'Reduction du time-to-delivery', 'Reprise controle architecture et gouvernance'] },
]

export default function DeliveryFR() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Delivery Engineering · AI Engineering</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Squads seniors augmentees par IA.</h1>
        <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-400">Nous mobilisons des squads seniors combinant software craftsmanship, architecture, DevOps et AI engineering pour concevoir et industrialiser des systemes critiques.</p>
        <div className="mt-16 grid gap-8 md:grid-cols-2">{sections.map((section) => <ExpertiseDetailCard key={section.title} {...section} />)}</div>
        <div className="mt-14"><Button href="/contact">Discuter votre squad AI-ready</Button></div>
      </main>
      <Footer />
    </>
  )
}
