import 'styled-components';
import {Colors} from "theme/colors/Colors";
import {FontFamilies, FontSizes} from "theme/fonts/FontConfig";

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors,
    fonts: FontFamilies,
    fontSizes: FontSizes
  }
}