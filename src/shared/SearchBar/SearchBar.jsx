import { GoSearch } from "react-icons/go";
import "./SearchBar.css";
import { useContext } from "react";
import { FilterMenuContext } from "../../context/FilterMenuContext";
const SearchBar = () => {
  const filterMenuCtx = useContext(FilterMenuContext);
  const inputChangeHandler = (e) => {
    filterMenuCtx.dispatch({ type: "UPDATE_SEARCH", payload: e.target.value });
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        value={filterMenuCtx.state.searchTerm}
        onChange={inputChangeHandler}
      />
      <div>
        <GoSearch />
      </div>
    </div>
  );
};

export default SearchBar;
