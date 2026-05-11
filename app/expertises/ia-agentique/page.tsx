import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { Button } from '@/components/ui/Button'

export default function AIPage() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-6xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">AI Engineering</span>
        <h1 className="mt-4 font-display text-6xl font-bold tracking-tight">AI-ready & Agent-ready systems.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">Nous concevons des architectures capables d'intégrer durablement des usages IA, agents autonomes, RAG, orchestration LLM et automatisation avancée dans des systèmes complexes.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {['RAG & Knowledge Systems', 'Agentic Workflows', 'AI Platform Engineering'].map((item) => <div key={item} className="rounded-3xl border border-white/10 bg-card p-8"><h2 className="font-display text-2xl font-semibold">{item}</h2><p className="mt-4 text-zinc-400">Des architectures robustes, observables et orientées production réelle.</p></div>)}
        </div>
        <div className="mt-12"><Button href="/contact">Construire une plateforme IA</Button></div>
      </main>
      <Footer />
    </>
  )
}
