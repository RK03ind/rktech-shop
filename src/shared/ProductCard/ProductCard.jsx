import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
import "./ProductCard.css";
const ProductCard = ({ imageLink, rating, price, name }) => {
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
          <BsFillCartPlusFill />
        </div>
        <div>
          <AiOutlineHeart />
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
