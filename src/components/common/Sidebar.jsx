import React, { useState, useEffect } from "react";
import { FaBars, FaHome, FaAppleAlt, FaDumbbell, FaClipboardList, FaUser } from "react-icons/fa";
import "../../style/Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768); // open only on desktop

  // auto-collapse on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Hamburger button */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </button>

      <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
        <ul>
          <li><FaHome /> Dashboard</li>
          <li><FaAppleAlt /> Diet</li>
          <li><FaDumbbell /> Exercise</li>
          <li><FaClipboardList /> Records</li>
          <li><FaUser /> Profile</li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
