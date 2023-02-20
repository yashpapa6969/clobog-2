import React, { useState } from "react";
import "./mobileScroll.css";
import ScreenText from "./ScreenText";


const scrollData = [
  {
    heading: "we’ve got your back.",
    description:
      "lorem ipsem ",
    mobile_img:"https://www.resizepixel.com/Image/nijqoupho/Preview/CartPage.jpg?v=a0463474-cf17-4017-aac0-a1d8d8448278",
  },
  {
    heading: "begin your winning streak.",
    description:
      "lorem ipsem",
    mobile_img:
      "https://www.resizepixel.com/Image/kpqnvkjbe/Preview/Detail.jpg?v=c409da75-3983-404d-b646-2d306b603544",
  },
  {
    heading: "for your eclectic taste.",
    description:
      "lorem ipsem.",
    mobile_img:
      "https://www.resizepixel.com/Image/evmdonjfo/Preview/Detail.jpg?v=89dbda1d-8c46-4d76-89df-3de60d930f93",
  },
  {
    heading: "more cash in your pockets.",
    description:
      "lorem ipsem",
    mobile_img:
      "https://www.resizepixel.com/Image/axulmypuz/Preview/SearchPage.png?v=b0f25733-83bf-408c-857b-9014d2fb3a3a",
  },
];

const MobileScroll = () => {
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <div className="mobile-scroll flex max-width">
      <div className="scroll-full-screen-wrapper">
        {scrollData.map((screen, i) => (
          <div className="scroll-full-screen">
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
