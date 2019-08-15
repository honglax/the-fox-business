import React from "react";
import SlideShow from "../components/StyledComponent/Slideshow";

function Portfolio() {
  return (
    <div id="portfolio" className="porfolio porfolio__content">
      <section id="slideshow" className="section section-slideshow">
        <SlideShow page="porfolio" />
      </section>
    </div>
  );
}

export default Portfolio;
