import { extendTheme } from "@chakra-ui/react";

import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  xs: "16em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "120em",
  "3xl": "150em",
});

//color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  fonts: { heading: "Roboto", body: "Roboto" },
};

const theme = extendTheme({ config, fonts, breakpoints });

export default theme;
