import React from "react";
import WelcomePicture from "./../assets/welcome-bcg.png";
import WelcomeText from "./../assets/welcome-text.svg";
import LatestProjects from "./LatestProjects";
import WelcomeSection from "./atoms/WelcomeSection";

const Welcome = () => {
  return (
    <>
      <WelcomeSection
        welcomeTextImageSrc={WelcomeText}
        welcomePictureSrc={WelcomePicture}
        welcomeParagraph="a playground for sub frequencies and haptic art. 
        with sub_bar, eufonia launches a pioneering series of events exploring music, 
        subfrequencies and the haptic sense, a space that invites everyone to meet, 
        interact and experience music in an innovative, inclusive, and immersive way"
        readMoreLink="/read-more"
        videoId="cTn_B2nEObI"
      />
      <LatestProjects />
    </>
  );
};

export default Welcome;
