import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App.jsx";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

const theme = extendTheme({
  fonts: {
    body: "Poppins, system-ui, sans-serif",
  },
  styles: {
    global: {
      body: {
        backgroundColor: "#F5F5F5",
        color: "black",
        p: ["0 1rem", "0 2rem"],
        m: ["0 auto", "0 auto"],
        maxWidth: "85em",
      },
    },
  },
  textStyles: {
    h2: {
      fontSize: ["1.75rem", "2rem"],
      lineHeight: ["2.25rem", "2.5rem"],
      fontWeight: "500",
    },
    h3: {
      fontSize: ["1.5rem", "1.75rem"],
      lineHeight: ["2.25rem", "2.5rem"],
      fontWeight: "500",
    },
    p: {
      fontSize: ["1.25rem", "1.40rem"],
      lineHeight: ["1.75rem", "2rem"],
      fontWeight: "400",
      color: "blackAlpha.800",
    },
    a: {
      fontSize: ["1rem", "1.12rem"],
      lineHeight: ["1.75rem", "1.75rem"],
      fontWeight: "500",
    },

    small: {
      fontSize: ["0.75rem"],
      lineHeight: ["1rem", "1rem"],
      fontWeight: "500",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
