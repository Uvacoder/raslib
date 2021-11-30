import { Theme } from './theme'

export type ThemeToken = 'color' | 'fontWeight' | 'fontSize' | 'borderRadius'

const getPlural = (val: ThemeToken) => {
  if (val === 'borderRadius') {
    return 'radii'
  }
  return `${val}s`
}

export type ThemeTokenAsPlural = ReturnType<typeof getPlural>

export type ThemeColorKey = keyof Theme['colors']
