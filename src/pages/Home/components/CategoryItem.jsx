import { useContext } from "react";
import { FilterMenuContext } from "../../../context/FilterMenuContext";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ icon, categoryName }) => {
  const { dispatch } = useContext(FilterMenuContext);
  const navigate = useNavigate();
  const navToCategory = () => {
    dispatch({ type: "UPDATE_CATEGORY", payload: categoryName });
    navigate("products");
  };

  return (
    <div className="category-item" onClick={navToCategory}>
      <img src={icon} alt={categoryName} />
      <span>{categoryName}</span>
    </div>
  );
};

export default CategoryItem;
