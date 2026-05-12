import Link from 'next/link'
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher'
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
          <LanguageSwitcher />
          <Button href="/contact">Contact</Button>
        </div>

        <MobileMenu />
      </div>
    </header>
  )
}
