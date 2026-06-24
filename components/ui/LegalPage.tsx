import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'

type LegalSection = {
  title: string
  paragraphs?: string[]
  items?: string[]
}

type LegalPageProps = {
  eyebrow: string
  title: string
  intro: string
  updated: string
  sections: LegalSection[]
}

export function LegalPage({ eyebrow, title, intro, updated, sections }: LegalPageProps) {
  const updateLabel = updated.includes('Mai') ? 'Derniere mise a jour' : 'Last update'

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-5xl px-6 py-24 text-white">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">{eyebrow}</span>
        <h1 className="mt-4 font-display text-6xl font-bold tracking-tight">{title}</h1>
        <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-400">{intro}</p>
        <p className="mt-4 text-sm text-zinc-500">{updateLabel}: {updated}</p>

        <div className="mt-14 space-y-6">
          {sections.map((section) => (
            <section key={section.title} className="rounded-[2rem] border border-white/10 bg-card p-8">
              <h2 className="font-display text-3xl font-semibold">{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-5 leading-8 text-zinc-400">{paragraph}</p>
              ))}
              {section.items && (
                <ul className="mt-5 space-y-3 text-zinc-400">
                  {section.items.map((item) => <li key={item} className="leading-7">— {item}</li>)}
                </ul>
              )}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
