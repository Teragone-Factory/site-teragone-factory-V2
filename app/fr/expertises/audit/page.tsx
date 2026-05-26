import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTAFr } from '@/components/sections/fr/FinalCTAFr'
import { Card } from '@/components/ui/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Audit & Architecture',
  description: 'Audit technique, architecture, dette technique, performance, sécurité et roadmap de modernisation.',
  alternates: { canonical: '/fr/expertises/audit/', languages: { fr: '/fr/expertises/audit/', en: '/expertises/audit/' } },
}

const items = [
  ['Diagnostic architecture', 'Analyse des composants, dépendances, flux critiques, choix techniques et risques structurels.'],
  ['Dette technique & qualité', 'Lecture du code, maintenabilité, complexité, tests, sécurité, performance et exploitabilité.'],
  ['Roadmap actionnable', 'Priorisation des chantiers, quick wins, trajectoire cible et arbitrages pragmatiques.'],
]

export default function AuditExpertiseFR() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Expertise</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Audit & Architecture.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">Nous aidons les organisations à comprendre l’état de leurs plateformes, à identifier les risques et à construire une trajectoire de modernisation claire, priorisée et réaliste.</p>
        <div className="mt-16 grid gap-6 md:grid-cols-3">{items.map(([title, text]) => <Card key={title}><h2 className="mb-4 font-display text-2xl font-semibold">{title}</h2><p className="leading-7 text-zinc-400">{text}</p></Card>)}</div>
      </main>
      <FinalCTAFr />
      <Footer />
    </>
  )
}
