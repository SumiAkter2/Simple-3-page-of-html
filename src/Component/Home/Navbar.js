import React from "react";
import icon from "../../assets/logo.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <img src={icon} alt="brand-logo" />
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
