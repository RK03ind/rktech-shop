import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FilterMenuProvider } from "./context/FilterMenuContext";
import { CartProvider } from "./context/CartContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <FilterMenuProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterMenuProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
