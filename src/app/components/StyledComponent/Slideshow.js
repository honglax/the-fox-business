import React, { Component } from "react";
import { PrimaryButton } from "./style";
import { Carousel } from "react-bootstrap";

class SlideShow extends Component {
  handleSetHeight() {
    const banner = document.getElementById("slideshow");
    const header = document.querySelector("header");

    banner.children[0].style.height = `${window.innerHeight -
      (window.matchMedia("(max-width: 991.98px)").matches
        ? 80
        : header.offsetHeight)}px`;
  }

  componentDidMount() {
    this.handleSetHeight();
    window.addEventListener("resize", this.handleSetHeight);
  }

  componentDidUpdate() {
    this.handleSetHeight();
  }

  render() {
    console.log(window.location.pathname);
    return (
      <div className="banner banner-slideshow">
        <Carousel
          touch={true}
          indicators={false}
          interval={2000}
          controls={false}
          pauseOnHover={false}
        >
          <Carousel.Item id="first-slider">
            <div className="carousel__inner">
              <p className="large-text">Dream Big. Think Different</p>
              <p className="small-text">
                Creating a Website Has Never Been This Easy
              </p>
              <div className="btn-group">
                <PrimaryButton
                  width="200px"
                  height="55px"
                  bgColor="#292b2d"
                  borderColor="#292b2d"
                  className="primary-btn"
                >
                  Get Started
                </PrimaryButton>
                <PrimaryButton
                  width="200px"
                  height="55px"
                  bgColor="rgba(0, 0, 0, 0.2)"
                  borderColor="#fff"
                  className="primary-btn"
                >
                  Purchase Now
                </PrimaryButton>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item id="second-slider">
            <div className="carousel__inner">
              <p className="large-text">We do the best design</p>
              <p className="small-text">
                Dream big. Think Different. Do great.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item id="third-slider">
            <div className="carousel__inner">
              <p className="large-text">Our Services</p>
              <p className="small-text">Dream big. Think different. Do great</p>
            </div>
          </Carousel.Item>
          <Carousel.Item id="fourth-slider">
            <div className="carousel__inner">
              <p className="large-text">The Business Article</p>
              <p className="small-text">
                Look around to see how to make the best business
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item id="fifth-slider">
            <div className="carousel__inner">
              <p className="large-text">Contact Us</p>
              <p className="small-text">Dream big. Think different.</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default SlideShow;
