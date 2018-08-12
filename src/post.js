import React from "react";
import {Comment} from './comment';
import {NewCommentForm} from './newCommentForm';
import css from './post.css';

export class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props.message,
      time: props.time,
      id: props.id,
      comments:[],
    }
  }

  render() {
    const comments = this.state.comments;
    let message = this.state.message;
    let time = this.state.time
    return (
      <div className="post">
        <div className="post_header">
          <p id="post_username">Username</p>
          <p id="post_time">{time}</p>
        </div>
        <div className="post_body">
          {message}
        </div>
        <div className="post_footer">
          <NewCommentForm post_id={this.state.id} />
          {commentsList(comments)}
        </div>
      </div>
    )
  }

  componentDidMount() {
    let id = this.state.id
    fetch('https://acebook2018.herokuapp.com/comments?post_id=' + id)
    .then(response => response.json())
    .then(data =>
      this.setState({comments: data})
    )
  }
}

function commentsList(comments) {
  return comments.map(function(comment) {
    return <Comment
      body={comment.body}
      time={comment.created_at}
      user={comment.user}
      />
    })
}