import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const useDeleteData = (url, isAuthRequired = false) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const authCtx = useContext(AuthContext);

  const deleteData = async (body) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: "DELETE",
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
      if (url.split("/").includes("cart")) {
        authCtx.dispatch({ type: "UPDATE_CART", payload: result.cart });
        toast.error("Removed from Cart");
      }
      if (url.split("/").includes("wishlist")) {
        authCtx.dispatch({ type: "UPDATE_WISH", payload: result.wishlist });
        toast.error("Removed from Wishlist");
      }
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, deleteData };
};

export default useDeleteData;
