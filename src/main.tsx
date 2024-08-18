import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.tsx";
import QueryProvider from "./context/queryProvider.tsx";
import { ThemeProvider } from "./context/themeProvider.tsx";
import "./index.css";
import store from "./store/store.ts";
const persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryProvider>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </ThemeProvider>
      </QueryProvider>
    </Provider>
  </React.StrictMode>
);
