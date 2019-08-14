import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import ScrollToTopControlller from "../app/components/ScrollToTop";
import ScrollUpButton from "react-scroll-up-button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fab, fas, far);
// kick off the polyfill!
smoothscroll.polyfill();

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <ScrollToTopControlller>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/about" component={AboutUs} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog/12" component={BlogDetail} />
          </Switch>
        </ScrollToTopControlller>
        <Footer />
        <ScrollUpButton
          ContainerClassName="scroll-up-container"
          TransitionClassName="scroll-up-transition"
          EasingType="easeInOutCubic"
          ShowAtPosition={100}
          AnimationDuration={1500}
        >
          <FontAwesomeIcon icon={["fas", "angle-double-up"]} />
        </ScrollUpButton>
      </Router>
    );
  }
}

export default App;
