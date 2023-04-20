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
        welcomeParagraph="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
        readMoreLink="/read-more"
        videoId="cTn_B2nEObI"
      />
      <LatestProjects />
    </>
  );
};

export default Welcome;
