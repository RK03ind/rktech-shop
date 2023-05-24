import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FilterMenuProvider } from "./context/FilterMenuContext";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <FilterMenuProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterMenuProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
