import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTAEn } from '@/components/sections/en/FinalCTAEn'
import { Card } from '@/components/ui/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our DNA',
  description: 'Our engineering culture: software craftsmanship, AI engineering, ownership and production-grade delivery.',
  alternates: { canonical: '/notre-adn/', languages: { fr: '/fr/notre-adn/', en: '/notre-adn/' } },
}

const values = [
  ['Software Craftsmanship', 'Software quality, readability, maintainability, engineering excellence and the ability to evolve systems over time.'],
  ['AI Engineering', 'AI is a delivery practice in its own right: assisted development, testing, documentation, refactoring, code analysis and controlled automation.'],
  ['AI-ready Systems', 'Platforms designed to sustainably integrate AI, agents, automation and emerging use cases into production-grade environments.'],
  ['Delivery & Ownership', 'Senior teams focused on outcomes, business impact, production readiness and long-term technical responsibility.'],
  ['Architecture Thinking', 'Taking a step back on systems, flows, organizations, data and long-term constraints before building.'],
  ['Knowledge Transfer & Pragmatism', 'Documenting, sharing, helping teams grow and choosing the right technologies at the right time without dogmatism.'],
]

export default function DNAEN() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Our DNA</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Engineering culture first.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">Teragone Factory is built around a simple belief: critical systems require senior teams, a strong engineering culture, controlled AI engineering practices and a long-term vision.</p>
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {values.map(([title, text]) => (
            <Card key={title}>
              <h2 className="mb-4 font-display text-2xl font-semibold">{title}</h2>
              <p className="leading-7 text-zinc-400">{text}</p>
            </Card>
          ))}
        </div>
        <section className="mt-24 rounded-[2rem] border border-white/10 bg-card p-10 md:p-16">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">Our vision</span>
          <h2 className="mt-4 max-w-4xl font-display text-5xl font-bold tracking-tight">Building modern, observable, AI-ready and durable systems.</h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">We believe architecture, delivery, software quality, AI engineering and business impact must work together. Our goal is not only to deliver fast, but to build platforms that can evolve sustainably.</p>
        </section>
      </main>
      <FinalCTAEn />
      <Footer />
    </>
  )
}
