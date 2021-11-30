import styled from '@styles/types'
import { Styling } from '@types'
import * as React from 'react'
import { ReactNode } from 'react'

import { baseStyles, ButtonVariant, disabledStyles, getButtonVariantStyles } from './Button.styles'

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  styles?: Styling
  disabled?: boolean
  variant?: ButtonVariant
}

const StyledButton = styled(({ disabled = false, ...rest }) => <button {...rest} disabled={disabled} />)<IButtonProps>`
  ${baseStyles}
  ${({ variant = 'primary', ...props }) => getButtonVariantStyles(props.theme, variant)}

  &:disabled {
    ${(props) => disabledStyles(props.theme)}
  }
`

export const Button: React.FC<IButtonProps> = ({ disabled = false, children, onClick, styles, ...props }) => {
  return (
    <StyledButton {...props} disabled={disabled} css={styles} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

Button.displayName = 'Button'
