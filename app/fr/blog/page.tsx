import Link from 'next/link'
import { route } from '@/lib/routes'

const articles = [
  {
    slug: 'ai-web3-agentic-engineering',
    category: 'AI Engineering · Web3',
    title: 'Why AI Engineering, Web3 and Software Craftsmanship are converging',
    excerpt:
      'AI agents, decentralized systems and modern software engineering are starting to merge into a new generation of trusted, actionable platforms.',
  },
  {
    slug: 'agentic-computing-protocols',
    category: 'Agentic AI · Protocols',
    title: 'Towards agentic computing: why protocols will change everything',
    excerpt:
      'Protocols, agent orchestration and machine-to-machine communication standards are becoming the invisible infrastructure of the next digital world.',
  },
  {
    slug: 'transparent-ai-engineering',
    category: 'AI Engineering · Governance',
    title: 'AI Engineering should not become a black box',
    excerpt:
      'AI can dramatically accelerate software delivery, but opaque methodologies may also create hidden technical debt, fragile systems and long-term dependency.',
  },
  {
    slug: 'specification-as-the-new-software-contract',
    category: 'Specification · AI Engineering',
    title: 'Why specification could become the new strategic layer of software engineering',
    excerpt:
      'As AI accelerates software delivery, specification may become the true differentiator between scalable engineering organizations and fragile AI-generated systems.',
  },
]

export default function BlogPageFR() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <Link href={route('/fr/')} className="mb-12 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition hover:border-primary/40 hover:bg-white/[0.05] hover:text-white">
        <span className="text-lg">←</span>
        Retour au site
      </Link>

      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">Insights & Engineering</p>
        <h1 className="mt-5 font-display text-6xl font-semibold leading-none text-white">
          Teragone Factory Blog.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-400">
          Les articles restent volontairement en anglais afin de conserver une ligne éditoriale internationale autour de l’AI Engineering, des systèmes agentiques, du Web3 et du software delivery moderne.
        </p>
      </div>

      <div className="mt-16 grid gap-8">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={route(`/blog/${article.slug}`)}
            className="group rounded-[2rem] border border-white/10 bg-card p-10 transition hover:border-primary/40 hover:bg-white/[0.03]"
          >
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan">
              {article.category}
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold text-white transition group-hover:text-primary">
              {article.title}
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-400">
              {article.excerpt}
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-primary">
              Lire l’article en anglais
              <span>→</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
