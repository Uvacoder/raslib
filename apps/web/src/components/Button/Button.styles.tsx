import { css, Theme } from '@emotion/react'
import { darken, lighten, ThemeColorKey } from '@rasreee/theme'
import { getColor, StyleAlias } from '@rasreee/theme-tools'

const variants: Record<ButtonVariant, { [alias in StyleAlias]: string }> = {
  primary: {
    txt: 'white',
    bg: 'blue500',
  },
  disabled: {
    txt: 'gray600',
    bg: 'gray200',
  },
  secondary: {
    txt: 'gray700',
    bg: 'gray200',
  },
  outlined: {
    txt: 'gray700',
    bg: 'white',
  },
}

export const baseStyles = css`
  height: 2.875rem;
  width: 12.875rem;
  border-radius: var(--radii-md);

  font-weight: var(--fontWeight-semibold);
  font-size: var(--fontSize-sm);
  line-height: 100%;
  text-transform: uppercase;

  &[type='button'] {
    appearance: none;
  }
  cursor: pointer;
`

export const disabledStyles = (theme: Theme) => css`
  cursor: default;
  background: ${theme.colors[variants.disabled.bg as ThemeColorKey]};
  color: ${theme.colors[variants.disabled.bg as ThemeColorKey]};
`
export const primaryVariantStyles = (theme: Theme) =>
  css`
    background: ${theme.colors.black};
    border-color: transparent;
    color: white;

    &:not(:disabled):hover {
      background: ${getColor(theme, 'blue700')};
    }

    &:active {
      background: ${getColor(theme, 'blue900')};
      color: white;
    }
  `
export const secondaryVariantStyles = (theme: Theme) => {
  // const bg = theme.colors._base[variants.secondary.bg]
  // const txt = theme.colors._base[variants.secondary.txt]
  const bg = theme.colors.white
  const txt = theme.colors.black

  return css`
    color: ${txt};
    background: ${bg};
    border: transparent;

    &:not(:disabled):hover {
      background: ${darken(bg, 20)};
      color: ${darken(txt, 10)};
    }

    &:active {
      background: ${darken(bg, 30)};
      color: ${darken(txt, 20)};
    }
  `
}

export const outlinedVariantStyles = (theme: Theme) => {
  // const bg = theme.colors._base[variants.secondary.bg]
  // const txt = theme.colors._base[variants.secondary.txt]
  const bg = theme.colors.white
  const txt = theme.colors.black
  const outline = theme.colors.black

  return css`
    color: ${txt};
    background: ${bg};
    border: 1.75px solid ${outline};

    &:not(:disabled):hover {
      background: ${darken(bg, 5)};
      color: ${darken(txt, 10)};
      border: 1.75px solid ${outline};
    }

    &:active {
      background: ${darken(bg, 30)};
      color: ${darken(txt, 20)};
    }
  `
}

export type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'disabled'

export const getButtonVariantStyles = (theme: Theme, variant: ButtonVariant) => {
  let styles = css``
  if (variant === 'primary') {
    styles = primaryVariantStyles(theme)
  }

  if (variant === 'secondary') {
    styles = secondaryVariantStyles(theme)
  }
  if (variant === 'outlined') {
    styles = outlinedVariantStyles(theme)
  }

  return styles
}
