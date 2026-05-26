import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTAFr } from '@/components/sections/fr/FinalCTAFr'
import { Card } from '@/components/ui/Card'
import { UseCaseCard } from '@/components/ui/UseCaseCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cas d’usage',
  description: 'Cas d’usage Teragone Factory : modernisation legacy, plateformes IA, Web3, systèmes distribués et delivery senior.',
  alternates: { canonical: '/fr/use-cases/', languages: { fr: '/fr/use-cases/', en: '/use-cases/' } },
}

const cases = [
  { sector: 'Mobilité & Transport', pillar: 'Architecture & Delivery', visual: 'legacy', problem: 'Moderniser une plateforme legacy sans interrompre l’activité.', story: `La plateforme d’un grand acteur de la mobilité était devenue plus lente à faire évoluer, plus risquée à modifier et plus difficile à opérer. Elle continuait à produire de la valeur métier, mais la dette technique, le manque d’observabilité et la fragilité des flux de delivery pesaient sur les équipes IT et métier.`, intervention: `Nous avons réalisé un audit d’architecture et de code, cartographié les flux critiques, clarifié les principaux risques et défini une trajectoire de modernisation à fort impact, sans réécriture big-bang. Nous avons ensuite accompagné la mise en place d’une squad senior, l’industrialisation CI/CD, l’amélioration de l’observabilité, les travaux de performance et la consolidation de la production.`, benefits: `La plateforme est devenue plus lisible, plus simple à opérer et plus évolutive. Les équipes ont gagné en visibilité, le risque de delivery a diminué et l’organisation a retrouvé la capacité d’avancer sans fragiliser un système clé.` },
  { sector: 'IA entreprise', pillar: 'AI Engineering', visual: 'ai', problem: 'Transformer des idées IA en workflows fiables.', story: `L’organisation avait identifié des cas d’usage IA à forte valeur. L’enjeu était de connecter l’IA aux données existantes, aux processus métier, aux règles de gouvernance et aux contraintes opérationnelles sans créer un projet parallèle fragile.`, intervention: `Nous avons conçu une architecture AI-ready, structuré les sources de connaissance internes, introduit du RAG et de l’orchestration LLM, défini des mécanismes d’évaluation, traité les sujets de sécurité et d’observabilité, puis intégré progressivement les capacités IA dans les workflows métier.`, benefits: `L’IA est passée de l’expérimentation à une adoption maîtrisée. Les équipes disposent de fondations réutilisables, de réponses plus fiables, d’une gouvernance plus claire et d’une capacité à industrialiser de nouveaux cas d’usage sans repartir de zéro.` },
  { sector: 'Infrastructure blockchain', pillar: 'Protocole Mithril', visual: 'mithril', href: '/fr/use-cases/mithril', problem: 'Rendre la synchronisation blockchain plus légère, plus rapide et plus fiable.', story: `Dans les grands réseaux distribués, l’amorçage de l’infrastructure peut devenir lent, coûteux et lourd à opérer. Les nœuds et services ont besoin d’un accès fiable à l’état du réseau, mais les processus de synchronisation lourds limitent la scalabilité et la résilience.`, intervention: `Nous avons contribué à la conception et au développement d’un protocole de certification distribuée produisant des snapshots vérifiables. L’objectif : réduire le temps de synchronisation, permettre une validation légère et donner accès à un état réseau certifié sans dépendre d’une infrastructure lourde.`, benefits: `Les opérateurs et développeurs bénéficient d’un bootstrap plus rapide, d’une validation plus légère et d’une meilleure résilience. Le réseau dispose d’un mécanisme plus scalable pour distribuer des snapshots certifiés et supporter des opérations blockchain à grande échelle.` },
  { sector: 'Plateforme logicielle', pillar: 'Audit & Expertise', visual: 'audit', problem: 'Reprendre le contrôle sur la dette technique et le delivery.', story: `Une plateforme logicielle était devenue difficile à faire évoluer. Les équipes faisaient face à des dépendances peu lisibles, une visibilité limitée sur les flux critiques et un écart croissant entre les priorités métier et la capacité d’exécution technique.`, intervention: `Nous avons mené un audit de code et d’architecture, revu les dépendances, analysé les flux critiques, identifié les quick wins, clarifié les sujets de gouvernance et construit une roadmap cible pour aider les équipes à prioriser les chantiers à plus forte valeur.`, benefits: `L’organisation a retrouvé une vision claire de sa plateforme. Les risques sont mieux qualifiés, les décisions techniques plus simples à arbitrer et les équipes peuvent concentrer leurs efforts sur les chantiers à plus forte valeur métier.` },
]

const themes = ['Modernisation legacy', 'Plateformes IA', 'Infrastructure Web3', 'Software craftsmanship', 'Observabilité & performance', 'Delivery senior']

export default function UseCasesFR() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <div className="max-w-4xl"><span className="text-sm uppercase tracking-[0.3em] text-primary">Cas d’usage</span><h1 className="mt-4 font-display text-6xl font-bold tracking-tight">Projets complexes. Résultats concrets.</h1><p className="mt-6 text-lg leading-8 text-zinc-400">Nous intervenons sur des enjeux techniques déterminants : modernisation, plateformes IA, architectures distribuées, delivery senior et systèmes à forte valeur métier.</p></div>
        <div className="mt-10 flex flex-wrap gap-3">{themes.map((theme) => <span key={theme} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-400">{theme}</span>)}</div>
        <div className="mt-16 grid gap-6 lg:grid-cols-2">{cases.map((item) => <UseCaseCard key={item.problem} {...item} />)}</div>
        <section className="mt-24 grid gap-6 md:grid-cols-3">{[['Comprendre', 'Clarifier les contraintes, les risques et les leviers techniques avant d’engager le delivery.'], ['Prioriser', 'Transformer les constats en roadmap pragmatique alignée sur les enjeux métier.'], ['Livrer', 'Mobiliser une équipe senior capable de concevoir, construire et transmettre.']].map(([title, text]) => <Card key={title}><h2 className="font-display text-2xl font-semibold">{title}</h2><p className="mt-4 leading-7 text-zinc-400">{text}</p></Card>)}</section>
      </main>
      <FinalCTAFr />
      <Footer />
    </>
  )
}
