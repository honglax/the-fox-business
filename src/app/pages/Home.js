import React from "react";
import Slideshow from "../components/Home/Slideshow.Home";
import Functionals from "../components/Home/Functionals.Home";
import GreatTheme from "../components/Home/GreatTheme.Home";
import GreenBox from "../components/GreenBox";
import Utils from "../components/Home/Utils.Home";
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
    </div>
  );
}

export default Home;
