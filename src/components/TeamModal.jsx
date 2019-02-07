import React from "react"

export default (props) => {
  const modalClass = (props.isActive) ? 'modal is-active' : 'modal'

  return (
    <div className={modalClass}>
      <div className="modal-background" onClick={props.hideModal}></div>

      <div className="modal-content">
        <div className="box">
          <h1>Willie Sucks.</h1>
        </div>
      </div>

     <button className="modal-close is-large" aria-label="close" onClick={props.hideModal}></button>
    </div>
  )
}
