import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { AnimatedHeroVisual } from '@/components/sections/AnimatedHeroVisual'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { ProofBar } from '@/components/sections/ProofBar'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { PillarCard } from '@/components/ui/PillarCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Senior Engineering, AI & Web3',
  description:
    'Teragone Factory designs and delivers AI-ready, agent-ready and Web3 platforms for critical enterprise systems.',
  alternates: {
    canonical: '/en/',
    languages: {
      fr: '/',
      en: '/en/',
    },
  },
}

const pillars = [
  {
    title: 'Architecture Audits & Expertise',
    description:
      'Architecture, technical debt, performance, governance and AI-assisted analysis to regain control over complex software systems.',
    href: '/en/expertises/audit',
  },
  {
    title: 'Senior Delivery Squads',
    description:
      'Senior teams able to deliver quickly on critical environments while maintaining high engineering standards.',
    href: '/en/expertises/delivery',
  },
  {
    title: 'AI & Agentic Systems',
    description:
      'Design and delivery of AI-ready and agent-ready platforms, from strategy to production-grade implementation.',
    href: '/en/expertises/ia-agentique',
  },
  {
    title: 'Web3 & Blockchain',
    description:
      'Distributed architectures, protocol engineering, blockchain infrastructure and enterprise-grade Web3 platforms.',
    href: '/en/expertises/web3',
  },
]

const differentiators = [
  'Senior expertise on critical software environments',
  'AI integrated into existing enterprise systems',
  'Long-term architecture and governance mindset',
  'Production-first delivery culture',
  'High software quality standards',
]

const dna = [
  ['Craftsmanship', 'We build maintainable, observable and durable systems, designed to remain understandable over time.'],
  ['Ownership', 'We take responsibility for outcomes, quality, delivery, governance and long-term platform health.'],
  ['Transmission', 'We share knowledge, document decisions and help internal teams grow stronger through delivery.'],
]

export default function EnglishHomePage() {
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
                Teragone Factory designs and delivers critical, modern and durable software systems with senior teams specialized in AI, software craftsmanship, distributed platforms and complex architectures.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/en/contact">Discuss your project</Button>
                <Button href="/en/expertises" variant="outline">Explore our expertise</Button>
              </div>
            </div>

            <AnimatedHeroVisual />
          </div>
        </section>

        <ProofBar />

        <section className="mx-auto max-w-7xl px-6 py-28">
          <SectionHeading
            eyebrow="Expertise"
            title="Capabilities designed for complex environments."
            description="Architecture, modernization, AI, senior delivery and distributed platforms with a production-first engineering mindset."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <PillarCard key={pillar.title} {...pillar} />
            ))}
          </div>
        </section>

        <section className="border-y border-white/5 bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-28">
            <SectionHeading eyebrow="Why Teragone Factory" title="Senior engineering. Long-term architecture thinking." />

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
          <SectionHeading
            eyebrow="Method"
            title="From audit to production without lowering engineering standards."
            description="Our approach combines fast discovery, pragmatic architecture, senior delivery and knowledge transfer to secure critical systems over time."
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-4">
            {[
              ['Audit & Discovery', 'Architecture, governance, technical debt and business constraints.'],
              ['Architecture & Design', 'Modern, modular and AI-ready platforms designed for scale.'],
              ['Delivery & Production', 'Senior implementation, industrialization and production rollout.'],
              ['Transmission & Scale', 'Documentation, enablement and long-term governance.'],
            ].map(([title, text], index) => (
              <Card key={title}>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 font-display text-xl font-bold text-primary">{index + 1}</div>
                <h3 className="mb-4 font-display text-2xl font-semibold text-white">{title}</h3>
                <p className="leading-7 text-zinc-400">{text}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-y border-white/5 bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-28">
            <SectionHeading
              eyebrow="Our DNA"
              title="Engineering culture, pragmatism and technical excellence."
              description="We believe in durable software engineering, high standards and strong business impact."
            />

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {dna.map(([title, text]) => (
                <Card key={title}>
                  <h3 className="mb-4 font-display text-2xl font-semibold text-white">{title}</h3>
                  <p className="leading-7 text-zinc-400">{text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-28">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Use Cases" title="Real projects. Critical systems." />
            <Button href="/en/use-cases" variant="ghost">View use cases →</Button>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {['Mobility & Transportation', 'Enterprise AI Platform', 'Blockchain & Web3'].map((title) => (
              <Card key={title}>
                <span className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">{title}</span>
                <h3 className="mb-4 font-display text-2xl font-semibold">High-criticality modernization and delivery.</h3>
                <p className="text-sm leading-7 text-zinc-400">Architecture audits, senior squads, industrialized AI and production-grade delivery on complex environments.</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-28">
          <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-card p-10 md:grid-cols-[1fr_0.5fr] md:items-center md:p-16">
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-primary">Careers</span>
              <h2 className="mt-4 font-display text-5xl font-bold tracking-tight">Join a senior engineering team focused on AI, architecture and distributed systems.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">We are looking for senior profiles passionate about complex systems, software craftsmanship, AI-ready platforms and distributed architectures.</p>
            </div>
            <div className="flex justify-start md:justify-end"><Button href="/en/nous-rejoindre">View opportunities</Button></div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}
