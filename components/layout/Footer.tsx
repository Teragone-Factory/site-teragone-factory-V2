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
  const isEnglish = pathname.startsWith('/en') || pathname.includes('/site-teragone-factory-V2/en')

  const navigation = isEnglish
    ? [
        { href: '/en/expertises', label: 'Expertise' },
        { href: '/en/use-cases', label: 'Use Cases' },
        { href: '/en/notre-adn', label: 'Our DNA' },
        { href: '/en/blog', label: 'Blog' },
        { href: '/en/nous-rejoindre', label: 'Careers' },
        { href: '/en/contact', label: 'Contact' },
      ]
    : [
        { href: '/expertises', label: 'Expertises' },
        { href: '/use-cases', label: 'Use Cases' },
        { href: '/notre-adn', label: 'Notre ADN' },
        { href: '/blog', label: 'Blog' },
        { href: '/nous-rejoindre', label: 'Rejoindre' },
        { href: '/contact', label: 'Contact' },
      ]

  return (
    <footer className="border-t border-white/5 bg-[#09090D]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <h3 className="mb-4 font-display text-3xl font-bold text-white">
            Teragone Factory
          </h3>

          <p className="max-w-2xl text-sm leading-8 text-zinc-500">
            {isEnglish
              ? 'Digital & AI Delivery Factory focused on software architecture, AI Engineering, Web3, distributed systems and senior delivery for critical environments.'
              : 'Digital & AI Delivery Factory du groupe Teragone Solutions. Architecture logicielle, AI Engineering, Web3, systèmes distribués et delivery senior pour environnements critiques.'}
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
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">
            {isEnglish ? 'Navigation' : 'Navigation'}
          </p>

          {navigation.map((item) => (
            <Link key={item.href} href={route(item.href)} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="content-start text-sm text-zinc-400">
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

          <p className="mt-6 text-xs leading-6 text-zinc-600">
            {isEnglish
              ? 'Follow our publications on AI Engineering, Web3, distributed systems and software craftsmanship.'
              : 'Suivez nos publications sur l’AI Engineering, le Web3, les systèmes distribués et le software craftsmanship.'}
          </p>
        </div>
      </div>

      <div className="border-t border-white/5 px-6 py-6 text-center text-xs uppercase tracking-[0.25em] text-zinc-600">
        © 2026 Teragone Factory — {isEnglish ? 'Sustainable engineering & AI-ready systems' : 'Engineering durable & systèmes AI-ready'}
      </div>
    </footer>
  )
}
