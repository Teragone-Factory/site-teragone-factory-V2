import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTAFr } from '@/components/sections/fr/FinalCTAFr'
import { Card } from '@/components/ui/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notre ADN',
  description: 'Notre culture engineering : software craftsmanship, AI engineering, responsabilite et delivery production-grade.',
  alternates: { canonical: '/notre-adn/', languages: { fr: '/notre-adn/', en: '/en/notre-adn/' } },
}

const values = [
  ['Software Craftsmanship', 'Qualite logicielle, lisibilite, maintenabilite, excellence engineering et capacite a faire evoluer les systemes dans le temps.'],
  ['AI Engineering', 'L IA est une pratique de delivery a part entiere : developpement assiste, tests, documentation, refactoring, analyse code et automatisation controlee.'],
  ['Systemes AI-ready', 'Plateformes concues pour integrer durablement IA, agents, automatisation et nouveaux cas usage dans des environnements production-grade.'],
  ['Delivery & Ownership', 'Equipes seniors orientees resultats, impact metier, production readiness et responsabilite technique long terme.'],
  ['Architecture Thinking', 'Prendre du recul sur les systemes, flux, organisations, donnees et contraintes long terme avant de construire.'],
  ['Transmission & pragmatisme', 'Documenter, partager, faire progresser les equipes et choisir les bonnes technologies au bon moment sans dogmatisme.'],
]

export default function DNAFR() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Notre ADN</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">La culture engineering avant tout.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">Teragone Factory repose sur une conviction simple : les systemes critiques necessitent des equipes seniors, une forte culture engineering, des pratiques AI engineering controlees et une vision long terme.</p>
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {values.map(([title, text]) => <Card key={title}><h2 className="mb-4 font-display text-2xl font-semibold">{title}</h2><p className="leading-7 text-zinc-400">{text}</p></Card>)}
        </div>
        <section className="mt-24 rounded-[2rem] border border-white/10 bg-card p-10 md:p-16">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">Notre vision</span>
          <h2 className="mt-4 max-w-4xl font-display text-5xl font-bold tracking-tight">Construire des systemes modernes, observables, AI-ready et durables.</h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">Nous pensons que architecture, delivery, qualite logicielle, AI engineering et impact metier doivent fonctionner ensemble. Notre objectif n est pas seulement de livrer vite, mais de construire des plateformes capables d evoluer durablement.</p>
        </section>
      </main>
      <FinalCTAFr />
      <Footer />
    </>
  )
}
