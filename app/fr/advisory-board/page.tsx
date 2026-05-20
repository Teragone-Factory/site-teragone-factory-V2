import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTAFr } from '@/components/sections/fr/FinalCTAFr'

const teragoneBoard = [
  { name: 'Séverin Pellegrini', role: 'Cofondateur & Directeur général — Tech, IA & Innovation', image: 'SP', photo: '/site-teragone-factory-V2/sp.jpg', linkedin: 'https://www.linkedin.com/in/severinpellegrini/', bio: 'Séverin pilote Teragone Factory avec un focus sur la stratégie technologique, l’AI engineering, l’innovation et le delivery senior. Il accompagne les organisations qui doivent moderniser des systèmes complexes, industrialiser leurs initiatives IA et relier la valeur métier à une exécution d’ingénierie solide.', focus: ['AI Engineering', 'Innovation', 'Plateformes critiques'] },
  { name: 'Julien Leroy', role: 'Cofondateur & Président — Stratégie, croissance & développement entreprise', image: 'JL', photo: '/site-teragone-factory-V2/jl.jpg', linkedin: 'https://www.linkedin.com/in/julien-leroy-bb246315/', bio: 'Julien apporte une vision entrepreneuriale et business development à Teragone Factory. Il contribue à la stratégie de l’entreprise, au positionnement client et à la trajectoire de croissance, en alignant les capacités d’ingénierie avec les priorités de transformation des grandes organisations.', focus: ['Stratégie', 'Croissance entreprise', 'Développement client'] },
  { name: 'Benoit Foucque', role: 'CTO — Teragone Factory', image: 'BF', photo: '/site-teragone-factory-V2/bf.jpg', linkedin: 'https://www.linkedin.com/in/benoitfoucque/', bio: 'Benoit est CTO de Teragone Factory. Il apporte une expertise forte en leadership technique, architecture logicielle, systèmes distribués et delivery de production. Son rôle consiste à renforcer la direction technique, guider les choix d’architecture et garantir que nos squads seniors livrent des plateformes robustes, maintenables et scalables.', focus: ['CTO', 'Architecture', 'Systèmes distribués'] },
  { name: 'Antoine Ternisien', role: 'Strategic Advisor — Data, digital & services financiers', image: 'AT', photo: '/site-teragone-factory-V2/at.jpg', linkedin: 'https://www.linkedin.com/in/antoine-ternisien-702039126/', bio: 'Antoine apporte une solide expérience en conseil et développement commercial dans la banque, l’assurance, la data et la transformation digitale. Il aide à connecter les capacités d’ingénierie de Teragone Factory aux priorités des entreprises, aux contraintes sectorielles et aux opportunités de transformation à forte valeur.', focus: ['Data', 'Transformation digitale', 'Services financiers'] },
  { name: 'Philippe Arnulf', role: 'Strategic Advisor — Opérations logicielles & exploitabilité', image: 'PA', photo: '/site-teragone-factory-V2/pa.jpg', linkedin: 'https://www.linkedin.com/in/philippe-arnulf-69a005b9/', bio: 'Philippe apporte une forte expérience opérationnelle autour des plateformes logicielles, de l’infrastructure et de l’exploitabilité. Il renforce notre capacité à concevoir des systèmes non seulement bien construits, mais aussi observables, supportables et durables en production.', focus: ['Opérations', 'Exploitabilité', 'Plateformes logicielles'] },
  { name: 'Eliott Boy', role: 'Strategic Advisor — Infrastructure IT & cybersécurité', image: 'EB', photo: '/site-teragone-factory-V2/eb.jpg', linkedin: 'https://www.linkedin.com/in/eliott-boy-0a6914115/', bio: 'Eliott apporte son expertise sur les enjeux d’infrastructure, d’environnements publics et de cybersécurité. Son regard renforce l’approche de Teragone Factory pour concevoir des plateformes technologiques sécurisées, résilientes et alignées avec les enjeux métier.', focus: ['Infrastructure', 'Cybersécurité', 'Secteur public'] },
]

type Advisor = (typeof teragoneBoard)[number]

function AdvisoryCard({ member }: { member: Advisor }) {
  const photo = 'photo' in member ? member.photo : undefined
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.05]">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition duration-500 group-hover:scale-125" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-start gap-5">
          {photo ? <div className="relative z-10 h-28 w-28 shrink-0 rounded-[1.75rem] border border-primary/25 bg-cover bg-center bg-no-repeat shadow-2xl shadow-primary/10" style={{ backgroundImage: `url(${photo})` }} aria-label={member.name} /> : <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/20 to-cyan/10 font-display text-2xl font-bold text-primary shadow-xl shadow-primary/10">{member.image}</div>}
          <div className="min-w-0 pt-1"><h3 className="font-display text-2xl font-semibold text-white">{member.name}</h3><p className="mt-2 text-sm leading-6 text-zinc-400">{member.role}</p></div>
        </div>
        <p className="mt-6 flex-1 text-sm leading-7 text-zinc-400">{member.bio}</p>
        <div className="mt-6 flex flex-wrap gap-2">{member.focus.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-zinc-500">{item}</span>)}</div>
        <a href={member.linkedin} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-cyan">Profil LinkedIn <span>→</span></a>
      </div>
    </article>
  )
}

export default function AdvisoryBoardPageFr() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <section className="max-w-4xl"><span className="text-sm uppercase tracking-[0.3em] text-primary">Advisory Board</span><h1 className="mt-5 font-display text-6xl font-bold tracking-tight">Advisory Boards & Advisors stratégiques.</h1><p className="mt-6 text-lg leading-8 text-zinc-400">Un réseau d’entrepreneurs, de leaders technologiques et d’opérateurs seniors qui accompagnent Teragone Factory sur la stratégie, l’excellence d’ingénierie, l’IA, les plateformes critiques et les enjeux Web3.</p></section>
        <section className="mt-24"><div className="flex items-end justify-between gap-6"><div><span className="text-sm uppercase tracking-[0.3em] text-primary">Teragone Factory</span><h2 className="mt-4 font-display text-4xl font-semibold">Advisors stratégiques Teragone Factory</h2></div><div className="hidden rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-zinc-400 md:block">6 profils partenaires</div></div><div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{teragoneBoard.map((member) => <AdvisoryCard key={member.name} member={member} />)}</div></section>
      </main>
      <FinalCTAFr />
      <Footer />
    </>
  )
}
