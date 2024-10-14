import React, { useState } from 'react';
import './Login.css';
import { assets } from '../../assets/assets';

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  const toggleState = () => {
    setCurrState(currState === "Sign Up" ? "Login" : "Sign Up");
  };

  return (
    <div className='login'>
      <form className="login-container">
        <div className="login-title">
          <h2>{currState}</h2>
          <img 
            onClick={() => setShowLogin(false)} 
            src={assets.cross_icon} 
            alt="close icon" 
            className="close-icon" 
          />
        </div>
        <div className="login-inputs">
          {currState === "Sign Up" && <input type="text" placeholder='Name' required />}
          <input type="email" placeholder='Email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <p className="toggle-text" onClick={toggleState}>
          {currState === "Sign Up" ? "Already have an account? Login" : "Don't have an account? Sign Up"}
        </p>
      </form>
    </div>
  );
};

export default Login;
