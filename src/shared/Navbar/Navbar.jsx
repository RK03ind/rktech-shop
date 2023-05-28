import { ImSearch } from "react-icons/im";
import { FaShoppingBag, FaShoppingCart, FaUser, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";
import { useContext } from "react";
import { FilterMenuContext } from "../../context/FilterMenuContext";
const Navbar = () => {
  const filterMenuCtx = useContext(FilterMenuContext);
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <span className="title" onClick={() => navigate("/")}>
          💻RKTECH
        </span>
        <div className="nav-tabs">
          <ImSearch
            onClick={() => filterMenuCtx.dispatch({ type: "TOGGLE_SEARCH" })}
          />
          <FaShoppingBag onClick={() => navigate("products")} />
          <FaShoppingCart />
          <FaHeart />
          <FaUser onClick={() => navigate("profile")} />
        </div>
      </nav>
      {filterMenuCtx.state.isSearchVisible && <SearchBar />}
    </>
  );
};

export default Navbar;
