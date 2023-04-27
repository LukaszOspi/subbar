import React from "react";
import "./../styles.css";

const Modal = ({
  image,
  title,
  description,
  descriptionContinuation,
  onClose,
}) => {
  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <div
          className="modal-content"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="modal-image-container">
            <img src={image} alt={title} className="modal-image" />
          </div>
          <h2 className="modal-title">{title}</h2>
          <p className="modal-description">{description}</p>
          <p className="modal-description-continuation">
            {descriptionContinuation}
          </p>
        </div>
      </div>
    </>
  );
};

export default Modal;
