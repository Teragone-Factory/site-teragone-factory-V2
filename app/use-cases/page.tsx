import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Card } from '@/components/ui/Card'
import { UseCaseCard } from '@/components/ui/UseCaseCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Use Cases',
  description:
    'Cas d’usage Teragone Factory : modernisation legacy, plateformes IA, Web3, systèmes distribués et delivery senior.',
}

const cases = [
  {
    sector: 'Transport & mobilité',
    pillar: 'Architecture & Delivery',
    problem: 'Modernisation d’une plateforme critique legacy.',
    intervention:
      'Audit architecture, cadrage, squads seniors, industrialisation CI/CD, observabilité et amélioration performance.',
    results:
      'Plateforme stabilisée, trajectoire de modernisation claire, accélération delivery et réduction de la dette technique.',
  },
  {
    sector: 'Enterprise AI',
    pillar: 'AI Engineering',
    problem: 'Industrialisation d’usages IA dans un SI complexe.',
    intervention:
      'Architecture AI-ready, RAG, orchestration LLM, gouvernance, sécurité, observabilité et mise en production.',
    results:
      'Capacités IA intégrées durablement aux workflows métiers avec une approche contrôlée et industrialisable.',
  },
  {
    sector: 'Blockchain Infrastructure',
    pillar: 'Mithril Protocol',
    thumbnail: '/mithril-logo.png',
    problem: 'Mithril : certification légère et synchronisation rapide d’un réseau blockchain.',
    intervention:
      'Conception et développement d’un protocole de certification distribuée permettant de produire des snapshots vérifiables, de réduire les temps de synchronisation et d’améliorer l’accès fiable à l’état réseau sans dépendre d’une infrastructure lourde.',
    results:
      'Réduction drastique du temps de bootstrap des nœuds, meilleure résilience réseau, validation légère, distribution fiable de snapshots certifiés et amélioration de l’expérience développeur et opérateur sur des infrastructures blockchain à grande échelle.',
  },
  {
    sector: 'Software Platform',
    pillar: 'Audit & Expertise',
    problem: 'Dette technique, manque de visibilité et ralentissement delivery.',
    intervention:
      'Audit de code, gouvernance engineering, architecture cible, priorisation roadmap et accompagnement des équipes.',
    results:
      'Roadmap claire, meilleure maintenabilité, décisions techniques objectivées et capacité delivery renforcée.',
  },
]

const themes = [
  'Modernisation legacy',
  'AI-ready platforms',
  'Web3 infrastructure',
  'Software craftsmanship',
  'Observabilité & performance',
  'Delivery senior',
]

export default function UseCasesPage() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <div className="max-w-4xl">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">Use Cases</span>
          <h1 className="mt-4 font-display text-6xl font-bold tracking-tight">Des projets complexes. Des résultats concrets.</h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">Nous intervenons là où les enjeux techniques sont critiques : modernisation, plateformes IA, architecture distribuée, delivery senior et systèmes à forte valeur métier.</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {themes.map((theme) => <span key={theme} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-400">{theme}</span>)}
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {cases.map((item) => <UseCaseCard key={item.problem} {...item} />)}
        </div>
        <section className="mt-24 grid gap-6 md:grid-cols-3">
          {[
            ['Comprendre', 'Clarifier les contraintes, les risques et les leviers techniques avant d’engager un delivery.'],
            ['Prioriser', 'Transformer les constats en roadmap pragmatique, arbitrée avec les enjeux métier.'],
            ['Délivrer', 'Mobiliser une équipe senior capable de concevoir, construire et transmettre.'],
          ].map(([title, text]) => <Card key={title}><h2 className="font-display text-2xl font-semibold">{title}</h2><p className="mt-4 leading-7 text-zinc-400">{text}</p></Card>)}
        </section>
      </main>
      <FinalCTA />
      <Footer />
    </>
  )
}
