import React, { useState } from 'react';
import './LoginPage.css';
import Signup from "../../components/Signup/Signup";
import Signin from "../../components/Signin/Signin";

export default function LoginPage() {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className="main--container">
      <div className="login--container">
        <h1 className="heading--name">AutoIlluminators</h1>
        <div className="SignupLogin" >
          <button className={`toggle ${!isSignup ? 'active' : ''}`} onClick={() => setIsSignup(false)}>Log In</button>
          <button className={`toggle ${isSignup ? 'active' : ''}`} onClick={() => setIsSignup(true)}>Sign Up</button>
        </div>
        <div style={{marginTop:'20px',display:'flex',justifyContent:'center'}} >{isSignup ? <Signup /> : <Signin />}</div>
      </div>
    </div>
  );
}