/* eslint-disable import/no-extraneous-dependencies */
import { ThemeToken } from '@rasreee/theme/src/theme/types'

export const colorCssVariable = {
  '--color-gray-50': '#f9fafb',
  '--color-gray-100': '#f3f4f6',
  '--color-gray-200': '#e5e7eb',
  '--color-gray-300': '#d1d5db',
  '--color-gray-400': '#9ca3af',
  '--color-gray-500': '#6b7280',
  '--color-gray-600': '#4b5563',
  '--color-gray-700': '#374151',
  '--color-gray-800': '#1f2937',
  '--color-gray-900': '#111827',
  '--color-red-100': '#fee2e2',
  '--color-red-200': '#fecaca',
  '--color-red-300': '#fca5a5',
  '--color-red-400': '#f87171',
  '--color-red-500': '#ef4444',
  '--color-red-600': '#dc2626',
  '--color-red-700': '#b91c1c',
  '--color-red-800': '#991b1b',
  '--color-red-900': '#7f1d1d',
  '--color-green-200': '#bbf7d0',
  '--color-green-300': '#86efac',
  '--color-green-400': '#4ade80',
  '--color-green-500': '#22c55e',
  '--color-green-600': '#16a34a',
  '--color-green-700': '#15803d',
  '--color-green-800': '#166534',
  '--color-green-900': '#14532d',
  '--color-blue-300': '#93c5fd',
  '--color-blue-400': '#60a5fa',
  '--color-blue-500': '#3b82f6',
  '--color-blue-600': '#2563eb',
  '--color-blue-700': '#1d4ed8',
  '--color-blue-800': '#1e40af',
  '--color-blue-900': '#1e3a8a',
  '--color-indigo-400': '#818cf8',
  '--color-indigo-500': '#6366f1',
  '--color-indigo-600': '#4f46e5',
  '--color-indigo-700': '#4338ca',
  '--color-indigo-800': '#3730a3',
  '--color-indigo-900': '#312e81',
  '--color-primary': '#4D7CFE',
  '--color-danger': '#F16063',
  '--color-secondary': '#98A9BC',
  '--color-warning': '#FFAB2B',
  '--color-success': '#6DD230',
  '--color-dark': '#252631'
}

const getCssVarKey = (token: ThemeToken, value: string) => {
  return `--${token}-${value}` as const
}

export type CssVarKey = ReturnType<typeof getCssVarKey>
