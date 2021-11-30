import { ColorLevel, defaultColorConfig, generateBaseColors } from '@rasreee/theme-tools'

const baseColors = generateBaseColors<typeof defaultColorConfig, keyof typeof defaultColorConfig>(
  defaultColorConfig
)
/* Branding colors */

const colorTheme = {
  initialModeName: 'dark',
  modes: {
    dark: {
      text: '#ffffff',
      background: '#060606',
      primary: '#33cbfe',
      secondary: '#ee01ff',
      muted: '#191919',
      highlight: '#3C273F'
    },
    light: {
      text: '#060606',
      background: '#fff',
      primary: '#11e',
      secondary: '#ee01ff',
      highlight: '#e0e',
      muted: '#f6f6ff'
    }
  }
}

export const colors = {
  _base: baseColors,
  ...colorTheme.modes.dark,
  ...colorTheme
}
