import {DefaultTheme} from 'styled-components'
import Colors from "theme/colors/ThemeColors";
import {FontFamilyConfig, FontFamilySizes} from "theme/fonts/FontConfig";

export const lightTheme: DefaultTheme = {
  colors: Colors["light"],
  fonts: FontFamilyConfig,
  fontSizes: FontFamilySizes,
  //This property is fullfilled in App.tsx
  screenDimens: {width: 0, height: 0, scale: 0, fontScale: 0, vhPx: 0, vwPx: 0}
}

export const darkTheme: DefaultTheme = {
  colors: Colors["dark"],
  fonts: FontFamilyConfig,
  fontSizes: FontFamilySizes,
  //This property is fullfilled in App.tsx
  screenDimens: {width: 0, height: 0, scale: 0, fontScale: 0, vhPx: 0, vwPx: 0}
}