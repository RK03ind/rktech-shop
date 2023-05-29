import { Response } from "miragejs";
import { v4 as uuid } from "uuid";
import { requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to User address list are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles adding items to user's address list.
 * send POST Request at /api/user/address
 * body contains {address}
 * */

export const addNewAddressHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const userAddress = schema.users.findBy({ _id: userId }).address;
    const { address } = JSON.parse(request.requestBody);
    userAddress.push({
      ...address,
      _id: uuid(),
    });
    this.db.users.update({ _id: userId }, { address: userAddress });
    return new Response(201, {}, { address: userAddress });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles removing items to user's address list.
 * send DELETE Request at /api/user/cart/:addressId
 * */

export const removeAddressHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    let userAddress = schema.users.findBy({ _id: userId }).address;
    const addressId = request.params.addressId;
    userAddress = userAddress.filter((item) => item._id !== addressId);
    this.db.users.update({ _id: userId }, { address: userAddress });
    return new Response(200, {}, { address: userAddress });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles updating items in user's address list.
 * send POST Request at /api/user/cart/:cartItemId
 * body contains {address}
 * */

export const updateAddressHandler = function (schema, request) {
  const cartItemId = request.params.cartItemId;
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const userAddress = schema.users.findBy({ _id: userId }).address;
    let { address } = JSON.parse(request.requestBody);
    const newAddress = userAddress.map((item) => {
      if (item._id === cartItemId) return { _id: cartItemId, ...address };
      return item;
    });
    this.db.users.update({ _id: userId }, { address: newAddress });
    return new Response(200, {}, { address: newAddress });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
