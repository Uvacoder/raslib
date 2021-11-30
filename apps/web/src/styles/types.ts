import { Theme } from '@emotion/react'
import styled from '@emotion/styled'

export default styled

export interface StyleProps {
  theme: Theme
}

export type NoTheme = Record<string, unknown>
