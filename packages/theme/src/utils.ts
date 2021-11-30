import { BaseTheme as Theme } from './theme'

export type ThemeColorKey = keyof Theme['colors']
export type ThemeArgs =
  | Theme
  | {
      theme: Theme
    }

export function isTheme(args: ThemeArgs): args is Theme {
  return (
    (
      args as {
        theme: Theme
      }
    ).theme === undefined
  )
}

export const getTheme = (args: ThemeArgs): Theme => (isTheme(args) ? args : args.theme)

function getCssVarKey<Token extends keyof Theme>(token: Token, value: string) {
  return `--${token}-${value}` as const
}

export type CssVarKey = ReturnType<typeof getCssVarKey>
