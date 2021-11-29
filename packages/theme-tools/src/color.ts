import { TinyColor } from '@ctrl/tinycolor'
import { Dict, get } from '@rasreee/utils'

import { ColorLevel } from './types'
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
export const lighten = (color: string, amount: number) => () =>
  new TinyColor(color).lighten(amount).toHexString()

/**
 * Get a path for getting a color from the theme object
 * @param key - the name of the color
 * @param level - the scale of the color you want in terms of lightness / darkness
 */
function getColorConfigPath<ColorConfigKey extends string = string>(
  key: ColorConfigKey,
  scale: ColorLevel
) {
  return `${key}.${scale}` as const
}

export type ColorConfigPath = ReturnType<typeof getColorConfigPath>

/**
 * Get the color raw value from theme
 * @param theme - the theme object
 * @param color - the color path ("green.200")
 * @param fallback - the fallback color
 */
export const getColor = (theme: Dict, color: string, fallback?: string) => {
  const hex = get(theme, `colors.${color}`, color)
  const { isValid } = new TinyColor(hex)

  return isValid ? hex : fallback
}
