import { GlobalStyles } from '@styles/global'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  public render(): React.ReactElement {
    return (
      <Html lang={'en'}>
        <Head>
          <GlobalStyles />
          <meta name="Description" content={'with @emotion'} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
