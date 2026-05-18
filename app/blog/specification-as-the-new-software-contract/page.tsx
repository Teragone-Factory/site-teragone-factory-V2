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
            AI Engineering · Specification · Software Craftsmanship
          </p>

          <h1 className="mt-6 font-display text-6xl font-semibold leading-none text-white">
            Why specification could become the new strategic layer of software engineering.
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-zinc-400">
            As AI accelerates software delivery, the real differentiator may no longer be the ability to generate code faster. It may be the ability to specify systems better.
          </p>
        </div>

        <div className="mt-16 space-y-12 text-lg leading-8 text-zinc-300">
          <section>
            <h2 className="font-display text-3xl text-white">AI changes the bottleneck of software delivery</h2>
            <p className="mt-5">For years, engineering organizations have focused on accelerating implementation: better frameworks, better tooling, better CI/CD, better cloud platforms and better developer experience.</p>
            <p className="mt-5">With generative AI, code production is becoming dramatically faster. Developers can generate components, tests, scripts, documentation and refactoring proposals in minutes.</p>
            <p className="mt-5">But this does not remove the hardest part of software engineering. It moves the bottleneck upstream: from writing code to defining exactly what the system should do, why it should do it, under which constraints, and how it should behave over time.</p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-white">Specification becomes the interface between business, engineering and AI</h2>
            <p className="mt-5">When AI becomes part of the delivery chain, vague requirements become dangerous. A poorly specified feature can be implemented faster than ever — but it can also create ambiguity, technical debt and misalignment faster than ever.</p>
            <p className="mt-5">This is why specification is becoming a strategic engineering asset. It is the place where business intent, product decisions, architecture constraints, quality expectations and operational rules are made explicit.</p>
            <p className="mt-5">A strong specification is not a static document. It is a shared contract between stakeholders, developers, architects, testers, AI assistants and future maintainers.</p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-white">From prompt-driven development to specification-driven engineering</h2>
            <p className="mt-5">Prompting an AI tool is useful. But prompt-driven development alone is not enough for critical systems. It often lacks traceability, structure, testability and long-term governance.</p>
            <p className="mt-5">Specification-driven engineering creates a stronger foundation. It turns intent into structured requirements, acceptance criteria, domain rules, architecture decisions and testable expectations.</p>
            <p className="mt-5">In this model, AI does not replace engineering discipline. It amplifies it. The better the specification, the more useful AI becomes for implementation, testing, documentation, migration, modernization and quality control.</p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-white">Software craftsmanship matters even more</h2>
            <p className="mt-5">AI-generated code can look impressive while still being fragile, inconsistent or poorly aligned with the domain. This is why software craftsmanship remains essential.</p>
            <p className="mt-5">Craftsmanship provides the engineering standards needed to evaluate, structure and maintain what AI helps produce: clean architecture, domain clarity, automated tests, observability, refactoring discipline and production readiness.</p>
            <p className="mt-5">The future is not less engineering. It is more intentional engineering, supported by AI-native workflows.</p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-white">What this means for critical platforms</h2>
            <p className="mt-5">For critical systems, specification can become the backbone of delivery. It helps teams align faster, reduce ambiguity, onboard new contributors, secure AI-assisted development and make architecture decisions more explicit.</p>
            <p className="mt-5">It also creates a better foundation for testing and governance. Requirements can be connected to acceptance tests, architecture rules, documentation, monitoring expectations and release criteria.</p>
            <p className="mt-5">This is especially important for organizations modernizing legacy systems, building AI-ready platforms or moving toward agentic architectures where autonomous systems will execute more actions on behalf of users and businesses.</p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-white">A new engineering discipline is emerging</h2>
            <p className="mt-5">The next generation of high-performing engineering teams will not only be good at writing code. They will be good at specifying, structuring and governing complex systems in a way that both humans and AI can understand.</p>
            <p className="mt-5">This is where AI engineering, specification-driven development and software craftsmanship converge.</p>
            <p className="mt-5">The organizations that master this layer will not simply generate software faster. They will build systems that are clearer, safer, more maintainable and easier to evolve.</p>
          </section>
        </div>
      </article>
    </main>
  )
}
