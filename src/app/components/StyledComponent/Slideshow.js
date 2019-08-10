import React from "react";

export default function SlideShow({ largeText, smallText, children }) {
  return (
    <div className="banner banner-slideshow">
      <p className="large-text">{largeText}</p>
      <p className="small-text">{smallText}</p>
      {children}
    </div>
  );
}
