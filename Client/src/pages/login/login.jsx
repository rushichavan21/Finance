import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 

    try {
      const response = await axios.post("http://localhost:3000/login", { email, password });

      if (response.data.success) {  
        console.log("Login Successful ✅", response.data);
        navigate("/"); 
      } else {
        setError(response.data.message || "Invalid credentials ❌");
      }
    } catch (err) {
      console.error("Login Error ❌", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <button className="back-to-home" onClick={() => navigate('/')}>
        ← Back to Home
      </button>
      <div className="login-wrapper">
        <div className="login-left">
          <div className="login-left-content">
            <h2>Welcome Back</h2>
            <p>Access your financial dashboard and manage your investments</p>
          </div>
        </div>
        
        <div className="login-right">
          <div className="login-form-container">
            <h1>Login</h1>
            <p className="login-subtitle">Enter your credentials to access your account</p>

           
            {error && <p className="error-message">{error}</p>}

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>

              <button type="submit" className="login-button">
                Login 
              </button>
            </form>

            <p className="signup-prompt">
              Don&apos;t have an account? <a href="#" onClick={() => navigate('/signup')}>Create one now</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;