import { useContext, useEffect, useState } from "react";
import { FilterMenuContext } from "../../context/FilterMenuContext";
import useGetData from "../../hooks/useGetData";
import FilterMenu from "../../shared/FilterMenu/FilterMenu";
import ProductCard from "../../shared/ProductCard/ProductCard";
import { RiFilter2Fill } from "react-icons/ri";
import "./styles/ProductList.css";

const ProductList = () => {
  const { state: filterState, dispatch } = useContext(FilterMenuContext);
  const { data, loading, error } = useGetData("/api/products");
  const [filterMenuState, setFilterMenuState] = useState(false);
  const filteredMappedProducts = () => {
    return data.products
      .filter(
        ({ category, rating, name }) =>
          (filterState.category.includes(category) ||
            filterState.category.length === 0) &&
          filterState.rating >= rating &&
          ((filterState.isSearchVisible &&
            (name
              .toLowerCase()
              .trim()
              .includes(filterState.searchTerm.trim().toLowerCase()) ||
              category.includes(filterState.searchTerm))) ||
            !filterState.searchTerm)
      )
      .sort((a, b) =>
        filterState.sort ? a.price - b.price : b.price - a.price
      )
      .map((item) => {
        return <ProductCard {...item} />;
      });
  };
  useEffect(() => {
    return () => {
      dispatch({ type: "CLEAR" });
    };
  }, []);

  const toggleFilterMenu = () => {
    setFilterMenuState((prevState) => !prevState);
  };

  return (
    <div className="product-list">
      <FilterMenu {...{ filterMenuState, setFilterMenuState }} />
      <div className="product-wrapper">
        <h2>Products</h2>
        <div className="products-container">
          {!loading && !error && filteredMappedProducts()}
        </div>
      </div>
      <div className="filter-button" onClick={toggleFilterMenu}>
        Filter <RiFilter2Fill size={18} />
      </div>
    </div>
  );
};
export default ProductList;
