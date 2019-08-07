import React from "react";
import Slideshow from "../components/Home/Slideshow.Home";
import Functionals from "../components/Home/Functionals.Home";
import GreatTheme from "../components/Home/GreatTheme.Home";
import GreenBox from "../components/GreenBox";
import "../../styles/home.scss";

function Home() {
  return (
    <div className="home home__content">
      <section id="slideshow" className="section section-slideshow">
        <Slideshow />
      </section>
      <section id="functionals" className="section section-functionals">
        <Functionals />
      </section>
      <section id="greate-theme" className="section section-greate-theme">
        <GreatTheme />
      </section>
      <section id="first-greenbox" className="section section-green-box">
        <GreenBox />
      </section>
    </div>
  );
}

export default Home;
