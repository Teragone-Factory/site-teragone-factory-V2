import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'

let mockedPathname = '/'

vi.mock('next/navigation', () => ({
  usePathname: () => mockedPathname,
}))

vi.mock('@/components/layout/NavBar', () => ({ NavBar: () => <nav aria-label="Main navigation">Navigation</nav> }))
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

describe('Accessibility smoke tests', () => {
  it('renders a visible navigation landmark', () => {
    const { getByLabelText } = render(<HomeLanding />)

    expect(getByLabelText('Main navigation')).toBeTruthy()
  })

  it('renders semantic sections correctly', () => {
    const { container } = render(<HomeLanding />)

    const sections = container.querySelectorAll('section')
    expect(sections.length).toBeGreaterThan(3)
  })
})
