import { css } from '@emotion/react'

const resets = css`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
  }

  button {
    outline: none;
    border: none;
    background: none;
  }

  a,
  button {
    cursor: pointer;

    &:disabled {
      cursor: default;
    }
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;
  }

  li {
    list-style-type: none;
  }
`

export { resets }
