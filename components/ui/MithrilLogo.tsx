import { asset } from '@/lib/routes'

export function MithrilLogo({ className = '' }: { className?: string }) {
  const src = asset('/mithril-logo.svg')

  return (
    <object
      data={src}
      type="image/svg+xml"
      aria-label="Mithril Protocol logo"
      className={className || 'h-auto w-full max-w-[420px]'}
    >
      <img src={src} alt="Mithril Protocol logo" className={className || 'h-auto w-full max-w-[420px]'} />
    </object>
  )
}
