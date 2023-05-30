import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { LoaderContext } from "../context/LoaderContext";
import { toast } from "react-toastify";
const useGetData = (url, isAuthRequired = false) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const authCtx = useContext(AuthContext);
  const loaderCtx = useContext(LoaderContext);
  useEffect(() => {
    loaderCtx.set(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            authorization: isAuthRequired ? authCtx.token : "",
          },
        });
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(
            JSON.stringify({
              status: response.status,
              message: responseData.errors[0],
            })
          );
        }
        setData(responseData);
        //Creating artificial delay since data is received almost immediately in mockbee fake backend
        setTimeout(() => {
          loaderCtx.set(false);
          setLoading(false);
        }, 800);
      } catch (err) {
        const { status, message } = JSON.parse(err.message);
        setError({ status, message });
        toast.error(`${status} - ${message}`);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useGetData;
