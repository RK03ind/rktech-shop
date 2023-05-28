import { createContext, useEffect, useState } from "react";

export const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (isLoading) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [isLoading]);
  return (
    <LoaderContext.Provider value={{ state: isLoading, set: setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};
