import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PopularPost from "./PopularPost.Blog";
import NewsLetter from "./NewsLetter.Blog";
import defaultPreviewImg from "../../../assets/default-post-preview.jpg";

import {
  popularPosts,
  trendingTags,
  unplashImg,
  archives,
  categories
} from "./Data.Blog";

class RightContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <div className="right__component component__search-box">
          <form onSubmit={this.onSubmit} className="search-form" noValidate>
            <input type="text" name="search-box" placeholder="Search..." />
            <button type="submit">
              <FontAwesomeIcon icon={["fas", "search"]} />
            </button>
          </form>
        </div>
        <div className="right__component component__popular">
          <div className="title">Popular Post</div>
          <div className="popular__content">
            {popularPosts.map((post, index) => (
              <PopularPost
                key={index}
                previewImg={post.previewImg}
                title={post.title}
                postedAt={post.postedAt}
              />
            ))}
          </div>
        </div>
        <div className="right__component component__trending-tags">
          <div className="title">Trending Tags</div>
          <div className="trending-tags__content post__tags">
            {trendingTags.map((tag, index) => (
              <button className="tag__detail" key={index}>
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="right__component component__newsletter">
          <div className="title">Newsletter</div>
          <div className="newsletter__content">
            <NewsLetter />
          </div>
        </div>
        <div className="right__component component__unplash">
          <div className="title">Photo from unplash</div>
          <div className="unplash__content">
            {unplashImg.map((img, index) => (
              <img
                key={index}
                className="unplash__img"
                src={img || defaultPreviewImg}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="right__component component__categories">
          <div className="title">Categories</div>
          <div className="categories__content">
            {categories.map((category, index) => (
              <div className="linked-container" key={index}>
                <Link to="/blog/12">{category}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="right__component component__archive">
          <div className="title">Archive</div>
          <div className="archive__content">
            {archives.map((archive, index) => (
              <div className="linked-container" key={index}>
                <Link to="/blog/12">{archive}</Link>
              </div>
            ))}
          </div>
        </div>
        <div id="blog__gray-bg" className="gray-background" />
      </div>
    );
  }
}
export default RightContainer;
