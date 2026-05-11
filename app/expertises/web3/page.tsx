import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { Button } from '@/components/ui/Button'

export default function Web3Page() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-6xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Web3 & Blockchain</span>
        <h1 className="mt-4 font-display text-6xl font-bold tracking-tight">Distributed systems & blockchain engineering.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">Protocoles distribués, infrastructures blockchain, synchronisation réseau, validation légère, architectures décentralisées et plateformes Web3 production-grade.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {['Protocol Engineering', 'Distributed Infrastructure', 'Web3 Platforms'].map((item) => <div key={item} className="rounded-3xl border border-white/10 bg-card p-8"><h2 className="font-display text-2xl font-semibold">{item}</h2><p className="mt-4 text-zinc-400">Une expertise issue de projets blockchain complexes et internationaux.</p></div>)}
        </div>
        <div className="mt-12"><Button href="/contact">Discuter Web3 & Infrastructure</Button></div>
      </main>
      <Footer />
    </>
  )
}
