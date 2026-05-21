import { asset } from '@/lib/routes'

const illustrations = {
  legacy: '/illustration use case High-criticality modernization and delivery..svg',
  ai: '/illustration use case Industrializing AI use cases in a complex information system.svg',
  mithril: '/mithril-logo.svg',
}

type UseCaseIllustrationProps = {
  type: keyof typeof illustrations
  alt: string
  className?: string
}

export function UseCaseIllustration({ type, alt, className = '' }: UseCaseIllustrationProps) {
  return (
    <img
      src={asset(illustrations[type])}
      alt={alt}
      className={className || 'h-auto w-full max-w-[360px]'}
    />
  )
}
