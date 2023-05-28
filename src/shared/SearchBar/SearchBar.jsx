import "./SearchBar.css";
import { GrClose } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import { FilterMenuContext } from "../../context/FilterMenuContext";
import { useDebounce } from "use-debounce";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const filterMenuCtx = useContext(FilterMenuContext);
  const [inputState, setInputState] = useState("");
  const [value] = useDebounce(inputState, 1000);
  const navigate = useNavigate();

  useEffect(() => {
    filterMenuCtx.dispatch({ type: "UPDATE_SEARCH", payload: value });
    if (value.trim()) {
      navigate("products");
    }
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
      <div onClick={() => filterMenuCtx.dispatch({ type: "TOGGLE_SEARCH" })}>
        <GrClose />
      </div>
    </div>
  );
};

export default SearchBar;
