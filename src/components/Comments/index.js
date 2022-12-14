import React, { Component } from "react";
import './index.css';
class Comments extends Component {
  render() {
    return (
      <>
        <h3>Comments</h3>
        {this.props.comments.map((comment) => (
          <p className="forComments">{comment.body}</p>
        ))}
      </>
    );
  }
}

export default Comments;
