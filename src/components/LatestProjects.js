import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./atoms/Card";
import ProjectsLogo from "./../assets/latest_projects.svg";

const LatestProjects = () => {
  const [data, setData] = useState([]);

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
          return {
            ...item.fields,
            image: images[item.fields.image.sys.id],
          };
        });

        setData(items);
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

  return (
    <div className="latest-projects-container">
      <div className="latest-projects-title">
        <img src={ProjectsLogo} alt="Our Latest Projects" />
      </div>
      <div className="cards-container">
        {data.map((item, index) => (
          <Card
            number={true}
            key={index}
            index={index + 1}
            image={item.image}
            title={item.title}
            description={item.description}
            location={item.location}
            secondTitle={"EVENT PRODUCTION"}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestProjects;
