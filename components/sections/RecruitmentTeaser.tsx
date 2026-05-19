'use client'

import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/Button'

export function RecruitmentTeaser() {
  const pathname = usePathname() || '/'
  const isEnglish = pathname.startsWith('/en') || pathname.includes('/site-teragone-factory-V2/en')

  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-card p-10 md:grid-cols-[1fr_0.5fr] md:items-center md:p-16">
        <div>
          <span className="text-sm uppercase tracking-[0.3em] text-primary">
            {isEnglish ? 'Join Teragone Factory' : 'Rejoindre Teragone Factory'}
          </span>

          <h2 className="mt-4 font-display text-5xl font-bold tracking-tight">
            {isEnglish
              ? 'A senior engineering team focused on architecture, AI and distributed systems.'
              : 'Une équipe senior orientée architecture, IA et systèmes distribués.'}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            {isEnglish
              ? 'We are looking for people passionate about complex systems, software craftsmanship, AI-ready platforms and distributed architectures.'
              : 'Nous recherchons des profils passionnés par les systèmes complexes, le software craftsmanship, les plateformes AI-ready et les architectures distribuées.'}
          </p>
        </div>

        <div className="flex justify-start md:justify-end">
          <Button href={isEnglish ? '/en/nous-rejoindre' : '/nous-rejoindre'}>
            {isEnglish ? 'View opportunities' : 'Voir les opportunités'}
          </Button>
        </div>
      </div>
    </section>
  )
}
