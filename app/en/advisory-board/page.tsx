import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTAEn } from '@/components/sections/en/FinalCTAEn'

const teragoneBoard = [
  {
    name: 'Séverin Pellegrini',
    role: 'Co-founder & Managing Director — Tech, AI & Innovation',
    image: 'SP',
    linkedin: 'https://www.linkedin.com/in/severinpellegrini/',
    bio: 'Séverin leads Teragone Factory with a focus on technology strategy, AI engineering, innovation and senior delivery. He supports organizations that need to modernize complex systems, industrialize AI initiatives and connect business value with strong engineering execution.',
    focus: ['AI Engineering', 'Innovation', 'Critical platforms'],
  },
  {
    name: 'Julien Leroy',
    role: 'Co-founder & President — Strategy, Growth & Enterprise Development',
    image: 'JL',
    linkedin: 'https://www.linkedin.com/in/julien-leroy-bb246315/',
    bio: 'Julien brings an entrepreneurial and business development perspective to Teragone Factory. He contributes to the company strategy, client positioning and growth trajectory, helping align engineering capabilities with enterprise transformation priorities.',
    focus: ['Strategy', 'Enterprise growth', 'Client development'],
  },
  {
    name: 'Benoît Foucque',
    role: 'CTO Advisor — Architecture & Distributed Systems',
    image: 'BF',
    linkedin: '#',
    bio: 'Benoît supports Teragone Factory on architecture, technical governance and complex software delivery. His role is to help shape robust, scalable and maintainable platforms while keeping a strong focus on production readiness and engineering quality.',
    focus: ['Architecture', 'Distributed systems', 'Production readiness'],
  },
  {
    name: 'Philippe Arnulf',
    role: 'Strategic Advisor — Software Operations & Exploitability',
    image: 'PA',
    linkedin: '#',
    bio: 'Philippe brings a strong operational background in software platforms, infrastructure and exploitability. He helps reinforce Teragone Factory’s ability to design systems that are not only well built, but also observable, supportable and durable in production.',
    focus: ['Operations', 'Exploitability', 'Software platforms'],
  },
  {
    name: 'Eliott Boy',
    role: 'Strategic Advisor — IT Infrastructure & Cybersecurity',
    image: 'EB',
    linkedin: '#',
    bio: 'Eliott contributes expertise across infrastructure, public sector environments and cybersecurity challenges. His perspective strengthens Teragone Factory’s approach to secure, resilient and business-aware technology platforms.',
    focus: ['Infrastructure', 'Cybersecurity', 'Public sector'],
  },
]

const web3Board = [
  { name: 'Web3 Advisor', role: 'Protocol & Ecosystem Strategy', image: 'W3', linkedin: '#', bio: 'Advisor profile to be completed with Web3 protocol, governance, ecosystem and funding expertise.', focus: ['Protocol strategy', 'Governance', 'Ecosystem'] },
  { name: 'Distributed Systems Advisor', role: 'Blockchain Infrastructure', image: 'DS', linkedin: '#', bio: 'Advisor profile to be completed with distributed systems, blockchain infrastructure and operational scalability expertise.', focus: ['Infrastructure', 'Scalability', 'Verification'] },
  { name: 'AI x Web3 Advisor', role: 'Agentic Systems & Decentralized Infrastructure', image: 'AI', linkedin: '#', bio: 'Advisor profile to be completed with expertise at the convergence of AI agents, decentralized systems and trusted execution.', focus: ['AI agents', 'Web3', 'Trust layers'] },
]

function AdvisoryCard({ member }: { member: typeof teragoneBoard[number] }) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.05]">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition duration-500 group-hover:scale-125" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-start gap-5">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/20 to-cyan/10 font-display text-2xl font-bold text-primary shadow-xl shadow-primary/10">
            {member.image}
          </div>
          <div>
            <h3 className="font-display text-2xl font-semibold text-white">{member.name}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{member.role}</p>
          </div>
        </div>
        <p className="mt-6 flex-1 text-sm leading-7 text-zinc-400">{member.bio}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {member.focus.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-zinc-500">{item}</span>
          ))}
        </div>
        <a href={member.linkedin} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-cyan">
          LinkedIn profile <span>→</span>
        </a>
      </div>
    </article>
  )
}

export default function AdvisoryBoardPage() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <section className="max-w-4xl">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">Advisory Board</span>
          <h1 className="mt-5 font-display text-6xl font-bold tracking-tight">Advisory Boards & Strategic Advisors.</h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">A network of entrepreneurs, technology leaders and senior operators supporting Teragone Factory on strategy, engineering excellence, AI, critical platforms and Web3 challenges.</p>
        </section>

        <section className="mt-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-primary">Teragone Factory</span>
              <h2 className="mt-4 font-display text-4xl font-semibold">Teragone Factory Strategic Advisors</h2>
            </div>
            <div className="hidden rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-zinc-400 md:block">5 partner profiles</div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {teragoneBoard.map((member) => <AdvisoryCard key={member.name} member={member} />)}
          </div>
        </section>

        <section className="mt-28">
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-primary">Web3 Ecosystem</span>
              <h2 className="mt-4 font-display text-4xl font-semibold">Web3 Advisory Board</h2>
            </div>
            <div className="hidden rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-zinc-400 md:block">Profiles in progress</div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {web3Board.map((member) => <AdvisoryCard key={member.name} member={member} />)}
          </div>
        </section>
      </main>
      <FinalCTAEn />
      <Footer />
    </>
  )
}
