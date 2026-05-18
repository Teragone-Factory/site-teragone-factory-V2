'use client'

import { useState } from 'react'
import Link from 'next/link'
import { route } from '@/lib/routes'

const links = [
  { href: '/expertises', label: 'Expertises' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/notre-adn', label: 'Notre ADN' },
  { href: '/advisory-board', label: 'Advisory Board' },
  { href: '/nous-rejoindre', label: 'Rejoindre' },
  { href: '/contact', label: 'Contact' },
]

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full border border-white/10 px-4 py-2 text-sm text-white"
      >
        Menu
      </button>

      {open && (
        <div className="absolute left-4 right-4 top-20 rounded-3xl border border-white/10 bg-background/95 p-6 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={route(link.href)}
                className="text-lg text-zinc-200 transition hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
