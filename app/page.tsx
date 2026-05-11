import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { PillarCard } from '@/components/ui/PillarCard'

const pillars = [
  {
    title: 'Audit & Expertise',
    description:
      'Architecture, dette technique, performance, gouvernance et analyse AI-assisted pour reprendre le contrôle sur les systèmes complexes.',
    href: '/expertises/audit',
  },
  {
    title: 'Delivery & Squads Seniors',
    description:
      'Des équipes seniors capables de délivrer rapidement sur des environnements critiques avec une forte culture engineering.',
    href: '/expertises/delivery',
  },
  {
    title: 'IA & Systèmes Agentiques',
    description:
      'Conception de plateformes AI-ready et agent-ready, de la stratégie aux systèmes en production.',
    href: '/expertises/ia-agentique',
  },
  {
    title: 'Web3 & Blockchain',
    description:
      'Architectures distribuées, souveraineté, protocoles décentralisés et engineering blockchain entreprise.',
    href: '/expertises/web3',
  },
]

const differentiators = [
  'Expertise senior sur des enjeux critiques',
  'IA intégrée dans les architectures existantes',
  'Approche orientée pérennité et gouvernance',
  'Focus production réelle et delivery',
  'Standards élevés de qualité logicielle',
]

export default function HomePage() {
  return (
    <>
      <NavBar />

      <main className="bg-background text-white">
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_35%)]" />

          <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-32">
            <div className="flex flex-wrap gap-3">
              <Badge label="AI Engineering" />
              <Badge label="Web3" />
              <Badge label="Software Craftsmanship" />
              <Badge label="Distributed Systems" />
            </div>

            <div className="max-w-5xl">
              <h1 className="mb-8 font-display text-6xl font-bold leading-[1.05] tracking-tight md:text-8xl">
                Construire des systèmes qui tiennent dans le temps.
              </h1>

              <p className="max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
                Teragone Factory est la filiale digitale, IA et Web3 du groupe
                Teragone Solutions. Nous concevons et délivrons des systèmes
                logiciels complexes, robustes et durables avec des équipes
                seniors spécialisées en AI Engineering, Software Craftsmanship
                et architectures distribuées.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="/contact">Discutons de votre projet</Button>

              <Button href="/expertises" variant="outline">
                Découvrir nos expertises
              </Button>
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 py-6">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-4 px-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
            <span>Squads seniors</span>
            <span>AI Engineering</span>
            <span>Software Craftsmanship</span>
            <span>Web3 & Blockchain</span>
            <span>Systèmes critiques</span>
            <span>Delivery full remote</span>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-28">
          <div className="mb-16 flex flex-col gap-4">
            <span className="text-sm uppercase tracking-[0.3em] text-primary">
              Expertises
            </span>

            <h2 className="font-display text-5xl font-bold tracking-tight">
              Ce que nous faisons.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <PillarCard key={pillar.title} {...pillar} />
            ))}
          </div>
        </section>

        <section className="border-y border-white/5 bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-28">
            <div className="mb-14 max-w-3xl">
              <span className="text-sm uppercase tracking-[0.3em] text-primary">
                Pourquoi Teragone Factory
              </span>

              <h2 className="mt-4 font-display text-5xl font-bold tracking-tight">
                Engineering senior. Vision long terme.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {differentiators.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-card p-6"
                >
                  <div className="mb-6 h-10 w-10 rounded-full bg-primary/20" />
                  <p className="text-sm leading-7 text-zinc-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-28">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-primary">
                Use Cases
              </span>

              <h2 className="mt-4 font-display text-5xl font-bold tracking-tight">
                Des projets réels. Des systèmes critiques.
              </h2>
            </div>

            <Button href="/use-cases" variant="ghost">
              Voir tous les cas clients →
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {['Transport & mobilité', 'Plateforme IA enterprise', 'Blockchain & Web3'].map((title) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-card p-8"
              >
                <span className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">
                  {title}
                </span>

                <h3 className="mb-4 font-display text-2xl font-semibold">
                  Modernisation et delivery à forte criticité.
                </h3>

                <p className="text-sm leading-7 text-zinc-400">
                  Audit, architecture, squads seniors, IA industrialisée et mise
                  en production sur des environnements complexes.
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
