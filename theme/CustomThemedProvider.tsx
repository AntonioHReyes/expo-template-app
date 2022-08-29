import {ThemeProvider} from "styled-components";
import React from "react";

const CustomThemedProvider = ({theme, children}: any,) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default CustomThemedProvider;
