import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTA } from '@/components/sections/FinalCTA'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web3 & Blockchain Engineering',
  description: 'Distributed systems, blockchain infrastructure and Web3 platform engineering.',
  alternates: { canonical: '/en/expertises/web3/', languages: { fr: '/expertises/web3/', en: '/en/expertises/web3/' } },
}

export default function Web3EN() {
  return <><NavBar /><main className="mx-auto max-w-6xl px-6 py-24 text-white"><span className="text-sm uppercase tracking-[0.3em] text-primary">Web3 & Distributed Systems</span><h1 className="mt-4 font-display text-6xl font-bold tracking-tight">Blockchain infrastructure engineered for scale.</h1><p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">We work on distributed architectures, synchronization systems, protocol engineering, lightweight validation and enterprise-grade Web3 infrastructures.</p></main><FinalCTA /><Footer /></>
}
