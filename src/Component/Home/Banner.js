import React from "react";
import img from "../../assets/images/pexels-pixabay-70850.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      {/* Body Text */}

      <div className="body-container">
        <div className="left-content">
          <img src={img} alt="images" />
        </div>
        <div className="right-content">
          <h1>Welcome To GREEN NATURE</h1>
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

export default Banner;
