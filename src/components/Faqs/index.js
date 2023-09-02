// Write your code here.

import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="main-con">
      <div className="inner-con">
        <h1 className="main-head">FAQs</h1>
        <ul className="ul-main-con">
          {faqsList.map(eachList => (
            <FaqItem eachItem={eachList} key={eachList.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
