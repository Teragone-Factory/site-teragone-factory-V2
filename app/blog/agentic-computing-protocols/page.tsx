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
            Agentic AI · Protocols · Distributed Systems
          </p>

          <h1 className="mt-6 font-display text-6xl font-semibold leading-none text-white">
            Towards agentic computing: why protocols will change everything.
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-zinc-400">
            Agentic AI is not just another software layer. It is pushing the digital world toward a new architecture where protocols, standards and intent-driven systems become foundational.
          </p>
        </div>

        <div className="mt-16 space-y-12 text-lg leading-8 text-zinc-300">
          <section>
            <h2 className="font-display text-3xl text-white">A new paradigm is emerging</h2>
            <p className="mt-5">For decades, software evolved through successive layers: programming languages, frameworks, middleware, APIs, SaaS platforms and cloud infrastructure.</p>
            <p className="mt-5">Today, something different is happening. Agentic AI, Model Context Protocol-like approaches and new inter-system communication standards are not simply adding another technical layer. They are reshaping how digital systems communicate, coordinate and execute work.</p>
            <p className="mt-5">The shift is profound: we are moving from software operated by humans to systems increasingly driven by goals, context and autonomous orchestration.</p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-white">Protocols become the foundation of agentic computing</h2>
            <p className="mt-5">Protocols should not be seen only as technical plumbing. In an agentic world, they become the common language between systems, tools, data sources, humans and AI agents.</p>
            <p className="mt-5">Traditional APIs are generally endpoint-driven and contract-driven. They describe how a system should be called. Agentic protocols introduce something broader: semantic exchange, contextual understanding, intention-oriented interaction and machine-readable negotiation.</p>
            <p className="mt-5">This changes the relationship between systems. Instead of only describing how to execute a task, we increasingly express what outcome we want to obtain.</p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-white">From isolated models to collective AI systems</h2>
            <p className="mt-5">The strategic challenge is not only the intelligence of a single model. It is the ability for many specialized agents to collaborate safely across tools, organizations and infrastructures.</p>
            <p className="mt-5">Agents will exchange context, negotiate tasks, distribute work, call services, interpret results and coordinate decisions across complex environments.</p>
            <p className="mt-5">Without shared standards, this becomes a fragile experimental chaos. With protocols, agentic AI can become an operational infrastructure layer.</p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-white">The rise of post-software architectures</h2>
            <p className="mt-5">This does not mean software disappears. It means software becomes a programmable substrate manipulated by intelligent systems.</p>
            <p className="mt-5">We will see fewer rigid workflows, fewer human-only interfaces and fewer monolithic applications as the dominant interaction model. Instead, platforms will increasingly be orchestrated by objectives, policies, context and supervised autonomous agents.</p>
            <p className="mt-5">The user experience may shift from navigating tools to expressing intent. The system then decides how to coordinate the required capabilities.</p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-white">Agentic AI is a societal shift, not only a technical one</h2>
            <p className="mt-5">Agentic AI will transform work, organizations, commerce and productivity. It raises new questions: who decides, who executes, who supervises, who is accountable?</p>
            <p className="mt-5">Organizations may become less structured around static workflows and more around dynamic orchestration. Services may become proactive, personalized and context-aware. Economic decisions may increasingly be optimized by systems acting on behalf of people and businesses.</p>
            <p className="mt-5">We are moving from a society of tools to a society of executed intent.</p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-white">Programmable commerce and machine-to-machine coordination</h2>
            <p className="mt-5">New commerce-oriented agent protocols point toward a future where agents can compare, negotiate, purchase and sell across digital ecosystems.</p>
            <p className="mt-5">Commerce becomes programmable, automated and contextual. Value chains can be reconfigured in real time. The user may no longer browse static catalogs: systems may optimize economic choices directly according to preferences, constraints and trusted execution rules.</p>
            <p className="mt-5">This creates massive opportunities, but also major needs around trust, auditability, governance and interoperability.</p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-white">A new market for engineering, platforms and governance</h2>
            <p className="mt-5">These shifts will redraw the software market. Vendors will need to expose capabilities to agents. Cloud platforms will evolve into orchestration hubs. Engineering companies will need to design intelligent, governable and interoperable systems.</p>
            <p className="mt-5">The key capabilities will move from building isolated applications to designing protocols, agent-ready architectures, trust layers, supervision mechanisms and distributed execution models.</p>
            <p className="mt-5">Companies still thinking only in terms of projects, features or applications may miss the deeper transformation already taking place at the protocol and architecture level.</p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-white">The invisible foundations of the next digital world</h2>
            <p className="mt-5">Agentic AI, MCP-like standards and new machine-to-machine protocols are not passing trends. They are becoming the invisible foundations of a new digital civilization.</p>
            <p className="mt-5">The real question is no longer whether this will transform our societies. It is how we choose to design, govern and secure this transformation.</p>
            <p className="mt-5">The future will belong to organizations capable of combining AI engineering, protocol thinking, software craftsmanship, distributed systems and governance-by-design.</p>
          </section>
        </div>
      </article>
    </main>
  )
}
