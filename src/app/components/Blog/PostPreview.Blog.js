import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import "../../../styles/blog.scss";
import defaultPreviewImg from "../../../assets/default-post-preview.jpg";
import defaultAvatar from "../../../assets/avatar/default-avatar.png";

function PostPreview(props) {
  let socialIcons = [
    {
      url: "https://facebook.com",
      library: "fab",
      name: "facebook-f",
      color: "#3b5999"
    },
    {
      url: "https://vn.linkedin.com/",
      library: "fab",
      name: "linkedin-in",
      color: "#0077B5"
    },
    {
      url: "https://twitter.com/",
      library: "fab",
      name: "twitter",
      color: "#55acee"
    },
    {
      url: "https://vimeo.com/",
      library: "fab",
      name: "vimeo-v",
      color: "#1ab7ea"
    },
    {
      url: "https://www.pinterest.com/",
      library: "fab",
      name: "pinterest-p",
      color: "#bd081c"
    }
  ];

  let {
    avatar,
    authorName,
    postAt,
    categories,
    previewImg,
    postTitle,
    contentPreview
  } = props;

  const SocialIconLink = styled.a`
    color: #999;

    &:hover {
      color: ${props => props.hoverColor};
    }
  `;
  return (
    <div className="content__post-preview">
      <div className="post-preview__top">
        <div className="post__author">
          <img
            src={avatar || defaultAvatar}
            alt=""
            className="author__avatar"
          />
          <div className="author__info">
            <p className="author__info--name">{authorName}</p>
            <p className="author__info--post-at">{postAt}</p>
          </div>
        </div>

        <div className="post__categories">
          {categories.map((category, index) => (
            <button key={index} className="category__detail">
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="post-preview__middle">
        <img
          src={previewImg || defaultPreviewImg}
          alt={postTitle}
          className="post__preview-img"
        />
        {postTitle ? <h5 className="post__title">{postTitle}</h5> : ""}
        {contentPreview ? (
          <p
            className="post__content-preview"
            dangerouslySetInnerHTML={{ __html: contentPreview }}
          />
        ) : (
          ""
        )}
      </div>
      <div className="post-preview__bottom">
        <div className="bottom__block">
          <a href="#">Continue Reading</a>
        </div>
        <div className="bottom__block">
          <button className="block__like">Like this</button>
        </div>
        <div className="bottom__block">
          <div className="block__share--text">Share this</div>
          <div className="block__share--social-icon">
            <ul className="social-icon__container">
              {socialIcons.map((icon, index) => (
                <li key={index}>
                  <SocialIconLink href={icon.url} hoverColor={icon.color}>
                    <FontAwesomeIcon
                      className="icon"
                      icon={[icon.library, icon.name]}
                      size="lg"
                    />
                  </SocialIconLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostPreview;
