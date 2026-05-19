import { Footer } from '@/components/layout/Footer'
import { NavBar } from '@/components/layout/NavBar'
import { FinalCTAEn } from '@/components/sections/en/FinalCTAEn'

const teragoneBoard = ['A', 'B', 'C', 'D', 'E']
const web3Board = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

function AdvisoryCard({ letter }: { letter: string }) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.05]">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition duration-500 group-hover:scale-125" />

      <div className="relative flex min-h-[280px] flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-white/10 bg-gradient-to-br from-[#0F172A] to-[#111827] text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-primary/20 bg-primary/10 font-display text-4xl font-bold text-primary">
          {letter}
        </div>

        <p className="mt-8 text-sm uppercase tracking-[0.25em] text-zinc-500">
          Advisory Board Member
        </p>

        <p className="mt-3 max-w-[220px] text-sm leading-7 text-zinc-400">
          Placeholder for biography, expertise, strategic role and sector experience.
        </p>
      </div>
    </div>
  )
}

export default function AdvisoryBoardPage() {
  return (
    <>
      <NavBar />

      <main className="mx-auto max-w-7xl px-6 py-24 text-white">
        <section className="max-w-4xl">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">
            Advisory Board
          </span>

          <h1 className="mt-5 font-display text-6xl font-bold tracking-tight">
            Advisory Boards & Strategic Advisors.
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            A network of experts, entrepreneurs and technology leaders supporting Teragone Factory on engineering, AI, critical platforms and Web3 challenges.
          </p>
        </section>

        <section className="mt-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-primary">
                Teragone Factory
              </span>

              <h2 className="mt-4 font-display text-4xl font-semibold">
                Teragone Factory Advisory Board
              </h2>
            </div>

            <div className="hidden rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-zinc-400 md:block">
              5 partners
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {teragoneBoard.map((letter) => (
              <AdvisoryCard key={letter} letter={letter} />
            ))}
          </div>
        </section>

        <section className="mt-28">
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-primary">
                Web3 Ecosystem
              </span>

              <h2 className="mt-4 font-display text-4xl font-semibold">
                Web3 Advisory Board
              </h2>
            </div>

            <div className="hidden rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-zinc-400 md:block">
              7 members
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {web3Board.map((letter) => (
              <AdvisoryCard key={letter} letter={letter} />
            ))}
          </div>
        </section>
      </main>

      <FinalCTAEn />
      <Footer />
    </>
  )
}
