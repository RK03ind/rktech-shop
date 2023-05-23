import { GoSearch } from "react-icons/go";
import "./SearchBar.css";
import { useContext, useEffect, useState } from "react";
import { FilterMenuContext } from "../../context/FilterMenuContext";
import { useDebounce } from "use-debounce";
const SearchBar = () => {
  const filterMenuCtx = useContext(FilterMenuContext);
  const [inputState, setInputState] = useState("");
  const [value] = useDebounce(inputState, 1000);
  useEffect(() => {
    filterMenuCtx.dispatch({ type: "UPDATE_SEARCH", payload: value });
  }, [value]);

  const inputChangeHandler = (e) => {
    setInputState(e.target.value);
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        value={inputState}
        onChange={inputChangeHandler}
        placeholder="Search for Products...."
      />
      <div>
        <GoSearch />
      </div>
    </div>
  );
};

export default SearchBar;
