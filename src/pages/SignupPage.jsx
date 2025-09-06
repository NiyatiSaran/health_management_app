import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/SignupPage.css"; // move all CSS here

function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirm = () => setShowConfirm(!showConfirm);

  return (
    <div className="signup-container">
      <div className="signup-header">
        <h2>SIGN UP</h2>
      </div>

      <form className="signup-form">
        <div className="form-group">
          <label>Full Name :</label>
          <div className="input-box">
            <i className="fa fa-user"></i>
            <input type="text" placeholder="John Doe" />
          </div>
        </div>

        <div className="form-group">
          <label>Email Address :</label>
          <div className="input-box">
            <i className="fa fa-envelope"></i>
            <input type="email" placeholder="johndoe@email.com" />
          </div>
        </div>

        <div className="form-group">
          <label>Phone no :</label>
          <div className="input-box">
            <i className="fa fa-phone"></i>
            <input type="text" placeholder="91XX XXXX XX" />
          </div>
        </div>

        <div className="form-group">
          <label>Password :</label>
          <div className="input-box">
            <i className="fa fa-lock"></i>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="****"
            />
            <i
              className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"} toggle-password`}
              onClick={togglePassword}
            ></i>
          </div>
        </div>

        <div className="form-group">
          <label>Confirm Password :</label>
          <div className="input-box">
            <i className="fa fa-lock"></i>
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="****"
            />
            <i
              className={`fa ${showConfirm ? "fa-eye-slash" : "fa-eye"} toggle-password`}
              onClick={toggleConfirm}
            ></i>
          </div>
        </div>

        <button type="submit" className="signup-btn">
          Sign up
        </button>

        <div className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
