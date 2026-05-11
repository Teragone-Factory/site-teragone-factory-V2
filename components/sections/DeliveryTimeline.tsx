const steps = [
  {
    title: 'Audit & Discovery',
    text: 'Analyse architecture, gouvernance, dette technique et enjeux métiers.',
  },
  {
    title: 'Architecture & Design',
    text: 'Conception de plateformes modernes, modulaires et AI-ready.',
  },
  {
    title: 'Delivery & Production',
    text: 'Implémentation senior, industrialisation et mise en production.',
  },
  {
    title: 'Transmission & Scale',
    text: 'Documentation, montée en compétence et gouvernance long terme.',
  },
]

export function DeliveryTimeline() {
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      {steps.map((step, index) => (
        <div key={step.title} className="relative rounded-3xl border border-white/10 bg-card p-8">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 font-display text-xl font-bold text-primary">
            {index + 1}
          </div>

          <h3 className="mb-4 font-display text-2xl font-semibold text-white">
            {step.title}
          </h3>

          <p className="leading-7 text-zinc-400">{step.text}</p>
        </div>
      ))}
    </div>
  )
}
