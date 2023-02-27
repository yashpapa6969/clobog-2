import React, { useState } from "react";
import "./header.css";
import button1 from "../Button"




const Header = () => {
  const [showMobMenu, setShowMobMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobMenu(!showMobMenu);
    document.querySelector("body").classList.toggle("body-overflow-visible");
  };

  return (
    <div className="mobile-menu-wrapper">
      <div
        className={`mobile-menu only-mobile ${showMobMenu ? "overlay" : ""}`}
      >
        <div className="mobile-navbar">
          <div className="mobile-nav-item">About</div>
          <div className="mobile-nav-item">Business</div>
        </div>
      </div>
      <div className="max-width flex header">
       
         <div className="header-logo">Clobog</div>
      
        <div className="only-mobile mobile-menu-button-wrapper">
          <button
            className={`hamburger hamburger--spin ${
              showMobMenu ? "is-active" : ""
            }`}
            type="button"
            onClick={toggleMobileMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="non-mobile flex">
          <div className="header-nav-item">About</div>
          <div className="header-nav-item">Business</div>
          <button1
          className="button-wrapper2"
          >Signup</button1>
          <button
          className="button-wrap-login button-wrapper2"
          >Login</button>
          </div>
        </div>
      </div>
    
  );
};

export default Header;
