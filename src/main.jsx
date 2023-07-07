import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// set custom fonts, colors, etc.
const theme = extendTheme({
  textStyles: {
    h2: {
      // array for sm & bg values
      fontSize: ["2rem", "2.25rem"],
      lineHeight: ["2.5rem", "3rem"],
      fontWeight: "500",
    },
    h3: {
      fontSize: ["1.5rem", "1.75rem"],
      lineHeight: ["2.25rem", "2.5rem"],
      fontWeight: "500",
    },
    p: {
      fontSize: ["1.25rem", "1.5rem"],
      lineHeight: ["2.25rem", "2rem"],
      fontWeight: "500",
    },
    a: {
      fontSize: ["1rem", "1.12rem"],
      lineHeight: ["1.75rem", "1.75rem"],
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
