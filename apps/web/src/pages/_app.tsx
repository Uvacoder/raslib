import '@styles/css/index.css'

import { ThemeProvider } from '@emotion/react'
import { theme } from '@rasreee/theme'
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default App
