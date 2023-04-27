import React from "react";
/*
import Card from "./atoms/Card";
import Background from "./../assets/BG.svg";
*/
import WelcomeSection from "./atoms/WelcomeSection";
import AboutUsPicture from "../assets/sub_bar_2.png";
import "./styles.css";

const AboutUs = () => {
  return (
    <>
      <WelcomeSection
        welcomePictureSrc={AboutUsPicture}
        welcomeParagraph="THIS IS A SAMPLE TEXT FOR ABOUT US SECTION"
      />
    </>
  );
};

export default AboutUs;
