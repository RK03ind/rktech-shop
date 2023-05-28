import { FiChevronRight } from "react-icons/fi";
import "./styles/Signup.css";
import { useContext, useEffect, useState } from "react";
import usePostData from "../../hooks/usePostData";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const { data, loading, error, postData } = usePostData("/api/auth/signup");
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (!loading && !error && data) {
      authCtx.dispatch({ type: "UPDATE_TOKEN", payload: data.encodedToken });
      authCtx.dispatch({ type: "UPDATE_USER", payload: data.createdUser });
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.createdUser));
      navigate("/products");
    }
  }, [loading, error, data, navigate, authCtx]);

  const postSignUpData = () => {
    postData({ ...formState });
  };

  const inputChangeHandler = (e) => {
    const {
      target: { name, value },
    } = e;
    setFormState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div className="signup-container">
        <div className="signup-card">
          <h2>Sign Up</h2>
          <label className="input-wrapper">
            <label>First Name</label>
            <input
              type="text"
              placeholder="John"
              value={formState.firstName}
              name="firstName"
              onChange={inputChangeHandler}
            />
          </label>
          <label className="input-wrapper">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Doe"
              value={formState.lastName}
              name="lastName"
              onChange={inputChangeHandler}
            />
          </label>
          <label className="input-wrapper">
            <label>Email</label>
            <input
              type="text"
              placeholder="johndoe@email.com"
              value={formState.email}
              name="email"
              onChange={inputChangeHandler}
            />
          </label>
          <label className="input-wrapper">
            <label>Password</label>
            <input
              type="password"
              placeholder="**********"
              value={formState.password}
              name="password"
              onChange={inputChangeHandler}
            />
          </label>
          <button onClick={postSignUpData}>Signup</button>
          <div className="login" onClick={() => navigate("/login")}>
            Login With Exisiting Account
            <FiChevronRight size={16} strokeWidth={4} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
