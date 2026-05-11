import { ContactForm } from '@/components/forms/ContactForm'
import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez Teragone Factory pour vos enjeux architecture, AI Engineering, delivery senior et plateformes critiques.',
}

export default function ContactPage() {
  return (
    <>
      <NavBar />

      <main className="mx-auto max-w-5xl px-6 py-24 text-white">
        <div className="mb-14 max-w-3xl">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">
            Contact
          </span>

          <h1 className="mt-4 font-display text-6xl font-bold tracking-tight">
            Parlons de votre projet.
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Architecture, delivery, IA, modernisation legacy, plateformes
            critiques ou équipes seniors : échangeons sur vos enjeux.
          </p>
        </div>

        <ContactForm />
      </main>

      <Footer />
    </>
  )
}
