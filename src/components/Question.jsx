import React from "react"

const Question = (props) => (
  <div className="question">
    <h3>{props.question}</h3>
    <p>{props.answer}</p>
  </div>
);

export default Question;