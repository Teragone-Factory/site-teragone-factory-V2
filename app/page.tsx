import { HomeLanding } from '@/components/sections/HomeLanding'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Senior Engineering, AI & Web3',
  description: 'Teragone Factory designs and delivers AI-ready, agent-ready and Web3 platforms for critical enterprise systems.',
  alternates: { canonical: '/', languages: { fr: '/fr/', en: '/' } },
}

export default function Page() {
  return <HomeLanding />
}
