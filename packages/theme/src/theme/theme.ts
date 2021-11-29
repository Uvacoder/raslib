import { radii } from './border'
import { colors } from './colors'
import { fontSizes, fontWeights } from './typography'

export interface Theme {
  colors: typeof colors
  fontWeights: typeof fontWeights
  fontSizes: typeof fontSizes
  radii: typeof radii
}
export const theme: Theme = {
  colors,
  fontWeights,
  fontSizes,
  radii
}
