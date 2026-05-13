'use client'

import { useState } from 'react'
import { ContactForm } from '@/components/forms/ContactForm'

export function ContactModal({ label = 'Contact' }: { label?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(59,130,246,0.28)] transition hover:bg-blue-500"
      >
        {label}
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/70 px-4 py-8 backdrop-blur-md">
          <div className="relative w-full max-w-4xl rounded-[2rem] border border-white/10 bg-background p-4 shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 z-10 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              Fermer
            </button>

            <div className="p-4 md:p-8">
              <div className="mb-8 max-w-2xl">
                <span className="text-sm uppercase tracking-[0.3em] text-primary">Contact</span>
                <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
                  Parlons de votre besoin.
                </h2>
                <p className="mt-4 text-zinc-400">
                  Renseignez vos coordonnées et l’objet de votre demande. Nous reviendrons vers vous rapidement.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
