import {BaseColorsImpl as baseColors} from 'theme/colors/BaseColors'
import {Colors} from "theme/colors/Colors";

export const Light: Colors = {

    themeBaseColor: baseColors.white,

    themeBackground: baseColors.paper,

    navigationCardBackground: baseColors.paper,
    navigationTabActiveTintColor: baseColors.dusty,
    navigationTextColor: baseColors.windsor,

    links: baseColors.dusty,

    homeNewsCard: baseColors.lavendar,

    text: baseColors.black,

    ...baseColors
}