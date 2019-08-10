import React from "react";
import SlideShow from "../components/StyledComponent/Slideshow";

import "../../styles/index.scss";

export default function AboutUs() {
  return (
    <div id="about-us" className="about-us about__content">
      <section id="slideshow" className="section section-slideshow">
        <SlideShow
          largeText="We do the best design"
          smallText="Dream big. Think Different. Do great."
        />
      </section>
    </div>
  );
}
