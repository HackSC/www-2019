import React from "react"

export default (props) => {
  const modalClass = (props.isActive) ? 'modal is-active' : 'modal'

  return (
    <div className={modalClass}>
      <div className="modal-background" onClick={props.hideModal}></div>

      <div className="modal-content">
        <div className="box">
          <h1>Our Team</h1>

          <h2>E-Board</h2>

          <h2>Logistics</h2>

          <h2>Hacker Experience</h2>

          <h2>Sponsorship</h2>

          <h2>Marketing</h2>

          <h2>Special Projects</h2>
        </div>
      </div>

     <button className="modal-close is-large" aria-label="close" onClick={props.hideModal}></button>
    </div>
  )
}
