import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PopularPost from "./PopularPost.Blog";
import NewsLetter from "./NewsLetter.Blog";
import defaultPreviewImg from "../../../assets/default-post-preview.jpg";

const popularPosts = [
  {
    previewImg: "",
    title: "Totally Free Photos For Personal And Commercial Use",
    postedAt: "1 day ago"
  },
  {
    previewImg: "",
    title: "Comments tab redesign and Author Response Time",
    postedAt: "June 23th, 2015"
  },
  {
    previewImg: "",
    title: "Wallpaper Design Contest #4: Urban - Winner Announced",
    postedAt: "1 day ago"
  },
  {
    previewImg: "",
    title: "Envato's Most Wanted Winners: Micro Niche Themes",
    postedAt: "June 28th, 2015"
  },
  {
    previewImg: "",
    title: "Envato's Most Wanted Winners: Micro Niche Themes",
    postedAt: "June 30th, 2015"
  }
];

const trendingTags = [
  "Recruitment",
  "Tech",
  "Android",
  "TheFox Wordpress",
  "Photography",
  "Evanto",
  "Themeforest",
  "Art work",
  "Fonts",
  "WordPress Theme",
  "Design"
];

const unplashImg = ["", "", "", "", "", "", "", "", ""];

const categories = [
  "Design",
  "Tech",
  "Strategy",
  "Read",
  "Markets",
  "Life",
  "Finance"
];

const archives = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const backToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

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
                <Link onClick={backToTop} to="/blog">
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
                <Link onClick={backToTop} to="/blog">
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
