import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import "./styles/Cart.css";
import CartItem from "./components/CartItem";
const Cart = () => {
  const {
    state: {
      userData: { cart },
    },
  } = useContext(AuthContext);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, { price, qty }) => acc + price * qty, 0));
  }, [cart]);

  return (
    <>
      <div className="cart-container">
        <h2>My Cart</h2>
        <div className="cart-items">
          <div className="cart-item-wrapper">
            {cart.map((item) => {
              return <CartItem {...item} />;
            })}
          </div>
          <div className="checkout-card">
            <h4>PRICE DETAILS</h4>
            <div>{totalAmount}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
