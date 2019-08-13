import React from "react";
import SlideShow from "../components/StyledComponent/Slideshow";
import PurchaseBox from "../components/StyledComponent/PurchaseBox";

import BlogContent from "../components/Blog/Content.Blog";
import "../../styles/blog.scss";

function Blog() {
  const lightBlueColor = "#35c2ea";
  return (
    <div id="blog" className="blog-page blog__content">
      <section id="slideshow" className="section section-slideshow">
        <SlideShow
          largeText="The Business Article"
          smallText="Look around to see how to make the best business"
        />
      </section>
      <section id="post-content" className="section section-post-content">
        <BlogContent />
      </section>
      <section id="purchase-box" className="section section-purchase-box">
        <PurchaseBox bgColor={lightBlueColor} />
      </section>
    </div>
  );
}

export default Blog;
