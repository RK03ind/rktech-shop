import { useContext } from "react";
import { FilterMenuContext } from "../../context/FilterMenuContext";
import useGetData from "../../hooks/useGetData";
import FilterMenu from "../../shared/FilterMenu/FilterMenu";
import ProductCard from "../../shared/ProductCard/ProductCard";
import "./styles/ProductList.css";

const ProductList = () => {
  const { state: filterState } = useContext(FilterMenuContext);
  const { data, loading, error } = useGetData("/api/products");

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

  return (
    <div className="product-list">
      <FilterMenu />
      <div className="product-wrapper">
        <h2>Products</h2>
        <div className="products-container">
          {!loading && !error && filteredMappedProducts()}
        </div>
      </div>
      <div className="filter-button"></div>
    </div>
  );
};
export default ProductList;