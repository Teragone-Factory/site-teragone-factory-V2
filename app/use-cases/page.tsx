import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'

export default function UseCasesPage() {
  return (
    <>
      <NavBar />

      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">
          Use Cases
        </span>

        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">
          Des projets complexes. Des résultats concrets.
        </h1>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            'Transport & mobilité',
            'AI Platforms',
            'Blockchain Infrastructure',
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-card p-8"
            >
              <h2 className="mb-4 font-display text-2xl font-semibold">
                {item}
              </h2>

              <p className="text-zinc-400">
                Modernisation, architecture, IA et delivery sur des systèmes à
                forte criticité métier.
              </p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}
