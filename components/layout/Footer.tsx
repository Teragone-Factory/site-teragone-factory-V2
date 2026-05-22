'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { route } from '@/lib/routes'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/teragone-factory/',
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com/TeragoneFactory',
  },
]

export function Footer() {
  const pathname = usePathname() || '/'
  const isFrench = pathname.startsWith('/fr') || pathname.includes('/site-teragone-factory-V2/fr')

  const navigation = isFrench
    ? [
        { href: '/fr/expertises', label: 'Expertises' },
        { href: '/fr/use-cases', label: 'Use Cases' },
        { href: '/fr/notre-adn', label: 'Notre ADN' },
        { href: '/fr/blog', label: 'Blog' },
        { href: '/fr/nous-rejoindre', label: 'Rejoindre' },
        { href: '/fr/contact', label: 'Contact' },
      ]
    : [
        { href: '/expertises', label: 'Expertise' },
        { href: '/use-cases', label: 'Use Cases' },
        { href: '/notre-adn', label: 'Our DNA' },
        { href: '/blog', label: 'Blog' },
        { href: '/nous-rejoindre', label: 'Careers' },
        { href: '/contact', label: 'Contact' },
      ]

  const legalLinks = isFrench
    ? [
        { href: '/legal', label: 'Mentions légales' },
        { href: '/terms', label: 'CGU' },
        { href: '/cookies', label: 'Politique de cookies' },
      ]
    : [
        { href: '/legal', label: 'Legal notice' },
        { href: '/terms', label: 'Terms of use' },
        { href: '/cookies', label: 'Cookie policy' },
      ]

  return (
    <footer className="border-t border-white/5 bg-[#09090D]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <h3 className="mb-4 font-display text-3xl font-bold text-white">
            Teragone Factory
          </h3>

          <p className="max-w-2xl text-sm leading-8 text-zinc-500">
            {isFrench
              ? 'Digital & AI Delivery Factory du groupe Teragone Solutions. Architecture logicielle, AI Engineering, Web3, systèmes distribués et delivery senior pour environnements critiques.'
              : 'Digital & AI Delivery Factory focused on software architecture, AI Engineering, Web3, distributed systems and senior delivery for critical environments.'}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {['AI Engineering', 'Web3', 'Architecture', 'Distributed Systems'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid content-start gap-3 text-sm text-zinc-400">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">Navigation</p>

          {navigation.map((item) => (
            <Link key={item.href} href={route(item.href)} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="content-start text-sm text-zinc-400">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">
            Legal
          </p>

          <div className="flex flex-col gap-3">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={route(link.href)}
                className="group inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-primary/40 hover:bg-white/[0.06] hover:text-white"
              >
                <span>{link.label}</span>
                <span className="text-primary transition group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">
              Social
            </p>

            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-primary/40 hover:bg-white/[0.06] hover:text-white"
                >
                  <span>{link.label}</span>
                  <span className="text-primary transition group-hover:translate-x-1">→</span>
                </a>
              ))}
            </div>
          </div>

          <p className="mt-6 text-xs leading-6 text-zinc-600">
            {isFrench
              ? 'Suivez nos publications sur l’AI Engineering, le Web3, les systèmes distribués et le software craftsmanship.'
              : 'Follow our publications on AI Engineering, Web3, distributed systems and software craftsmanship.'}
          </p>
        </div>
      </div>

      <div className="border-t border-white/5 px-6 py-6 text-center text-xs uppercase tracking-[0.25em] text-zinc-600">
        © 2026 Teragone Factory — {isFrench ? 'Engineering durable & systèmes AI-ready' : 'Sustainable engineering & AI-ready systems'}
      </div>
    </footer>
  )
}
