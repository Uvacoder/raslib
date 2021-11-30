import { css } from '@emotion/react'
import { Styling } from '@types'
import * as React from 'react'

const baseStyle = css`
  font-size: 3rem;
`

export type ExampleProps = {
  /**
   * Title content
   */
  content: string
  styles?: Styling
}

export const Title: React.FC<ExampleProps> = ({ content, styles }) => (
  <h1 css={[baseStyle, styles]} aria-label={content}>
    {content}
  </h1>
)

Title.displayName = 'Title'
