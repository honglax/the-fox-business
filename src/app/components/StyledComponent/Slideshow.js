import React, { Component } from "react";

class SlideShow extends Component {
  componentDidMount() {
    const banner = document.getElementById("slideshow");
    const header = document.querySelector("header");
    banner.children[0].style.height = `${window.innerHeight -
      header.offsetHeight}px`;
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
