import React from "react";
import ReactDOM from "react-dom/client";
import { client } from "./graphql/graphqlClient";
import { Provider } from "urql";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>
);
