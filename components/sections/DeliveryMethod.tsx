import { DeliveryTimeline } from '@/components/sections/DeliveryTimeline'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function DeliveryMethod() {
  return (
    <section className="border-y border-white/5 bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <SectionHeading
          eyebrow="Méthode"
          title="De l'audit à la production, sans perdre l'exigence engineering."
          description="Notre approche combine cadrage rapide, architecture pragmatique, delivery senior et transmission pour sécuriser les systèmes critiques dans la durée."
        />

        <div className="mt-16">
          <DeliveryTimeline />
        </div>
      </div>
    </section>
  )
}
