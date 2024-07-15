import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import QueryProvider from "./context/queryProvider.tsx";
import { ThemeProvider } from "./context/themeProvider.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </QueryProvider>
  </React.StrictMode>
);
