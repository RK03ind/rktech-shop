import { FiChevronRight } from "react-icons/fi";
import { useContext, useEffect } from "react";
import usePostData from "../../hooks/usePostData";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./styles/Login.css";

const Login = () => {
  const { data, loading, error, postData } = usePostData("/api/auth/login");
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const loginWithTestData = () => {
    postData({ email: "adarshbalika@gmail.com", password: "adarshbalika" });
  };

  useEffect(() => {
    if (!loading && !error && data) {
      authCtx.dispatch({ type: "UPDATE_TOKEN", payload: data.encodedToken });
      authCtx.dispatch({ type: "UPDATE_USER", payload: data.foundUser });
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.foundUser));
      navigate("/products");
    }
  }, [loading, error, data, navigate, authCtx]);

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Sign In</h2>
        <label className="input-wrapper">
          <label>Email</label>
          <input type="text" placeholder="email@email.com" />
        </label>
        <label className="input-wrapper">
          <label>Password</label>
          <input type="password" placeholder="**********" />
        </label>
        <button onClick={loginWithTestData}>Login With Test Credentials</button>
        <button>Login</button>
        <div className="register" onClick={() => navigate("register")}>
          Create new account <FiChevronRight size={16} strokeWidth={4} />
        </div>
      </div>
    </div>
  );
};
export default Login;
