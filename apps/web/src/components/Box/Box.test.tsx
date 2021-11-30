import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'

import { Box } from './Box'

describe('Box Component', () => {
  it('renders', async () => {
    render(<Box>Example component</Box>)
    expect(await screen.findByText('Example Component')).toBeInTheDocument()
  })
})
