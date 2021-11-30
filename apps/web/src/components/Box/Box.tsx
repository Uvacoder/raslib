import { css } from '@emotion/react'
import { Styling } from '@styles/emotion'
import * as React from 'react'
import { ReactNode } from 'react'

const base = css`
  height: 2.875rem;
  width: 12.875rem;
  border-radius: var(--radii-md);
  font-weight: var(--fontWeight-semibold);
  font-size: var(--fontSize-sm);
  line-height: 100%;
  text-transform: uppercase;
`

export type IBox = {
  /**
   * Box content
   */
  children: ReactNode
  styles?: Styling
}

export const Box: React.FC<IBox> = ({ children, styles }) => (
  <div css={[base, styles]} aria-label={'box'}>
    {children}
  </div>
)

Box.displayName = 'Box'
