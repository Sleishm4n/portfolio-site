import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import { describe, it, expect } from 'vitest'

describe('Hero', () => {
  it('renders Sam Leishman', () => {
    render(<Home />)
    expect(screen.getByText(/sam leishman/i)).toBeInTheDocument()
  })
})