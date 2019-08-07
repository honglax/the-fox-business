import React from "react";
import Slideshow from "../components/Home/Slideshow.Home";
import Functionals from "../components/Home/Functionals.Home";
import GreatTheme from "../components/Home/GreatTheme.Home";
import { Container } from "react-bootstrap";
import "../../styles/home.scss";

function Home() {
  return (
    <div className="home home__content">
      <section id="slideshow" className="slideshow">
        <Slideshow />
      </section>
      <section id="functionals" className="functionals">
        <Functionals />
      </section>
      <section id="greate-theme" className="greate-theme">
        <GreatTheme />
      </section>
    </div>
  );
}

export default Home;
