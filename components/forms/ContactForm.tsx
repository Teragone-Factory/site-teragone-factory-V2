'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  firstName: z.string().min(1, 'Prénom requis'),
  lastName: z.string().min(1, 'Nom requis'),
  email: z.string().email('Email invalide'),
  company: z.string().min(1, 'Société requise'),
  role: z.string().optional(),
  subject: z.string().min(1),
  message: z.string().min(20, 'Merci de préciser votre demande'),
  consent: z.literal(true),
  website: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormData) {
    setError(false)
    const response = await fetch('https://formspree.io/f/xzzrwdop', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    })

    if (response.ok) setSent(true)
    else setError(true)
  }

  if (sent) {
    return <div className="rounded-[2rem] border border-primary/30 bg-primary/10 p-8 text-white">Merci, votre demande a bien été envoyée. Nous revenons vers vous rapidement.</div>
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-[2rem] border border-white/10 bg-card p-8">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Prénom" error={errors.firstName?.message}><input {...register('firstName')} className="input" /></Field>
        <Field label="Nom" error={errors.lastName?.message}><input {...register('lastName')} className="input" /></Field>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Email professionnel" error={errors.email?.message}><input type="email" {...register('email')} className="input" /></Field>
        <Field label="Société" error={errors.company?.message}><input {...register('company')} className="input" /></Field>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Poste / Fonction"><input {...register('role')} className="input" /></Field>
        <Field label="Sujet"><select {...register('subject')} className="input"><option>Projet</option><option>Recrutement</option><option>Partenariat</option><option>Autre</option></select></Field>
      </div>
      <Field label="Message" error={errors.message?.message}><textarea rows={7} {...register('message')} className="input" /></Field>
      <input type="text" {...register('website')} className="hidden" tabIndex={-1} autoComplete="off" />
      <label className="flex items-start gap-3 text-sm text-zinc-400"><input type="checkbox" {...register('consent')} className="mt-1" /><span>J'accepte d'être recontacté par Teragone Factory dans le cadre de cette demande.</span></label>
      {errors.consent && <p className="text-sm text-red-300">Consentement requis.</p>}
      {error && <p className="text-sm text-red-300">Une erreur est survenue. Merci de réessayer.</p>}
      <button disabled={isSubmitting} type="submit" className="rounded-full bg-primary px-6 py-4 font-medium text-white transition hover:opacity-90 disabled:opacity-50">{isSubmitting ? 'Envoi...' : 'Envoyer la demande'}</button>
    </form>
  )
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-2 block text-sm text-zinc-300">{label}</span>{children}{error && <span className="mt-2 block text-sm text-red-300">{error}</span>}</label>
}
