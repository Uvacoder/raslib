import '@emotion/react'

import { theme } from '@rasreee/theme'

type MyTheme = typeof theme
declare module '@emotion/react' {
  export interface Theme extends MyTheme {}
}

declare module 'react' {
  interface Attributes {
    css?: Styling
  }
}
