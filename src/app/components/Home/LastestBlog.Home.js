import React from "react";
import BoxSection from "../StyledComponent/BoxSection";
import { PrimaryButton } from "../StyledComponent/style";
import { Container } from "react-bootstrap";

export default function LastestBlog() {
  const posts = [
    {
      title:
        "This CEO is taking on the biggest banks on Wall Street — and winning",
      author: "Robinson Greig",
      postedAt: "25th June 2020"
    },
    {
      title:
        "Google employee dies in an accident at the Cannes Lions advertising festival",
      author: "Robinson Greig",
      postedAt: "25th June 2020"
    },
    {
      title: "How a tweet turned Uber's first hire into a billionaire",
      author: "Robinson Greig",
      postedAt: "25th June 2020"
    }
  ];

  let featuredPost = posts[0];

  return (
    <BoxSection
      title="Lastest From Our Blog"
      description="Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra.<br/>Nulla vehicula nibh vel ante commodo feugiat."
    >
      <Container>
        <div className="posts">
          <div className="post featured-post">
            <PrimaryButton width={150} height={40} transform="capitalize">
              Featured Post
            </PrimaryButton>
            <p className="title">{featuredPost.title}</p>
            <p>
              by {featuredPost.author} / {featuredPost.postedAt}
            </p>
          </div>
          <div className="other-posts">
            {posts.map(post =>
              posts.indexOf(post) === 0 ? (
                ""
              ) : (
                <div
                  className={
                    posts.indexOf(post) === 2 ? "post bg-blue" : "post"
                  }
                  key={posts.indexOf(post)}
                >
                  <p className="title">{post.title}</p>
                  <p>
                    by {post.author} / {post.postedAt}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
        <div className="check-all">
          <PrimaryButton
            width={300}
            height={30}
            transform="capitalize"
            bgColor="transparent"
            color="#4889f3"
            borderColor="transparent"
            notHover={true}
          >
            <span className="ti-bell icon" />
            Check All Lastest Articles
          </PrimaryButton>
        </div>
      </Container>
    </BoxSection>
  );
}
