import React from "react";
import icon from "../../assets/Green-Leaves-PNG-Photos.png";

import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Container">
      {/* nav Container */}
      <div className="nav-container">
        <div className="nav-logo">
          <img src={icon} alt="brand-logo" />
          <h1>Green Nature</h1>
        </div>
        <div>
          <Link to="/">
            <button> Home</button>
          </Link>
          <Link to="/page2">
            <button>Page 2</button>
          </Link>
          <Link to="/page3">
            <button>Page 3</button>
          </Link>
          <Link to="*">
            <button>Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
