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

function LegacyInlineSvg({ className, title }: { className: string; title: string }) {
  return (
    <svg className={className} viewBox="0 0 720 360" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={title}>
      <style>{`.cls-1{fill:#000;stroke-width:0px}.cls-muted{fill:#475569;stroke-width:0px}.cls-bg{fill:transparent;stroke-width:0px}.cls-card{fill:#EEF4FF;stroke:#BFDBFE}.cls-core{fill:#EFF6FF;stroke:#06B6D4}@media (prefers-color-scheme: dark){.cls-1{fill:white;stroke-width:0px}.cls-muted{fill:#94A3B8;stroke-width:0px}.cls-bg{fill:transparent;stroke-width:0px}.cls-card{fill:#1E293B;stroke:#334155}.cls-core{fill:#111827;stroke:#06B6D4}}`}</style>
      <rect width="720" height="360" rx="28" className="cls-bg" />
      <rect x="60" y="95" width="130" height="56" rx="14" className="cls-card" />
      <text x="125" y="128" textAnchor="middle" className="cls-1" fontSize="16" fontFamily="Arial">Legacy Systems</text>
      <rect x="60" y="175" width="130" height="56" rx="14" className="cls-card" />
      <text x="125" y="208" textAnchor="middle" className="cls-1" fontSize="16" fontFamily="Arial">Infrastructure</text>
      <rect x="60" y="255" width="130" height="56" rx="14" className="cls-card" />
      <text x="125" y="288" textAnchor="middle" className="cls-1" fontSize="16" fontFamily="Arial">Operations</text>
      <rect x="245" y="78" width="230" height="205" rx="24" className="cls-core" strokeWidth="2" />
      <circle cx="360" cy="135" r="34" fill="#06B6D4" opacity="0.15" />
      <rect x="334" y="122" width="52" height="22" rx="6" stroke="#06B6D4" strokeWidth="2" />
      <circle cx="345" cy="151" r="5" fill="#06B6D4" />
      <circle cx="375" cy="151" r="5" fill="#06B6D4" />
      <path d="M347 162L340 182" stroke="#06B6D4" strokeWidth="2" />
      <path d="M373 162L380 182" stroke="#06B6D4" strokeWidth="2" />
      <path d="M343 176H377" stroke="#06B6D4" strokeWidth="2" />
      <text x="360" y="215" textAnchor="middle" className="cls-1" fontSize="22" fontFamily="Arial" fontWeight="bold">Mobility Delivery</text>
      <text x="360" y="242" textAnchor="middle" className="cls-muted" fontSize="14" fontFamily="Arial">Audit • Delivery • Rollout</text>
      <rect x="530" y="95" width="130" height="56" rx="14" className="cls-card" />
      <text x="595" y="128" textAnchor="middle" className="cls-1" fontSize="16" fontFamily="Arial">Production</text>
      <rect x="530" y="175" width="130" height="56" rx="14" className="cls-card" />
      <text x="595" y="208" textAnchor="middle" className="cls-1" fontSize="16" fontFamily="Arial">Monitoring</text>
      <rect x="530" y="255" width="130" height="56" rx="14" className="cls-card" />
      <text x="595" y="288" textAnchor="middle" className="cls-1" fontSize="16" fontFamily="Arial">Reliability</text>
      <path d="M190 123H245" stroke="#06B6D4" strokeWidth="2.5" />
      <path d="M190 203H245" stroke="#06B6D4" strokeWidth="2.5" />
      <path d="M190 283H245" stroke="#06B6D4" strokeWidth="2.5" />
      <path d="M475 123H530" stroke="#8B5CF6" strokeWidth="2.5" />
      <path d="M475 203H530" stroke="#8B5CF6" strokeWidth="2.5" />
      <path d="M475 283H530" stroke="#8B5CF6" strokeWidth="2.5" />
      <circle cx="218" cy="123" r="3" fill="#06B6D4" />
      <circle cx="218" cy="203" r="3" fill="#06B6D4" />
      <circle cx="218" cy="283" r="3" fill="#06B6D4" />
      <circle cx="502" cy="123" r="3" fill="#8B5CF6" />
      <circle cx="502" cy="203" r="3" fill="#8B5CF6" />
      <circle cx="502" cy="283" r="3" fill="#8B5CF6" />
    </svg>
  )
}

function AiInlineSvg({ className, title }: { className: string; title: string }) {
  return (
    <svg className={className} viewBox="0 0 720 360" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={title}>
      <style>{`.cls-1{fill:#000;stroke-width:0px}.cls-muted{fill:#475569;stroke-width:0px}.cls-bg{fill:transparent;stroke-width:0px}.cls-card{fill:#EEF4FF;stroke:#BFDBFE}.cls-core{fill:#EFF6FF;stroke:#3B82F6}@media (prefers-color-scheme: dark){.cls-1{fill:white;stroke-width:0px}.cls-muted{fill:#94A3B8;stroke-width:0px}.cls-bg{fill:transparent;stroke-width:0px}.cls-card{fill:#1E293B;stroke:#334155}.cls-core{fill:#111827;stroke:#3B82F6}}`}</style>
      <rect width="720" height="360" rx="28" className="cls-bg" />
      <rect x="70" y="90" width="120" height="52" rx="14" className="cls-card" />
      <text x="130" y="122" textAnchor="middle" className="cls-1" fontSize="16" fontFamily="Arial">ERP / CRM</text>
      <rect x="70" y="165" width="120" height="52" rx="14" className="cls-card" />
      <text x="130" y="197" textAnchor="middle" className="cls-1" fontSize="16" fontFamily="Arial">Data Sources</text>
      <rect x="70" y="240" width="120" height="52" rx="14" className="cls-card" />
      <text x="130" y="272" textAnchor="middle" className="cls-1" fontSize="16" fontFamily="Arial">Workflows</text>
      <rect x="255" y="85" width="210" height="190" rx="24" className="cls-core" strokeWidth="2" />
      <circle cx="360" cy="135" r="34" fill="#3B82F6" opacity="0.18" />
      <text x="360" y="205" textAnchor="middle" className="cls-1" fontSize="22" fontFamily="Arial" fontWeight="bold">Enterprise AI</text>
      <text x="360" y="232" textAnchor="middle" className="cls-muted" fontSize="14" fontFamily="Arial">RAG • LLM • Governance</text>
      <rect x="530" y="105" width="120" height="52" rx="14" className="cls-card" />
      <text x="590" y="137" textAnchor="middle" className="cls-1" fontSize="16" fontFamily="Arial">AI Agents</text>
      <rect x="530" y="180" width="120" height="52" rx="14" className="cls-card" />
      <text x="590" y="212" textAnchor="middle" className="cls-1" fontSize="16" fontFamily="Arial">Insights</text>
      <rect x="530" y="255" width="120" height="52" rx="14" className="cls-card" />
      <text x="590" y="287" textAnchor="middle" className="cls-1" fontSize="16" fontFamily="Arial">Automation</text>
      <path d="M190 116H255" stroke="#3B82F6" strokeWidth="2.5" />
      <path d="M190 191H255" stroke="#3B82F6" strokeWidth="2.5" />
      <path d="M190 266H255" stroke="#3B82F6" strokeWidth="2.5" />
      <path d="M465 116H530" stroke="#8B5CF6" strokeWidth="2.5" />
      <path d="M465 191H530" stroke="#8B5CF6" strokeWidth="2.5" />
      <path d="M465 266H530" stroke="#8B5CF6" strokeWidth="2.5" />
    </svg>
  )
}

export function UseCaseIllustration({ type, alt, className = '' }: UseCaseIllustrationProps) {
  const safeClassName = className || 'h-auto w-full max-w-[360px]'

  if (type === 'legacy') return <LegacyInlineSvg className={safeClassName} title={alt} />
  if (type === 'ai') return <AiInlineSvg className={safeClassName} title={alt} />

  return <img src={asset(illustrations[type])} alt={alt} className={safeClassName} />
}
