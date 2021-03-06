import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import classNames from "classnames";

import "../../../styles/blog.scss";
import defaultPreviewImg from "../../../assets/default-post-preview.jpg";
import defaultAvatar from "../../../assets/avatar/default-avatar.png";

import { socialIcons } from "./Data.Blog";

function PostPreview(props) {
  let {
    id,
    avatar,
    authorName,
    postedAt,
    tags,
    previewImg,
    postTitle,
    postContent,
    isQuote
  } = props;

  const SocialIconLink = styled.a`
    color: #999;

    &:hover {
      color: ${props => props.hoverColor};
    }
  `;

  let postPreviewMiddleClass = classNames({
    "post-preview__middle": true,
    "post-preview__quote": isQuote
  });

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
            <p className="author__info--post-at">{postedAt}</p>
          </div>
        </div>

        <div className="post__tags">
          {tags.map((tag, index) => (
            <button key={index} className="tag__detail">
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className={postPreviewMiddleClass}>
        <div className="post__preview-img">
          <img src={previewImg || defaultPreviewImg} alt={postTitle} />
        </div>
        {isQuote ? (
          <div
            className="post__quote"
            dangerouslySetInnerHTML={{ __html: postTitle }}
          />
        ) : (
          ""
        )}
        {postTitle ? <h5 className="post__title">{postTitle}</h5> : ""}
        {postContent ? (
          <p
            className="post__content-preview"
            dangerouslySetInnerHTML={{ __html: postContent }}
          />
        ) : (
          ""
        )}
      </div>
      <div className="post-preview__bottom">
        <div className="bottom__block">
          <Link to={"/blog/" + id}>Continue Reading</Link>
        </div>
        <div className="bottom__block">
          <button className="block__like">Like this</button>
        </div>
        <div className="bottom__block">
          <div className="block__share--text">Share this:</div>
          <div className="block__share--social-icon">
            <ul className="social-icon__container">
              {socialIcons.map((icon, index) => (
                <li key={index} className="social-icon__item">
                  <SocialIconLink
                    className="social-icon__link"
                    href={icon.url}
                    hoverColor={icon.color}
                  >
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
