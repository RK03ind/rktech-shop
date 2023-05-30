import { createContext, useReducer } from "react";

export const AuthContext = createContext();
const intialValue = {
  token: localStorage.getItem("token"),
  userData: JSON.parse(localStorage.getItem("user")),
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...state,
        token: action.payload.token,
        userData: action.payload.user,
      };
    case "UPDATE_CART":
      return {
        ...state,
        userData: {
          ...state.userData,
          cart: action.payload,
        },
      };
    case "UPDATE_WISHLIST":
      return {
        ...state,
        userData: {
          ...state.userData,
          wishlist: action.payload,
        },
      };
    case "UPDATE_ADDRESS":
      return {
        ...state,
        userData: {
          ...state.userData,
          address: action.payload,
        },
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        token: null,
        userData: null,
      };
    default:
      return state;
  }
};
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialValue);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
