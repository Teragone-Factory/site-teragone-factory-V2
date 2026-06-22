import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTAFr } from '@/components/sections/fr/FinalCTAFr'
import { Card } from '@/components/ui/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notre ADN',
  description: 'Culture d’ingénierie, software craftsmanship, AI engineering et delivery senior.',
  alternates: { canonical: '/fr/notre-adn/', languages: { fr: '/fr/notre-adn/', en: '/notre-adn/' } },
}

const values = [
  ['Software Craftsmanship', 'Qualité logicielle, maintenabilité, lisibilité et exigence d’ingénierie sur le long terme.'],
  ['AI Engineering', 'Utilisation pragmatique de l’IA pour accélérer l’analyse, les tests, la documentation et l’automatisation.'],
  ['Systèmes AI-ready', 'Plateformes capables d’intégrer durablement agents IA, automatisation et usages avancés.'],
  ['Delivery & Ownership', 'Équipes seniors orientées impact, production et responsabilité technique dans la durée.'],
  ['Architecture Thinking', 'Prendre du recul sur les systèmes, les flux, les contraintes et les organisations avant de construire.'],
  ['Transmission', 'Documentation, partage des pratiques et accompagnement des équipes pour renforcer leur autonomie.'],
]

export default function DNAFR() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Notre ADN</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Une culture d’ingénierie avant tout.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">Teragone Factory repose sur une conviction simple : les systèmes critiques exigent des équipes seniors, une forte culture d’ingénierie et une vision long terme.</p>
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{values.map(([title, text]) => <Card key={title}><h2 className="mb-4 font-display text-2xl font-semibold">{title}</h2><p className="leading-7 text-zinc-400">{text}</p></Card>)}</div>
        <section className="mt-24 rounded-[2rem] border border-white/10 bg-card p-10 md:p-16">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">Notre vision</span>
          <h2 className="mt-4 max-w-4xl font-display text-5xl font-bold tracking-tight">Construire des systèmes modernes, observables, AI-ready et durables.</h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">Nous faisons converger architecture, qualité logicielle, delivery, AI engineering et impact métier pour construire des plateformes capables d’évoluer dans la durée.</p>
        </section>
      </main>
      <FinalCTAFr />
      <Footer />
    </>
  )
}
