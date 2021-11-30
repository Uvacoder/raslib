import '@styles/css/index.css'

import { css, ThemeProvider } from '@emotion/react'
import { theme } from '@rasreee/theme'
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <ThemeProvider theme={theme}>
      <div
        css={css`
          background-color: ${getColor(theme, 'colors.background')};
          height: 100vh;
          width: 100%;
          padding: 2rem;
        `}
      >
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  </>
)

export default App
