import Link from 'next/link'
import { route } from '@/lib/routes'

export default function ArticlePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <Link href={route('/')} className="mb-12 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition hover:border-primary/40 hover:bg-white/[0.05] hover:text-white">
        <span className="text-lg">←</span>
        Back to website
      </Link>

      <article>
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan">AI Engineering · Software Craftsmanship · Delivery Governance</p>
          <h1 className="mt-6 font-display text-6xl font-semibold leading-none text-white">AI Engineering should not become a black box.</h1>
          <p className="mt-8 text-xl leading-relaxed text-zinc-400">AI is transforming how software is designed, built and maintained. But acceleration without transparency can quickly become a new form of technical debt.</p>
        </div>
        <div className="mt-16 space-y-12 text-lg leading-8 text-zinc-300">
          <section><h2 className="font-display text-3xl text-white">AI is changing the software delivery equation</h2><p className="mt-5">AI engineering is reshaping the way teams design, develop, document, test and maintain software systems. Code generation, automated documentation, AI-assisted refactoring and test generation are becoming part of the daily engineering workflow.</p><p className="mt-5">The promise is real. AI can accelerate delivery, augment developers, reduce repetitive work and create new leverage for engineering teams.</p><p className="mt-5">But not every approach creates the same long-term value. The key question is not whether AI can generate more software faster. The key question is whether teams still understand, own and can evolve what is being produced.</p></section>
          <section><h2 className="font-display text-3xl text-white">The risk of black-box AI engineering methodologies</h2><p className="mt-5">A growing number of all-in-one AI engineering frameworks promise massive productivity gains through highly automated pipelines and turnkey methodologies.</p><p className="mt-5">The issue is not automation itself. The issue is opacity.</p><p className="mt-5">When a delivery methodology becomes a black box, teams may lose visibility over how the code is structured, why architecture decisions were made, how tests were generated and whether the system is truly maintainable.</p><p className="mt-5">A test coverage percentage can look reassuring while still hiding weak end-to-end coverage, poor scenario design or fragile integration boundaries.</p></section>
          <section><h2 className="font-display text-3xl text-white">Opaque acceleration creates hidden fragility</h2><p className="mt-5">In critical information systems, cybersecurity, regulatory pressure, distributed architectures and production stability make opacity increasingly unacceptable.</p><p className="mt-5">Trusting a system that teams do not understand is risky. Externalizing design intelligence without knowledge transfer is even riskier.</p><p className="mt-5">AI should not create dependency. It should create capability. It should help teams become faster, sharper and more autonomous, not less able to reason about their own systems.</p></section>
          <section><h2 className="font-display text-3xl text-white">Transparent AI engineering as a capability multiplier</h2><p className="mt-5">When AI is integrated properly, it becomes a powerful engineering accelerator. It can support code generation, but the code still needs to be reviewed, challenged and tested.</p><p className="mt-5">It can generate unit tests, but those tests must be complemented by a real end-to-end testing strategy. It can assist documentation, but documentation must follow internal standards. It can accelerate refactoring, but refactoring must be guided by clear architecture principles.</p><p className="mt-5">In this model, AI does not replace engineering discipline. It strengthens it.</p></section>
          <section><h2 className="font-display text-3xl text-white">The time saved by AI must be reinvested in value</h2><p className="mt-5">The objective of AI engineering is not to produce more lines of code. The objective is to spend less time on mechanical tasks and more time on what actually matters.</p><p className="mt-5">That means understanding users better, deepening domain knowledge, improving functional relevance, strengthening architecture quality and making systems easier to maintain.</p><p className="mt-5">A team augmented by AI should spend more time on value, not less.</p></section>
          <section><h2 className="font-display text-3xl text-white">A constructive warning for engineering leaders</h2><p className="mt-5">Massive automation without mastery is a risk. Test coverage without test strategy is an illusion. AI without knowledge transfer is a fragility.</p><p className="mt-5">The organizations that benefit most from AI engineering will not be the ones that hide complexity behind black boxes. They will be the ones that make AI transparent, explainable, auditable and transmissible.</p><p className="mt-5">This is where AI engineering, software craftsmanship and delivery governance converge: building systems that are faster to deliver, but also safer, clearer and easier to evolve.</p></section>
        </div>
      </article>
    </main>
  )
}
