import { createContext, useReducer } from "react";

export const AuthContext = createContext();
const intialValue = {
  token: localStorage.getItem("token"),
  userData: JSON.parse(localStorage.getItem("user")),
};
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "UPDATE_USER":
      return {
        ...state,
        userData: action.payload,
      };
    case "UPDATE_CART":
      return {
        ...state,
        userData: {
          ...state.userData,
          cart: action.payload,
        },
      };
    case "UPDATE_WISH":
      return {
        ...state,
        userData: {
          ...state.userData,
          wishlist: action.payload,
        },
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
