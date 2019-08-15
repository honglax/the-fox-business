import React from "react";

export default function BlogDetail({ match }) {
  let postId = match.params.id;
  return (
    <div>
      <p>Blog Detail</p>
    </div>
  );
}
