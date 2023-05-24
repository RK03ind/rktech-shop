import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const updateCart = (cart) =>
    setUserData((prevState) => ({ ...prevState, cart }));
  const updateWishlist = (wishlist) =>
    setUserData((prevState) => ({ ...prevState, wishlist }));
  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        userData,
        setUserData,
        updateCart,
        updateWishlist,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
