import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import { describe, it, expect } from 'vitest'

describe('Hero', () => {
  it('renders Sam Leishman', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(/sam\s+leishman/i)
  })
})