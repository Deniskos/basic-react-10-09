import React, { Component } from 'react'

class Comment extends Component {
  render() {
    const { comment } = this.props
    return (
      <div
        className="comments__wrapper alert alert-secondary"
        role="alert"
        key={comment.id}
      >
        <h4 className="comments__user">{comment.user}</h4>
        <div className="comments__text">{comment.text}</div>
      </div>
    )
  }
}

export default Comment
