import { ContactForm } from '@/components/forms/ContactForm'
import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Teragone Factory regarding AI Engineering, architecture, senior delivery and Web3 systems.',
}

export default function ContactPageEN() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-5xl px-6 py-24 text-white">
        <div className="mb-14 max-w-3xl">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">Contact</span>
          <h1 className="mt-4 font-display text-6xl font-bold tracking-tight">Let’s discuss your project.</h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">Architecture, AI platforms, distributed systems, senior squads or modernization challenges — let’s talk.</p>
        </div>
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
