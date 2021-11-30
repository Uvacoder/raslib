const baseCss = {
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  }
}

const textVariants = {
  heading: { color: 'text', fontFamily: 'heading', lineHeight: 'heading', fontWeight: 'heading' }
}

const textStyles = {
  root: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body'
  },
  h1: {
    ...textVariants.heading,
    fontSize: 5
  },
  h2: {
    ...textVariants.heading,
    fontSize: 4
  },
  h3: {
    ...textVariants.heading,
    fontSize: 3
  },
  h4: {
    ...textVariants.heading,
    fontSize: 2
  },
  h5: {
    ...textVariants.heading,
    fontSize: 1
  },
  h6: {
    ...textVariants.heading,
    fontSize: 0
  },
  p: {
    color: 'text',
    fontFamily: 'body',
    fontWeight: 'body',
    lineHeight: 'body'
  },
  a: {
    color: 'primary'
  }
}

export const typography = {
  ...baseCss,
  ...textVariants,
  ...textStyles
}
