import fs from "fs";
import path from "path";

const cssVarsFilePath = path.resolve(__dirname, "../src/theme/css/variables.css");

type Dict<T = string> = { [key: string]: T }

export function generateColorScaleCssVars(color: string, values: object) {
  return Object.entries(values).map(([scale, hex]) => `--color-${color}-${scale}: ${hex};`);
}

export const buildColorCssVars = (palette: Dict<object>, brand: Dict<string>) => {
  const paletteKeys = Object.keys(palette)

  // write variables for palette
  for (let i = 0; i <= paletteKeys.length - 1; i++) {
    const colorKey = paletteKeys[i];
    const vars = generateColorScaleCssVars(colorKey, palette[colorKey]);
    for (let j = i; j <= vars.length - 1; j++) {
      const cssVar = vars[j];
      fs.appendFileSync(cssVarsFilePath, `\n\t${cssVar}`);
    }
    fs.appendFileSync(cssVarsFilePath, "\n");
  }

    // write variables for brand colors
    const brandKeys  = Object.keys(brand)
    for (let i = 0; i <= brandKeys.length - 1; i++) {
      const brandKey = brandKeys[i];
      const hex = brand[brandKey];
      const cssVar = `--color-${brandKey}: ${hex};`

      fs.appendFileSync(cssVarsFilePath, `\n\t${cssVar}`);
    }
}

export function buildCssVars(theme = {palette: {}, brand:{}}) {
  fs.writeFileSync(cssVarsFilePath, ":root {\n")

  buildColorCssVars(theme.palette, theme.brand)

  fs.appendFileSync(cssVarsFilePath, "\n}");
}
