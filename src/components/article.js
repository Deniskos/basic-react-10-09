import React, { PureComponent } from 'react'

class Article extends PureComponent {
  render() {
    console.log('---', 'rendering')
    const { article, isOpen, toggleOpen } = this.props
    return (
      <div>
        <div>
          <h3 ref={this.setTitleRef}>{article.title}</h3>
          <button onClick={this.handleBtnClick.bind(this, article.id)}>
            {isOpen ? 'close' : 'open'}
          </button>
        </div>
        {isOpen && <section>{article.text}</section>}
      </div>
    )
  }

  setTitleRef = (titleRef) => console.log(titleRef)

  handleBtnClick = () => {
    console.log('1')
    this.props.toggleOpen(this.props.article.id)
  }
}

export default Article
