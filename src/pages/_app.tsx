import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "../context/authProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <ToastContainer />
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}
