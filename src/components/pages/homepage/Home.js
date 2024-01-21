import React from "react";
import HeroSection from "../../HeroSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
} from "./Data";
import Navbar from "../../Navbar";
import HeroSection2 from "../../HeroSection2";
import HeroSection3 from "../../HeroSection3";
import HeroSection4 from "../../HeroSection4";
import HeroSection5 from "../../HeroSection5";

function Home() {
  return (
    <>
      <Navbar />
      <div id="section1">
        <HeroSection {...homeObjOne} />
      </div>
      <div id="section2">
        <HeroSection2 {...homeObjTwo} />
      </div>
      <div id="section3">
        <HeroSection3 {...homeObjThree} />
      </div>
      <div id="section4">
        <HeroSection4 {...homeObjFour} />
      </div>
      <div id="section5">
        <HeroSection5 {...homeObjFive} />
      </div>
    </>
  );
}

export default Home;
