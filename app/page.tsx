import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { AnimatedHeroVisual } from '@/components/sections/AnimatedHeroVisual'
import { CredibilitySection } from '@/components/sections/CredibilitySection'
import { DeliveryMethod } from '@/components/sections/DeliveryMethod'
import { DNASection } from '@/components/sections/DNASection'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { ProofBar } from '@/components/sections/ProofBar'
import { RecruitmentTeaser } from '@/components/sections/RecruitmentTeaser'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { PillarCard } from '@/components/ui/PillarCard'
import { SectionHeading } from '@/components/ui/SectionHeading'

const pillars = [
  {
    title: 'Audit & Expertise',
    description:
      'Audits techniques, architecture, dette logicielle et modernisation pragmatique pour reprendre le contrôle sur des systèmes critiques.',
    href: '/expertises/audit',
    visual: '🧭',
    proof: 'Architecture & gouvernance',
    accent: 'from-blue-500/30 to-cyan-400/20',
  },
  {
    title: 'Delivery & Squads Seniors',
    description:
      'Des squads seniors AI-ready capables de concevoir, reprendre et industrialiser des plateformes complexes avec une forte culture engineering.',
    href: '/expertises/delivery',
    visual: '⚙️',
    proof: 'Software craftsmanship',
    accent: 'from-violet-500/30 to-blue-400/20',
  },
  {
    title: 'IA & Systèmes Agentiques',
    description:
      'RAG, orchestration LLM, agents autonomes et AI engineering pour construire des systèmes intelligents réellement exploitables.',
    href: '/expertises/ia-agentique',
    visual: '✦',
    proof: 'AI-ready systems',
    accent: 'from-cyan-500/30 to-emerald-400/20',
  },
  {
    title: 'Web3 & Blockchain',
    description:
      'Protocol engineering, infrastructures distribuées, plateformes Web3 et convergence IA + agents + systèmes décentralisés.',
    href: '/expertises/web3',
    visual: '◈',
    proof: 'Distributed systems',
    accent: 'from-fuchsia-500/30 to-violet-400/20',
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

        <ProofBar />

        <section className="relative mx-auto max-w-7xl px-6 py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_55%)]" />

          <div className="relative">
            <SectionHeading
              eyebrow="Expertises"
              title="Une expertise engineering pensée pour les systèmes critiques."
              description="Nous accompagnons les organisations qui doivent moderniser, industrialiser et faire évoluer des plateformes complexes avec une approche pragmatique, senior et orientée production réelle."
            />

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-500">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">Architecture & modernisation</span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">AI engineering & agents</span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">Delivery production-grade</span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">Distributed systems & Web3</span>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {pillars.map((pillar) => (
                <PillarCard key={pillar.title} {...pillar} />
              ))}
            </div>
          </div>
        </section>

        <DeliveryMethod />

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

        <CredibilitySection />

        <DNASection />

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

        <RecruitmentTeaser />

        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}
