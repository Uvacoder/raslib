import { css, Theme } from '@emotion/react'
import { ThemeColorKey } from '@rasreee/theme'
import { BaseColors, darken, getColor, StyleAlias } from '@rasreee/theme-tools'
import { gray } from '@styles/theme'

export const buttonVariantStyles = (variant: ButtonVariant) => (theme: Theme) =>
  [
    variant === 'primary' &&
      css`
        color: white;
        background: ${theme.colors.primary};
        border-color: transparent;

        &:not(:disabled):hover {
          background: ${darken(theme.colors.primary, 15)};
        }

        &:active {
          background: ${darken(theme.colors.primary, 25)};
        }
      `,
    ,
    variant === 'disabled' && [
      css`
        background: ${theme.colors._base.gray300};
        color: ${theme.colors._base.gray600};
      `,
    ],
    variant === 'secondary' && [
      css`
        color: ${theme.colors.text};
        background: ${theme.colors.secondary};

        &:not(:disabled):hover {
          background: ${darken(theme.colors.secondary, 15)};
        }

        &:active {
          background: ${darken(theme.colors.secondary, 30)};
        }
      `,
    ],
    variant === 'tertiary' && [
      css`
        background: ${gray(0)};
        color: ${theme.colors.background};

        &:not(:disabled):hover {
          background-color: ${gray(50)};
        }

        &:active {
          background-color: ${gray(200)};
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

  &:disabled {
    color: var(--color-gray-600);
    background: var(--color-gray-300);
  }
`

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'disabled'
