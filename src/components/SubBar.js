import React from "react";
import WelcomeSection from "./atoms/WelcomeSection";
import SubBarBcg from "./../assets/sub_bar_bcg.png";
import SubBarText from "./../assets/sub_bar.png";
import Card from "./atoms/Card";
import Background from "./../assets/BG.svg";
import "./styles.css";

const SubBar = () => {
  return (
    <>
      <div>
        <WelcomeSection
          welcomeTextImageSrc={SubBarText}
          welcomePictureSrc={SubBarBcg}
          welcomeParagraph="a playground for subfrequencies and 
haptic art "
          readMoreLink
        />

        <div className="cards-container">
          <Card image={Background} />
          <Card image={Background} />
        </div>
      </div>
    </>
  );
};

export default SubBar;
