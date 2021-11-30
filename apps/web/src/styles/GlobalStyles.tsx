import { css, Global } from '@emotion/react'

import { importFontFaces, PreloadFonts } from './fonts'
import { resets } from './resets'

const globalStyles = css`
  ${resets};

  html {
    height: -webkit-fill-available;
    font-size: 16px;
  }

  html * {
    font-family: Mulish, Arial, sans-serif;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    min-height: 100%;
  }
`

export const GlobalStyles = () => {
  return (
    <>
      <Global
        styles={globalStyles}
        css={css`
          ${importFontFaces}
        `}
      />
      <PreloadFonts />
    </>
  )
}
