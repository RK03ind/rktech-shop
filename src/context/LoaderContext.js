import { createContext, useState } from "react";

export const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);
  return (
    <LoaderContext.Provider value={{ state: isLoading, set: setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};
