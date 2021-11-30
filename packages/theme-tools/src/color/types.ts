export const colorLevels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const

export type ColorLevel = typeof colorLevels[number]

export type ColorScale = Record<ColorLevel, string>

export type BaseColors<ColorKey extends string = any> = Record<`${ColorKey}${ColorLevel}`, string>

export type BaseColorsKey<ColorKey extends string> = `${ColorKey}${ColorLevel}`
