'use client'

import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/Button'

export function RecruitmentTeaser() {
  const pathname = usePathname() || '/'
  const isFrench = pathname.startsWith('/fr') || pathname.includes('/site-teragone-factory-V2/fr')

  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-card p-10 md:grid-cols-[1fr_0.5fr] md:items-center md:p-16">
        <div>
          <span className="text-sm uppercase tracking-[0.3em] text-primary">
            {isFrench ? 'Rejoindre Teragone Factory' : 'Join Teragone Factory'}
          </span>

          <h2 className="mt-4 font-display text-5xl font-bold tracking-tight">
            {isFrench
              ? 'Une équipe senior orientée architecture, IA et systèmes distribués.'
              : 'A senior engineering team focused on architecture, AI and distributed systems.'}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            {isFrench
              ? 'Nous recherchons des profils passionnés par les systèmes complexes, le software craftsmanship, les plateformes AI-ready et les architectures distribuées.'
              : 'We are looking for people passionate about complex systems, software craftsmanship, AI-ready platforms and distributed architectures.'}
          </p>
        </div>

        <div className="flex justify-start md:justify-end">
          <Button href={isFrench ? '/fr/nous-rejoindre' : '/nous-rejoindre'}>
            {isFrench ? 'Voir les opportunités' : 'View opportunities'}
          </Button>
        </div>
      </div>
    </section>
  )
}
