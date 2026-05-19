'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  company: z.string().min(1),
  role: z.string().optional(),
  subject: z.string().min(1),
  message: z.string().min(20),
  consent: z.literal(true),
  website: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const pathname = usePathname() || '/'
  const isEnglish = pathname.startsWith('/en') || pathname.includes('/site-teragone-factory-V2/en')
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
    return <div className="rounded-[2rem] border border-primary/30 bg-primary/10 p-8 text-white">{isEnglish ? 'Thank you, your request has been sent. We will get back to you shortly.' : 'Merci, votre demande a bien été envoyée. Nous revenons vers vous rapidement.'}</div>
  }

  const required = isEnglish ? 'Required field' : 'Champ requis'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-[2rem] border border-white/10 bg-card p-8">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label={isEnglish ? 'First name' : 'Prénom'} error={errors.firstName ? required : undefined}><input {...register('firstName')} className="input" /></Field>
        <Field label={isEnglish ? 'Last name' : 'Nom'} error={errors.lastName ? required : undefined}><input {...register('lastName')} className="input" /></Field>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Field label={isEnglish ? 'Business email' : 'Email professionnel'} error={errors.email ? (isEnglish ? 'Invalid email' : 'Email invalide') : undefined}><input type="email" {...register('email')} className="input" /></Field>
        <Field label={isEnglish ? 'Company' : 'Société'} error={errors.company ? required : undefined}><input {...register('company')} className="input" /></Field>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Field label={isEnglish ? 'Role / Position' : 'Poste / Fonction'}><input {...register('role')} className="input" /></Field>
        <Field label={isEnglish ? 'Subject' : 'Sujet'}><select {...register('subject')} className="input"><option>{isEnglish ? 'Project' : 'Projet'}</option><option>{isEnglish ? 'Recruitment' : 'Recrutement'}</option><option>{isEnglish ? 'Partnership' : 'Partenariat'}</option><option>{isEnglish ? 'Other' : 'Autre'}</option></select></Field>
      </div>
      <Field label={isEnglish ? 'Message' : 'Message'} error={errors.message ? (isEnglish ? 'Please provide more detail about your request.' : 'Merci de préciser votre demande.') : undefined}><textarea rows={7} {...register('message')} className="input" /></Field>
      <input type="text" {...register('website')} className="hidden" tabIndex={-1} autoComplete="off" />
      <label className="flex items-start gap-3 text-sm text-zinc-400"><input type="checkbox" {...register('consent')} className="mt-1" /><span>{isEnglish ? 'I agree to be contacted by Teragone Factory regarding this request.' : "J'accepte d'être recontacté par Teragone Factory dans le cadre de cette demande."}</span></label>
      {errors.consent && <p className="text-sm text-red-300">{isEnglish ? 'Consent is required.' : 'Consentement requis.'}</p>}
      {error && <p className="text-sm text-red-300">{isEnglish ? 'An error occurred. Please try again.' : 'Une erreur est survenue. Merci de réessayer.'}</p>}
      <button disabled={isSubmitting} type="submit" className="rounded-full bg-primary px-6 py-4 font-medium text-white transition hover:opacity-90 disabled:opacity-50">{isSubmitting ? (isEnglish ? 'Sending...' : 'Envoi...') : (isEnglish ? 'Send request' : 'Envoyer la demande')}</button>
    </form>
  )
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-2 block text-sm text-zinc-300">{label}</span>{children}{error && <span className="mt-2 block text-sm text-red-300">{error}</span>}</label>
}
