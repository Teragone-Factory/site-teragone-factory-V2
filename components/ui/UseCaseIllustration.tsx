import { asset } from '@/lib/routes'

const illustrations = {
  legacy: '/illustration use case High-criticality modernization and delivery..svg',
  ai: '/illustration use case Industrializing AI use cases in a complex information system.svg',
  audit: '/illustration use case Regaining control over technical debt and delivery slowdown.svg',
  mithril: '/mithril-logo.svg',
}

type UseCaseIllustrationProps = {
  type: keyof typeof illustrations
  alt: string
  className?: string
}

export function UseCaseIllustration({ type, alt, className = '' }: UseCaseIllustrationProps) {
  const themeAwareClassName = [
    className || 'h-auto w-full max-w-[360px]',
    'mix-blend-multiply dark:mix-blend-normal',
  ].join(' ')

  return (
    <img
      src={asset(illustrations[type])}
      alt={alt}
      className={themeAwareClassName}
    />
  )
}
