import React, { useRef, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "./productShowcase.css";
import img1 from "./product_detai.jpg";
import img2 from "./1.png";
import img3 from "./2.png";
import img4 from "./3.png";
import img5 from "./4.png";
import img6 from "./5.png";
import img7 from "./6.png";



const ProductShowcase = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const ref = useRef(null);

  const toggleAnimation = (e) => {
    if (e[0]?.isIntersecting) {
      setShowAnimation(true);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);
    if (!showAnimation) {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  });
  return (
    <div






      className={`product-showcase ${showAnimation ? "scale-in-bottom" : ""}`}
      scale-in-bottom
      ref={ref}
    >
      {showAnimation && (
        <div className="showcase-wrapper">
          <img
            src={img1} alt= ""
            className="showcase-ui showcase-mockup-1"
          />
          <img
            src= {img1} alt=""
            className="showcase-ui showcase-mockup-2"
          />
          <img
            src={img1}
            className="showcase-ui showcase-mockup-3"
          />
          <img
            src={img1}
            className="showcase-ui showcase-mockup-4"
          />
          <img
            src={img1}
            className="showcase-ui showcase-mockup-5"
          />
        </div>
      )}
    </div>
  );
};

export default ProductShowcase;