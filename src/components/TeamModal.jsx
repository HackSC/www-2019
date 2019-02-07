import React from "react"

import "../styles/teamModal.scss";

export default (props) => {
  const modalClass = (props.isActive) ? 'modal is-active' : 'modal'

  return (
    <div className={modalClass}>
      <div className="modal-background" onClick={props.hideModal}></div>

      <div className="modal-content">
        <div className="box team-modal">
          <h1>Our Team</h1>

          <h2>E-Board</h2>
          Stiven.
          Jack.
          Caleb.
          Sam.
          Wilhelm.

          <h2>Logistics</h2>
          Anjan.
          Anushka.
          Lauralee.
          Jane.
          Wilhelm.
          Daniel.

          <h2>Hacker Experience</h2>
          Sam.
          Michelle.
          Katie.
          Andreas.
          Arielle.

          <h2>Sponsorship</h2>
          Caleb.
          Ralph.
          Emily.
          Sakura.

          <h2>Marketing</h2>
          Jenny.
          Diya.
          Benton.
          Fedja.

          <h2>Special Projects</h2>
          Devika.
          Maggie.
          Forrest.
          Alex.
        </div>
      </div>

     <button className="modal-close is-large" aria-label="close" onClick={props.hideModal}></button>
    </div>
  )
}
