/* eslint-disable react-hooks/exhaustive-deps */
import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
import "./ProductCard.css";
import usePostData from "../../hooks/usePostData";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import useDeleteData from "../../hooks/useDeleteData";

const ProductCard = ({ imageLink, rating, price, name, _id }) => {
  const addToCart = usePostData("/api/user/cart", true);
  const addToWishlist = usePostData("/api/user/wishlist", true);
  const removeFromCart = useDeleteData(`/api/user/cart/${_id}`, true);
  const removeFromWishlist = useDeleteData(`/api/user/wishlist/${_id}`, true);
  const authCtx = useContext(AuthContext);

  const addToCartHandler = () => {
    addToCart.postData({ product: { imageLink, rating, price, name, _id } });
  };

  const addToWishlistHandler = () => {
    addToWishlist.postData({
      product: { imageLink, rating, price, name, _id },
    });
  };

  return (
    <div className="product-card">
      <img src={imageLink} alt={name} />
      <div className="seperator"></div>
      <div className="product-info">
        <span>{name}</span>
        <span>₹{price}</span>
      </div>
      <div className="product-action">
        <div>
          {authCtx.userData.cart.some((item) => item._id === _id) ? (
            <BsFillCartCheckFill onClick={() => removeFromCart.deleteData()} />
          ) : (
            <BsFillCartPlusFill onClick={addToCartHandler} />
          )}
        </div>
        <div>
          {authCtx.userData.wishlist.some((item) => item._id === _id) ? (
            <AiFillHeart onClick={() => removeFromWishlist.deleteData()} />
          ) : (
            <AiOutlineHeart onClick={addToWishlistHandler} />
          )}
        </div>
        <div className="rating">
          {rating}
          <AiFillStar />
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
