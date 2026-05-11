import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'

export default function LegalPage() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-4xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Mentions légales</span>
        <h1 className="mt-4 font-display text-5xl font-bold tracking-tight">Mentions légales</h1>
        <div className="mt-10 space-y-6 text-zinc-400 leading-8">
          <p>Site édité par Teragone Factory, filiale digitale, IA et Web3 du groupe Teragone Solutions.</p>
          <p>Localisation : Nantes, France.</p>
          <p>Ce site est hébergé via GitHub Pages.</p>
          <p>Pour toute demande : utilisez le formulaire de contact du site.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
