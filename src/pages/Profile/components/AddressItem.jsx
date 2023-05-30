import { MdEdit, MdDelete } from "react-icons/md";
import useDeleteData from "../../../hooks/useDeleteData";
import { useState } from "react";
import AddNewAddress from "./AddNewAddress";
const AddressItem = (props) => {
  const { name, street, city, state, country, zipCode, contactNo, _id } = props;
  const { deleteData } = useDeleteData(
    `/api/user/address/${_id}`,
    true,
    "address"
  );
  const [isFormVisible, setFormVisibility] = useState(false);
  return (
    <>
      <div className="address-item">
        <h4>{name}</h4>
        <span>
          {street}, {city}, {state} {zipCode}
        </span>
        <span>{country}</span>
        <span>Phone No: {contactNo}</span>
        <div className="address-action">
          <span onClick={() => setFormVisibility((prevState) => !prevState)}>
            <MdEdit size={17} />
          </span>
          <span onClick={deleteData}>
            <MdDelete size={17} />
          </span>
        </div>
      </div>
      {isFormVisible && (
        <AddNewAddress {...{ ...props, closeForm: setFormVisibility }} />
      )}
    </>
  );
};

export default AddressItem;
