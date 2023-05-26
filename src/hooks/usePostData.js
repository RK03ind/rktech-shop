import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

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
          authorization: isAuthRequired ? authCtx.state.token : "",
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error("An error occurred while making the request.");
      }
      const result = await response.json();
      if (url === "/api/user/cart") {
        authCtx.dispatch({ type: "UPDATE_CART", payload: result.cart });
        toast.success("Added to Cart");
      }
      if (url === "/api/user/wishlist") {
        authCtx.dispatch({ type: "UPDATE_WISH", payload: result.wishlist });
        toast.success("Added to Wishlist");
      }
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
