import React from "react";
import { Link } from "react-router-dom";
import defaultPreviewImg from "../../../assets/default-post-preview.jpg";

function PopularPost(props) {
  let { previewImg, title, postedAt } = props;
  return (
    <div className="popular-post__preview">
      <img
        src={previewImg || defaultPreviewImg}
        alt={title}
        className="preview__img"
      />
      <div className="preview__info">
        <Link to="/blog/1" className="preview__title">
          {title}
        </Link>
        <p className="preview__postedAt">{postedAt}</p>
      </div>
    </div>
  );
}

export default PopularPost;
