import React, { Component } from "react";
import PropTypes from "prop-types";

export class Post extends Component {
  render() {
    const { id, title } = this.props.post;
    return (
      <>
        <span>{this.props.post.title}</span>
        <br />
        <br />
        <span>{this.props.post.note}</span>
      </>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default Post;
