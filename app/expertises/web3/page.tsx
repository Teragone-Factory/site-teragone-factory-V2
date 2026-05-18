import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { Button } from '@/components/ui/Button'
import { ExpertiseDetailCard } from '@/components/ui/ExpertiseDetailCard'

const sections = [
  {
    title: 'Protocol Engineering',
    expertise:
      'Conception de protocoles distribués, systèmes de validation légère, synchronisation réseau, architecture consensus, gouvernance technique et engineering blockchain production-grade issus de projets internationaux et critiques.',
    actions: [
      'Conception et modernisation de protocoles blockchain et middleware distribués',
      'Architecture de systèmes de certification, snapshots et validation légère',
      'Optimisation performance, synchronisation réseau et résilience infrastructure',
      'Audit architecture et accompagnement engineering long terme',
    ],
  },
  {
    title: 'Distributed Infrastructure',
    expertise:
      'Expertise infrastructure distribuée, DevOps blockchain, observabilité, déploiement multi-régions, exploitation de noeuds critiques et plateformes hautement résilientes.',
    actions: [
      'Industrialisation et exploitation d’infrastructures blockchain critiques',
      'Monitoring, automatisation, sécurité et gouvernance opérationnelle',
      'Déploiement cloud, Kubernetes et architectures distribuées haute disponibilité',
      'RUN, fiabilisation et optimisation des coûts d’exploitation',
    ],
  },
  {
    title: 'Web3 Platforms',
    expertise:
      'Conception de plateformes Web3 orientées produit, wallets, APIs blockchain, plateformes de gouvernance, applications décentralisées et services connectés à des infrastructures on-chain.',
    actions: [
      'Développement de plateformes Web3 et applications décentralisées',
      'Intégration wallets, smart contracts, identité et services on-chain',
      'Architecture backend, APIs et workflows métier connectés à la blockchain',
      'Accompagnement produit, UX et industrialisation delivery',
    ],
  },
  {
    title: 'Gaming & Interactive Economies',
    expertise:
      'Architecture de plateformes gaming Web3, économie digitale, ownership d’actifs, logique multi-agents et infrastructures temps réel pour expériences interactives décentralisées.',
    actions: [
      'Conception de plateformes gaming connectées à des infrastructures blockchain',
      'Gestion d’actifs numériques, identité, économie virtuelle et rewards systems',
      'Architecture backend scalable pour interactions temps réel et multi-joueurs',
      'Intégration IA et agents autonomes dans des expériences interactives',
    ],
  },
  {
    title: 'IA, Agentique & Web3',
    expertise:
      'Nous concevons des architectures où IA, agents autonomes et infrastructures blockchain travaillent ensemble pour créer des systèmes actionnables, vérifiables et distribués.',
    actions: [
      'Orchestration d’agents IA connectés à des services et protocoles Web3',
      'Architecture de systèmes AI-ready & agent-ready sécurisés et observables',
      'Intégration de workflows autonomes avec validation et exécution on-chain',
      'Conception de plateformes hybrides mêlant IA, APIs métier et blockchain',
    ],
  },
]

export default function Web3Page() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Web3 & Blockchain</span>
        <h1 className="mt-4 max-w-5xl font-display text-6xl font-bold tracking-tight">
          Distributed systems & blockchain engineering.
        </h1>

        <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-400">
          Protocoles distribués, infrastructures blockchain, synchronisation réseau,
          validation légère, plateformes Web3, architectures décentralisées et systèmes
          hybrides mêlant IA, agents autonomes et exécution on-chain.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {sections.map((section) => (
            <ExpertiseDetailCard
              key={section.title}
              title={section.title}
              expertise={section.expertise}
              actions={section.actions}
            />
          ))}
        </div>

        <div className="mt-14">
          <Button href="/contact">Discuter Web3 & Infrastructure</Button>
        </div>
      </main>
      <Footer />
    </>
  )
}
