import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

let mockedPathname = '/'

vi.mock('next/navigation', () => ({
  usePathname: () => mockedPathname,
}))

vi.mock('@/components/layout/NavBar', () => ({ NavBar: () => <nav>Navigation</nav> }))
vi.mock('@/components/layout/Footer', () => ({ Footer: () => <footer>Footer</footer> }))
vi.mock('@/components/sections/AnimatedHeroVisual', () => ({ AnimatedHeroVisual: () => <div>Hero visual</div> }))
vi.mock('@/components/sections/ProofBar', () => ({ ProofBar: () => <div>Proof bar</div> }))
vi.mock('@/components/sections/RecruitmentTeaser', () => ({ RecruitmentTeaser: () => <section>Recruitment teaser</section> }))
vi.mock('@/components/sections/CredibilitySection', () => ({ CredibilitySection: () => <section>Credibility section</section> }))
vi.mock('@/components/sections/DeliveryMethod', () => ({ DeliveryMethod: () => <section>Delivery method</section> }))
vi.mock('@/components/sections/DnaBlock', () => ({ DnaBlock: () => <section>DNA block</section> }))
vi.mock('@/components/sections/FinalCTA', () => ({ FinalCTA: () => <section>French CTA</section> }))
vi.mock('@/components/sections/en/FinalCTAEn', () => ({ FinalCTAEn: () => <section>English CTA</section> }))

import { HomeLanding } from '@/components/sections/HomeLanding'

describe('HomeLanding', () => {
  it('renders English content by default', () => {
    mockedPathname = '/'
    render(<HomeLanding />)

    expect(screen.getByText('Discuss your project')).toBeInTheDocument()
    expect(screen.getByText('Engineering expertise designed for critical systems.')).toBeInTheDocument()
    expect(screen.getByText('Why Teragone Factory')).toBeInTheDocument()
    expect(screen.getByText('English CTA')).toBeInTheDocument()
  })

  it('renders French content on /fr', () => {
    mockedPathname = '/fr'
    render(<HomeLanding />)

    expect(screen.getByText('Discutons de votre projet')).toBeInTheDocument()
    expect(screen.getByText('Une expertise engineering pensée pour les systèmes critiques.')).toBeInTheDocument()
    expect(screen.getByText('Pourquoi Teragone Factory')).toBeInTheDocument()
    expect(screen.getByText('French CTA')).toBeInTheDocument()
  })
})
