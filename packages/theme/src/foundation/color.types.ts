export const colorLevels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const

export type ColorLevel = typeof colorLevels[number]

export type ColorScale = Record<ColorLevel, string>

export type Palette<ColorKey extends string = any> = Record<`${ColorKey}${ColorLevel}`, string>

export type PaletteKey<ColorKey extends string> = `${ColorKey}${ColorLevel}`
