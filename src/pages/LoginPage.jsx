import React from "react";
import "../style/LoginPage.css"; // move your CSS here

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-left">
        <h2>LOGIN</h2>
        <form>
          <div className="form-group">
            <label>Email Address :</label>
            <input
              type="email"
              name="username"
              className="form-input"
              placeholder="johndoe@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Password :</label>
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="****"
              required
            />
          </div>

          <div className="forgot">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="btn-login">
            Login
          </button>
        </form>

        <div className="signup-link">
          Don’t have an account? <a href="/signup">Sign up</a>
        </div>
      </div>

      <div
        className="login-right"
        style={{
          background:
            'url("https://img.freepik.com/free-photo/doctor-with-stethoscope-hands-hospital-background_1423-1.jpg") no-repeat center center',
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}

export default LoginPage;
