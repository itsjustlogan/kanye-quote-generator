import React from 'react'
import { render, cleanup } from '@testing-library/react'
import App from './App'

describe('Main app component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render child elements correctly', () => {
    expect(App).toBeTruthy()

    const { asFragment, getByTestId } = render(<App />)

    expect(asFragment()).toBeTruthy()

    expect(getByTestId('title')).toBeTruthy()

    expect(getByTestId('quote')).toBeTruthy()

    expect(getByTestId('button')).toBeTruthy()
  })
})
