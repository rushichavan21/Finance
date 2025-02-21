import { LogIn, UserPlus ,LogOut} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const navigate = useNavigate();
  const {user, loginWithRedirect, isAuthenticated, logout} = useAuth0();
  return (
    <div>
      <div className="navbar-container">
        <div className="navbar-logo-div" onClick={()=>{navigate("/home")}}>
          <img src="./fin-logo.svg" className="navbar-logo" alt="logo" />
          <div className="navbar-title">Finance</div>
        </div>
        <div className="navbar-options">
          {
            isAuthenticated ? <button className="round-buttons" onClick={logout}><LogOut size={20} /><span>Logout</span></button>
             : <button className="round-buttons" onClick={loginWithRedirect}> <LogIn size={20} /><span>Login</span>  </button>
             }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
