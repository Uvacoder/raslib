import { css, Theme } from '@emotion/react'
import { getColor } from '@rasreee/theme-tools'
import { clickableBgStyles, gray } from '@styles/mixins'

export const buttonVariantStyles = (variant: ButtonVariant) => (theme: Theme) =>
  [
    variant === 'primary' &&
      css`
        color: white;
        background: ${getColor(theme, 'colors.primary')};
        border-color: transparent;

        ${clickableBgStyles(getColor(theme, 'colors.primary'))};
      `,
    ,
    variant === 'disabled' && [
      css`
        background: ${getColor(theme, `gray.300`)};
        color: ${getColor(theme, `gray.600`)};
      `,
    ],
    variant === 'secondary' && [
      css`
        color: ${getColor(theme, 'colors.text')};
        background: ${getColor(theme, 'colors.secondary')};
        ${clickableBgStyles(getColor(theme, 'colors.secondary'))};
      `,
    ],
    variant === 'tertiary' && [
      css`
        color: ${getColor(theme, 'colors.text')};
        ${clickableBgStyles(getColor(theme, 'colors.background'))};
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
