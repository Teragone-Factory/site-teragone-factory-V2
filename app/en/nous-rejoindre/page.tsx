import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTAEn } from '@/components/sections/en/FinalCTAEn'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Teragone Factory: software engineering, AI, architecture, Web3 and distributed systems.',
  alternates: { canonical: '/en/nous-rejoindre/', languages: { fr: '/nous-rejoindre/', en: '/en/nous-rejoindre/' } },
}

const roles = [
  {
    title: 'Software Engineers',
    text: 'Design and development of modern, robust and maintainable software platforms.',
  },
  {
    title: 'AI Engineers',
    text: 'AI industrialization, LLM orchestration, agents, RAG and AI-ready platforms.',
  },
  {
    title: 'Solution Architects',
    text: 'Software architecture, modernization, distributed systems and technical governance.',
  },
  {
    title: 'Tech Leads',
    text: 'Engineering leadership, delivery quality, mentoring and team enablement.',
  },
]

const values = [
  'Strong engineering culture',
  'Senior teams',
  'Complex modern projects',
  'AI, architecture and Web3',
  'Autonomy and ownership',
  'Knowledge sharing',
]

export default function CareersEN() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Join Teragone Factory</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Join a senior engineering team.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">We are looking for people passionate about complex systems, architecture, AI-ready platforms, distributed systems and software craftsmanship.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          {values.map((value) => <span key={value} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-400">{value}</span>)}
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {roles.map((role) => (
            <Card key={role.title}>
              <h2 className="mb-4 font-display text-3xl font-semibold">{role.title}</h2>
              <p className="mb-8 leading-7 text-zinc-400">{role.text}</p>
              <Button href="mailto:pellegrini@teragone-factory.com">Apply</Button>
            </Card>
          ))}
        </div>
        <section className="mt-24 rounded-[2rem] border border-white/10 bg-card p-10 md:p-16">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">Our approach</span>
          <h2 className="mt-4 max-w-4xl font-display text-5xl font-bold tracking-tight">Senior teams building durable systems.</h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">We value environments where engineering has real impact: architecture, software quality, delivery, modernization, AI, distributed platforms and ambitious technical challenges.</p>
        </section>
      </main>
      <FinalCTAEn />
      <Footer />
    </>
  )
}
