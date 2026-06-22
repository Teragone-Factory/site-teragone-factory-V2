import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTAFr } from '@/components/sections/fr/FinalCTAFr'
import { Card } from '@/components/ui/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delivery & Squads seniors',
  description: 'Équipes seniors pour delivery critique, plateformes AI-ready et systèmes distribués.',
  alternates: { canonical: '/fr/expertises/delivery/', languages: { fr: '/fr/expertises/delivery/', en: '/expertises/delivery/' } },
}

const items = [
  ['Squads seniors', 'Des équipes expérimentées capables de reprendre, concevoir et faire évoluer des plateformes complexes.'],
  ['Delivery augmenté par l’IA', 'Une utilisation pragmatique de l’IA pour accélérer l’analyse, les tests, la documentation et l’automatisation.'],
  ['Responsabilité dans la durée', 'Qualité logicielle, maintenabilité, transmission des connaissances et maîtrise de la trajectoire technique.'],
]

export default function DeliveryExpertiseFR() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Expertise</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Delivery & Squads seniors.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">Nous intervenons lorsque la qualité d’exécution, la vitesse de delivery et la robustesse des plateformes sont déterminantes.</p>
        <div className="mt-16 grid gap-6 md:grid-cols-3">{items.map(([title, text]) => <Card key={title}><h2 className="mb-4 font-display text-2xl font-semibold">{title}</h2><p className="leading-7 text-zinc-400">{text}</p></Card>)}</div>
      </main>
      <FinalCTAFr />
      <Footer />
    </>
  )
}
