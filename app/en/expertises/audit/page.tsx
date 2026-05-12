import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTA } from '@/components/sections/FinalCTA'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Architecture Audits',
  description: 'Architecture audits, technical due diligence and legacy modernization expertise.',
  alternates: { canonical: '/en/expertises/audit/', languages: { fr: '/expertises/audit/', en: '/en/expertises/audit/' } },
}

export default function AuditEN() {
  return <><NavBar /><main className="mx-auto max-w-6xl px-6 py-24 text-white"><span className="text-sm uppercase tracking-[0.3em] text-primary">Architecture Audits</span><h1 className="mt-4 font-display text-6xl font-bold tracking-tight">Technical clarity for complex systems.</h1><p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">We help organizations regain control over legacy systems, platform complexity, delivery bottlenecks and technical debt through pragmatic architecture audits and modernization roadmaps.</p></main><FinalCTA /><Footer /></>
}
