import React from "react";
import { Route } from "react-router-dom";
import SlideShow from "../components/StyledComponent/Slideshow";
import PurchaseBox from "../components/StyledComponent/PurchaseBox";
import OtherPosts from "../components/Blog/OtherPosts.Blog";

import BlogContent from "../components/Blog/Content.Blog";
import "../../styles/blog.scss";

function Blog() {
  const lightBlueColor = "#35c2ea";
  return (
    <div id="blog" className="blog-page blog__content">
      <Route
        exact
        path="/blog"
        component={() => (
          <section id="slideshow" className="section section-slideshow">
            <SlideShow />
          </section>
        )}
      />
      <section id="post-content" className="section section-post-content">
        <BlogContent />
      </section>

      <Route
        path="/blog/:id"
        component={() => (
          <section id="other-posts" className="section section-other-posts">
            <OtherPosts />
          </section>
        )}
      />

      <section id="purchase-box" className="section section-purchase-box">
        <PurchaseBox bgColor={lightBlueColor} />
      </section>
    </div>
  );
}

export default Blog;
