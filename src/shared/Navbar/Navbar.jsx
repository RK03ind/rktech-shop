import { ImSearch } from "react-icons/im";
import { FaShoppingBag, FaShoppingCart, FaUser, FaHeart } from "react-icons/fa";

import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <span className="title">💻 RKTECH</span>
      <div className="nav-tabs">
        <ImSearch />
        <FaShoppingBag />
        <FaShoppingCart />
        <FaHeart />
        <FaUser />
      </div>
    </nav>
  );
};

export default Navbar;
