import {palette} from "./colors"

export type ColorKey = keyof typeof palette

export type ColorLevel = keyof typeof palette[ColorKey]

const getColorConfigPath = (key: ColorKey, level: ColorLevel) => {
  return `${key}.${level}` as const
}

export type ColorConfigPath = ReturnType<typeof getColorConfigPath>

export const getColor = (path: ColorConfigPath) => {
  const splits = path.split('.')
  const key = splits.at(0)! as ColorKey
  // eslint-disable-next-line radix
  const level = parseInt(splits.at(1)!) as ColorLevel

  return palette[key][level]
}