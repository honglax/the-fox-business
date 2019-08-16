import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

import BlogDetail from "./BlogDetail.Blog";
import PostPagination from "./PostPagination.Blog";
import RightContainer from "./RightContainer.Blog";

class BlogContent extends Component {
  render() {
    return (
      <Container id="blog__container" className="blog__content">
        <div id="left-container" className="left-container">
          <Switch>
            <Route exact path="/blog" component={PostPagination} />
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
