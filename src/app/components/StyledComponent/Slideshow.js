import React, { Component } from "react";
import { PrimaryButton } from "./style";
import { Carousel } from "react-bootstrap";

const carouselItems = [
  {
    id: "first-slider",
    largeText: "Dream big. Think different",
    smallText: "Creating a Website Has Never Been This Easy"
  },
  {
    id: "second-slider",
    largeText: "We do the best design",
    smallText: "Dream Big. Think Different. Do Great"
  },
  {
    id: "third-slider",
    largeText: "Our Services",
    smallText: "Dream big. Think different. Do great"
  },
  {
    id: "fourth-slider",
    largeText: "The Business Article",
    smallText: "Look around to see how to make the best business"
  }
];

const pageIndex = {
  home: 0,
  about: 1,
  services: 2,
  blog: 3,
  porfolio: 3
};

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

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleSetHeight, false);
  }

  render() {
    let { page } = this.props;
    return (
      <div className="banner banner-slideshow">
        {page === "contact" ? (
          <div id="fifth-slider" className="carousel__inner">
            <p className="large-text">Contact Us</p>
            <p className="small-text">Dream big. Think different</p>
          </div>
        ) : (
          <Carousel
            touch={true}
            indicators={false}
            interval={5000}
            controls={false}
            pauseOnHover={false}
            fade={true}
            defaultActiveIndex={pageIndex[page]}
          >
            {carouselItems.map(item => (
              <Carousel.Item
                key={item.id}
                id={page === "blog" ? "blog__" + item.id : item.id}
              >
                <div className="carousel__inner">
                  <p className="large-text">{item.largeText}</p>
                  <p className="small-text">{item.smallText}</p>
                  {page !== "blog" ? (
                    <div className="btn-group">
                      <PrimaryButton
                        width="200px"
                        height="55px"
                        className="primary-btn slider__btn"
                      >
                        Get Started
                      </PrimaryButton>
                      <PrimaryButton
                        width="200px"
                        height="55px"
                        className="primary-btn slider__btn"
                      >
                        Purchase Now
                      </PrimaryButton>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </div>
    );
  }
}

export default SlideShow;
