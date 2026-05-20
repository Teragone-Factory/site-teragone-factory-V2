'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { route } from '@/lib/routes'

const frLinks = [
  { href: '/expertises', label: 'Expertises' },
  { href: '/use-cases', label: 'Cas d’usage' },
  { href: '/notre-adn', label: 'Notre ADN' },
  { href: '/advisory-board', label: 'Advisory Board' },
  { href: '/blog', label: 'Blog' },
  { href: '/nous-rejoindre', label: 'Rejoindre' },
  { href: '/contact', label: 'Contact' },
]

const enLinks = [
  { href: '/en/expertises', label: 'Expertise' },
  { href: '/en/use-cases', label: 'Use Cases' },
  { href: '/en/notre-adn', label: 'Our DNA' },
  { href: '/en/advisory-board', label: 'Advisory Board' },
  { href: '/en/blog', label: 'Blog' },
  { href: '/en/nous-rejoindre', label: 'Careers' },
  { href: '/en/contact', label: 'Contact' },
]

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname() || '/'
  const cleanPath = pathname.replace(/^\/site-teragone-factory-V2/, '') || '/'
  const isEnglish = cleanPath === '/en' || cleanPath.startsWith('/en/')
  const links = isEnglish ? enLinks : frLinks

  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)} className="rounded-full border border-white/10 px-4 py-2 text-sm text-white">Menu</button>
      {open && (
        <div className="absolute left-4 right-4 top-20 rounded-3xl border border-white/10 bg-background/95 p-6 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col gap-5">
            {links.map((link) => <Link key={link.href} href={route(link.href)} className="text-lg text-zinc-200 transition hover:text-white" onClick={() => setOpen(false)}>{link.label}</Link>)}
          </div>
        </div>
      )}
    </div>
  )
}
