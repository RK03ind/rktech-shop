import CartItem from "./components/CartItem";
import CheckoutCard from "../../shared/CheckoutCard/CheckoutCard";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import "./styles/Cart.css";
const Cart = () => {
  const {
    state: {
      userData: { cart },
    },
  } = useContext(AuthContext);

  return (
    <>
      <div className="cart-container">
        <h2>My Cart</h2>
        <div className="cart-items">
          {cart.length === 0 ? (
            <h1>No Items in Cart 😟</h1>
          ) : (
            <>
              <div className="cart-item-wrapper">
                {cart.map((item) => {
                  return <CartItem {...item} />;
                })}
              </div>

              <CheckoutCard page="cart" />
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
