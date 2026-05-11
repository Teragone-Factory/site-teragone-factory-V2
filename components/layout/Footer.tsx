export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#09090D]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="mb-3 font-display text-2xl font-bold text-white">
            Teragone Factory
          </h3>

          <p className="max-w-xl text-sm leading-7 text-zinc-500">
            Digital & AI Delivery Factory du groupe Teragone Solutions.
            Architectures critiques, AI Engineering, Web3 & Software
            Craftsmanship.
          </p>
        </div>

        <div className="text-sm text-zinc-500">
          © 2026 Teragone Factory — Nantes, France
        </div>
      </div>
    </footer>
  )
}
