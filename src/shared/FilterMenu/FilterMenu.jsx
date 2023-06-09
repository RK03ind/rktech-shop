import { useContext } from "react";
import { FilterMenuContext } from "../../context/FilterMenuContext";
import useGetData from "../../hooks/useGetData";
import "./FilterMenu.css";

const FilterMenu = ({ filterMenuState, setFilterMenuState }) => {
  const filterMenuCtx = useContext(FilterMenuContext);

  const sortRadioHandler = (e) => {
    if (e.target.matches("input"))
      filterMenuCtx.dispatch({ type: "UPDATE_SORT" });
  };
  const categoryHandler = (categoryName) => {
    filterMenuCtx.dispatch({ type: "UPDATE_CATEGORY", payload: categoryName });
  };
  const ratingHandler = (e) => {
    filterMenuCtx.dispatch({ type: "UPDATE_RATING", payload: e.target.value });
  };

  const { data, loading, error } = useGetData("/api/categories");
  return (
    <div className={`filter-menu ${filterMenuState ? "active" : ""}`}>
      <div className="filter-header">
        <h4>Filters</h4>
        <span onClick={() => filterMenuCtx.dispatch({ type: "CLEAR" })}>
          Clear
        </span>
      </div>
      <div className="filter-category">
        <h4>Category</h4>
        {!loading &&
          !error &&
          data.categories.map(({ categoryName }) => {
            return (
              <div className="category-item">
                <input
                  type="checkbox"
                  id={categoryName}
                  onClick={() => categoryHandler(categoryName)}
                  checked={filterMenuCtx.state.category.includes(categoryName)}
                />
                <label htmlFor={categoryName}>{categoryName}</label>
              </div>
            );
          })}
      </div>
      <div className="sort-price" onClick={sortRadioHandler}>
        <h4>Sort By</h4>
        <div className="sort-item">
          <input type="radio" checked={filterMenuCtx.state.sort} id="asc" />
          <label htmlFor="asc">Price - Low to High</label>
        </div>
        <div className="sort-item">
          <input type="radio" checked={!filterMenuCtx.state.sort} id="desc" />
          <label htmlFor="desc">Price - High to Low</label>
        </div>
      </div>
      <div className="rating">
        <h4>Rating</h4>
        <div className="rating-item">
          <label>0</label>
          <input
            type="range"
            id="rating-slider"
            min="0.5"
            max="5"
            step="0.5"
            value={filterMenuCtx.state.rating}
            onChange={ratingHandler}
          />
          <label>{filterMenuCtx.state.rating}⭐</label>
        </div>
      </div>
      {filterMenuState && (
        <button
          className="close-button"
          onClick={() => setFilterMenuState(false)}
        >
          Close
        </button>
      )}
    </div>
  );
};

export default FilterMenu;
