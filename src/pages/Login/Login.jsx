import { useContext, useEffect } from "react";
import usePostData from "../../hooks/usePostData";
import "./styles/Login.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Login = () => {
  const { data, loading, error, postData } = usePostData("/api/auth/login");
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const loginWithTestData = () => {
    postData({ email: "adarshbalika@gmail.com", password: "adarshbalika" });
  };

  useEffect(() => {
    if (!loading && !error && data) {
      authCtx.setToken(data.encodedToken);
      authCtx.setUserData(data.foundUser);
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.foundUser));
      navigate("/products");
    }
  }, [loading, error, data, navigate, authCtx]);

  return (
    <div className="login-container">
      <div className="login-card">
        <h4>Sign In</h4>
        <label className="email">
          <label>Email</label>
          <input type="text" />
        </label>
        <label className="password">
          <label>Password</label>
          <input type="text" />
        </label>
        <button>Login</button>
        <button onClick={loginWithTestData}>Login With Test Credentials</button>
      </div>
    </div>
  );
};
export default Login;
