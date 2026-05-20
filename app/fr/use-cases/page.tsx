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
  { sector: 'Mobilité & Transport', pillar: 'Architecture & Delivery', problem: 'Moderniser une plateforme legacy critique sans interrompre l’activité.', story: 'Une grande plateforme de mobilité avait atteint un point où chaque évolution devenait plus lente, plus risquée et plus difficile à opérer. Le système continuait à produire de la valeur métier, mais la dette technique, le manque d’observabilité et des flux de delivery fragiles créaient une pression croissante sur les équipes IT et métier.', intervention: 'Nous avons démarré par un audit d’architecture et de code, clarifié les principaux risques, cartographié les flux critiques et identifié la trajectoire de modernisation la plus impactante sans déclencher de réécriture big-bang risquée.', benefits: 'La plateforme est devenue plus compréhensible, plus sûre à opérer et plus prévisible à faire évoluer. Les équipes ont gagné en visibilité, le risque delivery a diminué et la modernisation est devenue actionnable.' },
  { sector: 'IA entreprise', pillar: 'AI Engineering', problem: 'Transformer des idées IA prometteuses en workflows entreprise fiables.', story: 'L’organisation avait identifié des cas d’usage IA à forte valeur, mais l’enjeu n’était pas la démo. Le vrai sujet consistait à connecter l’IA aux données existantes, aux processus métier, aux règles de gouvernance et aux contraintes opérationnelles.', intervention: 'Nous avons conçu une architecture AI-ready, structuré les sources de connaissance internes, introduit du RAG et de l’orchestration LLM, défini des mécanismes d’évaluation, traité les sujets de sécurité et d’observabilité.', benefits: 'L’IA est passée de l’expérimentation à une adoption maîtrisée. Les équipes disposent de fondations techniques réutilisables, d’une gouvernance plus claire et d’une capacité à industrialiser de nouveaux cas d’usage.' },
  { sector: 'Infrastructure blockchain', pillar: 'Protocole Mithril', thumbnail: '/mithril-logo.png', problem: 'Rendre la synchronisation blockchain plus légère, plus rapide et plus fiable.', story: 'Dans les grands réseaux distribués, l’amorçage de l’infrastructure peut devenir lent, coûteux et lourd à opérer. Les nœuds et services ont besoin d’un accès fiable à l’état du réseau.', intervention: 'Nous avons contribué à la conception et au développement d’un protocole de certification distribuée produisant des snapshots vérifiables pour réduire le temps de synchronisation et permettre une validation légère.', benefits: 'Les opérateurs et développeurs bénéficient d’un bootstrap plus rapide, d’une validation plus légère, d’une meilleure résilience et d’une expérience infrastructure plus fluide.' },
  { sector: 'Plateforme logicielle', pillar: 'Audit & Expertise', problem: 'Reprendre le contrôle sur la dette technique et le ralentissement du delivery.', story: 'Une plateforme logicielle était devenue difficile à faire évoluer. Les équipes faisaient face à des dépendances peu lisibles, une visibilité limitée sur les flux critiques et un écart croissant entre les priorités métier et la capacité technique.', intervention: 'Nous avons mené un audit de code et d’architecture, revu les dépendances, analysé les flux critiques, identifié les quick wins et construit une roadmap cible.', benefits: 'L’organisation a obtenu une vision claire, priorisée et actionnable de sa plateforme. Les décisions sont devenues plus objectives et la capacité de delivery restaurée.' },
]

const themes = ['Modernisation legacy', 'Plateformes AI-ready', 'Infrastructure Web3', 'Software craftsmanship', 'Observabilité & performance', 'Delivery senior']

export default function UseCasesFR() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <div className="max-w-4xl"><span className="text-sm uppercase tracking-[0.3em] text-primary">Cas d’usage</span><h1 className="mt-4 font-display text-6xl font-bold tracking-tight">Projets complexes. Résultats concrets.</h1><p className="mt-6 text-lg leading-8 text-zinc-400">Nous intervenons là où les enjeux techniques sont critiques : modernisation, plateformes IA, architectures distribuées, delivery senior et systèmes à forte valeur métier.</p></div>
        <div className="mt-10 flex flex-wrap gap-3">{themes.map((theme) => <span key={theme} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-400">{theme}</span>)}</div>
        <div className="mt-16 grid gap-6 lg:grid-cols-2">{cases.map((item) => <UseCaseCard key={item.problem} {...item} />)}</div>
        <section className="mt-24 grid gap-6 md:grid-cols-3">{[['Comprendre', 'Clarifier les contraintes, les risques et les leviers techniques avant d’engager le delivery.'], ['Prioriser', 'Transformer les constats en roadmap pragmatique alignée avec les enjeux métier.'], ['Livrer', 'Mobiliser une équipe senior capable de concevoir, construire et transmettre la connaissance.']].map(([title, text]) => <Card key={title}><h2 className="font-display text-2xl font-semibold">{title}</h2><p className="mt-4 leading-7 text-zinc-400">{text}</p></Card>)}</section>
      </main>
      <FinalCTAFr />
      <Footer />
    </>
  )
}
