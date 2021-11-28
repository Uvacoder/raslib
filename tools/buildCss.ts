import {buildCssUtilities} from "./buildCssUtilities"
import {buildCssVars} from "./buildCssVars"

export const buildCss = (theme = {palette: {}, brand:{}, fontSizes: {}, fontWeights: {},radii:{}}) => {
	buildCssVars(theme)
	buildCssUtilities(theme)
}
