import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../../style/Navbar.css";

function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Hamburger only visible on mobile */}
        <button className="hamburger" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <span className="logo">HealthApp</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/diet">Diet</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
