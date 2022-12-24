import React from "react";
import icon from "../../assets/logo.png";
import img from "../../assets/images/image2.jpg";
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
        <div className="left-content">
          <img src={img} alt="images" />
        </div>
        <div className="right-content">
          <h1>Lorem ipsum dolor, sit amet consectetur Dicta mollitia</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            similique pariatur possimus quaerat incidunt rem, minima impedit
            ratione veniam at? Magni quas voluptatum saepe vel ratione qui, est
            id quo.
                  </p>
                  <button className="Button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
