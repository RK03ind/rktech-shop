import { ImSearch } from "react-icons/im";
import { FaShoppingBag, FaShoppingCart, FaUser, FaHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";
import { useContext, useState } from "react";
import { FilterMenuContext } from "../../context/FilterMenuContext";
const Navbar = () => {
  const filterMenuCtx = useContext(FilterMenuContext);
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMenuVisibility((prevState) => {
      return !prevState;
    });
  };
  return (
    <>
      <nav>
        <span className="title" onClick={() => navigate("/")}>
          💻RKTECH
        </span>
        <div
          className={`nav-tabs ${isMenuVisible ? "active" : ""}`}
          onClick={() => setMenuVisibility(false)}
        >
          <ImSearch
            onClick={() => filterMenuCtx.dispatch({ type: "TOGGLE_SEARCH" })}
          />
          <FaShoppingBag onClick={() => navigate("products")} />
          <FaShoppingCart onClick={() => navigate("cart")} />
          <FaHeart onClick={() => navigate("wishlist")} />
          <FaUser onClick={() => navigate("profile")} />
        </div>
        <GiHamburgerMenu className="mobile-menu" onClick={toggleMobileMenu} />
      </nav>
      {filterMenuCtx.state.isSearchVisible && <SearchBar />}
    </>
  );
};

export default Navbar;
