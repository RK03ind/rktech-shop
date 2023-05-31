import { AiFillStar } from "react-icons/ai";
import usePostData from "../../../hooks/usePostData";
import useDeleteData from "../../../hooks/useDeleteData";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/WishlistItem.css";

const WishlistItem = ({ imageLink, name, price, rating, _id }) => {
  const addToCart = usePostData("/api/user/cart", true, "cart");
  const removeFromWishlist = useDeleteData(
    `/api/user/wishlist/${_id}`,
    true,
    "wishlist"
  );
  const {
    state: {
      token,
      userData: { cart },
    },
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const itemData = { product: { imageLink, rating, price, name, _id } };

  const moveToCart = () => {
    if (!token) {
      navigate("/login");
    } else if (!removeFromWishlist.loading && !addToCart.loading) {
      addToCart.postData(itemData);
      removeFromWishlist.deleteData();
    }
  };

  return (
    <div className="wishlist-item">
      <div className="wishlist-data">
        <img src={imageLink} alt={name} />
        <div className="wishlist-item-details">
          <div className="name">{name}</div>
          <div className="other">
            ₹{price} •
            <span>
              {rating}
              <AiFillStar />
            </span>
          </div>
        </div>
      </div>
      <div className="wishlist-action">
        <span
          className="remove"
          onClick={() => removeFromWishlist.deleteData()}
        >
          REMOVE
        </span>
        {!cart.some((item) => item._id === _id) ? (
          <span onClick={moveToCart}>MOVE TO CART</span>
        ) : (
          <span>ALREADY IN CART</span>
        )}
      </div>
    </div>
  );
};

export default WishlistItem;
