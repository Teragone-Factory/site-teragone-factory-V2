import { Button } from '@/components/ui/Button'

export function FinalCTAFr() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card p-10 md:p-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.16),transparent_35%)]" />
        <div className="relative max-w-4xl">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">Prochaine étape</span>
          <h2 className="mt-4 font-display text-5xl font-bold tracking-tight md:text-6xl">
            Vous devez sécuriser une plateforme critique, moderniser un existant ou industrialiser un projet IA ?
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Parlons de vos enjeux, de vos contraintes et de la meilleure façon de mobiliser une équipe senior capable de produire des résultats concrets.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/fr/contact">Échanger avec Teragone Factory</Button>
            <Button href="/fr/expertises" variant="outline">Découvrir nos expertises</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
