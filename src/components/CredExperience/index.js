import React from "react";
import "./credExperience.css";
import Clobob from "../card";


const CredExperience = () => {
  return (
    <div className="cred-experience photo-section">
      <div className="max-width">
        <div className="photo-section-child">
          <div className="photo-section-top">
            <div className="photo-section-subheading cred-experience-heading">
            Join our fashion community and stay up-to-date on the latest styles and promotions

            </div>
           
          </div>
          <div className="photo-section-bottom" >
            <Clobob></Clobob>
          
          
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CredExperience;
