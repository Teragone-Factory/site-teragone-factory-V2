import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { AnimatedHeroVisual } from '@/components/sections/AnimatedHeroVisual'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { ProofBar } from '@/components/sections/ProofBar'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Senior Engineering, AI & Web3',
  description:
    'Teragone Factory designs and delivers AI-ready, agent-ready and Web3 platforms for critical enterprise systems.',
}

export default function EnglishHomePage() {
  return (
    <>
      <NavBar />
      <main className="overflow-hidden bg-background text-white">
        <section className="relative border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_36%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-20 px-6 py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-8 flex flex-wrap gap-3"><Badge label="AI Engineering" /><Badge label="Web3" /><Badge label="Software Craftsmanship" /><Badge label="Distributed Systems" /></div>
              <h1 className="max-w-5xl font-display text-6xl font-bold leading-[1.02] tracking-tight md:text-8xl">Engineering systems built to last.</h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">Teragone Factory is the digital, AI and Web3 delivery factory of the Teragone Solutions group. We design and deliver robust, durable and production-grade software systems with senior engineering teams.</p>
              <div className="mt-10 flex flex-wrap gap-4"><Button href="/contact">Discuss your project</Button><Button href="/expertises" variant="outline">Explore our expertise</Button></div>
            </div>
            <AnimatedHeroVisual />
          </div>
        </section>
        <ProofBar />
        <section className="mx-auto max-w-7xl px-6 py-28"><SectionHeading eyebrow="Expertise" title="Engineering for complex environments." description="Architecture, modernization, AI, delivery and distributed platforms with a pragmatic production-first mindset." /><div className="mt-16 grid gap-6 md:grid-cols-3">{['Architecture & Audit','Senior Delivery Squads','AI & Web3 Platforms'].map((item)=><Card key={item}><h2 className="font-display text-2xl font-semibold">{item}</h2><p className="mt-4 text-zinc-400">Senior expertise for critical systems, from strategy to production.</p></Card>)}</div></section>
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
