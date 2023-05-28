import { useContext } from "react";
import "./styles/Profile.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutUser = () => {
    authCtx.dispatch({ type: "LOGOUT" });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <span>
          Name:{authCtx.state.userData.firstName}{" "}
          {authCtx.state.userData.lastName}
        </span>
        <span>Email:{authCtx.state.userData.email}</span>
        <button onClick={logoutUser}>Logout</button>
      </div>
    </div>
  );
};
export default Profile;
