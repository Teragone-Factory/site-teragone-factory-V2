'use client'

import { usePathname } from 'next/navigation'

const frSteps = [
  ['01', 'Diagnostiquer', 'Architecture, code, dette, risques et opportunités business.'],
  ['02', 'Concevoir', 'Trajectoire cible, priorités, architecture AI-ready et gouvernance.'],
  ['03', 'Délivrer', 'Squad senior, AI engineering, CI/CD, observabilité et mise en production.'],
  ['04', 'Transmettre', 'Documentation, standards, pratiques et montée en compétence des équipes.'],
]

const enSteps = [
  ['01', 'Diagnose', 'Architecture, codebase, software debt, risks and business opportunities.'],
  ['02', 'Design', 'Target trajectory, priorities, AI-ready architecture and governance.'],
  ['03', 'Deliver', 'Senior squad, AI engineering, CI/CD, observability and production rollout.'],
  ['04', 'Transfer', 'Documentation, standards, practices and team enablement.'],
]

export function DeliveryMethod() {
  const pathname = usePathname() || '/'
  const isFrench = pathname.startsWith('/fr') || pathname.includes('/site-teragone-factory-V2/fr')
  const steps = isFrench ? frSteps : enSteps

  return (
    <section className="relative border-y border-white/5 bg-surface">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.10),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.10),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-primary">{isFrench ? 'Méthode' : 'Method'}</span>
            <h2 className="mt-4 font-display text-5xl font-bold tracking-tight md:text-6xl">
              {isFrench ? 'De l’audit à la production, avec une trajectoire claire.' : 'From audit to production, with a clear delivery path.'}
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              {isFrench ? 'Une approche simple à lire, senior à l’exécution : comprendre vite, décider juste, livrer proprement et transmettre durablement.' : 'A clear, senior-led approach: understand fast, decide well, deliver cleanly and transfer knowledge over time.'}
            </p>
            <div className="mt-8 rounded-3xl border border-primary/20 bg-primary/10 p-6 backdrop-blur-xl">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan">{isFrench ? 'Résultat attendu' : 'Expected outcome'}</p>
              <p className="mt-3 text-zinc-400">
                {isFrench ? 'Moins d’ambiguïté, moins de dette, plus de vitesse utile et une plateforme réellement pilotable en production.' : 'Less ambiguity, less software debt, more useful velocity and a platform that can truly be operated in production.'}
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {steps.map(([number, title, text]) => (
              <div key={title} className="group grid gap-5 rounded-[1.5rem] border border-white/10 bg-card p-5 transition hover:border-primary/40 hover:bg-white/[0.04] md:grid-cols-[72px_1fr]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 font-mono text-sm text-primary">{number}</div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white">{title}</h3>
                  <p className="mt-2 leading-7 text-zinc-400">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
