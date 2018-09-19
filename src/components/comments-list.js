import React, { Component } from 'react'
import Comment from './comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentsList extends Component {
  render() {
    const { article, isOpen, toggleOpen } = this.props
    return (
      <section className="comments-section" key={article.id}>
        <button
          type="button"
          className="btn btn-outline-secondary comments-section__btn"
          onClick={toggleOpen}
        >
          {isOpen ? 'hide comments' : 'show comments'}
        </button>

        {this.body}
      </section>
    )
  }

  get body() {
    const { comments, isOpen } = this.props
    return comments.map((comment) => (
      <div
        className="comments__wrapper alert alert-secondary"
        role="alert"
        key={comment.id}
      >
        {isOpen && <Comment comment={comment} />}
      </div>
    ))
  }
}

const CommentListWidthToggleOpen = toggleOpen(CommentsList)

export default CommentListWidthToggleOpen
