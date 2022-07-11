import {ThemeProvider} from "styled-components";
import React from "react";
import useColorScheme from 'hooks/useColorScheme';
import Colors from "theme/colors/colors";


export function useThemeColor() {
  const theme = useColorScheme();
  if (theme) {
    return Colors[theme];
  }
}

const CustomThemedProvider = ({ children }: any,) => (
  <ThemeProvider theme={useThemeColor()}>{children}</ThemeProvider>
);

export default CustomThemedProvider;
