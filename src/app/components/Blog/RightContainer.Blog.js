import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PopularPost from "./PopularPost.Blog";
import NewsLetter from "./NewsLetter.Blog";
import defaultPreviewImg from "../../../assets/default-post-preview.jpg";

import {
  posts,
  popularPosts,
  trendingTags,
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

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  setGrayBg() {
    if (window.innerWidth > 991.98) {
      const grayBg = document.getElementById("blog__gray-bg");
      const blog__container = document.getElementById("blog__container");
      grayBg.style.width = `${370 + blog__container.offsetLeft}px`;
    }
  }

  componentDidUpdate() {
    this.setGrayBg();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setGrayBg);
  }

  renderUnplashImg = randomNumber => {
    const imageWidth = 200; //your desired image width in pixels
    const imageHeight = 200; //desired image height in pixels
    const collectionID = 1163637; //the collection ID from the original url
    const unplashImgContainer = document.getElementById("unplash__content");
    let unplashItem = document.createElement("img");
    unplashItem.classList.add("unplash__img");
    fetch(
      `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}`
    )
      .then(res => {
        unplashItem.setAttribute("src", res.url);
      })
      .catch(err => {
        unplashItem.setAttribute("src", defaultPreviewImg);
      });
    unplashImgContainer.appendChild(unplashItem);
  };

  componentDidMount() {
    const numItemsToGenerate = 9; //how many gallery items you want on the screen
    const numImagesAvailable = 242; //how many total images are in the collection you are pulling from
    for (let i = 0; i < numItemsToGenerate; i++) {
      let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
      this.renderUnplashImg(randomImageIndex);
    }
    this.setGrayBg();
    window.addEventListener("resize", this.setGrayBg);
  }

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
                numOfPost={posts.length}
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
          <div id="unplash__content" className="unplash__content" />
        </div>
        <div className="right__component component__categories">
          <div className="title">Categories</div>
          <div className="categories__content">
            {categories.map((category, index) => (
              <div className="linked-container" key={index}>
                <Link to={`/blog/${this.getRandomInt(posts.length)}`}>
                  {category}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="right__component component__archive">
          <div className="title">Archive</div>
          <div className="archive__content">
            {archives.map((archive, index) => (
              <div className="linked-container" key={index}>
                <Link to={`/blog/${this.getRandomInt(posts.length)}`}>
                  {archive}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default RightContainer;
