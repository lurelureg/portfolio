import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// set custom fonts, colors, etc.
const theme = extendTheme({});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ChakraProvider>
    </React.StrictMode>
);
