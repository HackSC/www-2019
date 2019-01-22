import React from "react"

import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = "https://hacksc.us19.list-manage.com/subscribe/post?u=f19216c3aa5a09e620d5b8828&amp;id=3297e6b578";

const CustomForm = ({status, message, onValidated}) => {
  let email

  const submit = () => {
    console.log("click me")
    console.log(email)

    const a = (
      email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value
      })
    )

    console.log(a)
    return a
  }

  console.log(message)

  return (
    <div>
      <div className="field has-addons subscribe-form">
        <div className="control email-control">
          <input
            className="input is-medium"
            type="email"
            placeholder="your@email.com"
            ref={node => (email = node)}
          />
        </div>
        <div className="control">
          <a className="button is-medium is-primary" onClick={submit}>
            Subscribe
          </a>
        </div>
      </div>

      {status === "sending" && <p>Sending...</p>}
      {status === "error" && (
        <p
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <p
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </div>
  )
}

export default () => (
  <MailchimpSubscribe
  	url={url}
  	render={({ subscribe, status, message }) => (
  		<CustomForm
  			status={status}
  			message={message}
  			onValidated={formData => subscribe(formData)}
  		/>
  	)}
  />
)
