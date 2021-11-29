// converts the nested theme object with theme values into one with
// the theme variables as the value
// you can get TypeScript autocomplete with generics on this function:

import { Dict } from './types'
// function toVarNames<T>(obj: T, prefix: string = '-'): T {
export function toVarNames(obj: Dict, prefix = '-') {
  const vars = {}

  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === 'object') {
      vars[key] = toVarNames(value, `${prefix}-${key}`)
    } else {
      vars[key] = `var(${prefix}-${key})`
    }
  })
  return vars
}

// converts the nested theme object into a flat object with `--path-to-value` keys
export function toVars(obj: Dict, prefix = '-') {
  const vars: Record<CssVarKey, string> = {}

  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === 'object') {
      const nestedVars = toVars(value, `${prefix}-${key}`)

      Object.entries(nestedVars).forEach(([nestedKey, nestedValue]) => {
        vars[nestedKey] = nestedValue
      })
    } else {
      vars[`${prefix}-${key}`] = value
    }
  })
  return vars
}
