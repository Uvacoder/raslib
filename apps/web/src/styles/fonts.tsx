import { css } from '@emotion/react'

export const importFontFaces = css`
  @font-face {
    font-family: 'Mulish-Regular';
    src: url('/fonts/Mulish-Regular.woff2') format('woff2');
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Mulish-Medium';
    src: url('/fonts/Mulish-Medium.woff2') format('woff2');
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'Mulish-Semibold';
    src: url('/fonts/Mulish-Semibold.woff2') format('woff2');
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: 'Mulish-Bold';
    src: url('/fonts/Mulish-Bold.woff2') format('woff2');
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: 'Mulish-ExtraBold';
    src: url('/fonts/Mulish-ExtraBold.woff2') format('woff2');
    font-weight: 800;
    font-display: swap;
  }

  @font-face {
    font-family: 'Mulish-Black';
    src: url('/fonts/Mulish-Black.woff2') format('woff2');
    font-weight: 900;
    font-display: swap;
  }
`

export const PreloadFonts = () => {
  return (
    <>
      <link rel="preload" href="/fonts/Mulish-Regular.woff2" as="font" type="font/woff2" crossOrigin={''} />
      <link rel="preload" href="/fonts/Mulish-Medium.woff2" as="font" type="font/woff2" crossOrigin={''} />
      <link rel="preload" href="/fonts/Mulish-Semibold.woff2" as="font" type="font/woff2" crossOrigin={''} />
      <link rel="preload" href="/fonts/Mulish-Bold.woff2" as="font" type="font/woff2" crossOrigin={''} />
      <link rel="preload" href="/fonts/Mulish-ExtraBold.woff2" as="font" type="font/woff2" crossOrigin={''} />
      <link rel="preload" href="/fonts/Mulish-Black.woff2" as="font" type="font/woff2" crossOrigin={''} />
    </>
  )
}
