import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    white: "#fffffffe",
    blue: {
      "500": "#4fd1c5fe",
      "900": "#2824e2",
    },
    gray: {
      "100": "#F3F4F1",
      "600": "#a4a9b0",
      "700": "#434343fe",
      "800": "#18403cfe",
      "900": "#323238",
    },
    green: "#00875F",
    red: "#AB222E",
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "gray.100",
      },
    },
  },
});
