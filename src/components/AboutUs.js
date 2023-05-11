import React, { useEffect, useState } from "react";
import axios from "axios";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Card from "./atoms/Card";
import Background from "./../assets/BG.svg";
import Team from "./../assets/team.svg";
import WelcomeSection from "./atoms/WelcomeSection";
import AboutUsPicture from "../assets/sub_bar_2.png";
import "./styles.css";

const AboutUs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://cdn.contentful.com/spaces/5efp2j34tblf/environments/master/entries",
        {
          params: {
            access_token: "Kx6XAVX4jQsvyUT0zSY-9jy_7iE6CC7eQ9t9Sh38yz8",
            content_type: "team",
          },
        }
      );
      console.log(response.data);
      const createImageObject = (assets) => {
        const imageObject = {};

        assets.forEach((asset) => {
          imageObject[asset.sys.id] = `https:${asset.fields.file.url}`;
        });

        return imageObject;
      };

      const images = createImageObject(response.data.includes.Asset);
      setData(
        response.data.items.map((item) => {
          const fields = item.fields;

          const extractText = (contentObject) => {
            if (
              !contentObject ||
              !contentObject.content ||
              !Array.isArray(contentObject.content)
            ) {
              return null;
            }
            return contentObject;
          };

          const descriptionText = extractText(fields.description);
          const titleText = extractText(fields.title);

          return {
            ...item,
            images,
            fields: {
              ...fields,
              description: descriptionText,
              title: titleText,
            },
          };
        })
      );
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div style={{ paddingTop: "0rem" }}>
        <WelcomeSection paddingTop="0rem" welcomePictureSrc={AboutUsPicture} />
      </div>
      <div className="about-us about-us-container">
        <div className="about-us-text">
          <div style={{ fontWeight: "100", paddingBottom: "10rem" }}>
            Welcome to Sub_Bar, a creative environment based on subfrequencies
            and vibrations, and a meeting point between hearing and deaf
            cultures. We empower artists, businesses, and organizations
            worldwide with the tools and expertise they need to create local
            events, and we nurture their communities through educative programs,
            strategic partnerships, and open calls. We promote an alternative,
            intense, and trance-inducing format where the art of "listening" is
            a task for the whole body, creating shared memories and inspiring
            tomorrow's technologies. This community of artists and researchers
            is held together by curiosity, innovation, and mutual learning, in
            pursuit of the next beautiful thing.
          </div>

          <div
            style={{
              paddingBottom: "10rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>SUB_BAR</span> <br></br>
            <span>
              THROUGH SUB_BAR WE CREATE A NEW ART FORM AND CREATIVE LANGUAGE
              THAT USES SUBWOOFERS AND TACTILE TECHNOLOGY TO INTERACT THROUGH
              THE SENSE OF TOUCH. SET IN AN AESTHETIC-ARTISTIC CONTEXT, SUB_BAR
              AIMS TO PROMOTE INCLUSION AS AN OPPORTUNITY AND A TASK FOR ALL OF
              US.
            </span>
            <br></br>
            <span>
              {" "}
              SUB FREQUENCIES ARE LOW-FREQUENCY SOUNDS, THAT ARE MAINLY
              PERCEIVED BY THE BODY AND OUR NERVOUS SYSTEM RATHER THAN OUR EARS:
              DIFFERENTLY THAN SOUND, THEY ARE NOT DIRECTIONAL (LEFT OR RIGHT,
              FRONT OR BACK), AND THEY TRIGGER A SENSE OF FULL IMMERSION.{" "}
            </span>{" "}
            <br></br>
            <span>
              LOW FREQUENCIES STIMULATION IS NOT A NOVEL FIELD, IN FACT, ITS
              BENEFICIAL EFFECT HAS BEEN CLINICALLY STUDIED OVER THE LAST TWO
              DECADES.{" "}
            </span>{" "}
            <br></br>
            <span>
              THIS PHYSICAL AND AESTHETIC EXPERIENCE TRIGGERS A SENSE THAT HAS
              ALWAYS BEEN IN THE BACKGROUND, GROWING ITS MEMORIES, CURIOSITY,
              AND ITS LANGUAGE. WITH MUSIC IN MIND, SUB_BAR GIVES VOICE TO THAT
              BACKGROUND, THROUGH THE VISION OF THE BEST ARTISTS OUT THERE.{" "}
            </span>{" "}
            <br></br>
            <br></br>
            <span>ABOUT US</span> <br></br>
            <span>
              SINCE 2021, WE PROMOTE COMPOSITIONS AND PERFORMANCES FROM HEARING
              AND DEAF ARTISTS WHO WORK WITH THIS NEW MEDIUM, CREATING
              VIBRATIONS THAT CAN BE FELT THROUGHOUT THE BODY, TO CREATING
              UNIQUE AND INTENSE EXPERIENCES.
            </span>
            <br></br>
            <span>
              <br></br>
              WE TOOK INSPIRATION FROM MUSIC EDUCATION AND MULTISENSORY RESEARCH
              TO ESTABLISH A NEW CREATIVE LANGUAGE, AND AFTER HOSTING REGULAR
              EVENTS IN LISBON, BERLIN, LEIPZIG, AND KÖLN, WE ARE ABOUT TO
              LAUNCH SUB_BAR IN THE REST OF EUROPE, CREATING EVEN MORE
              POSSIBILITIES TO CONNECT, CREATE, AND PERFORM. 
            </span>
            <br></br>
          </div>
        </div>
        <div>
          <img src={Team} alt="Team" />
        </div>
        <div className="about-us-team">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>There was an error loading the data.</div>
          ) : (
            data.map((item, index) => {
              const fields = item.fields;
              const imageId = fields.image?.sys?.id;
              const imageUrl = imageId ? item.images[imageId] : Background;

              return (
                <React.Fragment key={index}>
                  <Card
                    image={imageUrl}
                    title={
                      fields.title && fields.title.content
                        ? documentToReactComponents(fields.title)
                        : ""
                    }
                    description={
                      fields.description && fields.description.content
                        ? documentToReactComponents(fields.description)
                        : ""
                    }
                    url={fields.url}
                    width="300px"
                    borderRadius={"50px"}
                  />
                </React.Fragment>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
