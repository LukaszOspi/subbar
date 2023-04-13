import React from "react";
import "./../styles.css";

const Artist = ({ image, title, description, location, index }) => {
  const formattedIndex = String(index).padStart(2, "0");

  return (
    <div className="card">
      <div className="card-image-container">
        <div className="card-image">
          <img src={image} alt={title} />
          <span className="index-number">{formattedIndex}</span>
        </div>
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <p className="card-event-production">EVENT PRODUCTION</p>
      <span className="yellow-dot"></span>
      <span className="card-location">{location}</span>
    </div>
  );
};

export default Artist;
