import { createContext, useReducer } from "react";

const FilterMenuContext = createContext();

const defaultFilterState = {
  category: [],
  rating: "",
  sort: true,
  ratings: 0,
  searchTerm: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      return { ...state, category: [...state.category, action.payload] };
    case "REMOVE_CATEGORY":
      return {
        ...state,
        category: state.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};

export const FilterMenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultFilterState);
};
