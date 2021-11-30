import { css, Theme } from '@emotion/react'
import { ThemeColorKey } from '@rasreee/theme'
import { BaseColors, darken, getColor, StyleAlias } from '@rasreee/theme-tools'

export const buttonVariantStyles = (variant: ButtonVariant) => (theme: Theme) =>
  [
    variant === 'primary' && [
      css`
        color: white;
        background: ${theme.colors._base.blue500};
        border-color: transparent;
      `,
      css`
        &:not(:disabled):hover {
          background: ${theme.colors.primary};
        }

        &:active {
          background: ${theme.colors.primary};
          color: white;
        }
      `,
    ],
    variant === 'disabled' && [
      css`
        background: ${theme.colors._base.gray300};
        color: ${theme.colors._base.gray600};
      `,
    ],
    variant === 'secondary' && [
      css`
        color: ${theme.colors._base.gray700};
        background: ${theme.colors._base.gray200};
      `,
      css`
        &:not(:disabled):hover {
          background: ${darken(theme.colors._base.gray200, 20)};
          color: ${darken(theme.colors._base.gray700, 10)};
        }

        &:active {
          background: ${darken(theme.colors._base.gray200, 30)};
          color: ${darken(theme.colors._base.gray700, 20)};
        }
      `,
    ],
    variant === 'outlined' && [
      css`
        color: ${theme.colors.text};
        background: ${theme.colors.background};
        border: 1.75px solid ${theme.colors.text};

        &:not(:disabled):hover {
          background: ${darken(theme.colors.background, 5)};
          color: ${darken(theme.colors.text, 10)};
          border: 1.75px solid ${theme.colors.text};
        }

        &:active {
          background: ${darken(theme.colors.background, 30)};
          color: ${darken(theme.colors.text, 20)};
        }
      `,
    ],
  ]

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

export type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'disabled'
