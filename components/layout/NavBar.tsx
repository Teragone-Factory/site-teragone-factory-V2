import Link from 'next/link'
import { MobileMenu } from '@/components/layout/MobileMenu'
import { Button } from '@/components/ui/Button'
import { route } from '@/lib/routes'

const links = [
  { href: '/expertises', label: 'Expertises' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/notre-adn', label: 'Notre ADN' },
  { href: '/nous-rejoindre', label: 'Rejoindre' },
]

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href={route('/')} className="font-display text-xl font-bold tracking-tight text-white">
          Teragone Factory
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={route(link.href)}
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-full border border-white/10 px-3 py-2 text-xs text-zinc-300 transition hover:border-primary/40 hover:text-white">
            FR / EN
          </button>

          <Button href="/contact">Contact</Button>
        </div>

        <MobileMenu />
      </div>
    </header>
  )
}
