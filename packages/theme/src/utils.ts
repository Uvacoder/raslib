import { Theme } from './theme'

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

/**
 * @private
 */
export const getTheme = (args: ThemeArgs): Theme => (isTheme(args) ? args : args.theme)
