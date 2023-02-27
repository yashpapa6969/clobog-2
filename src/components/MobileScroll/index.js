import React, { useState } from "react";
import "./mobileScroll.css";
import ScreenText from "./ScreenText";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";



const scrollData = [
  {
    heading: "Browse through our feed specially designed for you",
    description:
      "",
    mobile_img:img1,
  },
  {
    heading: "Like what you see? click on it for more details",
    description:
      "",
    mobile_img:img2,
  },
  {
    heading: "Easily checkout your order",
    description:
      "",
    mobile_img:img3,
  },
  {
    heading: "happiness on  your way!!",
    description:
      "",
    mobile_img:img4,
  },
];

const MobileScroll = () => {
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <div className="mobile-scroll flex max-width">
      <div className="scroll-full-screen-wrapper">
        {scrollData.map((screen, i) => (
          <div key={i} className="scroll-full-screen">
            <ScreenText screen={screen} setCurrentImg={setCurrentImg} i={i} />
          </div>
        ))}
      </div>
      <div className="mobile-mockup-wrapper non-mobile">
        <div className="mobile-mockup ">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={scrollData[currentImg].mobile_img}
              className="mobile-screen-img slide-in-right "
              key={scrollData[currentImg].mobile_img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScroll;
