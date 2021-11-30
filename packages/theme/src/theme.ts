import {
  colors as initialColors,
  defaultColorConfig,
  generatePalette,
  radii,
  typography
} from './foundation'

const palette = generatePalette<typeof defaultColorConfig, keyof typeof defaultColorConfig>(
  defaultColorConfig
)

const colors = { ...initialColors, ...palette }

export const theme = {
  colors,
  radii,
  ...typography
}
