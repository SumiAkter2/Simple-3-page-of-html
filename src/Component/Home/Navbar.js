import React from "react";
import icon from "../../assets/logo.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="Container">
      {/* nav Container */}
      <div className="nav-container">
        <div className="nav-logo">
          <img src={icon} alt="brand-logo" />
          <h1>React app</h1>
        </div>
        <div>
          <button> Home</button>
          <button>Back</button>
          <button>Next</button>
        </div>
      </div>
      {/* Body Text */}
      <div className="body-container">
        <h1 className="">
          Lorem ipsum dolor, sit amet consectetur Dicta mollitia 
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          similique pariatur possimus quaerat incidunt rem, minima impedit
          ratione veniam at? Magni quas voluptatum saepe vel ratione qui, est id
          quo.
        </p>
      </div>
    </div>
  );
};

export default Navbar;
