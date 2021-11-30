import { radii } from './border'
import { colors } from './colors'
import { fontSizes, fontWeights } from './typography'

export const theme = {
  colors,
  fontWeights,
  fontSizes,
  radii
}

export type Theme = typeof theme
