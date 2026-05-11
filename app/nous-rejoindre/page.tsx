import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { Button } from '@/components/ui/Button'

export default function RecrutementPage() {
  return (
    <>
      <NavBar />

      <main className="mx-auto max-w-6xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">
          Rejoindre Teragone Factory
        </span>

        <h1 className="mt-4 max-w-4xl font-display text-6xl font-bold tracking-tight">
          Rejoindre une équipe senior orientée engineering.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          Nous recherchons des profils seniors passionnés par l'architecture,
          l'IA, les systèmes distribués, le software craftsmanship et les
          environnements complexes.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {[
            'Software Engineers',
            'AI Engineers',
            'Architectes Solutions',
            'Tech Leads',
          ].map((role) => (
            <div
              key={role}
              className="rounded-3xl border border-white/10 bg-card p-8"
            >
              <h2 className="mb-6 font-display text-3xl font-semibold">
                {role}
              </h2>

              <Button href="/contact">Postuler</Button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}
