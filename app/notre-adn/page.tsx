import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Card } from '@/components/ui/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notre ADN',
  description: 'Software craftsmanship, culture engineering, IA, delivery senior et systèmes distribués.',
}

const pillars = [
  {
    title: 'Software Craftsmanship',
    text: 'Qualité logicielle, lisibilité, maintenabilité, excellence engineering et capacité à faire évoluer les systèmes dans le temps.',
  },
  {
    title: 'AI-ready Systems',
    text: 'Des plateformes pensées pour intégrer durablement l’IA, les agents, l’automatisation et les nouveaux usages.',
  },
  {
    title: 'Delivery & Ownership',
    text: 'Des équipes seniors orientées résultat, impact métier, production et prise de responsabilité.',
  },
  {
    title: 'Transmission',
    text: 'Documentation, partage de connaissance, montée en compétence et collaboration avec les équipes internes.',
  },
  {
    title: 'Architecture Thinking',
    text: 'Prendre du recul sur les systèmes, les flux, les organisations et les contraintes long terme.',
  },
  {
    title: 'Pragmatisme',
    text: 'Choisir les bonnes technologies au bon moment avec une approche concrète et durable.',
  },
]

export default function NotreADNPage() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Notre ADN</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Engineering culture first.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">Teragone Factory est construite autour d’une conviction simple : les systèmes critiques nécessitent des équipes seniors, une culture engineering forte et une vision long terme.</p>
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((item) => (
            <Card key={item.title}>
              <h2 className="mb-4 font-display text-2xl font-semibold">{item.title}</h2>
              <p className="leading-7 text-zinc-400">{item.text}</p>
            </Card>
          ))}
        </div>
        <section className="mt-24 rounded-[2rem] border border-white/10 bg-card p-10 md:p-16">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">Notre vision</span>
          <h2 className="mt-4 max-w-4xl font-display text-5xl font-bold tracking-tight">Construire des systèmes modernes, observables, AI-ready et durables.</h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">Nous croyons à une approche où architecture, delivery, qualité logicielle et impact métier doivent fonctionner ensemble. Notre objectif n’est pas seulement de délivrer vite, mais de construire des plateformes capables d’évoluer durablement.</p>
        </section>
      </main>
      <FinalCTA />
      <Footer />
    </>
  )
}
