import { asset } from '@/lib/routes'

export function MithrilLogo({ className = '' }: { className?: string }) {
  return (
    <img
      src={asset('/mithril-logo.svg')}
      alt="Mithril Protocol logo"
      className={className || 'h-auto w-full max-w-[420px]'}
    />
  )
}
