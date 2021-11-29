import { TinyColor } from '@ctrl/tinycolor'

export type ColorLevel = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

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
function getColorConfigPath<ColorConfigKey extends string = string>(
  key: ColorConfigKey,
  scale: ColorLevel
) {
  return `${key}.${scale}` as const
}

export type ColorConfigPath = ReturnType<typeof getColorConfigPath>

export type ThemeObj<ColorConfigKey extends string = string> = {
  colors: Record<ColorConfigKey, Record<ColorLevel, string>>
  fontWeights: Dict<number>
  fontSizes: Dict<string>
  radii: Dict<string>
}

const isColorConfigPath = (o: string): o is ColorConfigPath => {
  return o.includes('.')
}

export function getColor<ColorKey extends string = string>(arg0: ColorKey, arg1?: ColorLevel) {
  return (theme: ThemeObj) => {
    if (isColorConfigPath(arg0)) {
      const splits = arg0.split('.')
      const key = splits.at(0)!
      // eslint-disable-next-line radix
      const level = parseInt(splits.at(1)!)

      return theme[key][level]
    }
    if (arg1) {
      return theme[arg0 as keyof typeof theme][arg1]
    }
  }
}
