import React from "react";
import SlideShow from "../components/StyledComponent/Slideshow";
import "../../styles/index.scss";

function Contact() {
  return (
    <div className="contact contact__content">
      <section id="slideshow" className="section section-slideshow">
        <SlideShow
          largeText="Contact Us"
          smallText="Dream big. Think different."
        />
      </section>
    </div>
  );
}

export default Contact;
