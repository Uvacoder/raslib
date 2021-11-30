import { ThemeColorKey } from '@rasreee/theme'
import { StyleAlias } from '@rasreee/theme-tools'

export type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'disabled'

const variants: Record<ButtonVariant, { [alias in StyleAlias]: ThemeColorKey }> = {
  primary: {
    txt: 'white',
    bg: 'blue50'
  },
  disabled: {
    txt: 'grey60',
    bg: 'grey20'
  },
  secondary: {
    txt: 'grey70',
    bg: 'grey20'
  },
  outlined: {
    txt: 'grey70',
    bg: 'white'
  }
}
