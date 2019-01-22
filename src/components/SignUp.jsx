const url = "https://hacksc.us19.list-manage.com/subscribe/post?u=f19216c3aa5a09e620d5b8828&amp;id=3297e6b578";

import MailchimpSubscribe from "react-mailchimp-subscribe";

export default const () => (
  <MailchimpSubscribe
  	url={url}
  	render={({ subscribe, status, message }) => (
  		<CustomFormClean
  			status={status}
  			message={message}
  			onValidated={formData => subscribe(formData)}
  		/>
  	)}
  />
)
