'use client'

import { usePathname } from 'next/navigation'

const fr = [
  ['Craftsmanship', 'Qualité durable', 'Nous concevons des systèmes lisibles, testables et maintenables, capables de continuer à évoluer après la première mise en production.'],
  ['AI Engineering', 'Delivery augmenté', 'Nous intégrons l’IA dans les pratiques d’ingénierie pour accélérer l’analyse, les tests, la documentation, le refactoring et l’automatisation sans sacrifier la maîtrise technique.'],
  ['Ownership', 'Responsabilité', 'Nos équipes seniors assument les choix d’architecture, la qualité d’exécution et les conditions réelles de mise en production.'],
  ['Transmission', 'Impact long terme', 'Nous documentons les décisions, partageons les pratiques et faisons monter les équipes internes en compétence tout au long de la mission.'],
]

const en = [
  ['Craftsmanship', 'Durable quality', 'Readable, testable and maintainable systems designed to last beyond the first delivery milestone.'],
  ['AI Engineering', 'Augmented delivery', 'AI embedded into engineering practices: analysis, testing, documentation, refactoring and controlled automation.'],
  ['Ownership', 'Accountability', 'Senior teams that take responsibility for quality, technical decisions and production readiness.'],
  ['Knowledge Transfer', 'Long-term impact', 'Documented decisions, shared practices and internal teams that grow stronger throughout the engagement.'],
]

export function DnaBlock() {
  const pathname = usePathname() || '/'
  const isFrench = pathname.startsWith('/fr') || pathname.includes('/site-teragone-factory-V2/fr')
  const values = isFrench ? fr : en

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.10),transparent_32%),radial-gradient(circle_at_90%_80%,rgba(6,182,212,0.08),transparent_30%)]" />
      <div className="relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <span className="text-sm uppercase tracking-[0.3em] text-primary">{isFrench ? 'Notre ADN' : 'Our DNA'}</span>
          <h2 className="mt-4 font-display text-5xl font-bold tracking-tight md:text-6xl">
            {isFrench ? 'Une culture d’ingénierie exigeante, pragmatique et orientée production.' : 'Engineering culture, pragmatism and technical excellence.'}
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            {isFrench ? 'Nous combinons software craftsmanship, AI engineering et transmission pour construire des systèmes utiles, robustes et réellement exploitables par les équipes.' : 'We combine software craftsmanship, AI engineering and knowledge transfer to build useful, robust and truly operable systems.'}
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {values.map(([title, highlight, text]) => (
            <article key={title} className="group rounded-[1.7rem] border border-white/10 bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.04]">
              <span className="mb-6 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-primary">{highlight}</span>
              <h3 className="font-display text-2xl font-semibold text-white">{title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
