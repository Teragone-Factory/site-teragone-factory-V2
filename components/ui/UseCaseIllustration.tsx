import { asset } from '@/lib/routes'

const illustrations = {
  legacy: '/illustration%20use%20case%20High-criticality%20modernization%20and%20delivery..svg',
  ai: '/illustration%20use%20case%20Industrializing%20AI%20use%20cases%20in%20a%20complex%20information%20system.svg',
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
