import { FiChevronRight } from "react-icons/fi";
import { useContext, useEffect, useRef } from "react";
import usePostData from "../../hooks/usePostData";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./styles/Login.css";

const Login = () => {
  const { data, loading, error, postData } = usePostData("/api/auth/login");
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  const loginWithTestData = () => {
    postData({ email: "adarshbalika@gmail.com", password: "adarshbalika" });
  };

  const postLoginData = () => {
    postData({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
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
          <input type="text" placeholder="email@email.com" ref={emailRef} />
        </label>
        <label className="input-wrapper">
          <label>Password</label>
          <input type="password" placeholder="**********" ref={passwordRef} />
        </label>
        <button onClick={loginWithTestData}>Login With Test Credentials</button>
        <button onClick={postLoginData}>Login</button>
        <div className="register" onClick={() => navigate("/signup")}>
          Create new account <FiChevronRight size={16} strokeWidth={4} />
        </div>
      </div>
    </div>
  );
};
export default Login;
