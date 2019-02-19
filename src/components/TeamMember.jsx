import React from "react"

export default (props) => {
  return (
    <div className={"column team-member " + props.colClass}>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img src={props.pic} alt={props.name} className="team-member-pic"/>
      </a>

      <a href={props.link} target="_blank" rel="noopener noreferrer"><h3>{props.name}</h3></a>
      <h4>{props.title}</h4>
    </div>
  )
}
