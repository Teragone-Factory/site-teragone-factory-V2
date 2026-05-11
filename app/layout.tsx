import type { Metadata } from 'next'
import { DM_Sans, Syne } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
})

export const metadata: Metadata = {
  title: 'Teragone Factory — Engineering Senior, IA & Web3',
  description:
    'Filiale digitale du groupe Teragone Solutions. Squads seniors, AI Engineering, systèmes agentiques et Web3.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${dmSans.variable} ${syne.variable} bg-background text-white font-sans`}>
        {children}
      </body>
    </html>
  )
}
