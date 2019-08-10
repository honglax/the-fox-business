import React from "react";
import SlideShow from "../components/StyledComponent/Slideshow";

function Services() {
  return (
    <div id="services" className="services__content">
      <section className="section section-slideshow">
        <SlideShow
          largeText="Our Services"
          smallText="Dream big. Think different. Do great"
        />
      </section>
    </div>
  );
}

export default Services;
