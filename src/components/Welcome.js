import React from "react";
import WelcomePicture from "./../assets/welcome.svg";
import YouTubeVideo from "./atoms/YouTubeVideo";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <img className="welcome-image" src={WelcomePicture} alt="Graphic" />
      <div className="video-wrapper">
        <YouTubeVideo videoId="cTn_B2nEObI" />
      </div>
    </div>
  );
};

export default Welcome;
