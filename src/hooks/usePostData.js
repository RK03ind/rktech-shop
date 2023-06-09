import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const usePostData = (url, isAuthRequired = false, stateToUpdate = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

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
      const result = await response.json();
      if (!response.ok) {
        if (response.status === 401) {
          authCtx.dispatch({ type: "LOGOUT" });
          navigate("/login");
          toast.error("Login again to continue");
        }
        throw new Error(
          JSON.stringify({ status: response.status, message: result.errors[0] })
        );
      }
      //Context state updating logic
      if (stateToUpdate && url.split("/").includes(stateToUpdate)) {
        authCtx.dispatch({
          type: `UPDATE_${stateToUpdate.toUpperCase()}`,
          payload: result[stateToUpdate],
        });
        if (!(url.split("/").length >= 5))
          toast.success(`Added to ${stateToUpdate}`);
      }
      setData(result);
    } catch (err) {
      const { status, message } = JSON.parse(err.message);
      setError({ status, message });
      toast.error(`${status} - ${message}`);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, postData };
};

export default usePostData;
