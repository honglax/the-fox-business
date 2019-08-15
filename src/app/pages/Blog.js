import React from "react";
import { Route } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import SlideShow from "../components/StyledComponent/Slideshow";
import PurchaseBox from "../components/StyledComponent/PurchaseBox";
import OtherPosts from "../components/Blog/OtherPosts.Blog";
import DetailBanner from "../components/Blog/DetailBanner.Blog";

import BlogContent from "../components/Blog/Content.Blog";
import { posts } from "../components/Blog/Data.Blog";
import "../../styles/blog.scss";

function Blog({ match }) {
  const lightBlueColor = "#35c2ea";
  return (
    <div id="blog" className="blog-page blog__content">
      <Route
        exact
        path="/blog"
        component={() => (
          <section id="slideshow" className="section section-slideshow">
            <SlideShow page="blog" />
          </section>
        )}
      />
      <Route path="/blog/:id" component={DetailBanner} />
      <section id="post-content" className="section section-post-content">
        <BlogContent />
      </section>

      <Route
        path="/blog/:id"
        component={() => (
          <section id="other-posts" className="section section-other-posts">
            <Carousel
              interval={6000}
              pauseOnHover={false}
              keyboard={true}
              fade={true}
              className="carousel__other-posts"
              indicators={false}
            >
              {match.params.id &&
                posts
                  .filter(post => post.id !== parseInt(match.params.id))
                  .map(post => (
                    <Carousel.Item key={post.id}>
                      <OtherPosts post={post} />
                    </Carousel.Item>
                  ))}
            </Carousel>
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
