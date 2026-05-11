import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { Button } from '@/components/ui/Button'

export default function DeliveryPage() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-6xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Delivery</span>
        <h1 className="mt-4 font-display text-6xl font-bold tracking-tight">Delivery & Squads seniors.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">Nous mobilisons des équipes seniors capables de reprendre, concevoir et livrer des plateformes critiques avec une forte exigence de qualité, de gouvernance et de mise en production.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {['Cadrage & architecture', 'Build production-grade', 'Transmission & gouvernance'].map((item) => <div key={item} className="rounded-3xl border border-white/10 bg-card p-8"><h2 className="font-display text-2xl font-semibold">{item}</h2><p className="mt-4 text-zinc-400">Une approche pragmatique, mesurable et orientée impact métier.</p></div>)}
        </div>
        <div className="mt-12"><Button href="/contact">Parlons de votre projet</Button></div>
      </main>
      <Footer />
    </>
  )
}
