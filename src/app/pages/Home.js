import React from "react";
import Slideshow from "../components/Home/Slideshow.Home";
import Functionals from "../components/Home/Functionals.Home";
import GreatTheme from "../components/Home/GreatTheme.Home";
import GreenBox from "../components/GreenBox";
import Utils from "../components/Home/Utils.Home";
import Analyzer from "../components/Home/Analyzer.Home";
import Parallax from "../components/Home/Parallax.Home";
import Services from "../components/Home/Services.Home";
import "../../styles/home.scss";
import "../../styles/themify-icons.css";

function Home() {
  return (
    <div className="home home__content">
      <section id="slideshow" className="section section-slideshow">
        <Slideshow />
      </section>
      <section id="functionals" className="section section-functionals">
        <Functionals />
      </section>
      <section id="first-greate-theme" className="section section-greate-theme">
        <GreatTheme alignItems="aifs" />
      </section>
      <section id="first-greenbox" className="section section-green-box">
        <GreenBox />
      </section>
      <section id="utils" className="section section-utils">
        <Utils />
      </section>
      <section
        id="second-greate-theme"
        className="section section-greate-theme"
      >
        <GreatTheme alignItems="aife" />
      </section>
      <section id="analyzer" className="section section-analyzer">
        <Analyzer />
      </section>
      <section id="parallax" className="section section-parallax">
        <Parallax />
      </section>
      <section id="services" className="section section-services">
        <Services />
      </section>
      <section id="partners" className="section section-partners">
        Partners
      </section>
      <section id="pricing-table" className="section section-pricing-table">
        Pricing Table
      </section>
      <section id="video" className="section section-video">
        Video
      </section>
      <section id="second-greenbox" className="section section-green-box">
        <GreenBox />
      </section>
      <section id="skills" className="section section-skills">
        Skills
      </section>
      <section id="latest-twitter" className="section section-twitter">
        Lastest Twitter
      </section>
      <section id="lastest-blog" className="section section-latest-blog">
        Lastest Blog
      </section>
      <section id="third-greenbox" className="section section-green-box">
        <GreenBox />
      </section>
    </div>
  );
}

export default Home;
