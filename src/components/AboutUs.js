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
        welcomeParagraph="welcome to sub_bar, a creative environment based on subfrequencies and vibrations, and a meeting point between hearing and deaf cultures. we empower artists, businesses and organisations worldwide with the tools and expertise they need to create local events, and we nurture their communities through educative programs, strategic partnerships and open calls. 

we promote an alternative, intense, and trance-inducing format where the art of “listening” is a task for the whole body, creating shared memories and inspiring tomorrow’s technologies. This community of artists and researchers is held together by curiosity, innovation, and mutual learning, in pursuit of the next beautiful thing."
      />
    </>
  );
};

export default AboutUs;
