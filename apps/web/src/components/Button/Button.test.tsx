import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import * as React from 'react'

import { Button } from './Button'

describe('Button Component', () => {
  it('renders', async () => {
    render(<Button content={'Example Component'} />)
    expect(await screen.findByText('Example Component')).toBeInTheDocument()
  })
})
