import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../StyledComponent/style";

export default function OtherPost(props) {
  const { post } = props;
  return (
    <div id="post-detail-others" className="detail__others">
      <Container className="others__container">
        <div className="others__greeting">You may also like</div>
        <div
          className="others__title"
          dangerouslySetInnerHTML={{ __html: post.postTitle }}
        />
        <Link to={`/blog/${post.id}`}>
          <PrimaryButton
            width="200px"
            height="55px"
            bgColor="rgba(0,0,0,0.4)"
            borderColor="rgba(0,0,0,0.4)"
            className="others__read-more-btn"
          >
            Read more
          </PrimaryButton>
        </Link>
      </Container>
    </div>
  );
}
