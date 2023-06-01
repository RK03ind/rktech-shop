import { useParams } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
import "./styles/Product.css";
const Product = () => {
  const { productId } = useParams();
  console.log(productId);
  // const { data, loading, error } = useGetData(
  //   "/api/user/products/:productId",
  //   false
  // );
  return (
    <>
      <div className="product">
        <img
          src="https://res.cloudinary.com/rk03/image/upload/v1684792155/rktech/geforce-rtx-3090-ti-suprim-x-24g-1-550x550_wmywv5.jpg"
          alt=""
        />
        <div className="product-details">
          <div className="title">RTX 3090TI SUPRIM</div>
          <div className="price">₹100000</div>
          <div className="rating">
            4.6 <AiFillStar />
          </div>
          <div className="label">Product Model: 12102X0P</div>
          <div className="label">Category: GPU</div>
          <div className="action-buttons">
            <button>Add To Cart</button>
            <button>Add To Wishlist</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
