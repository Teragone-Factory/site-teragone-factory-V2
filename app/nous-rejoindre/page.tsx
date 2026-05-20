import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTAFr } from '@/components/sections/fr/FinalCTAFr'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Teragone Factory: software engineering, AI, architecture, Web3 and distributed systems.',
  alternates: { canonical: '/nous-rejoindre/', languages: { fr: '/fr/nous-rejoindre/', en: '/nous-rejoindre/' } },
}

const roles = [
  { title: 'Software Engineers', text: 'Design and development of modern, robust and maintainable software platforms.' },
  { title: 'AI Engineers', text: 'AI industrialization, LLM orchestration, agents, RAG and AI-ready platforms.' },
  { title: 'Solution Architects', text: 'Software architecture, modernization, distributed systems and technical governance.' },
  { title: 'Tech Leads', text: 'Engineering leadership, delivery quality, mentoring and team enablement.' },
]

const values = ['Forte culture engineering', 'Equipes seniors', 'Projets modernes complexes', 'IA, architecture et Web3', 'Autonomie & ownership', 'Partage de connaissance']

export default function CareersFR() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Rejoindre Teragone Factory</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Rejoindre une equipe engineering senior.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">Nous recherchons des personnes passionnees par les systemes complexes, l architecture, les plateformes AI-ready, les systemes distribues et le software craftsmanship.</p>
        <div className="mt-10 flex flex-wrap gap-3">{values.map((value) => <span key={value} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-400">{value}</span>)}</div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">{roles.map((role) => <Card key={role.title}><h2 className="mb-4 font-display text-3xl font-semibold">{role.title}</h2><p className="mb-8 leading-7 text-zinc-400">{role.text}</p><Button href="mailto:pellegrini@teragone-factory.com">Apply</Button></Card>)}</div>
        <section className="mt-24 rounded-[2rem] border border-white/10 bg-card p-10 md:p-16"><span className="text-sm uppercase tracking-[0.3em] text-primary">Notre approche</span><h2 className="mt-4 max-w-4xl font-display text-5xl font-bold tracking-tight">Des equipes seniors pour construire des systemes durables.</h2><p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">Nous valorisons les environnements ou l engineering a un vrai impact : architecture, qualite logicielle, delivery, modernisation, IA, plateformes distribuees et challenges techniques ambitieux.</p></section>
      </main>
      <FinalCTAFr />
      <Footer />
    </>
  )
}
