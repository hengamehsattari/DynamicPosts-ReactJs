import React, { Component } from "react";
import Comments from "../Comments";
import "./index.css";

class Content extends Component {
  state = { comments: [] };
  componentDidMount() {
    fetch(`http://localhost:3001/comments?post-id=${this.props.post[0].id}`)
      .then((res) => res.json())
      .then((result) => this.setState({ comments: result }));
  }
  componentDidUpdate(prevProps) {
    if (prevProps.post[0].id !== this.props.post[0].id) {
      fetch(`http://localhost:3001/comments?post-id=${this.props.post[0].id}`)
        .then((res) => res.json())
        .then((result) => this.setState({ comments: result }));
    }
  }

  render() {
    const { title, body, image, id } = this.props.post[0];
    return (
      <>
        <div className="main">
          <div className="card">
            <img src={`./image/${image}`} alt="mypics" />
            <h1>{title}</h1>
          </div>
          <p className="content">{body}</p>
          <Comments comments={this.state.comments}/>
        </div>
      </>
    );
  }
}

export default Content;
