import { css } from '@emotion/react'
import { darken, lighten } from '@rasreee/theme-tools'

export const clickableBgStyles = (initialBg: string) => css`
  background-color: ${initialBg};

  &:not(:disabled):hover {
    background: ${darken(initialBg, 15)};
  }
  &:active {
    background: ${darken(initialBg, 25)};
  }
`

export const gray = (level = 900): string => {
  if (level === 0) return '#fff'
  const val = `#060606`

  return lighten(val, (900 - level) / 10)
}
