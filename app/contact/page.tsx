import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'

export default function ContactPage() {
  return (
    <>
      <NavBar />

      <main className="mx-auto max-w-4xl px-6 py-24 text-white">
        <div className="mb-12">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">
            Contact
          </span>

          <h1 className="mt-4 font-display text-6xl font-bold tracking-tight">
            Parlons de votre projet.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Architecture, delivery, IA, modernisation legacy, Web3,
            plateformes critiques ou équipes seniors : échangeons sur vos
            enjeux.
          </p>
        </div>

        <form
          action="https://formspree.io/f/xzzrwdop"
          method="POST"
          className="space-y-6 rounded-3xl border border-white/10 bg-card p-8"
        >
          <div>
            <label className="mb-2 block text-sm text-zinc-300">Nom</label>
            <input
              type="text"
              name="name"
              required
              className="w-full rounded-2xl border border-white/10 bg-background px-4 py-4 text-white outline-none transition focus:border-primary"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-300">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-2xl border border-white/10 bg-background px-4 py-4 text-white outline-none transition focus:border-primary"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-300">Message</label>
            <textarea
              name="message"
              rows={6}
              required
              className="w-full rounded-2xl border border-white/10 bg-background px-4 py-4 text-white outline-none transition focus:border-primary"
            />
          </div>

          <button
            type="submit"
            className="rounded-full bg-primary px-6 py-4 font-medium text-white transition hover:opacity-90"
          >
            Envoyer le message
          </button>
        </form>
      </main>

      <Footer />
    </>
  )
}
