import React from "react";
import Slideshow from "../components/Home/Slideshow.Home";
import Functionals from "../components/Home/Functionals.Home";
import GreatTheme from "../components/Home/GreatTheme.Home";
import GreenBox from "../components/StyledComponent/GreenBox";
import Utils from "../components/Home/Utils.Home";
import Analyzer from "../components/Home/Analyzer.Home";
import Parallax from "../components/Home/Parallax.Home";
import Services from "../components/Home/Services.Home";
import Partners from "../components/Home/Partners.Home";
import PricingTable from "../components/Home/PricingTable.Home";
import LastestBlog from "../components/Home/LastestBlog.Home";
import "../../styles/home.scss";
import "../../styles/themify-icons.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

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
      <section id="partners" className="section section-partners pt-70">
        <Partners />
      </section>
      <section
        id="pricing-table"
        className="section section-pricing-table pt-70 pb-100"
      >
        <PricingTable />
      </section>
      <section id="video" className="section section-parallax">
        <Parallax
          quote="Awesome Design and Great Support! Highly Recommend!"
          author="jame Potter"
        >
          <FontAwesomeIcon icon={faPlayCircle} className="icon" />
        </Parallax>
      </section>
      <section id="second-greenbox" className="section section-green-box">
        <GreenBox />
      </section>
      <section id="skills" className="section section-skills">
        Skills
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
      <section id="lastest-blog" className="section section-lastest-blog pt-70">
        <LastestBlog />
      </section>
      <section id="third-greenbox" className="section section-green-box">
        <GreenBox />
      </section>
    </div>
  );
}

export default Home;
