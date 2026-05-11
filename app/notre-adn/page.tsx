import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'

export default function NotreADNPage() {
  return (
    <>
      <NavBar />

      <main className="mx-auto max-w-6xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">
          Notre ADN
        </span>

        <h1 className="mt-4 font-display text-6xl font-bold tracking-tight">
          Engineering culture first.
        </h1>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Software Craftsmanship',
              text: 'Qualité logicielle, maintenabilité, transmission et excellence engineering.',
            },
            {
              title: 'AI-ready Systems',
              text: 'Des systèmes conçus pour intégrer durablement les usages IA et agents.',
            },
            {
              title: 'Delivery & Ownership',
              text: 'Des équipes seniors orientées résultat, production et impact métier.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-card p-8"
            >
              <h2 className="mb-4 font-display text-2xl font-semibold">
                {item.title}
              </h2>

              <p className="leading-7 text-zinc-400">{item.text}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}
