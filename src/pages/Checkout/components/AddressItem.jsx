import "../styles/AddressItem.css";
const AddressItem = (props) => {
  const { item, currentAddress, setCurrentAddress } = props;
  const { name, street, city, state, country, zipCode, contactNo, _id } = item;
  const onRadioChangeHandler = () => {
    setCurrentAddress(item);
  };
  return (
    <div className="address-item" onClick={onRadioChangeHandler}>
      <label>
        <input type="radio" checked={currentAddress._id === _id} /> {name}
      </label>
      <div>
        {street}, {city}, {state}
      </div>
      <div>{country}</div>
      <div>{zipCode}</div>
      <div>Phone No:{contactNo}</div>
    </div>
  );
};

export default AddressItem;
