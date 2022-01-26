// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

import { createBreakpoints } from "@chakra-ui/theme-tools";

// This is the default breakpoint
const breakpoints = createBreakpoints({
  xs: "16em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "120em",
  "3xl": "150em",
});

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  fonts: { heading: "Roboto", body: "Roboto" },
};

// 3. extend the theme
const theme = extendTheme({ config, fonts, breakpoints });

export default theme;
