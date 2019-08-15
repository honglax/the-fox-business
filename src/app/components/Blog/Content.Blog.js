import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

import BlogDetail from "./BlogDetail.Blog";
import PostPreview from "./PostPreview.Blog";
import RightContainer from "./RightContainer.Blog";

import { posts } from "./Data.Blog.js";

class BlogContent extends Component {
  setGrayBg() {
    if (window.innerWidth > 991.98) {
      const grayBg = document.getElementById("blog__gray-bg");
      const container = document.getElementById("post-content");
      const blog__container = document.getElementById("blog__container");
      grayBg.style.width = `${370 + blog__container.offsetLeft}px`;
      grayBg.style.height = `${container.offsetHeight}px`;
    }
  }

  componentDidMount() {
    this.setGrayBg();
    window.addEventListener("resize", this.setGrayBg);
  }

  componentDidUpdate() {
    this.setGrayBg();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setGrayBg);
  }

  render() {
    return (
      <Container id="blog__container" className="blog__content">
        <div id="left-container" className="left-container">
          <Switch>
            <Route
              exact
              path="/blog"
              component={() =>
                posts.map((post, id) => (
                  <PostPreview
                    key={id}
                    id={id}
                    avatar={post.avatar}
                    authorName={post.author}
                    postedAt={post.postedAt}
                    tags={post.tags}
                    previewImg={post.previewImg}
                    postTitle={post.postTitle}
                    postContent={post.postContent}
                    isQuote={post.isQuote}
                  />
                ))
              }
            />
            <Route path="/blog/:id" component={BlogDetail} />
          </Switch>
        </div>
        <div id="right-container" className="right-container">
          <RightContainer />
        </div>
      </Container>
    );
  }
}

export default BlogContent;
