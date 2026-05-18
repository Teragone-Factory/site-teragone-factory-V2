import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { AnimatedHeroVisual } from '@/components/sections/AnimatedHeroVisual'
import { CredibilitySection } from '@/components/sections/CredibilitySection'
import { DeliveryMethod } from '@/components/sections/DeliveryMethod'
import { DNASection } from '@/components/sections/DNASection'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { ProofBar } from '@/components/sections/ProofBar'
import { RecruitmentTeaser } from '@/components/sections/RecruitmentTeaser'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { PillarCard } from '@/components/ui/PillarCard'
import { SectionHeading } from '@/components/ui/SectionHeading'

const pillars = [
  { title: 'Audit & Expertise', description: 'Audits techniques, architecture, dette logicielle et modernisation pragmatique pour reprendre le contrôle sur des systèmes critiques.', href: '/expertises/audit', visual: '🧭', proof: 'Architecture & gouvernance', accent: 'from-blue-500/30 to-cyan-400/20' },
  { title: 'Delivery & Squads Seniors', description: 'Des squads seniors AI-ready capables de concevoir, reprendre et industrialiser des plateformes complexes avec une forte culture engineering.', href: '/expertises/delivery', visual: '⚙️', proof: 'Software craftsmanship', accent: 'from-violet-500/30 to-blue-400/20' },
  { title: 'IA & Systèmes Agentiques', description: 'RAG, orchestration LLM, agents autonomes et AI engineering pour construire des systèmes intelligents réellement exploitables.', href: '/expertises/ia-agentique', visual: '✦', proof: 'AI-ready systems', accent: 'from-cyan-500/30 to-emerald-400/20' },
  { title: 'Web3 & Blockchain', description: 'Protocol engineering, infrastructures distribuées, plateformes Web3 et convergence IA + agents + systèmes décentralisés.', href: '/expertises/web3', visual: '◈', proof: 'Distributed systems', accent: 'from-fuchsia-500/30 to-violet-400/20' },
]

const differentiators = [
  ['01', 'Senior expertise', 'Des profils expérimentés sur des enjeux critiques, capables de décider vite et juste.'],
  ['02', 'AI inside', 'L’IA est intégrée dans les pratiques, les architectures et les workflows de delivery.'],
  ['03', 'Long-term thinking', 'Des choix pensés pour la maintenabilité, la gouvernance et l’évolution des plateformes.'],
  ['04', 'Production focus', 'Une obsession simple : livrer des systèmes fiables, observables et exploitables en production.'],
  ['05', 'Craft quality', 'Des standards élevés de qualité logicielle, tests, documentation et transmission.'],
]

const landingUseCases = [
  { tag: 'Transport & mobilité', title: 'Modernisation et delivery à forte criticité.', text: 'Audit, architecture, squads seniors et mise en production sur des environnements complexes.', visual: 'legacy' },
  { tag: 'Plateforme IA enterprise', title: 'Industrialisation d’usages IA dans un SI complexe.', text: 'RAG, orchestration LLM, gouvernance et intégration durable dans les workflows métiers.', visual: 'ai' },
  { tag: 'Mithril protocol', title: 'Certification légère et synchronisation blockchain.', text: 'Snapshots certifiés, validation légère et bootstrap rapide pour infrastructures distribuées.', visual: 'mithril' },
]

function UseCaseThumbnail({ type }: { type: string }) {
  if (type === 'mithril') {
    return (
      <div className="mb-6 flex items-center justify-between rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#0D1324] to-[#111827] p-4 shadow-[0_0_40px_rgba(59,130,246,0.08)]">
        <img src="/mithril-logo-text.svg" alt="Mithril" className="h-8 w-auto opacity-95" />
        <div className="h-10 w-10 rounded-2xl bg-blue-500/10 ring-1 ring-blue-400/20" />
      </div>
    )
  }

  if (type === 'ai') {
    return (
      <div className="mb-6 overflow-hidden rounded-2xl border border-cyan-400/10 bg-gradient-to-br from-[#10192B] via-[#111827] to-[#0B1220] p-4">
        <div className="flex gap-2">
          <div className="h-3 flex-1 rounded-full bg-cyan-400/40" />
          <div className="h-3 w-20 rounded-full bg-blue-400/30" />
          <div className="h-3 w-14 rounded-full bg-violet-400/30" />
        </div>
        <div className="mt-4 rounded-2xl border border-white/5 bg-white/[0.03] p-3">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-cyan-200/60">
            <span>AI workflows</span>
            <span>LLM</span>
          </div>
          <div className="mt-3 flex gap-2">
            <div className="h-8 flex-1 rounded-xl bg-cyan-400/10" />
            <div className="h-8 w-10 rounded-xl bg-blue-400/10" />
            <div className="h-8 w-10 rounded-xl bg-violet-400/10" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mb-6 overflow-hidden rounded-2xl border border-blue-400/10 bg-gradient-to-br from-[#0F172A] via-[#121826] to-[#0D1320] p-4">
      <div className="flex items-center gap-2">
        <div className="h-3 w-12 rounded-full bg-blue-400/30" />
        <div className="h-3 w-20 rounded-full bg-white/10" />
        <div className="h-3 w-10 rounded-full bg-violet-400/20" />
      </div>
      <div className="mt-4 rounded-2xl border border-white/5 bg-white/[0.03] p-3">
        <div className="grid grid-cols-4 gap-2">
          <div className="h-10 rounded-xl bg-blue-500/10" />
          <div className="h-10 rounded-xl bg-white/[0.04]" />
          <div className="h-10 rounded-xl bg-white/[0.04]" />
          <div className="h-10 rounded-xl bg-violet-500/10" />
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return <></>
}
