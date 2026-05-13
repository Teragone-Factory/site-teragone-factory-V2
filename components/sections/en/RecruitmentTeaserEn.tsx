import { Button } from '@/components/ui/Button'

export function RecruitmentTeaserEn() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-card p-10 md:grid-cols-[1fr_0.5fr] md:items-center md:p-16">
        <div>
          <span className="text-sm uppercase tracking-[0.3em] text-primary">Careers</span>
          <h2 className="mt-4 font-display text-5xl font-bold tracking-tight">
            Join a senior engineering team focused on AI, architecture and distributed systems.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            We are looking for engineers passionate about complex systems, software craftsmanship, AI-ready platforms and production-grade delivery.
          </p>
        </div>
        <div className="flex justify-start md:justify-end">
          <Button href="/en/nous-rejoindre">View opportunities</Button>
        </div>
      </div>
    </section>
  )
}
