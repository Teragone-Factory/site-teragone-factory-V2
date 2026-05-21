import Link from 'next/link'
import { asset, route } from '@/lib/routes'
import { MithrilLogo } from '@/components/ui/MithrilLogo'

type UseCaseCardProps = {
  sector: string
  pillar: string
  problem: string
  story: string
  intervention: string
  benefits: string
  thumbnail?: string
  href?: string
}

function thumbnailSrc(path: string) {
  return asset(path)
}

export function UseCaseCard({ sector, pillar, problem, story, intervention, benefits, thumbnail, href }: UseCaseCardProps) {
  const isMithril = pillar.toLowerCase().includes('mithril')
  const content = (
    <>
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition group-hover:scale-125" />
      <div className="relative">
        {(thumbnail || isMithril) && (
          <div className="mb-7 flex min-h-[190px] items-center justify-center rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
            {isMithril ? (
              <MithrilLogo className="h-auto w-full max-w-[360px]" />
            ) : thumbnail ? (
              <img src={thumbnailSrc(thumbnail)} alt={`${pillar} logo`} className="h-auto max-h-36 w-full max-w-[360px] object-contain" />
            ) : null}
          </div>
        )}

        <div className="mb-6 flex flex-wrap gap-3">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">{pillar}</span>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-400">{sector}</span>
        </div>

        <h3 className="font-display text-2xl font-semibold leading-tight text-white">{problem}</h3>

        <div className="mt-6 space-y-5 text-sm leading-7 text-zinc-400">
          <p>{story}</p>
          <p><strong className="text-zinc-200">What we delivered — </strong>{intervention}</p>
          <p><strong className="text-zinc-200">Business impact — </strong>{benefits}</p>
        </div>

        {href && <div className="mt-8 text-sm font-semibold text-primary">View case study <span>→</span></div>}
      </div>
    </>
  )

  const className = "group relative block overflow-hidden rounded-[2rem] border border-white/10 bg-card p-8 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.04]"

  if (href) return <Link href={route(href)} className={className}>{content}</Link>

  return <article className={className}>{content}</article>
}
