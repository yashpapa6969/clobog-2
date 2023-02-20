import React from "react";
import Button from "../common/Button";
import "./credExperience.css";

const CredExperience = () => {
  return (
    <div className="cred-experience photo-section">
      <div className="max-width">
        <div className="photo-section-child">
          <div className="photo-section-top">
            <div className="photo-section-heading cred-experience-heading">
              Get Thrift Clothes at Clobog
            </div>
            <div className="photo-section-subheading">
              so that you don’t have to Search Anywhere else.
            </div>
          </div>
          <div className="photo-section-bottom">
            <div className="photo-section-description cred-experience-description">
              get all your attire in just a few clicks
            </div>
            <div className="photo-section-button">
              <Button buttonText="Experience the upgrade" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CredExperience;
