import React from "react";
import { Container } from "react-bootstrap";
import PostPreview from "./PostPreview.Blog";

import avatar1 from "../../../assets/avatar/av1-50x50.jpg";
import avatar2 from "../../../assets/avatar/av2-50x50.jpg";
import avatar3 from "../../../assets/avatar/av3-50x50.jpg";
import avatar4 from "../../../assets/avatar/av4-50x50.jpg";

const posts = [
  {
    id: 0,
    avatar: avatar1,
    author: "Brian Alvarado",
    postAt: "1 day ago",
    categories: ["Recruitment"],
    previewImg: "",
    postTitle:
      "11 Impossible Tech Interview Questions You Don't Want To Be Asked",
    contentPreview:
      "Cras gravida arcu tincidunt, suscipit velit sed, porta sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis."
  },
  {
    id: 1,
    avatar: avatar2,
    author: "Justin Smith",
    postAt: "June, 25th 2020",
    categories: ["Tech", "Commercial"],
    previewImg: "",
    postTitle:
      "The World's First Commercial Jetpack Will Arrive In 2016, And It'll Cost You $150,000",
    contentPreview:
      "Cras gravida arcu tincidunt, suscipit velit sed, porta sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis."
  },
  {
    id: 2,
    avatar: avatar3,
    author: "Thomas Clark",
    postAt: "June, 25th 2020",
    categories: ["Quote", "Hardwork"],
    previewImg: "",
    postTitle: "",
    contentPreview: ""
  },
  {
    id: 3,
    avatar: avatar4,
    author: "Susan Baker",
    postAt: "1 day ago",
    categories: ["Recruitment"],
    previewImg: "",
    postTitle:
      "People Are Tweeting Their Rage At Scalia - But They're Making One Crucial Mistake",
    contentPreview:
      "Cras gravida arcu tincidunt, suscipit velit sed, porta sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis."
  },
  {
    id: 4,
    avatar: "",
    author: "Jesse Harris",
    postAt: "2 days ago",
    categories: ["Recruitment"],
    previewImg: "",
    postTitle:
      "How E-Commerce Is Finally Disrupting The $600 Billion-A-Year Grocery Industry",
    contentPreview:
      "Cras gravida arcu tincidunt, suscipit velit sed, porta sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis. Cras gravida arcu tincidunt, suscipit velit sed, porta sapien. Maecenas a aliquam lectus. Vivamus consequat purus quis ligula vestibulum, eget mattis ex fermentum. Donec placerat felis sit amet venenatis faucibus. Praesent aliquet convallis."
  }
];

function Content() {
  return (
    <Container className="blog__content">
      <div className="left-container">
        {posts.map((post, index) => (
          <PostPreview
            key={index}
            avatar={post.avatar}
            authorName={post.author}
            postAt={post.postAt}
            categories={post.categories}
            previewImg={post.previewImg}
            postTitle={post.postTitle}
            contentPreview={post.contentPreview}
          />
        ))}
      </div>
      <div className="right-container">
        <p>Right Container</p>
      </div>
    </Container>
  );
}

export default Content;
