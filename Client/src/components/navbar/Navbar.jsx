import { LogIn, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar-container">
        <div className="navbar-logo-div" onClick={()=>{navigate("/home")}}>
          <img src="./fin-logo.svg" className="navbar-logo" alt="logo" />
          <div className="navbar-title">Finance</div>
        </div>
        <div className="navbar-options">
          <button className="round-buttons" onClick={()=>{navigate("/login")}}>
            <LogIn size={20} />
            <span>Login</span>
          </button>
          <button className="round-buttons" onClick={()=>{navigate("/signup")}}>
            <UserPlus size={20} />
            <span>Signup</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
