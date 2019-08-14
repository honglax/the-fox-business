import React, { Component } from "react";
import { Container } from "react-bootstrap";
import PostPreview from "./PostPreview.Blog";
import RightContainer from "./RightContainer.Blog";

import avatar1 from "../../../assets/avatar/av1-50x50.jpg";
import avatar2 from "../../../assets/avatar/av2-50x50.jpg";
import avatar3 from "../../../assets/avatar/av3-50x50.jpg";
import avatar4 from "../../../assets/avatar/av4-50x50.jpg";

const posts = [
  {
    id: 0,
    avatar: avatar4,
    author: "Brian Alvarado",
    postedAt: "1 day ago",
    tags: ["Recruitment"],
    previewImg: "",
    postTitle:
      "11 Impossible Tech Interview Questions You Don't Want To Be Asked",
    contentPreview:
      "Cras gravida arcu tincidunt, suscipit velit sed, porta sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.",
    isQuote: false
  },
  {
    id: 1,
    avatar: avatar2,
    author: "Justin Smith",
    postedAt: "June, 25th 2020",
    tags: ["Tech", "Commercial"],
    previewImg: "",
    postTitle:
      "The World's First Commercial Jetpack Will Arrive In 2016, And It'll Cost You $150,000",
    contentPreview:
      "Cras gravida arcu tincidunt, suscipit velit sed, porta sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.",
    isQuote: false
  },
  {
    id: 2,
    avatar: avatar3,
    author: "Thomas Clark",
    postedAt: "June, 25th 2020",
    tags: ["Quote", "Hardwork"],
    previewImg: "",
    postTitle:
      "If today were the last day of your life, would you want to do?<br/>What you are about to do today?",
    contentPreview: "",
    isQuote: true
  },
  {
    id: 3,
    avatar: avatar1,
    author: "Susan Baker",
    postedAt: "1 day ago",
    tags: ["Recruitment"],
    previewImg: "",
    postTitle:
      "People Are Tweeting Their Rage At Scalia - But They're Making One Crucial Mistake",
    contentPreview:
      "Cras gravida arcu tincidunt, suscipit velit sed, porta sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.",
    isQuote: false
  },
  {
    id: 4,
    avatar: "",
    author: "Jesse Harris",
    postedAt: "2 days ago",
    tags: ["Recruitment"],
    previewImg: "",
    postTitle:
      "How E-Commerce Is Finally Disrupting The $600 Billion-A-Year Grocery Industry",
    contentPreview:
      "Cras gravida arcu tincidunt, suscipit velit sed, porta sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis. Cras gravida arcu tincidunt, suscipit velit sed, porta sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis.",
    isQuote: false
  }
];

class BlogContent extends Component {
  setGrayBg() {
    const grayBg = document.getElementById("blog__gray-bg");
    const container = document.getElementById("blog-content");
    const leftContainer = document.getElementById("left-container");
    grayBg.style.width = `${window.innerWidth -
      container.offsetLeft -
      leftContainer.offsetWidth}px`;
  }

  componentDidMount() {
    this.setGrayBg();
    window.addEventListener("resize", this.setGrayBg);
  }
  render() {
    return (
      <Container id="blog-content" className="blog__content">
        <div id="left-container" className="left-container">
          {posts.map((post, index) => (
            <PostPreview
              key={index}
              avatar={post.avatar}
              authorName={post.author}
              postedAt={post.postedAt}
              tags={post.tags}
              previewImg={post.previewImg}
              postTitle={post.postTitle}
              contentPreview={post.contentPreview}
              isQuote={post.isQuote}
            />
          ))}
        </div>
        <div id="right-container" className="right-container">
          <RightContainer />
        </div>
      </Container>
    );
  }
}

export default BlogContent;
