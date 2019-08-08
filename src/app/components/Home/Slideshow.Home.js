import React from "react";
import dreamBig from "../../../assets/typhography/dream-big.png";
import neverEasy from "../../../assets/typhography/never-easy.png";
import { PrimaryButton } from "../StyledComponent/style";

export default function SlideShow() {
  return (
    <div className="banner banner-slideshow">
      <img src={dreamBig} alt="Dream Big. Think Different" />
      <img src={neverEasy} alt="Creating a Website Has Never Been This Easy" />
      <div className="btn-group">
        <PrimaryButton
          width={200}
          height={55}
          bgColor="#292b2d"
          borderColor="#292b2d"
          className="primary-btn"
        >
          Get Started
        </PrimaryButton>
        <PrimaryButton
          width={200}
          height={55}
          bgColor="rgba(0, 0, 0, 0.2)"
          borderColor="#fff"
          className="primary-btn"
        >
          Purchase Now
        </PrimaryButton>
      </div>
    </div>
  );
}
