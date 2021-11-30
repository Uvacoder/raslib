import '@emotion/react'

import { theme, AppTheme } from '../styles/theme'

import { SerializedStyles } from '@emotion/react'
import { Interpolation } from '@emotion/serialize'

type Styling = SerializedStyles | [SerializedStyles, ...SerializedStyles[]]

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}

declare module 'react' {
  interface Attributes {
    styles?: Styling
    css?: Interpolation<AppTheme>
  }
}
