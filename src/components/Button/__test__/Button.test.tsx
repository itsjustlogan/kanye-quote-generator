/* eslint-disable comma-dangle */

import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import Button from '..'

describe('Button component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render correctly', () => {
    expect(Button).toBeTruthy()

    const fn = vi.fn()

    const { getByTestId, asFragment, rerender } = render(
      <Button label="click me" handleClick={fn} />
    )
    expect(getByTestId('button')).toBeTruthy()
    expect(asFragment().textContent).toContain('click me')

    rerender(<Button label="click me again!" handleClick={fn} />)
    expect(asFragment().textContent).toContain('click me again!')

    rerender(<Button label="custom button" handleClick={fn} />)
    expect(asFragment().textContent).toContain('custom button')
  })

  it('should call function when clicked', () => {
    const fn = vi.fn()
    const { getByTestId } = render(<Button label="click me" handleClick={fn} />)
    fireEvent.click(getByTestId('button'))
    expect(fn).toHaveBeenCalledTimes(1)
    fireEvent.click(getByTestId('button'))
    fireEvent.click(getByTestId('button'))
    expect(fn).toHaveBeenCalledTimes(3)
  })

  it('should match snapshot', () => {
    const fn = vi.fn()
    const { asFragment } = render(<Button label="click me" handleClick={fn} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
