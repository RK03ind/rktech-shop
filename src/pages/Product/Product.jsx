import { useParams, useNavigate } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import { AiFillStar } from "react-icons/ai";
import "./styles/Product.css";
import usePostData from "../../hooks/usePostData";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
const Product = () => {
  const addToCart = usePostData("/api/user/cart", true, "cart");
  const addToWishlist = usePostData("/api/user/wishlist", true, "wishlist");
  const { productId } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useGetData(
    `/api/products/${productId}`,
    false
  );
  const authCtx = useContext(AuthContext);

  const addToHandler = (req) => {
    const itemData = { product: { ...data?.product } };
    if (!authCtx.state.token) {
      toast.error("Login to use this feature");
      navigate("/login");
    } else if (!req.loading) {
      req.postData(itemData);
    }
  };

  return (
    <>
      {!loading && !error && (
        <div className="product">
          <img src={data.product.imageLink} alt={data.product.name} />
          <div className="product-details">
            <div className="title">{data.product.name}</div>
            <div className="price">₹{data.product.price}</div>
            <div className="rating">
              {data.product.rating} <AiFillStar />
            </div>
            <div className="label">Product Model: {data.product.model}</div>
            <div className="label">Category: {data.product.category}</div>
            <div className="action-buttons">
              {authCtx.state.userData?.cart.some(
                (item) => item._id === productId
              ) ? (
                <button
                  className="cart-button"
                  onClick={() => navigate("/cart")}
                >
                  Already In Cart
                </button>
              ) : (
                <button
                  className="cart-button"
                  onClick={() => addToHandler(addToCart)}
                >
                  Add To Cart
                </button>
              )}
              {authCtx.state.userData?.wishlist.some(
                (item) => item._id === productId
              ) ? (
                <button onClick={() => navigate("/wishlist")}>
                  Already In Wishlist
                </button>
              ) : (
                <button onClick={() => addToHandler(addToWishlist)}>
                  Add To Wishlist
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Product;
