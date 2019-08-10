import React from "react";
import SlideShow from "../components/StyledComponent/Slideshow";

function Blog() {
  return (
    <div id="blog" className="blog-page blog__content">
      <section className="section section-slideshow">
      <SlideShow largeText="The Business Article" smallText="Look around to see how to make the best business" />
      </section>
    </div>
  );
}

export default Blog;
