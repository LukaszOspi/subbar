import React from "react";
import "./../styles.css";

const Card = ({ image, title, description, location, index, number, url }) => {
  const formattedIndex = String(index).padStart(2, "0");

  return (
    <div className="card">
      <div className="card-image-container">
        <div className="card-image">
          <a href={url}>
            <img src={image} alt={title} />
            {number ? (
              <span className="index-number">{formattedIndex}</span>
            ) : null}
          </a>
        </div>
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <p className="card-event-production">EVENT PRODUCTION</p>

      <span className="card-location">{location}</span>
    </div>
  );
};

export default Card;
