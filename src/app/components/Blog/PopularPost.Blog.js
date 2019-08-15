import React from "react";
import { Link } from "react-router-dom";
import defaultPreviewImg from "../../../assets/default-post-preview.jpg";

function PopularPost(props) {
  let { numOfPost, previewImg, title, postedAt } = props;
  const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
  return (
    <div className="popular-post__preview">
      <img
        src={previewImg || defaultPreviewImg}
        alt={title}
        className="preview__img"
      />
      <div className="preview__info">
        <Link
          to={`/blog/${getRandomInt(numOfPost)}`}
          className="preview__title"
        >
          {title}
        </Link>
        <p className="preview__postedAt">{postedAt}</p>
      </div>
    </div>
  );
}

export default PopularPost;
