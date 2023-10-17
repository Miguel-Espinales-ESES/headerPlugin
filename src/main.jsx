// add the beginning of your app entry
import React from "react";
import "vite/modulepreload-polyfill";
import ReactDOM from "react-dom/client";
// mantine
import { MantineProvider, createTheme } from "@mantine/core";
// components
import App from "./App.jsx";
import AppBackEnd from "./AppBackEnd.jsx";
// css
import "@mantine/core/styles.css";
import "./index.css";

const theme = createTheme({
  /** Put your mantine theme override here */
});

if (document.getElementById("wpHeader")) {
  ReactDOM.createRoot(document.getElementById("wpHeader")).render(
    <React.StrictMode>
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
    </React.StrictMode>
  );
} else if (document.getElementById("wpHeader-options")) {
  ReactDOM.createRoot(document.getElementById("wpHeader-options")).render(
    <React.StrictMode>
      <MantineProvider theme={theme}>
        <AppBackEnd />
      </MantineProvider>
    </React.StrictMode>
  );
}
