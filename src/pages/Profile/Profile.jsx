import "./styles/Profile.css";
import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import AddressCard from "./components/AddressCard";
const Profile = () => {
  const [tabState, setTabState] = useState(true);

  return (
    <div className="profile-container">
      <h2>Account</h2>
      <div className="tab-switcher">
        <div
          className={`tab-item ${tabState ? "active" : ""}`}
          onClick={() => setTabState(true)}
        >
          Profile
        </div>
        <div
          className={`tab-item ${!tabState ? "active" : ""}`}
          onClick={() => setTabState(false)}
        >
          Address
        </div>
      </div>
      {tabState ? <ProfileCard /> : <AddressCard />}
    </div>
  );
};
export default Profile;
