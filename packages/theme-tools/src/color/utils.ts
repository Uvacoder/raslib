import { TinyColor } from '@ctrl/tinycolor'
import { Dict, get } from '@rasreee/utils'

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
export const lighten = (color: string, amount: number) => {
  return new TinyColor(color).lighten(amount).toHexString()
}

/**
 * Get the color raw value from theme
 * @param theme - the theme object
 * @param color - the color path ("green.200")
 * @param fallback - the fallback color
 */
export function getColor<ThemeType extends { colors: Dict } = { colors: Dict }>(
  theme: ThemeType,
  color: keyof ThemeType['colors'],
  fallback?: string
): string {
  const hex = get(theme, `colors.${color}`, color)
  const { isValid } = new TinyColor(hex)

  return isValid ? hex : fallback
}
