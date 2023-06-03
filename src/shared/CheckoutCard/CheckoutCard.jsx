import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./CheckoutCard.css";

const CheckoutCard = ({ page }) => {
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
    <div className={`checkout-card ${page}`}>
      <div className="order-details">
        <h4>ORDER DETAILS</h4>
        <div className="order-item header">
          <span>Item</span>
          <span>Qty</span>
        </div>
        {cart.map(({ name, qty }) => (
          <div className="order-item">
            <span>{name}</span>
            <span>{qty}</span>
          </div>
        ))}
      </div>
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
      <div className="delivery-details">
        <h4>DELIVERY DETAILS</h4>
        <div class="address-item">
          <span>RK03</span>
          <span>sunil das sarani, BC Road, Burdwan, West Bengal 713103</span>
          <span>India</span>
          <span>Phone No: 7908246842</span>
        </div>
      </div>
      <button>Checkout</button>
    </div>
  );
};

export default CheckoutCard;
