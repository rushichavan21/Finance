import { LogIn, UserPlus } from "lucide-react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <div className="navbar-logo-div">
          <img src="./fin-logo.svg" className="navbar-logo" alt="logo" />
          <div className="navbar-title">Finance</div>
        </div>
        <div className="navbar-options">
          <button className="round-buttons ">
            <LogIn size={20} />
            <span>Login</span>
          </button>
          <button className="round-buttons ">
            <UserPlus size={20} />
            <span>Signup</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
