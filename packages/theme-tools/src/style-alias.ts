export const styleAliases = {
  txt: 'color',
  bg: 'background'
} as const

export type StyleAliases = typeof styleAliases

export type StyleAlias = keyof StyleAliases
