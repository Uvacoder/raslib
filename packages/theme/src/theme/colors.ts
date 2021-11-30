const greys = {
  grey5: '#f9fafb',
  grey10: '#f3f4f6',
  grey20: '#e5e7eb',
  grey30: '#d1d5db',
  grey40: '#94a3b8',
  grey50: '#6b7280',
  grey60: '#475569',
  grey70: '#374151',
  grey80: '#1f2937',
  grey90: '#111827'
}

const blues = {
  blue5: '#eff6ff',
  blue10: '#dbeafe',
  blue20: '#bfdbfe',
  blue30: '#93c5fd',
  blue40: '#60a5fa',
  blue50: '#3b82f6',
  blue60: '#2563eb',
  blue70: '#1d4ed8',
  blue80: '#1e40af',
  blue90: '#1e3a8a'
}

const primaries = {
  primary10: '#e0e7ff',
  primary20: '#c7d2fe',
  primary30: '#a5b4fc',
  primary40: '#818cf8',
  primary50: '#6366f1',
  primary60: '#4f46e5',
  primary70: '#4338ca',
  primary80: '#3730a3',
  primary90: '#312e81'
}
const violets = {
  violet5: '#f5f3ff',
  violet10: '#ede9fe',
  violet20: '#ddd6fe',
  violet30: '#c4b5fd',
  violet40: '#a78bfa',
  violet50: '#8b5cf6',
  violet60: '#7c3aed',
  violet70: '#6d28d9',
  violet80: '#5b21b6',
  violet90: '#4c1d95'
}

const reds = {
  red5: '#fef2f2',
  red10: '#fee2e2',
  red20: '#fecaca',
  red30: '#fca5a5',
  red40: '#f87171',
  red50: '#ef4444',
  red60: '#dc2626',
  red70: '#b91c1c',
  red80: '#991b1b',
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

const greens = {
  green5: '#f0fdf4',
  green10: '#dcfce7',
  green20: '#bbf7d0',
  green30: '#86efac',
  green40: '#4ade80',
  green50: '#22c55e',
  green60: '#16a34a',
  green70: '#15803d',
  green80: '#166534',
  green90: '#14532d'
}

/* Branding colors */
const brand = {
  primary: '#4D7CFE',
  danger: '#F16063',
  warning: '#FFAB2B',
  success: '#6DD230'
}

export const colors = {
  white: '#fff',
  black: '#0',
  ...greys,
  ...blues,
  ...primaries,
  ...violets,
  ...reds,
  ...oranges,
  ...greens,
  ...brand
}
export type Colors = typeof colors
