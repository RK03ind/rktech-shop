import { ImSearch } from "react-icons/im";
import { FaShoppingBag, FaShoppingCart, FaUser, FaHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";
import { useContext, useRef, useState } from "react";
import { FilterMenuContext } from "../../context/FilterMenuContext";
import useOnClickOutside from "../../hooks/useOnClickOutside";
const Navbar = () => {
  const filterMenuCtx = useContext(FilterMenuContext);
  const [isMenuVisible, setMenuVisibility] = useState(false);
  // const menuRef = useRef(null);
  // const menuOpenerRef = useRef(null);
  const navigate = useNavigate();
  const toggleMobileMenu = (e) => {
    setMenuVisibility((prevState) => {
      return !prevState;
    });
  };
  const { ref: menuRef, exceptionRefArr: menuOpenerRef } =
    useOnClickOutside(setMenuVisibility);

  return (
    <>
      <nav>
        <span className="title" onClick={() => navigate("/")}>
          💻RKTECH
        </span>
        <div
          className={`nav-tabs ${isMenuVisible ? "active" : ""}`}
          onClick={() => setMenuVisibility(false)}
          ref={menuRef}
        >
          <ImSearch
            onClick={() => filterMenuCtx.dispatch({ type: "TOGGLE_SEARCH" })}
          />
          <FaShoppingBag onClick={() => navigate("products")} />
          <FaShoppingCart onClick={() => navigate("cart")} />
          <FaHeart onClick={() => navigate("wishlist")} />
          <FaUser onClick={() => navigate("profile")} />
        </div>
        <div
          className="mobile-menu"
          ref={(elem) => (menuOpenerRef.current[0] = elem)}
        >
          <GiHamburgerMenu className="mobile-menu" onClick={toggleMobileMenu} />
        </div>
      </nav>
      {filterMenuCtx.state.isSearchVisible && <SearchBar />}
    </>
  );
};

export default Navbar;
