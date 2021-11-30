import { colors, cssVars, radii, shadows, typography } from './foundation'
import { textStyles } from './styles'

export const theme = {
  colors,
  radii,
  ...typography,
  cssVars,
  shadows,
  text: textStyles
}

export type Theme = typeof theme
