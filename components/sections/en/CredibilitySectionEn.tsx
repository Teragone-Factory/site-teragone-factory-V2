import { Card } from '@/components/ui/Card'

const items = [
  {
    title: 'Critical environments',
    text: 'We operate on complex software platforms, legacy systems and high-stakes engineering environments where quality matters.',
  },
  {
    title: 'AI & distributed systems',
    text: 'We design AI-ready architectures, agentic systems, distributed platforms and Web3 infrastructure with production constraints in mind.',
  },
  {
    title: 'Senior-only delivery',
    text: 'Our squads bring senior engineering judgment, ownership and delivery capacity without compromising long-term maintainability.',
  },
]

export function CredibilitySectionEn() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-14 max-w-4xl">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Why companies work with us</span>
        <h2 className="mt-4 font-display text-5xl font-bold tracking-tight">Engineering culture focused on real-world impact.</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title}>
            <h3 className="mb-4 font-display text-2xl font-semibold text-white">{item.title}</h3>
            <p className="leading-7 text-zinc-400">{item.text}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
