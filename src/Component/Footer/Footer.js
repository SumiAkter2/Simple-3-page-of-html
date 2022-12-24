import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <h5 style={{ paddingTop: "40px" }}>
        Copyright &copy; 2022 - All right reserved by GREEN NATURE
      </h5>
      <div className="social-content">
        <p>
          <AiFillInstagram size="28px" className="social-logo" />
          <BsFacebook size="25px" className="social-logo" />
          <GrTwitter size="25px" className="social-logo" />
        </p>
        <p style={{ paddingRight: "20px" }}> |</p>
        <h5> Australia </h5>
        <p style={{ paddingLeft: "20px" }}> |</p>
        <h5><BsFillTelephoneFill/> 0000789</h5>
      </div>
    </div>
  );
};

export default Footer;
