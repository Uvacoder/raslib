import { Colors } from './types'

const greys = {
  grey5: '#f9fafb',
  grey10: '#f3f4f6',
  grey20: '#e5e7eb',
  grey30: '#d1d5db',
  grey50: '#6b7280',
  grey70: '#374151',
  grey80: '#1f2937',
  grey90: '#111827'
}

const blues = {
  blue10: '#F0F6FF',
  blue20: '#DAEAFF',
  blue30: '#AFD0FE',
  blue40: '#7FB5FF',
  blue50: '#3063E9',
  blue70: '#234BC3',
  blue90: '#1A368E'
}
const primaries = {
  primary10: '#e0e7ff',
  primary20: '#c7d2fe',
  primary30: '#a5b4fc',
  primary40: '#818cf8',
  primary50: '#6366f1',
  primary70: '#4338ca',
  primary90: '#312e81'
}
const violets = {
  violet10: '#ede9fe',
  violet20: '#ddd6fe',
  violet30: '#c4b5fd',
  violet50: '#8b5cf6',
  violet70: '#6d28d9',
  violet90: '#4c1d95'
}

const reds = {
  red10: '#fee2e2',
  red20: '#fecaca',
  red30: '#fca5a5',
  red50: '#ef4444',
  red70: '#b91c1c',
  red90: '#7f1d1d'
}

const oranges = {
  orange10: '#ffedd5',
  orange20: '#fed7aa',
  orange30: '#fdba74',
  orange50: '#f97316',
  orange70: '#c2410c',
  orange90: '#7c2d12'
}

/* Branding colors */
const brand = {
  primary: '#4D7CFE',
  danger: '#F16063',
  warning: '#FFAB2B',
  success: '#6DD230'
}

export const colors: Colors = {
  white: '#fff',
  black: '#00',
  ...greys,
  ...blues,
  ...primaries,
  ...violets,
  ...reds,
  ...oranges,
  ...brand
}
