import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./atoms/Card";
import ProjectsLogo from "./../assets/latest_projects.svg";
import Modal from "./atoms/Modal"; // Import the Modal component
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const LatestProjects = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cdn.contentful.com/spaces/5efp2j34tblf/environments/master/entries",
          {
            params: {
              access_token: "Kx6XAVX4jQsvyUT0zSY-9jy_7iE6CC7eQ9t9Sh38yz8",
              content_type: "projects",
            },
          }
        );
        console.log(response.data);
        const images = createImageObject(response.data.includes.Asset);

        const items = response.data.items.map((item) => {
          const fields = item.fields;

          const descriptionText = documentToReactComponents(fields.description);
          const descriptionContinuationText = documentToReactComponents(
            fields.descriptionContinuation
          );

          return {
            ...item,
            fields: {
              ...fields,
              description: descriptionText,
              descriptionContinuation: descriptionContinuationText,
              image: images[fields.image.sys.id],
            },
          };
        });

        setData(items);
        console.log(items);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };

    fetchData();
  }, []);

  const createImageObject = (assets) => {
    const imageObject = {};

    assets.forEach((asset) => {
      imageObject[asset.sys.id] = `https:${asset.fields.file.url}`;
    });

    return imageObject;
  };

  const handleCardClick = (fields) => {
    setShowModal(true);
    setModalContent({
      image: fields.image,
      title: fields.title,
      description: fields.description,
      location: fields.location,
      descriptionContinuation: fields.descriptionContinuation,
    });
  };

  const handleModalClose = () => {
    setShowModal(false);
    setModalContent(null);
  };

  return (
    <>
      <div className="latest-projects-container">
        <div className="latest-projects-title">
          <img src={ProjectsLogo} alt="Our Latest Projects" />
        </div>
        <div className="cards-container">
          <div className="cards-past">
            {data.map((item, index) => (
              <Card
                past={true}
                isRichText={true}
                number={false}
                key={index}
                index={index + 1}
                title={item.fields.title}
                onImageClick={() => handleCardClick(item.fields)}
                description={""}
                displayImage={false}
              />
            ))}
          </div>
          <div className="cards-future">
            {data.map((item, index) => (
              <Card
                past={false}
                crossedTitle={true}
                isRichText={true}
                number={false}
                key={index}
                index={index + 1}
                title={item.fields.title}
                onImageClick={() => handleCardClick(item.fields)}
                description={""}
                displayImage={false}
              />
            ))}
          </div>
        </div>
        {showModal && (
          <Modal
            onClose={handleModalClose}
            image={modalContent.image}
            title={modalContent.title}
            location={modalContent.location}
            description={modalContent.description}
            descriptionContinuation={modalContent.descriptionContinuation}
          />
        )}
      </div>
    </>
  );
};

export default LatestProjects;
