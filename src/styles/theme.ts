import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    white: "#fffffffe",
    blue: {
      "500": "#4fd1c5fe",
      "900": "#2824e2",
    },
    gray: {
      "100": "#f9f9fbfe",
      "300": "#e5e9ec",
      "400": "#a4a9b0",
      "800": "#434343fe",
      "900": "#18403cfe",
    },
    green: "#00875F",
    red: "#AB222E",
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.900",
      },
    },
  },
});
