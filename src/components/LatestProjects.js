import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./atoms/Card";
import ProjectsLogo from "./../assets/latest_projects.svg";
import Modal from "./atoms/Modal"; // Import the Modal component

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

        const images = createImageObject(response.data.includes.Asset);

        const items = response.data.items.map((item) => {
          const { title, description, location, url } = item.fields;

          // Extract text content from the description object
          const extractText = (contentObject) => {
            return contentObject.content
              .map((item) =>
                item.content.map((subItem) => subItem.value).join(" ")
              )
              .join("\n");
          };

          const descriptionText = extractText(description);

          return {
            title: title || "",
            description: descriptionText || "",
            location: location || "",
            url: url || "",
            image: images[item.fields.image.sys.id] || "",
          };
        });

        setData(items);
        console.log(items);
      } catch (error) {
        console.error("Error fetching data:", error);
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

  const handleCardClick = (item) => {
    setShowModal(true);
    setModalContent({
      image: item.image,
      title: item.title,
      description: item.description,
      location: item.location,
    });
  };

  const handleModalClose = () => {
    setShowModal(false);
    setModalContent(null);
  };

  return (
    <div className="latest-projects-container">
      <div className="latest-projects-title">
        <img src={ProjectsLogo} alt="Our Latest Projects" />
      </div>
      <div className="cards-container">
        {data.map((item, index) => (
          <Card
            number={false}
            key={index}
            index={index + 1}
            image={item.image}
            title={item.title}
            onImageClick={() => handleCardClick(item)}
          />
        ))}
      </div>
      {showModal && (
        <Modal
          onClose={handleModalClose}
          image={modalContent.image}
          title={modalContent.title}
          description={`Location: ${modalContent.location}\n\n${modalContent.description}`}
        />
      )}
    </div>
  );
};

export default LatestProjects;
