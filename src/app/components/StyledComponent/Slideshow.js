import React, { Component } from "react";

class SlideShow extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // this.handleResize = this.handleResize.bind(this);
  }

  // handleResize() {
  //   if (window.matchMedia("(max-width: 991.98px)").matches) {
  //     const banner = document.getElementById("slideshow");
  //     banner.children[0].style.height = `${window.innerHeight - 80}px`;
  //   }
  // }

  componentDidMount() {
    const banner = document.getElementById("slideshow");
    const header = document.querySelector("header");
    if (window.matchMedia("(max-width: 991.98px)").matches) {
      const banner = document.getElementById("slideshow");
      banner.children[0].style.height = `${window.innerHeight - 80}px`;
    } else {
      banner.children[0].style.height = `${window.innerHeight -
        header.offsetHeight}px`;
    }
    // window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate() {
    if (window.matchMedia("(max-width: 991.98px)").matches) {
      const banner = document.getElementById("slideshow");
      banner.children[0].style.height = `${window.innerHeight - 80}px`;
    }
  }

  render() {
    let { largeText, smallText, children } = this.props;
    return (
      <div className="banner banner-slideshow">
        <p className="large-text">{largeText}</p>
        <p className="small-text">{smallText}</p>
        {children}
      </div>
    );
  }
}

export default SlideShow;
