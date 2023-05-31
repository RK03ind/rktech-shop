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
  const [checkoutDataState, setCheckoutDataState] = useState({
    totalAmount: 0,
    delivery: 100,
    discount: 0,
    initialPrice: 0,
    noOfItems: 0,
  });
  useEffect(() => {
    let initialPrice = cart.reduce(
      (acc, { price, qty }) => acc + price * qty,
      0
    );
    setCheckoutDataState((prevState) => {
      return {
        ...prevState,
        totalAmount: initialPrice - prevState.discount + prevState.delivery,
        initialPrice,
        noOfItems: cart.length,
      };
    });
  }, [cart]);

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

              <div className="checkout-card">
                <div className="price-details">
                  <h4>PRICE DETAILS</h4>
                  <div className="price-item">
                    <span>Price({checkoutDataState.noOfItems})</span>
                    <span>₹{checkoutDataState.initialPrice}</span>
                  </div>
                  <div className="price-item">
                    <span>Discount</span>
                    <span>- ₹{checkoutDataState.discount}</span>
                  </div>
                  <div className="price-item">
                    <span>Delivery Charges</span>
                    <span>+ ₹{checkoutDataState.delivery}</span>
                  </div>
                  <div className="price-item final">
                    <span>Total Amount</span>
                    <span>₹{checkoutDataState.totalAmount}</span>
                  </div>
                </div>
                <button>Checkout</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
