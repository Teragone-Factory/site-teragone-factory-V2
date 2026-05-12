import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Card } from '@/components/ui/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our DNA',
  description: 'Our engineering culture: software craftsmanship, AI engineering, ownership and production-grade delivery.',
  alternates: { canonical: '/en/notre-adn/', languages: { fr: '/notre-adn/', en: '/en/notre-adn/' } },
}

const values = [
  ['Software craftsmanship', 'We build maintainable, observable and durable systems with strong engineering standards.'],
  ['Human-led AI engineering', 'AI amplifies engineering judgment; it does not replace architecture, accountability and rigorous delivery.'],
  ['Senior ownership', 'Our teams take responsibility for outcomes, quality, governance and long-term system health.'],
]

export default function DNAEN() {
  return <><NavBar /><main className="mx-auto max-w-7xl px-6 py-24 text-white"><span className="text-sm uppercase tracking-[0.3em] text-primary">Our DNA</span><h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Engineering culture for long-term systems.</h1><p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">We combine software craftsmanship, AI engineering and senior delivery practices to create systems that remain understandable, scalable and valuable over time.</p><div className="mt-16 grid gap-6 md:grid-cols-3">{values.map(([title,text])=><Card key={title}><h2 className="font-display text-2xl font-semibold">{title}</h2><p className="mt-5 leading-7 text-zinc-400">{text}</p></Card>)}</div></main><FinalCTA /><Footer /></>
}
