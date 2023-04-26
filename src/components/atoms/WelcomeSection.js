import React from "react";

import YouTubeVideo from "./YouTubeVideo";

const WelcomeSection = ({
  welcomeTextImageSrc,
  welcomePictureSrc,
  welcomeParagraph,
  readMoreLink,
  videoId,
}) => {
  return (
    <>
      <div className="welcome-container">
        {welcomeTextImageSrc && (
          <div className="welcome-text-container">
            <img src={welcomeTextImageSrc} alt="Welcome" />
          </div>
        )}
        {welcomePictureSrc && (
          <div
            className="welcome-image-container"
            style={!welcomeTextImageSrc ? { width: "100%" } : {}}
          >
            <img
              className="welcome-image"
              src={welcomePictureSrc}
              alt="Graphic"
              style={!welcomeTextImageSrc ? { width: "100%" } : {}}
            />
          </div>
        )}
      </div>

      {(welcomeParagraph || readMoreLink || videoId) && (
        <div className="welcome-second-container">
          {(welcomeParagraph || readMoreLink) && (
            <div className="welcome-second-container-left">
              {welcomeParagraph && <p>{welcomeParagraph}</p>}
              {readMoreLink && (
                <button onClick={() => (window.location.href = readMoreLink)}>
                  READ MORE
                </button>
              )}
            </div>
          )}
          {videoId && (
            <div className="welcome-second-container-right">
              <div className="video-wrapper">
                <YouTubeVideo videoId={videoId} />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default WelcomeSection;
