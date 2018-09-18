import React, { PureComponent } from 'react'
import CommentsList from './comments-list'
import 'bootstrap/dist/css/bootstrap.min.css'

class Article extends PureComponent {
  state = {
    openCommentsId: null
  }

  render() {
    const { article, isOpen } = this.props
    return (
      <div>
        <div>
          <h3 ref={this.setTitleRef}>{article.title}</h3>

          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleBtnClick.bind(this, article.id)}
          >
            {isOpen ? 'close' : 'open'}
          </button>
        </div>
        {isOpen && (
          <section>
            {article.text}
            <CommentsList
              article={article}
              comments={article.comments}
              isCommentsOpen={this.state.openCommentsId === article.id}
              onCommentClick={this.handleCommentClick.bind(this, article.id)}
            />
          </section>
        )}
      </div>
    )
  }

  setTitleRef = (titleRef) => console.log(titleRef)

  handleBtnClick = () => {
    this.props.toggleOpen(this.props.article.id)
  }

  handleCommentClick = (openCommentsId) =>
    this.setState({
      openCommentsId:
        this.state.openCommentsId === openCommentsId ? null : openCommentsId
    })
}

export default Article
