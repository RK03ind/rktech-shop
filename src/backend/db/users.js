import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */
export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address: [
      {
        name: "RK03",
        street: "sunil das sarani, BC Road",
        city: "Burdwan",
        state: "West Bengal",
        country: "India",
        zipCode: "713103",
        contactNo: "7908246842",
        _id: "5bed4f62-b10a-4aab-bb4f-b5b7d8461666",
      },
    ],
  },
];
