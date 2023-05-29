import { useState } from "react";
import "../styles/AddNewAddress.css";
import usePostData from "../../../hooks/usePostData";
import { trimObjectValues } from "../../../utils/trimObjectValues";
import { hasNoEmptyProperties } from "../../../utils/hasNoEmptyProperties";
import { toast } from "react-toastify";

const AddNewAddress = ({
  name = "",
  street = "",
  city = "",
  state = "",
  country = "",
  zipCode = "",
  contactNo = "",
  _id = undefined,
}) => {
  const [formState, setFormState] = useState({
    name,
    street,
    city,
    state,
    country,
    zipCode,
    contactNo,
  });
  const addNewAddress = usePostData("/api/user/address", true, "address");

  const postNewSignupData = () => {
    const dataObj = { ...formState };
    trimObjectValues(dataObj);
    if (hasNoEmptyProperties(dataObj) && !addNewAddress.loading)
      return addNewAddress.postData({ ...dataObj });
    toast.warn("Fill up all the required input fields");
  };

  const inputChangeHandler = (e) => {
    const {
      target: { name, value },
    } = e;
    setFormState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  return (
    <div className="add-address">
      <h3>Add New Address</h3>
      <form onChange={inputChangeHandler}>
        <input
          type="text"
          placeholder="Enter Name"
          value={formState.name}
          name="name"
        />
        <input
          type="text"
          placeholder="Enter Street Address"
          value={formState.street}
          name="street"
        />
        <input
          type="text"
          placeholder="Enter City"
          value={formState.city}
          name="city"
        />
        <input
          type="text"
          placeholder="Enter State"
          value={formState.state}
          name="state"
        />
        <input
          type="text"
          placeholder="Enter Country"
          value={formState.country}
          name="country"
        />
        <input
          type="text"
          placeholder="Enter Zip Code"
          value={formState.zipCode}
          name="zipCode"
        />
        <input
          type="text"
          placeholder="Enter Mobile Number"
          value={formState.contactNo}
          name="contactNo"
        />
      </form>
      <div className="form-actions">
        <button onClick={postNewSignupData}>Save</button>
      </div>
    </div>
  );
};

export default AddNewAddress;
