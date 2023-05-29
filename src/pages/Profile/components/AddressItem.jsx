import { MdEdit, MdDelete } from "react-icons/md";
import useDeleteData from "../../../hooks/useDeleteData";
const AddressItem = ({
  name,
  street,
  city,
  state,
  country,
  zipCode,
  contactNo,
  _id,
}) => {
  const { deleteData } = useDeleteData(
    `/api/user/address/${_id}`,
    true,
    "address"
  );
  return (
    <div className="address-item">
      <h4>Rudra Konar</h4>
      <span>
        {street}, {city}, {state} {zipCode}
      </span>
      <span>{country}</span>
      <span>Phone No: {contactNo}</span>
      <div className="address-action">
        <span>
          <MdEdit size={17} />
        </span>
        <span onClick={deleteData}>
          <MdDelete size={17} />
        </span>
      </div>
    </div>
  );
};

export default AddressItem;
