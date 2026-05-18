import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'

const assetPath = process.env.NODE_ENV === 'production' ? '/site-teragone-factory-V2' : ''

const landingUseCases = [
  { tag: 'Transport & mobilité', title: 'Modernisation et delivery à forte criticité.', text: 'Audit, architecture, squads seniors et mise en production sur des environnements complexes.', visual: 'legacy' },
  { tag: 'Plateforme IA enterprise', title: 'Industrialisation d’usages IA dans un SI complexe.', text: 'RAG, orchestration LLM, gouvernance et intégration durable dans les workflows métiers.', visual: 'ai' },
  { tag: 'Mithril protocol', title: 'Certification légère et synchronisation blockchain.', text: 'Snapshots certifiés, validation légère et bootstrap rapide pour infrastructures distribuées.', visual: 'mithril' },
]

function UseCaseThumbnail({ type }: { type: string }) {
  if (type === 'mithril') {
    return (
      <div className="mb-6 flex h-28 items-center justify-center rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#101827] via-[#111827] to-[#0B1020] p-5">
        <img src={`${assetPath}/mithril-logo-text.svg`} alt="Mithril" className="h-9 w-auto opacity-100" />
      </div>
    )
  }

  if (type === 'ai') {
    return (
      <div className="mb-6 flex h-28 items-center justify-center rounded-2xl border border-cyan-400/15 bg-gradient-to-br from-[#0D1725] via-[#101827] to-[#11152A] p-5">
        <div className="relative h-20 w-full max-w-[220px]">
          <div className="absolute left-0 top-7 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-cyan-200">Data</div>
          <div className="absolute left-1/2 top-1 -translate-x-1/2 rounded-2xl border border-blue-400/35 bg-blue-400/10 px-5 py-3 text-xs font-semibold text-blue-100">AI Core</div>
          <div className="absolute right-0 top-7 rounded-xl border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-violet-200">Workflow</div>
          <div className="absolute left-[62px] top-10 h-px w-12 bg-cyan-300/40" />
          <div className="absolute right-[78px] top-10 h-px w-12 bg-violet-300/40" />
        </div>
      </div>
    )
  }

  return (
    <div className="mb-6 flex h-28 items-center justify-center rounded-2xl border border-blue-400/15 bg-gradient-to-br from-[#0E1726] via-[#111827] to-[#101223] p-5">
      <div className="relative h-20 w-full max-w-[220px]">
        <div className="absolute left-0 top-2 h-14 w-16 rounded-2xl border border-blue-400/25 bg-blue-400/10" />
        <div className="absolute left-[78px] top-8 h-px w-16 bg-blue-300/35" />
        <div className="absolute right-0 top-2 h-14 w-16 rounded-2xl border border-violet-400/25 bg-violet-400/10" />
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-zinc-300">Modernize</div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="overflow-hidden bg-background text-white">
        <section className="mx-auto max-w-7xl px-6 py-28">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Use Cases" title="Des projets réels. Des systèmes critiques." />
            <Button href="/use-cases" variant="ghost">Voir tous les cas clients →</Button>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {landingUseCases.map((item) => (
              <Card key={item.title}>
                <UseCaseThumbnail type={item.visual} />
                <span className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">{item.tag}</span>
                <h3 className="mb-4 font-display text-2xl font-semibold">{item.title}</h3>
                <p className="text-sm leading-7 text-zinc-400">{item.text}</p>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
