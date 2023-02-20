import React from "react";
import Button from "../common/Button";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section-wrapper">
      <div className="flex absolute-center hero-claim-label">
        <div>buy now and get upto ₹200 back.</div>
        <div className="claim-anchor">
          claim now
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png"
            className="claim-arrow"
          />
        </div>
      </div>
      <div className="flex flex-col absolute-center hero-section max-width">
        <div className="hero-heading">
          rewards for buying clothes from us.
        </div>
        <div className="hero-subheading">
          We are still in Development
        </div>
        <Button buttonText="Download our Mobile App" />
      </div>
    </div>
  );
};

export default HeroSection;
