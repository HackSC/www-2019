import React from "react"

import '../styles/section.scss'

export default (props) => (
  <section className={"section " + props.sectionClass}>
    <div className="container">
      <h2 className={"title " + props.sectionClass}>{props.title}</h2>

      {props.children}
    </div>
  </section>
)
