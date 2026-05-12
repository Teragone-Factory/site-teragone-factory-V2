import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Card } from '@/components/ui/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Teragone Factory and work on AI-ready platforms, distributed systems and critical software architectures.',
  alternates: { canonical: '/en/nous-rejoindre/', languages: { fr: '/nous-rejoindre/', en: '/en/nous-rejoindre/' } },
}

const roles = [
  'Senior Software Engineers',
  'AI Engineers',
  'Platform & DevOps Engineers',
  'Distributed Systems Engineers',
]

export default function CareersEN() {
  return <><NavBar /><main className="mx-auto max-w-7xl px-6 py-24 text-white"><span className="text-sm uppercase tracking-[0.3em] text-primary">Careers</span><h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Build systems that matter.</h1><p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">We are looking for engineers passionate about architecture, AI systems, distributed platforms and software craftsmanship.</p><div className="mt-16 grid gap-6 md:grid-cols-2">{roles.map((role)=><Card key={role}><h2 className="font-display text-2xl font-semibold">{role}</h2><p className="mt-4 leading-7 text-zinc-400">Critical systems, senior engineering culture and high-impact delivery environments.</p></Card>)}</div></main><FinalCTA /><Footer /></>
}
