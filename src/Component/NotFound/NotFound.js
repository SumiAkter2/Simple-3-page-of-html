import React from "react";
import img from "../../assets/images/sorry.jpg";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="not-found">
      <img src={img} alt="not-found-img" />
    </div>
  );
};

export default NotFound;
