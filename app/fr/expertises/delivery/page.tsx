import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTAFr } from '@/components/sections/fr/FinalCTAFr'
import { Card } from '@/components/ui/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delivery & Squads seniors',
  description: 'Equipes seniors pour delivery critique, plateformes AI-ready et systèmes distribués.',
  alternates: { canonical: '/fr/expertises/delivery/', languages: { fr: '/fr/expertises/delivery/', en: '/expertises/delivery/' } },
}

const items = [
  ['Squads seniors', 'Equipes expérimentées capables de prendre en charge des plateformes complexes et critiques.'],
  ['Delivery AI-ready', 'Utilisation pragmatique de l’IA pour accélérer le delivery, les tests et l’automatisation.'],
  ['Ownership long terme', 'Vision durable sur la qualité logicielle, la maintenabilité et la transmission de connaissance.'],
]

export default function DeliveryExpertiseFR() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Expertise</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Delivery & Squads seniors.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">Nous intervenons sur les projets où la qualité du delivery, la vitesse d’exécution et la robustesse des plateformes sont stratégiques.</p>
        <div className="mt-16 grid gap-6 md:grid-cols-3">{items.map(([title, text]) => <Card key={title}><h2 className="mb-4 font-display text-2xl font-semibold">{title}</h2><p className="leading-7 text-zinc-400">{text}</p></Card>)}</div>
      </main>
      <FinalCTAFr />
      <Footer />
    </>
  )
}
