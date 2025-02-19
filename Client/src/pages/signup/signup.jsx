import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import axios from 'axios'
const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:3000/signup", {firstName,lastName,password,email,confirmPassword});
      console.log("Signup successful:", response.data);
      navigate('/login'); 
    } catch (error) {
      console.error("Signup failed:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="signup-container">
      <button className="back-to-home" onClick={() => navigate('/')}>
        ← Back to Home
      </button>
      <div className="signup-wrapper">
        <div className="signup-left">
          <div className="signup-left-content">
            <h2>Join Our Platform</h2>
            <p>Start your financial journey with us and unlock a world of investment opportunities</p>
          </div>
        </div>
        
        <div className="signup-right">
          <div className="signup-form-container">
            <h1>Create Account</h1>
            <p className="signup-subtitle">Fill in your details to get started</p>
            
            <form onSubmit={handleSubmit} className="signup-form">
              <div className="name-fields">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    onChange={(e)=> setFirstName(e.target.value)}
                    placeholder="Enter first name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    onChange={(e)=> setLastName(e.target.value)}
                    placeholder="Enter last name"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e)=> setEmail(e.target.value)}
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
                  onChange={(e)=> setPassword(e.target.value)}
                  placeholder="Create password"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={(e)=> setConfirmPassword(e.target.value)}
                  placeholder="Confirm password"
                  required
                />
              </div>

              <div className="terms-checkbox">
                <label>
                  <input type="checkbox" required />
                  <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
                </label>
              </div>

              <button type="submit" className="signup-button">
                Create Account
              </button>
            </form>

            <p className="login-prompt">
              Already have an account? <a href="#" onClick={() => navigate('/login')}>Sign in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
