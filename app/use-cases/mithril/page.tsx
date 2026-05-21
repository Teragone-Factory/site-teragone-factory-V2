import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTAEn } from '@/components/sections/en/FinalCTAEn'
import { Card } from '@/components/ui/Card'
import { asset } from '@/lib/routes'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mithril Protocol Use Case',
  description: 'How Teragone Factory contributed to Mithril, a lightweight certification and fast synchronization protocol for blockchain infrastructure.',
  alternates: { canonical: '/use-cases/mithril/', languages: { fr: '/fr/use-cases/mithril/', en: '/use-cases/mithril/' } },
}

const highlights = [
  ['Challenge', 'Large blockchain networks need faster, lighter and more trustworthy ways to bootstrap infrastructure without replaying excessive historical state.'],
  ['Contribution', 'We contributed to a distributed certification protocol producing verifiable snapshots for faster synchronization and lightweight validation.'],
  ['Impact', 'Operators gain faster bootstrap, stronger resilience and a more scalable infrastructure experience for distributed services.'],
]

function MithrilLogo() {
  return <img src={asset('/mithril-logo.svg')} alt="Mithril Protocol logo" className="h-auto w-full max-w-[420px]" />
}

export default function MithrilUseCasePage() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <section className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-card p-10 shadow-2xl shadow-primary/10">
            <div className="flex min-h-[240px] items-center justify-center rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-10">
              <MithrilLogo />
            </div>
          </div>
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-primary">Use Case · Blockchain Infrastructure</span>
            <h1 className="mt-5 font-display text-6xl font-bold tracking-tight">Mithril Protocol.</h1>
            <p className="mt-8 text-lg leading-8 text-zinc-400">Making blockchain synchronization lighter, faster and more reliable through distributed certification and verifiable snapshots.</p>
          </div>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-3">
          {highlights.map(([title, text]) => <Card key={title}><h2 className="font-display text-2xl font-semibold">{title}</h2><p className="mt-4 leading-7 text-zinc-400">{text}</p></Card>)}
        </section>

        <section className="mt-20 rounded-[2rem] border border-white/10 bg-card p-10 md:p-16">
          <h2 className="font-display text-4xl font-semibold">What we delivered</h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-400">We contributed to the design and development of a distributed certification protocol producing verifiable snapshots. The goal was to reduce synchronization time, enable lightweight validation and improve access to certified network state without relying on heavy infrastructure assumptions.</p>
          <h2 className="mt-12 font-display text-4xl font-semibold">Business and ecosystem impact</h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-400">The network gains a more scalable way to distribute certified snapshots and support large-scale blockchain operations. Operators and developers benefit from faster bootstrap, lighter validation, stronger resilience and a better infrastructure experience.</p>
        </section>
      </main>
      <FinalCTAEn />
      <Footer />
    </>
  )
}
