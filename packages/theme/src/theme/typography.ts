export const fontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
} as const

export const fontSizes = {
  xs: 'var(--txt-xs)',
  // TODO change remaining values to use CSS variables
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem'
} as const
