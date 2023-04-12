import React from "react";
import "./../styles.css";

const YouTubeVideo = ({ videoId }) => {
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-container">
      <iframe
        className="video-iframe"
        title="YouTube video player"
        src={videoSrc}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
