import { useContext } from "react";
import "./styles/Profile.css";
import { AuthContext } from "../../context/AuthContext";
const Profile = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div className="profile-container">
      <div className="profile-card">
        <span>{JSON.stringify(authCtx.userData)}</span>
      </div>
    </div>
  );
};
export default Profile;
