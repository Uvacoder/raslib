import { radii } from './border'
import { brand, palette } from './colors'
import { fontSizes, fontWeights } from './typography'

export interface Theme {
  colors: typeof palette
  brand: typeof brand
  fontWeights: typeof fontWeights
  fontSizes: typeof fontSizes
  radii: typeof radii
}
export const theme: Theme = {
  colors: palette,
  brand,
  fontWeights,
  fontSizes,
  radii
}
