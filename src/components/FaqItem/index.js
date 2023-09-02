// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswer = () => {
    const {eachItem} = this.props
    const {answerText} = eachItem
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr className="hr-line" />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {eachItem} = this.props
    const {questionText} = eachItem
    const {isActive} = this.state

    const imgUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const imgAlt = isActive ? 'minus' : 'plus'

    return (
      <li className="li-main-con">
        <div className="li-inner-con">
          <h1 className="question-head">{questionText}</h1>
          <button onClick={this.onToggleIsActive} className="btn" type="button">
            <img src={imgUrl} alt={imgAlt} />
          </button>
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
