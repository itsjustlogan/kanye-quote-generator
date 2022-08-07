import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Quote from '..'

describe('Quote Component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render correctly', () => {
    expect(Quote).toBeTruthy()

    const { asFragment, rerender } = render(<Quote quote="rendered" />)

    expect(asFragment().textContent).toContain('rendered')

    rerender(<Quote quote="re-rendered" />)
    expect(asFragment().textContent).toContain('re-rendered')
  })

  it('should match screenshot', () => {
    const { asFragment } = render(<Quote quote="very deep quote" />)

    expect(asFragment()).toMatchSnapshot()
  })
})
