import { useContext } from "react";
import "./styles/Wishlist.css";
import { AuthContext } from "../../context/AuthContext";
import WishlistItem from "./components/WishlistItem";
const Wishlist = () => {
  const {
    state: {
      userData: { wishlist },
    },
  } = useContext(AuthContext);
  return (
    <>
      <div className="wishlist-container">
        <h2>My Wishlist</h2>
        <div className="wishlist-items">
          {wishlist.length === 0 ? (
            <h1>No Items in Wishlist 😟</h1>
          ) : (
            <>
              {wishlist.map((item) => {
                return <WishlistItem {...item} />;
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Wishlist;
