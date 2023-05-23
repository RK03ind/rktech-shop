import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isTriggered, triggerCartRefetch] = useState(false);

  return (
    <CartContext.Provider value={{ isTriggered, triggerCartRefetch }}>
      {children}
    </CartContext.Provider>
  );
};
