import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FilterMenuProvider } from "./context/FilterMenuContext";
import { AuthProvider } from "./context/AuthContext";
import { LoaderProvider } from "./context/LoaderContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <LoaderProvider>
        <FilterMenuProvider>
          <App />
        </FilterMenuProvider>
      </LoaderProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
