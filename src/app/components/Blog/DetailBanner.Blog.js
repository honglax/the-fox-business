import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { posts } from "./Data.Blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DetailBanner extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleSetHeight() {
    const detailBanner = document.getElementById("post-detail-banner");
    const header = document.querySelector("header");
    detailBanner.style.height = `${window.innerHeight -
      (window.innerWidth < 991.98 ? 80 : header.offsetHeight)}px`;
  }

  componentDidMount() {
    this.handleSetHeight();
    window.addEventListener("resize", this.handleSetHeight, false);
  }

  componentDidUpdate() {
    this.handleSetHeight();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleSetHeight, false);
  }

  scrollToContent() {
    const blogDetail = document.getElementById("post-content");
    const header = document.querySelector("header");
    window.scroll({
      top:
        blogDetail.offsetTop -
        (window.innerWidth < 991.98 ? 80 : header.offsetHeight),
      left: 0,
      behavior: "smooth"
    });
  }

  render() {
    let { match } = this.props;
    let post = posts[match.params.id];
    return (
      <div
        id="post-detail-banner"
        className="detail__banner"
        style={{
          backgroundImage: `url(${post.previewImg})`
        }}
      >
        <Container className="banner__post-summary">
          <div
            className="summary__title"
            dangerouslySetInnerHTML={{ __html: post.postTitle }}
          />
          <img
            src={post.avatar || "http://lorempixel.com/300/300/people/"}
            alt=""
            className="summary__avatar"
          />
          <div className="summary__author">{post.author}</div>
          <div className="summary__postedAt">{post.postedAt}</div>
        </Container>
        <Link
          // onClick={post.id === 0 ? this.disableAnchor : null}
          to={
            post.id === 0 ? `/blog/${posts.length - 1}` : `/blog/${post.id - 1}`
          }
        >
          <button className="summary__btn prev-btn">
            <FontAwesomeIcon
              className="arrow-icon"
              icon={["fas", "chevron-left"]}
            />
            {post.id === 0 || window.innerWidth < 1191.98 ? (
              ""
            ) : (
              <span>Previous Post</span>
            )}
          </button>
        </Link>
        <Link
          // onClick={post.id === posts.length - 1 ? this.disableAnchor : null}
          to={post.id === posts.length - 1 ? "/blog/0" : `/blog/${post.id + 1}`}
        >
          <button className="summary__btn next-btn">
            {post.id === posts.length - 1 || window.innerWidth < 1191.98 ? (
              ""
            ) : (
              <span>Next Post</span>
            )}
            <FontAwesomeIcon
              className="arrow-icon"
              icon={["fas", "chevron-right"]}
            />
          </button>
        </Link>
        <button
          onClick={this.scrollToContent}
          className="summary__btn scroll-down-btn"
        >
          <FontAwesomeIcon icon={["fas", "chevron-down"]} />
        </button>
      </div>
    );
  }
}

export default DetailBanner;
