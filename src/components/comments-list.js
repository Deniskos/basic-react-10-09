import React, { Component } from 'react'

class CommentsList extends Component {
  state = {
    isCommentsOpen: null
  }

  render() {
    // const {isCommentsOpen} = this.props
    return (
      <section>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={this.commentBtnClick}
        >
          {this.state.isCommentsOpen ? 'hide comments' : 'show comments'}
        </button>

        {this.body}
      </section>
    )
  }

  get body() {
    const { comments } = this.props
    return comments.map((comment) => (
      <div>
        {this.state.isCommentsOpen && (
          <div className="alert alert-secondary" role="alert" key={comment.id}>
            <h4>{comment.user}</h4>
            <div>{comment.text}</div>
          </div>
        )}
      </div>
    ))
  }

  commentBtnClick = () => {
    this.setState({
      isCommentsOpen: !this.state.isCommentsOpen
    })
  }
}

// function commentBtnClick = (isCommentsOpen) =>
// this.setState({
//   isCommentsOpen: this.state.isCommentsOpen === isCommentsOpen ? null : isCommentsOpen
// })

export default CommentsList
