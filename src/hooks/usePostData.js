import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const usePostData = (url, isAuthRequired = false) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const authCtx = useContext(AuthContext);

  const postData = async (body) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: isAuthRequired ? authCtx.token : "",
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error("An error occurred while making the request.");
      }
      const result = await response.json();
      if (url === "/api/user/cart") authCtx.updateCart(result.cart);
      if (url === "/api/user/wishlist") authCtx.updateWishlist(result.wishlist);
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, postData };
};

export default usePostData;
