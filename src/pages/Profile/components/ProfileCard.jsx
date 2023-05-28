import "../styles/ProfileCard.css";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const ProfileCard = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const logOutUser = () => {
    authCtx.dispatch({ type: "LOGOUT" });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="profile-card">
      <div className="user-details">
        <h4>User Details</h4>
        <div>
          <span>Name: </span>
          {authCtx.state.userData.firstName} {authCtx.state.userData.lastName}
        </div>
        <div>
          <span>Email: </span>
          {authCtx.state.userData.email}
        </div>
      </div>
      <button onClick={logOutUser}>Log Out</button>
    </div>
  );
};

export default ProfileCard;
