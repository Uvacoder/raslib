import { css, Global } from '@emotion/react'

import { fonts } from './fonts'
import { resets } from './resets'

const globalStyles = css`
  ${resets};
  ${fonts};

  html {
    height: -webkit-fill-available;
    font-size: 16px;
  }

  html * {
    font-family: Mulish, Arial, sans-serif;
  }

  html,
  body {
    padding: 3rem 1rem;
    margin: 0;
    background: var(--color-bg);
    min-height: 100%;
  }
`

export const GlobalStyles: React.FunctionComponent = () => (
  <>
    <Global styles={globalStyles} />
    <link rel="preload" href="/fonts/Mulish-Regular.woff2" as="font" type="font/woff2" crossOrigin={''} />
    <link rel="preload" href="/fonts/Mulish-Medium.woff2" as="font" type="font/woff2" crossOrigin={''} />
    <link rel="preload" href="/fonts/Mulish-Semibold.woff2" as="font" type="font/woff2" crossOrigin={''} />
    <link rel="preload" href="/fonts/Mulish-Bold.woff2" as="font" type="font/woff2" crossOrigin={''} />
    <link rel="preload" href="/fonts/Mulish-ExtraBold.woff2" as="font" type="font/woff2" crossOrigin={''} />
    <link rel="preload" href="/fonts/Mulish-Black.woff2" as="font" type="font/woff2" crossOrigin={''} />
  </>
)
