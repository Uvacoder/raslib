export type ThemeColorKey = 'gray' | 'red' | 'blue' | 'green' | 'indigo'

export type ThemeToken = 'color' | 'fontWeight' | 'fontSize' | 'borderRadius'

const getPlural = (val: ThemeToken) => {
  if (val === 'borderRadius') {
    return 'radii' as const
  }
  return `${val}s` as const
}

export type ThemeTokens = ReturnType<typeof getPlural>
