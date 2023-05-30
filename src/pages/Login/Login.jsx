import { FiChevronRight } from "react-icons/fi";
import { useContext, useEffect, useRef } from "react";
import usePostData from "../../hooks/usePostData";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./styles/Login.css";
import { toast } from "react-toastify";

const Login = () => {
  const { data, loading, error, postData } = usePostData("/api/auth/login");
  const authCtx = useContext(AuthContext);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const navigate = useNavigate();

  const loginWithTestData = () => {
    postData({ email: "adarshbalika@gmail.com", password: "adarshbalika" });
  };

  const postLoginData = () => {
    const {
      current: { value: email },
    } = emailRef;
    const {
      current: { value: password },
    } = passwordRef;
    if (email && password) return postData({ email, password });
    toast.warn("Fill up all the fields");
  };

  useEffect(() => {
    if (!loading && !error && data) {
      authCtx.dispatch({
        type: "LOGIN",
        payload: { user: data.foundUser, token: data.encodedToken },
      });
      navigate("/products");
    }
  }, [loading, error, data, navigate, authCtx]);

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Sign In</h2>
        <label className="input-wrapper">
          <label>Email</label>
          <input type="email" placeholder="email@email.com" ref={emailRef} />
        </label>
        <label className="input-wrapper">
          <label>Password</label>
          <input type="password" placeholder="**********" ref={passwordRef} />
        </label>
        <button onClick={postLoginData}>Login</button>
        <button onClick={loginWithTestData}>Login With Test Credentials</button>
        <div className="register" onClick={() => navigate("/signup")}>
          Create new account <FiChevronRight size={16} strokeWidth={4} />
        </div>
      </div>
    </div>
  );
};
export default Login;
