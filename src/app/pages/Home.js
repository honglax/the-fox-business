import React from "react";
import Slideshow from "../components/StyledComponent/Slideshow";
import AdditionalFeatures from "../components/StyledComponent/AdditionalFeatures";
import Introduce from "../components/StyledComponent/Introduce.js";
import PurchaseBox from "../components/StyledComponent/PurchaseBox";
import KeyFeatures from "../components/StyledComponent/KeyFeatures";
import Analyzer from "../components/Home/Analyzer.Home";
import Parallax from "../components/StyledComponent/Parallax";
import BestServices from "../components/StyledComponent/BestServices";
import Partners from "../components/Home/Partners.Home";
import PricingTable from "../components/Home/PricingTable.Home";
import Skills from "../components/StyledComponent/Skills";
import LastestBlog from "../components/Home/LastestBlog.Home";
import "../../styles/home.scss";
import "../../styles/themify-icons.css";

import { PrimaryButton } from "../components/StyledComponent/style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

function Home() {
  let greenColor = "#82b440";

  return (
    <div className="home home__content">
      <section id="slideshow" className="section section-slideshow">
        <Slideshow />
      </section>

      <section id="key-features" className="section section-key-features">
        <KeyFeatures />
      </section>

      <section
        id="first-home-introduce"
        className="section section-introduce light-overlay"
      >
        <Introduce
          alignItems="aifs"
          title="Greate Theme for Your Business"
          grayText="Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.
            <br />
            Nulla vehicula nibh vel ante commodo feugiat."
          content="Cras gravida arcu tincidunt, suscipit velit sed, porta sapien.
            Maecenas a aliquam lectus. Vivamus consequat purus quis ligula
            vestibulum, eget mattis ex fermentum. Donec placerat felis sit amet
            venenatis faucibus. Praesent aliquet convallis."
        >
          <PrimaryButton width="270px" height="55px">
            <span className="icon ti-light-bulb mr-2" />
            Take a tour
          </PrimaryButton>
        </Introduce>
      </section>

      <section id="first-PurchaseBox" className="section section-green-box">
        <PurchaseBox bgColor={greenColor} />
      </section>

      <section
        id="additional-features"
        className="section section-additional-features"
      >
        <AdditionalFeatures />
      </section>

      <section
        id="second-home-introduce"
        className="section section-introduce light-overlay"
      >
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
          <PrimaryButton width="270px" height="55px">
            <span className="icon ti-light-bulb mr-2" />
            Take a tour
          </PrimaryButton>
        </Introduce>
      </section>

      <section id="analyzer" className="section section-analyzer">
        <Analyzer />
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

      <section id="best-services" className="section section-best-services">
        <BestServices />
      </section>

      <section id="partners" className="section section-partners light-overlay">
        <Partners />
      </section>
      <section id="pricing-table" className="section section-pricing-table">
        <PricingTable />
      </section>
      <section id="video" className="section section-parallax dark-overlay">
        <Parallax
          quote="Awesome Design and Great Support! Highly Recommend!"
          author="jame Potter"
        >
          <FontAwesomeIcon icon={faPlayCircle} className="icon" />
        </Parallax>
      </section>
      <section id="second-PurchaseBox" className="section">
        <PurchaseBox bgColor={greenColor} />
      </section>
      <section id="skills" className="section section-skills">
        <Skills isReversed={true} />
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
      <section id="lastest-blog" className="section section-lastest-blog">
        <LastestBlog />
      </section>
      <section id="third-PurchaseBox" className="section">
        <PurchaseBox bgColor={greenColor} />
      </section>
    </div>
  );
}

export default Home;
