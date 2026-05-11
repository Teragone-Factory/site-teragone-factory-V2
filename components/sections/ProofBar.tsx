const proofs = [
  'AI-ready architectures',
  'Senior engineering squads',
  'Web3 & distributed systems',
  'Production-grade delivery',
  'Critical environments',
  'Software craftsmanship',
]

export function ProofBar() {
  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-5">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 text-center text-xs uppercase tracking-[0.35em] text-zinc-500 md:text-sm">
        {proofs.map((proof) => (
          <span key={proof}>{proof}</span>
        ))}
      </div>
    </section>
  )
}
