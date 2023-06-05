import { useContext, useEffect, useState } from "react";
import "./styles/Checkout.css";
import { AuthContext } from "../../context/AuthContext";
import AddressItem from "./components/AddressItem";
import CheckoutCard from "../../shared/CheckoutCard/CheckoutCard";
import { useLocation, useNavigate } from "react-router-dom";
const Checkout = () => {
  const {
    state: {
      userData: { address },
    },
  } = useContext(AuthContext);
  const [currentAddress, setCurrentAddress] = useState(address[0]);
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!(state?.prevRoute && state.prevRoute === "cart"))
      navigate("/products");
  }, []);

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="checkout-wrapper">
        <div className="address-items">
          {address.length === 0 ? (
            <h3>No Address Found :(</h3>
          ) : (
            address.map((item) => (
              <AddressItem
                {...{ item, currentAddress, setCurrentAddress }}
                key={item._id}
              />
            ))
          )}
        </div>
        <CheckoutCard page="checkout" address={currentAddress} />
      </div>
    </div>
  );
};
export default Checkout;
