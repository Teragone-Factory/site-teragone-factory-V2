import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

let mockedPathname = '/'

vi.mock('next/navigation', () => ({
  usePathname: () => mockedPathname,
}))

import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher'

describe('LanguageSwitcher', () => {
  it('renders English as active by default', () => {
    mockedPathname = '/'

    render(<LanguageSwitcher />)

    const englishLink = screen.getByText('EN')
    const frenchLink = screen.getByText('FR')

    expect(englishLink).toBeInTheDocument()
    expect(frenchLink).toBeInTheDocument()
  })

  it('renders French route correctly', () => {
    mockedPathname = '/fr'

    render(<LanguageSwitcher />)

    expect(screen.getByText('FR')).toBeInTheDocument()
  })
})
