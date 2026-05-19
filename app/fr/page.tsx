import { HomeLanding } from '@/components/sections/HomeLanding'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Engineering senior, IA & Web3',
  description: 'Teragone Factory conçoit et délivre des plateformes AI-ready, agent-ready et Web3 pour systèmes critiques.',
  alternates: { canonical: '/fr/', languages: { fr: '/fr/', en: '/' } },
}

export default function Page() {
  return <HomeLanding />
}
