import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTAFr } from '@/components/sections/fr/FinalCTAFr'
import { Card } from '@/components/ui/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web3 & Blockchain',
  description: 'Infrastructure blockchain, systèmes distribués, validation légère, synchronisation et architectures Web3.',
  alternates: { canonical: '/fr/expertises/web3/', languages: { fr: '/fr/expertises/web3/', en: '/expertises/web3/' } },
}

const items = [
  ['Infrastructure distribuée', 'Conception et exploitation de systèmes distribués, nœuds blockchain et plateformes résilientes.'],
  ['Synchronisation & vérification', 'Travaux autour de la validation légère, snapshots vérifiables et accélération du bootstrap infrastructure.'],
  ['Web3 & systèmes de confiance', 'Intégration de mécanismes cryptographiques, gouvernance distribuée et architectures trust-minimized.'],
]

export default function Web3ExpertiseFR() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Expertise</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">Web3 & Blockchain.</h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">Nous travaillons sur les enjeux d’infrastructure Web3, de systèmes distribués, de vérification légère et de scalabilité opérationnelle dans les environnements décentralisés.</p>
        <div className="mt-16 grid gap-6 md:grid-cols-3">{items.map(([title, text]) => <Card key={title}><h2 className="mb-4 font-display text-2xl font-semibold">{title}</h2><p className="leading-7 text-zinc-400">{text}</p></Card>)}</div>
      </main>
      <FinalCTAFr />
      <Footer />
    </>
  )
}
