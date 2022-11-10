import {BaseColorsImpl as baseColors} from 'theme/colors/BaseColors'
import {Colors} from "theme/colors/Colors";

export const Dark: Colors = {

    themeBaseColor: baseColors.black,

    themeBackground: baseColors.black,

    navigationCardBackground: baseColors.black,
    navigationTabActiveTintColor: baseColors.dusty,
    navigationTextColor: baseColors.lavendar,

    links: baseColors.dusty,

    homeNewsCard: baseColors.lavendar,

    text: baseColors.white,

    ...baseColors
}