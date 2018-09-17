import React, { Component } from 'react'

class CommentsList extends Component {
  render() {
    const { article, isCommentsOpen } = this.props

    return (
      <div>
        <button>comments open</button>
        {isCommentsOpen && (
          <section>
            COMMENTS
            <h4>{article.comments[0].user}</h4>
            <div>{article.comments[0].text}</div>
          </section>
        )}
      </div>
    )

    // return article.comments.map((comment) => (
    //   <div>
    //     <h4>{comment.user}</h4>
    //     <div>{comment.text}</div>
    //   </div>
    // ))
  }
}

export default CommentsList
