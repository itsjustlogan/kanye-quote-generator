import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Title from '../Title'

describe('Title Component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render correctly', () => {
    expect(Title).toBeTruthy()

    const { asFragment, rerender } = render(<Title title="app title" />)

    expect(asFragment().textContent).toContain('app title')

    rerender(<Title title="new app title" />)
    expect(asFragment().textContent).toContain('new app title')
  })

  it('should match screenshot', () => {
    const { asFragment } = render(<Title title="very deep quote" />)

    expect(asFragment()).toMatchSnapshot()
  })
})
