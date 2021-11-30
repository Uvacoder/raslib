import { colors, theme as baseTheme, BaseTheme } from '@rasreee/theme'
import { lighten } from '@rasreee/theme-tools'

export const gray = (level = 900): string => {
  if (level === 0) return '#fff'
  const val = `#060606`

  return lighten(val, (900 - level) / 10)
}

const buttons = {
  primary: {
    background: colors.secondary,
    color: colors.text,
  },
  secondary: {
    background: colors.secondary,
    color: colors.text,
  },
  tertiary: {
    background: colors.secondary,
    color: colors.text,
  },
  disabled: {
    background: colors.secondary,
    color: colors.text,
  },
}

export type AppTheme = BaseTheme & {
  buttons: typeof buttons
}

export const theme: AppTheme = {
  ...baseTheme,
  buttons,
}
