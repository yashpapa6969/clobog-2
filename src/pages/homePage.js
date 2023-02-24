import React from "react";
import AppRating from "../components/AppRating";
import BrandsLove from "../components/BrandsLove";
import Footer from "../components/common/footer";
import Header from "../components/common/Header";
import CredExperience from "../components/CredExperience";
import CredSecurity from "../components/CredSecurity";
import CredStory from "../components/CredStory";
import FeelSpecial from "../components/FeelSpecial";
import HeroSection from "../components/HeroSection";
import MobileScroll from "../components/MobileScroll";
import ProductShowcase from "../components/ProductShowcase";
import WindowPeak from "../components/WindowPeak";
import About1 from "../components/about";
import Community from "../components/community";
import SocialFollow from "../components/common/footer";
import "./Social.css";
import Clobob from "../components/card";


const HomePage = () => {
  return (
    <>
      <Header />
      <About1/>
      <FeelSpecial />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeak />
      </div>
      <CredStory />
      <Community/>
      <CredExperience />
    <SocialFollow />
    </>
  );
};

export default HomePage;
