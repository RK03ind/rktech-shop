import { MdEdit, MdDelete } from "react-icons/md";
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
        <span>
          <MdDelete size={17} />
        </span>
      </div>
    </div>
  );
};

export default AddressItem;
