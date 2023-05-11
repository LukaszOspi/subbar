import React from "react";

import YouTubeVideo from "./YouTubeVideo";

const WelcomeSection = ({
  welcomePictureSrc,
  welcomeParagraph,
  readMoreLink,
  readMoreText = "READ MORE",
  videoId,
  paddingTop,
}) => {
  return (
    <>
      <div className="welcome-container">
        {welcomePictureSrc && (
          <div className="welcome-image-container">
            <img
              className="welcome-image"
              src={welcomePictureSrc}
              alt="Graphic"
            />
          </div>
        )}
      </div>

      {(welcomeParagraph || readMoreLink || videoId) && (
        <div
          className="welcome-second-container"
          style={{ paddingTop: paddingTop }}
        >
          {(welcomeParagraph || readMoreLink) && (
            <div className="welcome-second-container-left">
              {welcomeParagraph && <p>{welcomeParagraph}</p>}
              {readMoreLink && (
                <button onClick={() => (window.location.href = readMoreLink)}>
                  {readMoreText}
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
