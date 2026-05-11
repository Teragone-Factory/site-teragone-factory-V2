'use client'

export function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/xzzrwdop"
      method="POST"
      className="space-y-6 rounded-[2rem] border border-white/10 bg-card p-8"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-zinc-300">Prénom</label>
          <input name="firstName" required className="w-full rounded-2xl border border-white/10 bg-background px-4 py-4 text-white outline-none focus:border-primary" />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">Nom</label>
          <input name="lastName" required className="w-full rounded-2xl border border-white/10 bg-background px-4 py-4 text-white outline-none focus:border-primary" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-zinc-300">Email professionnel</label>
          <input type="email" name="email" required className="w-full rounded-2xl border border-white/10 bg-background px-4 py-4 text-white outline-none focus:border-primary" />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">Société</label>
          <input name="company" className="w-full rounded-2xl border border-white/10 bg-background px-4 py-4 text-white outline-none focus:border-primary" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-zinc-300">Poste / Fonction</label>
          <input name="role" className="w-full rounded-2xl border border-white/10 bg-background px-4 py-4 text-white outline-none focus:border-primary" />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">Sujet</label>
          <select name="subject" className="w-full rounded-2xl border border-white/10 bg-background px-4 py-4 text-white outline-none focus:border-primary">
            <option>Audit & Architecture</option>
            <option>Delivery & Squads</option>
            <option>AI Engineering</option>
            <option>Web3 & Blockchain</option>
            <option>Recrutement</option>
            <option>Autre</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm text-zinc-300">Message</label>
        <textarea name="message" minLength={20} rows={7} required className="w-full rounded-2xl border border-white/10 bg-background px-4 py-4 text-white outline-none focus:border-primary" />
      </div>

      <input type="text" name="_gotcha" className="hidden" />

      <label className="flex items-start gap-3 text-sm text-zinc-400">
        <input type="checkbox" required className="mt-1" />
        <span>J'accepte d'être recontacté par Teragone Factory dans le cadre de cette demande.</span>
      </label>

      <button type="submit" className="rounded-full bg-primary px-6 py-4 font-medium text-white transition hover:opacity-90">
        Envoyer la demande
      </button>
    </form>
  )
}
