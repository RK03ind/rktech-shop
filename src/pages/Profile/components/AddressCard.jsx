import { useContext } from "react";
import "../styles/AddressCard.css";
import { MdEdit, MdDelete } from "react-icons/md";
import { AuthContext } from "../../../context/AuthContext";
import AddressItem from "./AddressItem";
const AddressCard = () => {
  const {
    state: {
      userData: { address },
    },
  } = useContext(AuthContext);

  return (
    <div className="address-card">
      <h4>My Addresses</h4>
      {address.map((item) => (
        <AddressItem {...item} />
      ))}
      <span>+ Add New Address</span>
    </div>
  );
};

export default AddressCard;
