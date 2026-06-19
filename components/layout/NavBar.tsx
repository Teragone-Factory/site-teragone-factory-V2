'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher'
import { MobileMenu } from '@/components/layout/MobileMenu'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import { Button } from '@/components/ui/Button'
import { route } from '@/lib/routes'

const enLinks = [
  { href: '/expertises', label: 'Expertise' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/notre-adn', label: 'Our DNA' },
  { href: '/advisory-board', label: 'Advisory Board' },
  { href: '/blog', label: 'Blog' },
  { href: '/nous-rejoindre', label: 'Careers' },
]

const frLinks = [
  { href: '/fr/expertises', label: 'Expertises' },
  { href: '/fr/use-cases', label: 'Cas d’usage' },
  { href: '/fr/notre-adn', label: 'Notre ADN' },
  { href: '/fr/advisory-board', label: 'Advisory Board' },
  { href: '/blog', label: 'Blog' },
  { href: '/fr/nous-rejoindre', label: 'Rejoindre' },
]

export function NavBar() {
  const pathname = usePathname() || '/'
  const cleanPath = pathname.replace(/^\/site-teragone-factory-V2/, '') || '/'
  const isFrench = cleanPath === '/fr' || cleanPath.startsWith('/fr/')
  const links = isFrench ? frLinks : enLinks
  const homeHref = isFrench ? '/fr/' : '/'
  const contactHref = isFrench ? '/fr/contact' : '/contact'

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href={route(homeHref)} className="font-display text-xl font-bold tracking-tight text-white">
          Teragone Factory
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={route(link.href)} className="text-sm text-zinc-300 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <LanguageSwitcher />
          <Button href={contactHref}>Contact</Button>
        </div>

        <MobileMenu />
      </div>
    </header>
  )
}
