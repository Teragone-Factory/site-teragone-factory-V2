import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { AnimatedHeroVisual } from '@/components/sections/AnimatedHeroVisual'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { PillarCard } from '@/components/ui/PillarCard'
import { SectionHeading } from '@/components/ui/SectionHeading'

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

      <main className="overflow-hidden bg-background text-white">
        <section className="relative border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_36%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-20 px-6 py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-8 flex flex-wrap gap-3">
                <Badge label="AI Engineering" />
                <Badge label="Web3" />
                <Badge label="Software Craftsmanship" />
                <Badge label="Distributed Systems" />
              </div>

              <h1 className="max-w-5xl font-display text-6xl font-bold leading-[1.02] tracking-tight md:text-8xl">
                AI-ready & agent-ready engineering.
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
                Teragone Factory conçoit et délivre des systèmes logiciels
                critiques, modernes et durables avec des équipes seniors
                spécialisées en IA, software craftsmanship, plateformes
                distribuées et architectures complexes.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact">Discutons de votre projet</Button>

                <Button href="/expertises" variant="outline">
                  Découvrir nos expertises
                </Button>
              </div>
            </div>

            <AnimatedHeroVisual />
          </div>
        </section>

        <section className="border-b border-white/5 py-6">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-5 px-6 text-xs uppercase tracking-[0.3em] text-zinc-500 md:text-sm">
            <span>Squads seniors</span>
            <span>AI Engineering</span>
            <span>Software Craftsmanship</span>
            <span>Web3 & Blockchain</span>
            <span>Systèmes critiques</span>
            <span>Delivery full remote</span>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-28">
          <SectionHeading
            eyebrow="Expertises"
            title="Des expertises conçues pour les environnements complexes."
            description="Architecture, modernisation, IA, delivery et plateformes distribuées avec une approche engineering orientée production réelle."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <PillarCard key={pillar.title} {...pillar} />
            ))}
          </div>
        </section>

        <section className="border-y border-white/5 bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-28">
            <SectionHeading
              eyebrow="Pourquoi Teragone Factory"
              title="Engineering senior. Vision long terme."
            />

            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {differentiators.map((item) => (
                <Card key={item}>
                  <div className="mb-6 h-10 w-10 rounded-full bg-primary/20" />
                  <p className="text-sm leading-7 text-zinc-300">{item}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-28">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Use Cases"
              title="Des projets réels. Des systèmes critiques."
            />

            <Button href="/use-cases" variant="ghost">
              Voir tous les cas clients →
            </Button>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {['Transport & mobilité', 'Plateforme IA enterprise', 'Blockchain & Web3'].map((title) => (
              <Card key={title}>
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
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
