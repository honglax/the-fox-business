import React from "react";
import SlideShow from "../components/StyledComponent/Slideshow";
import AdditionalFeatures from "../components/StyledComponent/AdditionalFeatures";
import Introduce from "../components/StyledComponent/Introduce";
import PurchaseBox from "../components/StyledComponent/PurchaseBox";
import Parallax from "../components/StyledComponent/Parallax";
import Skills from "../components/StyledComponent/Skills";
import Partners from "../components/About/Partners.About";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/index.scss";

export default function AboutUs() {
  const lightBlueColor = "#35c2ea";
  const introduceList = [
    "Clean, modern, multi-purpose design can be used for any type of website",
    "The New Ultimate Multi-Purpose WordPress Theme",
    "WordPress 4.1 Tested and Approved",
    "Built with HTML5 and CSS3",
    "SEO Optimized, Well organized, commented & clean code",
    "Cross-Browser Compatibility: Chrome, Firefox, Safari, IE9 ~ IE11"
  ];
  return (
    // <Fade bottom>
    <section id="about-us" className="about-us about__content">
      <section id="slideshow" className="section section-slideshow">
        <SlideShow page="about" />
      </section>
      <section
        id="additional-features"
        className="section section-additional-features"
      >
        <AdditionalFeatures />
      </section>
      <div id="introduce" className="section section-introduce">
        <Introduce
          alignItems="aife"
          title="Greate Theme for Your Business"
          grayText="Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
            <br />
            Nulla vehicula nibh vel ante commodo feugiat."
          content="Cras gravida arcu tincidunt, suscipit velit sed, porta sapien.
            Maecenas a aliquam lectus. Vivamus consequat purus quis ligula
            vestibulum, eget mattis ex fermentum. Donec placerat felis sit amet
            venenatis faucibus. Praesent aliquet convallis."
        >
          <ul className="introduce-list">
            {introduceList.map(item => (
              <li className="arrow-list-item" key={introduceList.indexOf(item)}>
                {item}
              </li>
            ))}
          </ul>
        </Introduce>
      </div>
      <div id="purchase-box" className="section section-purchase-box">
        <PurchaseBox bgColor={lightBlueColor} />
      </div>
      <div id="video" className="section section-parallax dark-overlay">
        <Parallax>
          <FontAwesomeIcon icon={["fas", "play-circle"]} className="icon" />
        </Parallax>
      </div>
      <section id="skills" className="section section-skills">
        <Skills isReversed={false} />
      </section>
      <section id="parallax" className="section section-parallax">
        <Parallax
          quote="This is the best WordPress theme I have used to date... Incredible Customizability 
and it is Incredible to work with I took a project I couldnt complete and 
Completed it with this theme in one day. Thanks guys!"
          author="austinthesing"
          description="Themeforest Customer"
        />
      </section>
      <section id="about-partners" className="section section-about-partner">
        <Partners />
      </section>
    </section>
    // </Fade>
  );
}
