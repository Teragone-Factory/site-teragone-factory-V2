import Link from 'next/link'
import { route } from '@/lib/routes'

export default function ArticlePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <Link href={route('/')} className="mb-12 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition hover:border-primary/40 hover:bg-white/[0.05] hover:text-white">
        <span className="text-lg">←</span>
        Retour au site
      </Link>

      <article>
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan">
            AI Engineering · Web3 · Software Craftsmanship
          </p>

          <h1 className="mt-6 font-display text-6xl font-semibold leading-none text-white">
            Why AI Engineering, Web3 and Software Craftsmanship are converging.
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-zinc-400">
            The next generation of software platforms will not simply be AI-powered.
            They will be agent-driven, distributed, verifiable and deeply connected to
            trusted execution layers.
          </p>
        </div>

        <div className="mt-16 space-y-12 text-lg leading-8 text-zinc-300">
          <section>
            <h2 className="font-display text-3xl text-white">
              AI agents are changing software architecture
            </h2>

            <p className="mt-5">
              For years, software systems were mainly designed around APIs, user interfaces and
              business workflows.
            </p>

            <p className="mt-5">
              But AI agents introduce something fundamentally different:
              systems capable of reasoning, planning, orchestrating tools,
              making decisions and executing actions autonomously.
            </p>

            <p className="mt-5">
              This evolution completely changes the role of software engineering.
              Modern platforms now require orchestration layers, memory systems,
              trusted execution models and strong governance mechanisms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-white">
              Web3 brings the missing trust layer
            </h2>

            <p className="mt-5">
              AI systems alone are powerful, but they also create new risks:
              opaque decisions, unverifiable actions and centralized control.
            </p>

            <p className="mt-5">
              This is where decentralized systems and Web3 infrastructure become highly relevant.
            </p>

            <p className="mt-5">
              Blockchain networks introduce verifiable execution,
              distributed trust, identity systems, programmable assets,
              decentralized coordination and immutable state transitions.
            </p>

            <p className="mt-5">
              In other words:
              AI can reason,
              agents can orchestrate,
              but Web3 can verify and execute.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-white">
              Software craftsmanship becomes even more critical
            </h2>

            <p className="mt-5">
              As AI accelerates software delivery,
              engineering quality becomes more important — not less.
            </p>

            <p className="mt-5">
              Poorly governed AI-generated systems can quickly become unstable,
              difficult to maintain and impossible to trust.
            </p>

            <p className="mt-5">
              This is why software craftsmanship principles remain essential:
              architecture clarity,
              testing strategies,
              observability,
              maintainability,
              domain understanding
              and engineering discipline.
            </p>

            <p className="mt-5">
              The future is not about replacing engineers with AI.
              It is about augmenting strong engineering teams with AI-native workflows.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-white">
              Towards actionable distributed systems
            </h2>

            <p className="mt-5">
              We believe the next major generation of platforms will combine:
            </p>

            <ul className="mt-6 space-y-3 text-zinc-300">
              <li>— AI reasoning capabilities</li>
              <li>— Autonomous agent orchestration</li>
              <li>— Trusted decentralized execution</li>
              <li>— Enterprise-grade software engineering</li>
              <li>— Distributed infrastructure and verification layers</li>
            </ul>

            <p className="mt-6">
              This convergence is creating a new category of systems:
              actionable distributed platforms.
            </p>

            <p className="mt-5">
              And building them requires more than hype.
              It requires senior engineering, architecture discipline and a deep understanding of distributed systems.
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}
