import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./CheckoutCard.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckoutCard = ({ page, address }) => {
  const {
    state: {
      userData: { cart },
    },
    dispatch,
  } = useContext(AuthContext);
  const [checkoutDataState, setCheckoutDataState] = useState({
    totalAmount: 0,
    delivery: 100,
    discount: 0,
    initialPrice: 0,
    noOfItems: 0,
  });
  const navigate = useNavigate();

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

  const buttonHandler = () => {
    if (page === "cart")
      return navigate("/checkout", { state: { prevRoute: "cart" } });
    toast.success("Order Placed");
    dispatch({ type: "UPDATE_CART", payload: [] });
    navigate("/products");
  };
  return (
    <div className={`checkout-card ${page}`}>
      {page === "checkout" && (
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
      )}
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
      {page === "checkout" && address && (
        <div className="delivery-details">
          <h4>DELIVERY DETAILS</h4>
          <div class="address">
            <span>{address.name}</span>
            <span>
              {address.street}, {address.city}, {address.state}
            </span>
            <span>{address.country}</span>
            <span>Phone No: {address.contactNo}</span>
          </div>
        </div>
      )}
      <button onClick={buttonHandler}>
        {page === "checkout" ? "Place Order" : "Checkout"}
      </button>
    </div>
  );
};

export default CheckoutCard;
