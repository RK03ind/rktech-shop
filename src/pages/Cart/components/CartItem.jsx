import { AiFillStar } from "react-icons/ai";
import "../styles/CartItem.css";
import usePostData from "../../../hooks/usePostData";
import useDeleteData from "../../../hooks/useDeleteData";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CartItem = ({ name, rating, price, _id, imageLink, qty }) => {
  const addToWishlist = usePostData("/api/user/wishlist", true, "wishlist");
  const removeFromCart = useDeleteData(`/api/user/cart/${_id}`, true, "cart");
  const updateCartQty = usePostData(`/api/user/cart/${_id}`, true, "cart");
  const {
    state: {
      token,
      userData: { wishlist },
    },
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const itemData = { product: { imageLink, rating, price, name, _id } };

  const moveToWishlist = () => {
    if (!token) {
      navigate("/login");
    } else if (!addToWishlist.loading && !removeFromCart.loading) {
      addToWishlist.postData(itemData);
      removeFromCart.deleteData();
    }
  };

  const qtyUpdateHandler = ({ target: { className } }) => {
    if (qty === 1 && className === "dec")
      return toast.warn("Quantity cannot be less than 1");
    if (!updateCartQty.loading)
      updateCartQty.postData({ action: { type: `${className}rement` } });
  };

  return (
    <div className="cart-item">
      <div className="cart-data">
        <img src={imageLink} alt={name} />
        <div className="cart-item-details">
          <div className="name">{name}</div>
          <div className="other">
            ₹{price} •
            <span>
              {rating}
              <AiFillStar />
            </span>
          </div>
          <div className="quantity-wrapper">
            <div className="dec" onClick={qtyUpdateHandler}>
              -
            </div>
            <div className="qty">{qty}</div>
            <div className="inc" onClick={qtyUpdateHandler}>
              +
            </div>
          </div>
        </div>
      </div>
      <div className="cart-action">
        <span className="remove" onClick={() => removeFromCart.deleteData()}>
          REMOVE
        </span>
        {!wishlist.some((item) => item._id === _id) ? (
          <span onClick={moveToWishlist}>MOVE TO WISHLIST</span>
        ) : (
          <span>ALREADY IN WISHLIST</span>
        )}
      </div>
    </div>
  );
};

export default CartItem;
