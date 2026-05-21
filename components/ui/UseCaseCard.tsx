import { asset } from '@/lib/routes'

type UseCaseCardProps = {
  sector: string
  pillar: string
  problem: string
  story: string
  intervention: string
  benefits: string
  thumbnail?: string
}

function thumbnailSrc(path: string) {
  return asset(path)
}

export function UseCaseCard({ sector, pillar, problem, story, intervention, benefits, thumbnail }: UseCaseCardProps) {
  const isMithril = pillar.toLowerCase().includes('mithril')

  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-card p-8 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.04]">
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition group-hover:scale-125" />
      <div className="relative">
        {thumbnail && (
          <div className="mb-7 flex min-h-[190px] items-center justify-center rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
            {isMithril ? (
              <div
                aria-label={`${pillar} logo`}
                role="img"
                className="h-28 w-full max-w-[360px] bg-black dark:bg-white"
                style={{
                  WebkitMaskImage: `url(${thumbnailSrc(thumbnail)})`,
                  maskImage: `url(${thumbnailSrc(thumbnail)})`,
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                }}
              />
            ) : (
              <img src={thumbnailSrc(thumbnail)} alt={`${pillar} logo`} className="h-auto max-h-36 w-full max-w-[360px] object-contain" />
            )}
          </div>
        )}

        <div className="mb-6 flex flex-wrap gap-3">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">{pillar}</span>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-400">{sector}</span>
        </div>

        <h3 className="font-display text-2xl font-semibold leading-tight text-white">{problem}</h3>

        <div className="mt-6 space-y-5 text-sm leading-7 text-zinc-400">
          <p>{story}</p>

          <p>
            <strong className="text-zinc-200">What we delivered — </strong>
            {intervention}
          </p>

          <p>
            <strong className="text-zinc-200">Business impact — </strong>
            {benefits}
          </p>
        </div>
      </div>
    </article>
  )
}
