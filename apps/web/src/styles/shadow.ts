import { css, SerializedStyles } from '@emotion/react'
import { ThemeArgs } from '@rasreee/theme'
/**
 * Adds a drop shadow to an element to visually elevate it above the
 * surrounding content.
 */
export function shadow(options?: never): (args: ThemeArgs) => SerializedStyles
export function shadow(args: ThemeArgs): SerializedStyles
export function shadow(argsOrOptions?: ThemeArgs | never): SerializedStyles | ((args: ThemeArgs) => SerializedStyles) {
  if (!argsOrOptions) {
    return (): SerializedStyles => css`
      box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2);
    `
  }

  return css`
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2);
  `
}
