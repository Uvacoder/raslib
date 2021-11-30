import { defaultColorConfig } from './default-colors'
import { generatePalette } from './palette'

const palette = generatePalette<typeof defaultColorConfig, keyof typeof defaultColorConfig>(
  defaultColorConfig
)

/* Branding colors */
const notifications = {
  danger: '#F16063',
  warning: '#FFAB2B',
  success: '#6DD230'
}

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
  ...palette,
  ...colorTheme
}
