import { TinyColor } from '@ctrl/tinycolor'

import { ColorKey, ColorScale } from './color.types'

type Dict<T = any> = Record<string, T>

/**
 * Darken a specified color
 * @param color - the color in hex, rgb, or hsl
 * @param amount - the amount to darken (0-100)
 */
export const darken = (color: string, amount: number) => {
  return new TinyColor(color).darken(amount).toHexString()
}

/**
 * Lighten a specified color
 * @param color - the color in hex, rgb, or hsl
 * @param amount - the amount to lighten (0-100)
 */
export const lighten = (color: string, amount: number) => (theme: Dict) =>
  new TinyColor(color).lighten(amount).toHexString()

/**
 * Get a path for getting a color from the theme object
 * @param key - the name of the color
 * @param level - the scale of the color you want in terms of lightness / darkness
 */
const getColorConfigPath = (key: ColorKey, scale: ColorScale) => {
  return `${key}.${scale}` as const
}

export type ColorConfigPath = ReturnType<typeof getColorConfigPath>

export type ThemeObj = {
  colors: Record<ColorKey, Record<ColorScale, string>>
  fontWeights: Dict<number>
  fontSizes: Dict<string>
  radii: Dict<string>
}

export const getColor = (path: ColorConfigPath) => {
  return (theme: ThemeObj) => {
    const splits = path.split('.')
    const key = splits.at(0)!
    // eslint-disable-next-line radix
    const scale = parseInt(splits.at(1)!)

    return theme[key as ColorKey][scale as ColorScale]
  }
}
