import Link from 'next/link'

const articles = [
  {
    slug: 'ai-web3-agentic-engineering',
    category: 'AI Engineering · Web3',
    title: 'Why AI Engineering, Web3 and Software Craftsmanship are converging',
    excerpt:
      'AI agents, decentralized systems and modern software engineering are starting to merge into a new generation of trusted, actionable platforms.',
  },
]

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">Insights & Engineering</p>
        <h1 className="mt-5 font-display text-6xl font-semibold leading-none text-white">
          Teragone Factory Blog.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-400">
          Articles, engineering feedback, architecture patterns and strategic analysis around AI,
          agent systems, Web3 infrastructure and modern software delivery.
        </p>
      </div>

      <div className="mt-16 grid gap-8">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
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
              Read article
              <span>→</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
