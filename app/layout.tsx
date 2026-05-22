import type { Metadata } from 'next'
import { DM_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  metadataBase: new URL('https://teragone-factory.github.io/site-teragone-factory-V2'),
  title: {
    default: 'Teragone Factory — AI Engineering, Software Architecture & Web3',
    template: '%s | Teragone Factory',
  },
  description:
    'Digital & AI Delivery Factory focused on AI Engineering, software architecture, distributed systems, senior delivery and Web3 infrastructure.',
  keywords: [
    'ai engineering',
    'software architecture',
    'distributed systems',
    'web3 engineering',
    'legacy modernization',
    'enterprise ai platform',
    'software craftsmanship',
  ],
  openGraph: {
    title: 'Teragone Factory — AI Engineering, Software Architecture & Web3',
    description:
      'Digital & AI Delivery Factory. Architecture, AI Engineering, distributed systems and senior delivery for critical environments.',
    url: '/',
    siteName: 'Teragone Factory',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teragone Factory — AI Engineering, Software Architecture & Web3',
    description:
      'Architecture, AI Engineering, distributed systems and senior delivery for critical environments.',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${spaceGrotesk.variable} bg-background text-white font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
