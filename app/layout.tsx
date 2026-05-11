import type { Metadata } from 'next'
import { DM_Sans, Syne } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const syne = Syne({ subsets: ['latin'], variable: '--font-syne' })

export const metadata: Metadata = {
  metadataBase: new URL('https://teragone-factory.github.io/site-teragone-factory-V2'),
  title: {
    default: 'Teragone Factory — Engineering Senior, IA & Web3',
    template: '%s | Teragone Factory',
  },
  description:
    'Filiale digitale, IA et Web3 du groupe Teragone Solutions. Squads seniors, AI Engineering, systèmes agentiques, software craftsmanship et plateformes critiques.',
  keywords: [
    'ai engineering france',
    'software craftsmanship',
    'squad senior développement',
    'web3 blockchain consulting',
    'architecture logicielle',
    'modernisation legacy',
    'systèmes agentiques production',
  ],
  openGraph: {
    title: 'Teragone Factory — Engineering Senior, IA & Web3',
    description:
      'Digital & AI Delivery Factory. Architecture, delivery senior, AI Engineering, Web3 et systèmes critiques.',
    url: '/',
    siteName: 'Teragone Factory',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teragone Factory — Engineering Senior, IA & Web3',
    description:
      'Architecture, delivery senior, AI Engineering, Web3 et systèmes critiques.',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${dmSans.variable} ${syne.variable} bg-background text-white font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
