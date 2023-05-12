import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./atoms/Card";
import ProjectsLogo from "./../assets/latest_projects.svg";
import Past from "../assets/past.svg";
import Upcoming from "../assets/upcoming.svg";
import Modal from "./atoms/Modal"; // Import the Modal component
import Academy from "./../assets/academy.svg";
import WelcomeSection from "./atoms/WelcomeSection";
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
              image:
                fields.image && fields.image.sys && fields.image.sys.id
                  ? images[fields.image.sys.id]
                  : null,
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
        <div className="academy">
          <img src={Academy} alt="academy" />
          <WelcomeSection
            welcomeParagraph={
              "sub_bar is launching an invitation for hard of hearing and deaf people to join sub_bar academy, in lisbon, starting in october."
            }
            readMoreLink="/academy"
            readMoreText="SUB_BAR ACADEMY"
          />
          <button>
            <a href="/opencall"> OPEN CALL </a>
          </button>
        </div>
        <div className="latest-projects-title">
          <img src={ProjectsLogo} alt="Our Latest Projects" />
        </div>

        <div className="cards-container">
          <div className="cards-past">
            <img src={Past} alt="past" />
            {data
              .filter((item) => item.fields.past)
              .map((item, index) => (
                <Card
                  crossedTitle={true}
                  isRichText={true}
                  number={false}
                  key={index}
                  description={item.fields.description}
                  index={index + 1}
                  title={item.fields.title}
                  onImageClick={() => handleCardClick(item.fields)}
                  onTitleClick={() => handleCardClick(item.fields)}
                  displayImage={false}
                />
              ))}
          </div>
          <div className="cards-future">
            <br></br>
            <img src={Upcoming} alt="upcoming" />
            {data
              .filter((item) => !item.fields.past)
              .map((item, index) => (
                <Card
                  crossedTitle={false}
                  eventTitleFuture={true}
                  isRichText={true}
                  number={false}
                  key={index}
                  description={item.fields.description}
                  index={index + 1}
                  title={item.fields.title}
                  onImageClick={() => handleCardClick(item.fields)}
                  onTitleClick={() => handleCardClick(item.fields)}
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
