import { LogIn, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect} from "react";
import axios from "axios";
import { useRecoilState } from "recoil";  
import accountBalanceAtom from "../../atoms/atom" 

const Navbar = () => {
  const navigate = useNavigate();
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [accountBalance, setAccountBalance] = useRecoilState(accountBalanceAtom);

  useEffect(() => {
    const fetchUserData = async () => {
      if (isAuthenticated && user?.email) {
        try {
          const response = await axios.post("http://localhost:3000/api/get-user", {
            email: user.email,
          });
          setAccountBalance(response.data.accountBalance);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [isAuthenticated, user, setAccountBalance]); 

  return (
    <div>
      <div className="navbar-container">
        <div className="navbar-logo-div" onClick={() => navigate("/home")}>
          <img src="./fin-logo.svg" className="navbar-logo" alt="logo" />
          <div className="navbar-title">Finance</div>
        </div>

        {isAuthenticated && (
          <div className="navbar-user">
            {/* <img src={user.picture} alt="Profile" className="navbar_user_pic" /> */}
            <h1>{user.name}</h1>
          </div>
        )}

        <div className="navbar-options">
          {isAuthenticated ? (
            <button className="round-buttons" onClick={() => logout()}>
              <LogOut size={20} /> Logout
            </button>
          ) : (
            <button className="round-buttons" onClick={loginWithRedirect}>
              <LogIn size={20} /> <span>Login</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
