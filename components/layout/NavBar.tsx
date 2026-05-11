import { Button } from '@/components/ui/Button'

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
        <a href="/" className="font-display text-xl font-bold tracking-tight text-white">
          Teragone Factory
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-full border border-white/10 px-3 py-2 text-xs text-zinc-300">
            FR / EN
          </button>

          <Button href="/contact">Contact</Button>
        </div>
      </div>
    </header>
  )
}
