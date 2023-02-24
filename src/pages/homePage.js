import React from "react";

import Header from "../components/common/Header";
import CredExperience from "../components/CredExperience";
import CredStory from "../components/CredStory";
import FeelSpecial from "../components/FeelSpecial";
import MobileScroll from "../components/MobileScroll";
import WindowPeak from "../components/WindowPeak";
import About from "../components/about";
import Community from "../components/community";
import SocialFollow from "../components/common/footer";
import Grid from "../components/Grid/abc";
const HomePage = () => {
  return (
    <>
      <Header />
      <Grid/>
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
