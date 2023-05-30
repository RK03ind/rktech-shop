import { useContext, useState } from "react";
import "../styles/AddressCard.css";
import { AuthContext } from "../../../context/AuthContext";
import AddressItem from "./AddressItem";
import AddNewAddress from "./AddNewAddress";
const AddressCard = () => {
  const {
    state: {
      userData: { address },
    },
  } = useContext(AuthContext);
  const [isFormVisible, setFormVisibility] = useState(false);

  return (
    <>
      <div className="address-card">
        <h4>My Addresses</h4>
        {address.map((item) => (
          <AddressItem {...item} />
        ))}
        <span onClick={() => setFormVisibility((prevState) => !prevState)}>
          + Add New Address
        </span>
      </div>
      {isFormVisible && <AddNewAddress closeForm={setFormVisibility} />}
    </>
  );
};

export default AddressCard;
