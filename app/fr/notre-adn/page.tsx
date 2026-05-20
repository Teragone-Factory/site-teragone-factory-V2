import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTAFr } from '@/components/sections/fr/FinalCTAFr'
import { Card } from '@/components/ui/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notre ADN',
  description: 'Culture engineering, software craftsmanship, IA engineering et delivery senior.',
  alternates: { canonical: '/fr/notre-adn/', languages: { fr: '/fr/notre-adn/', en: '/notre-adn/' } },
}

const values = [
  ['Software Craftsmanship', 'Qualite logicielle, maintenabilite, lisibilite et excellence engineering sur le long terme.'],
  ['AI Engineering', 'Utilisation pragmatique de l IA pour accelerer le delivery, la qualite, les tests et l automatisation.'],
  ['AI-ready Systems', 'Plateformes capables d integrer durablement agents IA, automatisation et intelligence distribuee.'],
  ['Delivery & Ownership', 'Equipes seniors orientees impact, production et responsabilite technique long terme.'],
  ['Architecture Thinking', 'Prendre du recul sur les systemes, flux, contraintes et organisations avant de construire.'],
  ['Knowledge Transfer', 'Documentation, transmission et accompagnement des equipes pour construire durablement.'],
]

export default function DNAFR() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Notre ADN</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Une culture engineering avant tout.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">Teragone Factory est construite autour d une conviction simple : les systemes critiques necessitent des equipes seniors, une forte culture engineering et une vision long terme.</p>
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{values.map(([title, text]) => <Card key={title}><h2 className="mb-4 font-display text-2xl font-semibold">{title}</h2><p className="leading-7 text-zinc-400">{text}</p></Card>)}</div>
      </main>
      <FinalCTAFr />
      <Footer />
    </>
  )
}
