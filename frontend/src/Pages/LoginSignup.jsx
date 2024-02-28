import React from "react";
import "./Css/loginsignup.css";

const LoginSignUP = () => {
  return (
    <div className="login-signup">
      <div className="loginsignup-container">
        <h1>SignUp</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your name" />
          <input type="email" name="" placeholder="Email Address" id="" />
          <input type="password" name="" placeholder="Password" id="" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing you agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUP;
