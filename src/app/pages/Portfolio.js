import React from "react";
import SlideShow from "../components/StyledComponent/Slideshow";

function Portfolio() {
  return (
    <div id="portfolio" className="porfolio porfolio__content">
      <section className="section section-slideshow">
        <SlideShow
          largeText="Just beautiful"
          smallText="Dream big. Think different. Do great."
        />
      </section>
    </div>
  );
}

export default Portfolio;
