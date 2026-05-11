export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-32">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">
          AI Engineering · Web3 · Software Craftsmanship
        </span>

        <h1 className="max-w-4xl font-display text-6xl font-bold leading-tight">
          Construire des systèmes qui tiennent dans le temps.
        </h1>

        <p className="max-w-2xl text-lg text-zinc-400">
          Teragone Factory est la filiale digitale, IA et Web3 du groupe
          Teragone Solutions. Nous concevons et délivrons des systèmes logiciels
          complexes, robustes et durables avec des équipes seniors.
        </p>

        <div className="flex gap-4">
          <a
            href="/contact"
            className="rounded-xl bg-primary px-6 py-4 font-medium text-white transition hover:opacity-90"
          >
            Discutons de votre projet
          </a>

          <a
            href="/expertises"
            className="rounded-xl border border-zinc-800 px-6 py-4 font-medium text-white transition hover:border-primary"
          >
            Découvrir nos expertises
          </a>
        </div>
      </section>
    </main>
  )
}
