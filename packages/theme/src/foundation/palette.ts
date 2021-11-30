import { ColorLevel, ColorScale } from './color.types'

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

export function generatePalette<C extends Record<K, ColorScale>, K extends string = string>(
  config: C
): Record<`${K}${ColorLevel}`, string> {
  let colorPathMap = {} as Record<`${K}${ColorLevel}`, string>

  Object.entries(config).forEach(([colorName, colorScale]) => {
    const pathMap = createEntriesForColorKey(colorName, colorScale as ColorScale)

    colorPathMap = { ...colorPathMap, ...pathMap }
  })

  return colorPathMap
}
