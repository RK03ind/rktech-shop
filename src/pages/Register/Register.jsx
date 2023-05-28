import { FiChevronRight } from "react-icons/fi";
import "./styles/Register.css";
const Register = () => {
  return (
    <>
      <div className="signup-container">
        <div className="signup-card">
          <h2>Sign In</h2>
          <label className="input-wrapper">
            <label>First Name</label>
            <input type="text" placeholder="John" />
          </label>
          <label className="input-wrapper">
            <label>Last Name</label>
            <input type="text" placeholder="Doe" />
          </label>
          <label className="input-wrapper">
            <label>Email</label>
            <input type="text" placeholder="johndoe@email.com" />
          </label>
          <label className="input-wrapper">
            <label>Password</label>
            <input type="password" placeholder="**********" />
          </label>
          <button>Signup</button>
          <div className="login">
            Create new account <FiChevronRight size={16} strokeWidth={4} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
