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
        <PrimaryButton
          // Use Styled Component as Link from react-router-dom
          as={Link}
          to={`/blog/${post.id}`}
          // Defined properties of Styled Component
          width="200px"
          height="55px"
          className="others__read-more-btn"
        >
          Read more
        </PrimaryButton>
      </Container>
    </div>
  );
}
