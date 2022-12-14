import React, { Component } from "react";
import './index.css'
class SideBar extends Component {
  handleClick = (id) => {
    this.props.selectPost(id);
  };
  render() {
    return (
      
        <ul>
          {this.props.posts.map((post) => (
            <li key={post.id} onClick={() => this.handleClick(post.id)}>
              {post.title}
            </li>
          ))}
        </ul>
      
    );
  }
}

export default SideBar;
