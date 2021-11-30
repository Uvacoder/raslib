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
export function getColor(theme: Dict, color: string, fallback?: string): string {
  const hex = get(theme, `colors.${color}`, color)
  const { isValid } = new TinyColor(hex)

  return isValid ? hex : fallback
}

export const gray = (level: number): string => {
  const val = `hsl(0%, 0%, ${level}%)`

  return val
}

/**
 * Determines if the tone of given color is "light" or "dark"
 * @param color - the color in hex, rgb, or hsl
 */
export const tone = (color: string) => (theme: Dict) => {
  const hex = getColor(theme, color)
  const isDark = new TinyColor(hex).isDark()

  return isDark ? 'dark' : 'light'
}
