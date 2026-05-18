import Link from 'next/link'
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
  return (
    <footer className="border-t border-white/5 bg-[#09090D]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <h3 className="mb-4 font-display text-3xl font-bold text-white">
            Teragone Factory
          </h3>

          <p className="max-w-2xl text-sm leading-8 text-zinc-500">
            Digital & AI Delivery Factory du groupe Teragone Solutions.
            Architecture logicielle, AI Engineering, Web3, systèmes distribués
            et delivery senior pour environnements critiques.
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

          <Link href={route('/expertises')} className="transition hover:text-white">
            Expertises
          </Link>

          <Link href={route('/use-cases')} className="transition hover:text-white">
            Use Cases
          </Link>

          <Link href={route('/notre-adn')} className="transition hover:text-white">
            Notre ADN
          </Link>

          <Link href={route('/blog')} className="transition hover:text-white">
            Blog
          </Link>

          <Link href={route('/nous-rejoindre')} className="transition hover:text-white">
            Rejoindre
          </Link>

          <Link href={route('/contact')} className="transition hover:text-white">
            Contact
          </Link>

          <Link href={route('/mentions-legales')} className="transition hover:text-white">
            Mentions légales
          </Link>
        </div>

        <div className="content-start text-sm text-zinc-400">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">Social</p>

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
            Suivez nos publications sur l’AI Engineering, le Web3, les systèmes distribués et le software craftsmanship.
          </p>
        </div>
      </div>

      <div className="border-t border-white/5 px-6 py-6 text-center text-xs uppercase tracking-[0.25em] text-zinc-600">
        © 2026 Teragone Factory — Engineering durable & AI-ready systems
      </div>
    </footer>
  )
}
