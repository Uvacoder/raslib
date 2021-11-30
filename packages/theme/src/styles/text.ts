const textVariants = {
  heading: { color: 'text', fontFamily: 'heading', lineHeight: 'heading', fontWeight: 'heading' }
}

const elementStyles = {
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

export const textStyles = {
  ...elementStyles,
  ...textVariants
}
