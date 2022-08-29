import {DefaultTheme} from 'styled-components'
import Colors from "theme/colors/ThemeColors";
import {FontFamilyConfig, FontFamilySizes} from "theme/fonts/FontConfig";

export const lightTheme: DefaultTheme = {
  colors: Colors["light"],
  fonts: FontFamilyConfig,
  fontSizes: FontFamilySizes
}

export const darkTheme: DefaultTheme = {
  colors: Colors["dark"],
  fonts: FontFamilyConfig,
  fontSizes: FontFamilySizes
}