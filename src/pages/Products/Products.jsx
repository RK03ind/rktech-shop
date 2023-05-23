import { useContext } from "react";
import FilterMenu from "../../shared/FilterMenu/FilterMenu";
import "./styles/Products.css";
import { FilterMenuContext } from "../../context/FilterMenuContext";
import useGetData from "../../hooks/useGetData";
import ProductCard from "../../shared/ProductCard/ProductCard";
const Products = () => {
  const { state: filterState } = useContext(FilterMenuContext);
  const { data, loading, error } = useGetData("/api/products");

  const filteredMappedProducts = () => {
    return data.products
      .filter(
        ({ category, rating, name }) =>
          (filterState.category.includes(category) ||
            filterState.category.length === 0) &&
          filterState.rating >= rating &&
          (name
            .toLowerCase()
            .trim()
            .includes(filterState.searchTerm.trim().toLowerCase()) ||
            category.includes(filterState.searchTerm) ||
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
    <div className="products">
      <FilterMenu />
      <div className="product-wrapper">
        <h2>Products</h2>
        <div className="products-container">
          {!loading && !error && filteredMappedProducts()}
        </div>
      </div>
    </div>
  );
};
export default Products;
