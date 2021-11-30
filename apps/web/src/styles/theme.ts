import { colors, theme as baseTheme, BaseTheme } from '@rasreee/theme'

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
