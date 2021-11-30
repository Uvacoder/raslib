import { ColorLevel, ColorScale, Palette } from './types'

export type Key = string | number | symbol

function createEntriesForColorKey<Name extends string>(
  name: Name,
  scale: ColorScale
): Record<`${Name}${ColorLevel}`, string> {
  const result = {} as Record<`${Name}${ColorLevel}`, string>

  Object.entries(scale).forEach(([level, value]) => {
    result[`${name}${level}` as `${Name}${ColorLevel}`] = value
  })

  return result
}

export function generatePalette<C extends Record<Key, ColorScale>, K extends keyof C = keyof C>(
  config: C
): Palette<K> {
  let colorPathMap = {} as Record<keyof C, string>

  Object.entries(config).forEach(([colorName, colorScale]) => {
    const pathMap = createEntriesForColorKey(colorName, colorScale as ColorScale)

    colorPathMap = { ...colorPathMap, ...pathMap }
  })

  return colorPathMap
}
