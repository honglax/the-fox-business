import React from "react";
import dreamBig from "../../../assets/typhography/dream-big.png";
import neverEasy from "../../../assets/typhography/never-easy.png";

export default function SlideShow() {
  return (
    <div className="banner banner-slideshow">
      <img src={dreamBig} alt="Dream Big. Think Different" />
      <img src={neverEasy} alt="Creating a Website Has Never Been This Easy" />
      <div className="btn-group">
        <button className="btn btn-get-started">Get Started</button>
        <button className="btn btn-purchase">Purchase Now</button>
      </div>
    </div>
  );
}
