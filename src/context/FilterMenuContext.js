import { createContext, useReducer } from "react";

export const FilterMenuContext = createContext();

const defaultFilterState = {
  category: [],
  rating: 5.0,
  sort: true,
  searchTerm: "",
  isSearchVisible: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR":
      return defaultFilterState;
    case "UPDATE_CATEGORY":
      if (state.category.includes(action.payload))
        return {
          ...state,
          category: state.category.filter((item) => item !== action.payload),
        };
      return { ...state, category: [...state.category, action.payload] };
    case "UPDATE_SORT":
      return {
        ...state,
        sort: !state.sort,
      };
    case "UPDATE_RATING":
      return {
        ...state,
        rating: action.payload,
      };
    case "UPDATE_SEARCH":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "TOGGLE_SEARCH":
      return {
        ...state,
        isSearchVisible: !state.isSearchVisible,
        searchTerm: state.isSearchVisible ? "" : state.searchTerm,
      };

    default:
      return state;
  }
};

export const FilterMenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultFilterState);

  return (
    <FilterMenuContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterMenuContext.Provider>
  );
};
