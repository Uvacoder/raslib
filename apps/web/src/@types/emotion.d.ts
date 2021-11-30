import '@emotion/react'

import { theme, AppTheme } from '../styles/theme'

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}

declare module 'react' {
  interface Attributes {
    css?: Styling
  }
}
