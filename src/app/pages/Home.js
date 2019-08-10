import React from "react";
import Slideshow from "../components/StyledComponent/Slideshow";
import Functionals from "../components/Home/Functionals.Home";
import GreatTheme from "../components/Home/GreatTheme.Home";
import PurchaseBox from "../components/StyledComponent/PurchaseBox";
import Utils from "../components/Home/Utils.Home";
import Analyzer from "../components/Home/Analyzer.Home";
import Parallax from "../components/Home/Parallax.Home";
import Services from "../components/Home/Services.Home";
import Partners from "../components/Home/Partners.Home";
import PricingTable from "../components/Home/PricingTable.Home";
import Skills from "../components/Home/Skills.Home";
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
        <Slideshow
          largeText="Dream Big. Think Different"
          smallText="Creating a Website Has Never Been This Easy"
        >
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
        </Slideshow>
      </section>
      <section id="functionals" className="section section-functionals">
        <Functionals />
      </section>
      <section
        id="first-greate-theme"
        className="section section-greate-theme light-overlay"
      >
        <GreatTheme alignItems="aifs" />
      </section>
      <section id="first-PurchaseBox" className="section section-green-box">
        <PurchaseBox />
      </section>
      <section id="utils" className="section section-utils">
        <Utils />
      </section>
      <section
        id="second-greate-theme"
        className="section section-greate-theme light-overlay"
      >
        <GreatTheme alignItems="aife" />
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
      <section id="services" className="section section-services">
        <Services />
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
        <Skills />
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
