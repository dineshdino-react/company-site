import React from "react";
import "./HeroSection2.scss";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Carousel } from "react-responsive-carousel";

function HeroSection2({
  lightBg,
  topLine1,
  lightText,
  lightTextDesc,
  headline1,
  description1,
  img1,
  img2,
  alt,
  imgStart,
}) {
  return (
    <>
      <Carousel showThumbs={false} showStatus={false} showArrows={false} >
        <div
          className={
            lightBg ? "home__hero-section2" : "home__hero-section2 darkBg"
          }
        >
          <div className="container">
            <div
              className="row home__hero-row"
              style={{
                display: "flex",
                flexDirection: imgStart === "start" ? "row-reverse" : "row",
              }}
            >
              <div className="col">
                <div className="home__hero-text-wrapper">
                  <Fade bottom>
                    <div className="top-line1">{topLine1}</div>
                  </Fade>
                  <Fade bottom>
                    <h1 className={lightText ? "heading1" : "heading1 dark1"}>
                      {headline1}
                    </h1>
                  </Fade>
                  <Fade bottom>
                    <p
                      className={
                        lightTextDesc
                          ? "home__hero-subtitle2"
                          : "home__hero-subtitle2 dark1"
                      }
                    >
                      {description1}
                    </p>
                  </Fade>
                </div>
              </div>
              <div className="col">
                <div className="home__hero-img-wrapper ">
                  <Fade left>
                    <img src={img1} alt={alt} className="home__hero-img1 " />
                  </Fade>
                  <Fade right>
                    <img src={img2} alt={alt} className="home__hero-img2" />
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            lightBg ? "home__hero-section2" : "home__hero-section2 darkBg"
          }
        >
          <div className="container">
            <div
              className="row home__hero-row"
              style={{
                display: "flex",
                flexDirection: imgStart === "start" ? "row-reverse" : "row",
              }}
            >
              <div className="col">
                <div className="home__hero-text-wrapper">
                  <Fade bottom>
                    <div className="top-line1">{topLine1}</div>
                  </Fade>
                  <Fade bottom>
                    <h1 className={lightText ? "heading1" : "heading1 dark1"}>
                      {headline1}
                    </h1>
                  </Fade>
                  <Fade bottom>
                    <p
                      className={
                        lightTextDesc
                          ? "home__hero-subtitle2"
                          : "home__hero-subtitle2 dark1"
                      }
                    >
                      {description1}
                    </p>
                  </Fade>
                </div>
              </div>
              <div className="col">
                <div className="home__hero-img-wrapper ">
                  <Fade left>
                    <img src={img1} alt={alt} className="home__hero-img1 " />
                  </Fade>
                  <Fade right>
                    <img src={img2} alt={alt} className="home__hero-img2" />
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
}

export default HeroSection2;
