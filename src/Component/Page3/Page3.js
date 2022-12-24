import React from "react";
import img1 from "../../assets/images/image1.jpg";
import img2 from "../../assets/images/image2.jpg";
import "./Page3.css";
const Page3 = () => {
  return (
    <div className="page3-content">
      <div className="left-img-content">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </div>
      <div className="right-content-page3">
        <small>We are Green Creatives.</small>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias saepe
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At eligendi
          quam repellat libero ex maiores ipsa, quo, velit delectus commodi
          quos, veniam cupiditate nesciunt illum hic eius sunt. Dolorum, Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente
          eaque asperiores neque modi nisi ratione dolorum minus ducimus
          distinctio, nobis similique libero. Deleniti consequatur tenetur
          repellat quidem accusamus Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Pariatur atque accusamus sequi fugit laborum quia
          soluta expedita possimus, quisquam veritatis repellendus eos
          blanditiis magnam sapiente, explicabo, vero asperiores quae corporis!
        </p>
        <button className="Button">See More...</button>
      </div>
    </div>
  );
};

export default Page3;
