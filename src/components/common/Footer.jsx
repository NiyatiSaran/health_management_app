import React from "react";
import "../../style/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} HealthApp | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
