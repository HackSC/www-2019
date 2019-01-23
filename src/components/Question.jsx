import React from "react"

export default (props) => (
  <div className="question">
    <h3>{props.question}</h3>
    <p>{props.answer}</p>
  </div>
)
