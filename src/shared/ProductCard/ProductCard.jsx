/* eslint-disable react-hooks/exhaustive-deps */
import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
import "./ProductCard.css";
import usePostData from "../../hooks/usePostData";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import useDeleteData from "../../hooks/useDeleteData";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ imageLink, rating, price, name, _id }) => {
  const addToCart = usePostData("/api/user/cart", true, "cart");
  const addToWishlist = usePostData("/api/user/wishlist", true, "wishlist");
  const removeFromCart = useDeleteData(`/api/user/cart/${_id}`, true, "cart");
  const removeFromWishlist = useDeleteData(
    `/api/user/wishlist/${_id}`,
    true,
    "wishlist"
  );
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const itemData = { product: { imageLink, rating, price, name, _id } };

  const addToHandler = (e, req) => {
    e.stopPropagation();
    if (!authCtx.state.token) {
      toast.error("Login to use this feature");
      navigate("/login");
    } else if (!req.loading) {
      req.postData(itemData);
    }
  };

  const removeFromHandler = (req) => {
    if (!req.loading) {
      req.deleteData();
    }
  };

  return (
    <div className="product-card" onClick={() => navigate(`/product/${_id}`)}>
      <img src={imageLink} alt={name} />
      <div className="seperator"></div>
      <div className="product-info">
        <span>{name}</span>
        <span>₹{price}</span>
      </div>
      <div className="product-action">
        {authCtx.state.userData?.cart.some((item) => item._id === _id) ? (
          <div onClick={() => removeFromHandler(removeFromCart)}>
            <BsFillCartCheckFill />
          </div>
        ) : (
          <div onClick={(e) => addToHandler(e, addToCart)}>
            <BsFillCartPlusFill />
          </div>
        )}

        {authCtx.state.userData?.wishlist.some((item) => item._id === _id) ? (
          <div onClick={() => removeFromHandler(removeFromWishlist)}>
            <AiFillHeart />
          </div>
        ) : (
          <div onClick={() => addToHandler(addToWishlist)}>
            <AiOutlineHeart />
          </div>
        )}

        <div className="rating">
          {rating}
          <AiFillStar />
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
