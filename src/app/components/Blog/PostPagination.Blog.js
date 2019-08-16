import React, { Component } from "react";
import { posts } from "./Data.Blog.js";
import Pagination from "../Pagination";
import PostPreview from "./PostPreview.Blog";

export default class PostPagination extends Component {
  state = {
    allPosts: [],
    currentPosts: [],
    currentPage: null,
    totalPages: null
  };

  onPageChanged = data => {
    const { allPosts } = this.state;
    const { currentPage, totalPages, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentPosts = allPosts.slice(offset, offset + pageLimit);
    this.setState({ currentPage, currentPosts, totalPages });
  };

  componentDidMount() {
    const allPosts = posts;
    this.setState({ allPosts });
  }

  render() {
    const { allPosts, currentPosts } = this.state;
    const totalPosts = allPosts.length;
    if (totalPosts === 0) return null;
    return (
      <div>
        {currentPosts.map((post, id) => (
          <PostPreview
            key={id}
            id={id}
            avatar={post.avatar}
            authorName={post.author}
            postedAt={post.postedAt}
            tags={post.tags}
            previewImg={post.previewImg}
            postTitle={post.postTitle}
            postContent={post.postContent}
            isQuote={post.isQuote}
          />
        ))}
        <Pagination
          className="pagination"
          totalRecords={totalPosts}
          pageLimit={5}
          pageNeighbours={1}
          onPageChanged={this.onPageChanged}
        />
      </div>
    );
  }
}
