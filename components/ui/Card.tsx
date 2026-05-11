import { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
}

export function Card({ children }: CardProps) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-300 hover:border-primary/30 hover:bg-white/[0.05]">
      {children}
    </div>
  )
}
