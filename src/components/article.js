import React, { PureComponent } from 'react'
import CommentsList from './comments-list'
import 'bootstrap/dist/css/bootstrap.min.css'

class Article extends PureComponent {
  /*state = {
    isCommentsOpen: true
  }*/

  render() {
    const { article, isOpen, toggleOpen } = this.props
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

            {/*<CommentsList isCommentsOpen={this.state.isCommentsOpen} comments={article.comments} />*/}
            <CommentsList comments={article.comments} />
          </section>
        )}
      </div>
    )
  }

  setTitleRef = (titleRef) => console.log(titleRef)

  handleBtnClick = () => {
    this.props.toggleOpen(this.props.article.id)
  }
}

export default Article
