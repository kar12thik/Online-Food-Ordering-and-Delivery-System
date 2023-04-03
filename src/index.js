import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as Sentry from "@sentry/react";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

process.env.REACT_APP_ENV === "PRODUCTION" &&
  Sentry.init({
    dsn: "https://70ad64dbf363462da0d5fc4fb3155b4e@o4504930837594112.ingest.sentry.io/4504930839101440",
    integrations: [new Sentry.BrowserTracing()],
    tracesSampleRate: 1.0,
  });

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer);
let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
