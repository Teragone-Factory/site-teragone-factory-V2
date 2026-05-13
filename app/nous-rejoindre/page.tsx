import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nous rejoindre',
  description: 'Rejoindre Teragone Factory : software engineering, IA, architecture, Web3 et systèmes distribués.',
}

const roles = [
  {
    title: 'Software Engineers',
    text: 'Conception et développement de plateformes modernes, robustes et maintenables.',
  },
  {
    title: 'AI Engineers',
    text: 'Industrialisation IA, orchestration LLM, agents, RAG et plateformes AI-ready.',
  },
  {
    title: 'Architectes Solutions',
    text: 'Architecture logicielle, modernisation, systèmes distribués et gouvernance technique.',
  },
  {
    title: 'Tech Leads',
    text: 'Pilotage engineering, qualité delivery, mentoring et accompagnement des équipes.',
  },
]

const values = [
  'Culture engineering forte',
  'Équipes seniors',
  'Projets complexes et modernes',
  'AI, architecture et Web3',
  'Autonomie et responsabilité',
  'Transmission et partage',
]

export default function RecrutementPage() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Rejoindre Teragone Factory</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Rejoindre une équipe senior orientée engineering.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">Nous recherchons des profils passionnés par les systèmes complexes, l’architecture, les plateformes AI-ready, les systèmes distribués et le software craftsmanship.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          {values.map((value) => <span key={value} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-400">{value}</span>)}
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {roles.map((role) => (
            <Card key={role.title}>
              <h2 className="mb-4 font-display text-3xl font-semibold">{role.title}</h2>
              <p className="mb-8 leading-7 text-zinc-400">{role.text}</p>
              <Button href="mailto:pellegrini@teragone-factory.com">Postuler</Button>
            </Card>
          ))}
        </div>
        <section className="mt-24 rounded-[2rem] border border-white/10 bg-card p-10 md:p-16">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">Notre approche</span>
          <h2 className="mt-4 max-w-4xl font-display text-5xl font-bold tracking-tight">Des équipes seniors qui construisent des systèmes durables.</h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">Nous privilégions les environnements où l’engineering a de l’impact : architecture, qualité logicielle, delivery, modernisation, IA, plateformes distribuées et sujets techniques ambitieux.</p>
        </section>
      </main>
      <FinalCTA />
      <Footer />
    </>
  )
}
