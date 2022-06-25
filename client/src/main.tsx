import React from "react";
import ReactDOM from "react-dom/client";
import { client } from "./graphql/graphqlClient";
import { Provider } from "urql";
import { ContextProvider } from "./context/contextProvider";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextProvider>
      <Provider value={client}>
        <App />
      </Provider>
    </ContextProvider>
  </React.StrictMode>
);
