import { defaultColorConfig, generatePalette } from '@rasreee/theme-tools'

const palette = generatePalette<typeof defaultColorConfig, keyof typeof defaultColorConfig>(
  defaultColorConfig
)

/* Branding colors */
const brand = {
  // indigo: flatColorConfig.indigo.indigo500,
  danger: '#F16063',
  warning: '#FFAB2B',
  success: '#6DD230'
  // outline: flatColorConfig.gray.gray100
}

export const colors = {
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  ...brand,
  ...palette
}
