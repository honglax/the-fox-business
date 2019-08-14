import React from "react";
import { Link } from "react-router-dom";
import defaultPreviewImg from "../../../assets/default-post-preview.jpg";

const backToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

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
        <Link to="/blog/12" className="preview__title">
          {title}
        </Link>
        <p className="preview__postedAt">{postedAt}</p>
      </div>
    </div>
  );
}

export default PopularPost;
