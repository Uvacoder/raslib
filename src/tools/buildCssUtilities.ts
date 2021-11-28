import path from "path";
import fs from "fs";

const cssUtilitiesFilePath = path.resolve(__dirname, "../src/theme/css/utilities.css");

export const buildFontSizeUtilities = (fontSizes: Record < string, string > ) => {
  const keys = Object.keys(fontSizes)
  for (let i = 0; i <= keys.length - 1; i++) {
    const key = keys[i];
    const val = fontSizes[key];

    const cssVar = `.txt-${key} {\n\tfont-size: ${val};\n}\n`

    fs.appendFileSync(cssUtilitiesFilePath, `\n${cssVar}`)
  }
}


export const buildFontWeightUtilities = (fontWeights: Record < string, string > ) => {
  const keys = Object.keys(fontWeights)
  for (let i = 0; i <= keys.length - 1; i++) {
    const key = keys[i];
    const val = fontWeights[key];

    const cssVar = `.font-${key} {\n\tfont-weight: ${val};\n}\n`

    fs.appendFileSync(cssUtilitiesFilePath, `\n${cssVar}`)
  }
}

export const buildBorderRadiusUtilities = (radii: Record < string, string > ) => {
  const keys = Object.keys(radii)
  for (let i = 0; i <= keys.length - 1; i++) {
    const key = keys[i]
    const val = radii[key];

    const postFix = key === 'DEFAULT' ? '' : `-${key}`

    const cssVar = `.rounded${postFix} {\n\tborder-radius: ${val};\n}\n`

    fs.appendFileSync(cssUtilitiesFilePath, `\n${cssVar}`)
  }
}

export const buildCssUtilities = (theme = {
  fontSizes: {},
  fontWeights: {},
  radii: {}
}) => {
  buildFontSizeUtilities(theme.fontSizes)
  buildFontWeightUtilities(theme.fontWeights)
  buildBorderRadiusUtilities(theme.radii)
}

// Uncomment this line when you want to run the script
// buildCssUtilities()