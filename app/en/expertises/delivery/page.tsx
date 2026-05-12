import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTA } from '@/components/sections/FinalCTA'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Senior Delivery Squads',
  description: 'Production-grade software delivery with senior engineering squads.',
  alternates: { canonical: '/en/expertises/delivery/', languages: { fr: '/expertises/delivery/', en: '/en/expertises/delivery/' } },
}

export default function DeliveryEN() {
  return <><NavBar /><main className="mx-auto max-w-6xl px-6 py-24 text-white"><span className="text-sm uppercase tracking-[0.3em] text-primary">Senior Delivery</span><h1 className="mt-4 font-display text-6xl font-bold tracking-tight">Production-grade delivery for critical platforms.</h1><p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">Our senior squads combine architecture expertise, software craftsmanship and operational excellence to ship robust software systems in demanding enterprise environments.</p></main><FinalCTA /><Footer /></>
}
