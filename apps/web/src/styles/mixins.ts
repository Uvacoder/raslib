import { css, SerializedStyles, Theme } from '@emotion/react'
import { getTheme, isTheme } from '@rasreee/theme'
/**
 * Visually communicates to the user that an element is hovered, focused, or
 * active in the disabled, invalid, and warning states.
 */
export const inputOutline = (
  args:
    | Theme
    | {
        theme: Theme
        disabled?: boolean
        invalid?: boolean
        hasWarning?: boolean
        /**
         * @deprecated
         */
        showValid?: boolean
      }
): SerializedStyles => {
  const theme = getTheme(args)
  const options = isTheme(args)
    ? {
        disabled: false,
        invalid: false,
        hasWarning: false,
      }
    : args

  if (options.disabled) {
    return css`
      box-shadow: 0 0 0 1px ${theme.colors.gray50};
    `
  }

  let colors

  switch (true) {
    case options.invalid: {
      colors = {
        default: theme.colors.red500,
        hover: theme.colors.red700,
        focus: theme.colors.red500,
        active: theme.colors.red500,
      }
      break
    }
    case options.hasWarning: {
      colors = {
        default: theme.colors.orange600,
        hover: theme.colors.orange600,
        focus: theme.colors.orange600,
        active: theme.colors.orange600,
      }
      break
    }
    default: {
      colors = {
        default: theme.colors.gray700,
        hover: theme.colors.gray700,
        focus: theme.color.muted,
        active: theme.color.primary,
      }
    }
  }

  return css`
    box-shadow: 0 0 0 1px ${colors.default};

    &:hover {
      box-shadow: 0 0 0 1px ${colors.hover};
    }

    &:focus {
      box-shadow: 0 0 0 2px ${colors.focus};
    }

    &:active {
      box-shadow: 0 0 0 1px ${colors.active};
    }
  `
}
