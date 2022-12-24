import React from "react";
import img1 from "../../assets/images/image1.jpg";
import img2 from "../../assets/images/image2.jpg";
import "./Page.css";
const Page2 = () => {
  return (
    <div>
      <div className="content">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores,
          explicabo! Officiis nostrum voluptatibus officia repellendus alias
          rerum. Amet itaque deserunt non sint eligendi cum, dolores, velit
          repellat unde voluptate Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Sunt doloribus eum rerum aliquid, quos sint
          explicabo fuga veniam repellendus repudiandae asperiores vel incidunt
          et numquam quaerat vitae quisquam quas consequuntur!
        </p>
      </div>
      <div className="img-content">
        <img src={img1} alt="img" />
        <img src={img2} alt="img" />
      </div>
    </div>
  );
};

export default Page2;
