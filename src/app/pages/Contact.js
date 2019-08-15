import React from "react";
import SlideShow from "../components/StyledComponent/Slideshow";
import ContactForm from "../components/StyledComponent/ContactForm";

import "../../styles/index.scss";

function Contact() {
  return (
    <div id="contact-page" className="contact__content">
      <section id="slideshow" className="section section-slideshow">
        <SlideShow page="contact" />
      </section>
      <section id="contact-form" className="section section-contact-form">
        <ContactForm
          isDarkForm={false}
          hasTextArea={true}
          boxSectionContent={{
            title: "Let‘s Work Together",
            description:
              "Whether you're a local or national business, big brand or high profile celebrity, we’ve worked with them all – we can help you get where you want to be."
          }}
          btnValue="Get your quote"
        />
      </section>
    </div>
  );
}

export default Contact;
