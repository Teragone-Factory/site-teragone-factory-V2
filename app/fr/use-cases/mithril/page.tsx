import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTAFr } from '@/components/sections/fr/FinalCTAFr'
import { Card } from '@/components/ui/Card'
import { asset } from '@/lib/routes'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Use Case Mithril Protocol',
  description: 'Comment Teragone Factory a contribué à Mithril, un protocole de certification légère et de synchronisation rapide pour infrastructure blockchain.',
  alternates: { canonical: '/fr/use-cases/mithril/', languages: { fr: '/fr/use-cases/mithril/', en: '/use-cases/mithril/' } },
}

const highlights = [
  ['Enjeu', 'Les grands réseaux blockchain nécessitent des mécanismes plus rapides, plus légers et plus fiables pour amorcer leur infrastructure distribuée.'],
  ['Contribution', 'Nous avons contribué à un protocole de certification distribuée produisant des snapshots vérifiables pour accélérer la synchronisation.'],
  ['Impact', 'Les opérateurs bénéficient d’un bootstrap plus rapide, d’une meilleure résilience et d’une expérience infrastructure plus scalable.'],
]

function MithrilLogo() {
  return <img src={asset('/mithril-logo.svg')} alt="Mithril Protocol logo" className="h-auto w-full max-w-[420px]" />
}

export default function MithrilUseCasePageFR() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <section className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-card p-10 shadow-2xl shadow-primary/10">
            <div className="flex min-h-[240px] items-center justify-center rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-10">
              <MithrilLogo />
            </div>
          </div>
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-primary">Use Case · Infrastructure Blockchain</span>
            <h1 className="mt-5 font-display text-6xl font-bold tracking-tight">Mithril Protocol.</h1>
            <p className="mt-8 text-lg leading-8 text-zinc-400">Rendre la synchronisation blockchain plus légère, plus rapide et plus fiable grâce à la certification distribuée et aux snapshots vérifiables.</p>
          </div>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-3">
          {highlights.map(([title, text]) => <Card key={title}><h2 className="font-display text-2xl font-semibold">{title}</h2><p className="mt-4 leading-7 text-zinc-400">{text}</p></Card>)}
        </section>

        <section className="mt-20 rounded-[2rem] border border-white/10 bg-card p-10 md:p-16">
          <h2 className="font-display text-4xl font-semibold">Ce que nous avons apporté</h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-400">Nous avons contribué à la conception et au développement d’un protocole de certification distribuée produisant des snapshots vérifiables. L’objectif consistait à réduire le temps de synchronisation, permettre une validation légère et améliorer l’accès à un état réseau certifié.</p>
          <h2 className="mt-12 font-display text-4xl font-semibold">Impact infrastructure & écosystème</h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-400">Le réseau bénéficie d’une manière plus scalable de distribuer des snapshots certifiés et de supporter des opérations blockchain à grande échelle. Les opérateurs gagnent un bootstrap plus rapide, une validation plus légère et une meilleure résilience opérationnelle.</p>
        </section>
      </main>
      <FinalCTAFr />
      <Footer />
    </>
  )
}
