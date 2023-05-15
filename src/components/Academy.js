import React, { useEffect, useState } from "react";
import axios from "axios";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Arrow from "./../assets/arrow.svg";
import Card from "./atoms/Card";
import Background from "./../assets/BG.svg";
import Teachers from "./../assets/teachers.svg";
import WelcomeSection from "./atoms/WelcomeSection";
import Academy from "../assets/subbaracademy.png";
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
            content_type: "opencall",
          },
        }
      );

      const createImageObject = (assets) => {
        const imageObject = {};

        assets.forEach((asset) => {
          imageObject[asset.sys.id] = `https:${asset.fields.file.url}`;
        });

        return imageObject;
      };

      const assets =
        response.data.includes && response.data.includes.Asset
          ? response.data.includes.Asset
          : [];
      const images = createImageObject(assets);

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
        <WelcomeSection paddingTop="0rem" welcomePictureSrc={Academy} />
        <div className="arrow-container" style={{ paddingBottom: "25rem" }}>
          <img src={Arrow} alt="arrow down" className="arrow" />
        </div>
      </div>
      <div className="about-us about-us-container">
        <div className="about-us-text">
          <div style={{ fontWeight: "100", paddingBottom: "10rem" }}>
            sub_bar academy is a music course for deaf and hard of hearing
            people, based on subfrequencies instead of sound. over 72 hours, our
            participants will learn how to compose and perform using this new
            creative medium, choosing their instruments from a variety of
            options, both hardware and software. <br></br>
            <br></br> We promote inclusion by committing to the absence of sound
            as the main carrier of information in our artwork; artworks can
            create sound, in fact, the higher subfrequencies are hearable, but
            the sense of touch should always be enough to grasp the artistic
            message in its integrity.
            <br></br>
            <br></br>
            We will launch a call for hearing impaired and deaf people (18-40
            years old) to join our Sub_Bar Academy in Lisbon, Berlin and Vienna.
            <br></br>
            Previous experience in music or art is NOT required.
            <br></br>
            <br></br>
          </div>
          <div style={{ paddingBottom: "30rem" }}>
            <button>
              <a href="/opencall"> OPEN CALL </a>
            </button>
          </div>

          <div
            style={{
              paddingBottom: "10rem",
              display: "flex",
              flexDirection: "column",
              fontWeight: "500",
              fontSize: "1.2rem",
            }}
          >
            <div
              style={{
                paddingBottom: "40rem",
              }}
            >
              Sub_Bar Academy is a mixed format of residency and workshop, where
              participants will learn by doing: during 72 hours, our
              participants will learn how to use various instruments and tools
              to create and perform using low vibrations (sub frequencies), both
              individually and in groups. At the end, the participants will be
              invited to create your own piece, to perform a collective show in
              their city, and will have the possibility to enter our roster of
              artists.
              <br></br>
              <br></br>
              <br></br>
              Every participant will receive the equivalent of 1000€ in cash and
              equipment, and we will provide sign language interpretation for
              the workshops.
            </div>
            <div
              style={{
                paddingBottom: "20rem",
                fontSize: "4rem",
                fontWeight: "700",
              }}
            >
              PROGRAM
            </div>
            <div className="arrow-container" style={{ paddingBottom: "25rem" }}>
              <img src={Arrow} alt="arrow down" className="arrow" />
            </div>
            <div style={{ paddingBottom: "50rem" }}>
              Our program is composed of theoretical classes and practical
              experimentation hours, with an emphasis on artistic exploration.
              The goal is to have an organic approach, driven by curiosity and
              fun.
              <br></br>
              <br></br>
              THEORETICAL CLASSES: <br></br>36 hours in person, 80% mandatory
              attendance teaching on the use of software and hardware, twice a
              week, with 3 hours per day (including breaks) for 6 weeks. (Some
              study visits for recordings included during these hours.){" "}
              <br></br> <br></br>
              ARTISTIC EXPLORATION: <br></br>
              Practical part of the course will last for 36 hours (80%
              attendance is mandatory), where participants will have freedom and
              autonomy. During this time, participants will be encouraged to
              create compositions based on a weekly theme, such as synthesizers,
              effects, among others. Teachers will be available to supervise the
              first independent sessions, and after these, they will be
              available through online communication if participants need
              assistance. Participants will receive a free license of Ableton
              Live Suite, and a SubPac haptic vests.
              <br></br>
              <br></br>
              <br></br>
              _Practical focus, using virtual and physical instruments;{" "}
              <br></br>
              _Use of Ableton Live as a sequencer; <br></br> _Creation of a
              Sub_Bar virtual instrument kit and demonstration of its operation;
              <br></br>_Offer of physical controllers, such as the AKAI MPK Mini
              MK3 or similar; <br></br> _Use of the Musikraken application,
              which turns the mobile phone into a MIDI controller, allowing
              modulation of sound through the camera and gyroscope; <br></br>{" "}
              _Use of a SubPac Vest during the course, for a more complete
              experience; <br></br>_Approach to topics related to the neurology
              and sociology of music; <br></br>_Presentation of music education
              concepts, such as cadence, polyrhythm, and sound design; <br></br>{" "}
              _Inclusion of modules on rhythm and cultures.
            </div>
            <div>
              The Sub_Bar Academy project is supported by the European Union,
              and will be accompanied by a scientific study developed by the
              Faculty of Psychology of the University of Lisbon (FPUL) and later
              published in open access.
            </div>

            <div style={{ paddingBottom: "30rem", paddingTop: "5rem" }}>
              <button>
                <a href="/contact"> APPLY </a>
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={Teachers} alt="Team" />
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
                    descriptionContinuation={
                      fields.descriptionContinuation &&
                      fields.descriptionContinuation.content
                        ? documentToReactComponents(
                            fields.descriptionContinuation
                          )
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
