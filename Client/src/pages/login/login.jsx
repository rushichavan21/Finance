import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
            
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.password}
                  onChange={handleChange}
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
