import React from "react";
import SlideShow from "../components/StyledComponent/Slideshow";
import KeyFeatures from "../components/StyledComponent/KeyFeatures";
import PurchaseBox from "../components/StyledComponent/PurchaseBox";
import Parallax from "../components/StyledComponent/Parallax";
import Introduce from "../components/StyledComponent/Introduce";
import BestServices from "../components/StyledComponent/BestServices";
import BoxSection from "../components/StyledComponent/BoxSection";
import ContactForm from "../components/StyledComponent/ContactForm";
import { PrimaryButton } from "../components/StyledComponent/style";
import "../../styles/index.scss";

function Services() {
  const webDesignList = [
    "Clean, modern, multi-purpose design can be used for any type of website",
    "The New Ultimate Multi-Purpose WordPress Theme",
    "WordPress 4.1 Tested and Approved",
    "SEO Optimized, Well organized, commented & clean code"
  ];
  const lightBlueColor = "#35c2ea";
  return (
    <div id="services" className="services__content">
      <section id="slideshow" className="section section-slideshow">
        <SlideShow />
      </section>
      <section id="key-features" className="section section-key-features">
        <KeyFeatures />
      </section>
      <section id="wordpress-introduce" className="section section-introduce">
        <Introduce
          title="WordPress Development"
          textAlignment="txt-al-r"
          grayText="Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Nulla vehicula nibh vel ante commodo feugiat."
          content="Cras gravida arcu tincidunt, suscipit velit sed, porta sapien.
            Maecenas a aliquam lectus. Vivamus consequat purus quis ligula
            vestibulum, eget mattis ex fermentum. Donec placerat felis sit amet
            venenatis faucibus. Praesent aliquet convallis."
        >
          <div className="btn-group">
            <PrimaryButton width={"270px"} height={"55px"}>
              <span className="icon ti-light-bulb mr-2" />
              Take a tour
            </PrimaryButton>
          </div>
        </Introduce>
      </section>
      <section id="web-design" className="section section-introduce">
        <Introduce
          alignItems="aife"
          title="Web Design"
          grayText="Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Nulla vehicula nibh vel ante commodo feugiat."
          content="Cras gravida arcu tincidunt, suscipit velit sed, porta sapien.
            Maecenas a aliquam lectus. Vivamus consequat purus quis ligula
            vestibulum, eget mattis ex fermentum. Donec placerat felis sit amet
            venenatis faucibus. Praesent aliquet convallis."
        >
          <ul className="introduce-list">
            {webDesignList.map(item => (
              <li key={webDesignList.indexOf(item)} className="arrow-list-item">
                {item}
              </li>
            ))}
          </ul>
        </Introduce>
      </section>
      <section id="lastest-twitter" className="section section-parallax">
        <Parallax
          quote="Check this Premium <b>#WordPress #Theme</b> 'TheFox | Ultimate Multi-Purpose WP' by <b>@jasonlax</b> on #themeforest!!! <b><a href='https://jasonlax.info'/>https://jasonlax.info</a></b>"
          author="Jason lax"
          description="59 mins ago"
        >
          <span className="ti-twitter icon" />
        </Parallax>
      </section>
      <section id="best-services" className="section section-best-services">
        <BoxSection
          title="The Best Services"
          description="Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.<br/>Nulla vehicula nibh vel ante commodo feugiat."
        >
          <BestServices hideLeft={true} />
        </BoxSection>
      </section>
      <section id="contact-form" className="section section-contact-form">
        <ContactForm
          isDarkForm={true}
          boxSectionContent={{
            title: "Contact Us Today. Let‘s Work Together",
            description:
              "Whether you're a local or national business, big brand or high profile celebrity, we’ve worked with them all – we can help you get where you want to be."
          }}
          btnValue="Get started now"
        />
      </section>
      <section className="section section-purchase-box">
        <PurchaseBox bgColor={lightBlueColor} />
      </section>
    </div>
  );
}

export default Services;
