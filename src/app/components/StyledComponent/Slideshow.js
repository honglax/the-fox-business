import React, { Component } from "react";

class SlideShow extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  handleSetHeight() {
    const banner = document.getElementById("slideshow");
    const header = document.querySelector("header");
    if (window.matchMedia("(max-width: 991.98px)").matches) {
      banner.children[0].style.height = `${window.innerHeight - 80}px`;
    } else {
      banner.children[0].style.height = `${window.innerHeight -
        header.offsetHeight}px`;
    }
  }

  componentDidMount() {
    this.handleSetHeight();
    window.addEventListener("resize", this.handleSetHeight);
  }

  componentDidUpdate() {
    this.handleSetHeight();
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
