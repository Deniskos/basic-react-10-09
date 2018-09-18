import React, { Component } from 'react'

class CommentsList extends Component {
  render() {
    const { article, isCommentsOpen, onCommentClick } = this.props
    return (
      <section className="comments-section" key={article.id}>
        <button
          type="button"
          className="btn btn-outline-secondary comments-section__btn"
          onClick={onCommentClick}
        >
          {isCommentsOpen ? 'hide comments' : 'show comments'}
        </button>

        {this.body}
      </section>
    )
  }

  get body() {
    const { comments, isCommentsOpen } = this.props
    return comments.map((comment) => (
      <div key={comment.id}>
        {isCommentsOpen && (
          <div className="comments__wrapper alert alert-secondary" role="alert">
            <h4 className="comments__user">{comment.user}</h4>
            <div className="comments__text">{comment.text}</div>
          </div>
        )}
      </div>
    ))
  }
}

export default CommentsList
