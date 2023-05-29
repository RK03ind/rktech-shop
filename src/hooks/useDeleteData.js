import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const useDeleteData = (url, isAuthRequired = false, stateToUpdate = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const authCtx = useContext(AuthContext);

  const deleteData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: isAuthRequired ? authCtx.state.token : "",
        },
      });
      if (!response.ok) {
        throw new Error("An error occurred while making the request.");
      }
      const result = await response.json();
      //Updating context state
      if (stateToUpdate) {
        if (url.split("/").includes(stateToUpdate)) {
          authCtx.dispatch({
            type: `UPDATE_${stateToUpdate.toUpperCase()}`,
            payload: result[stateToUpdate],
          });
          toast.error(`Removed from ${stateToUpdate}`);
        }
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
